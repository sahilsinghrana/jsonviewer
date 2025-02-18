export type TEventHandlerParam = {
  type: string;
  payload?: unknown;
};
export type TEventHandler = (param: TEventHandlerParam) => void;

type Tsubscriptions = Map<string, Set<TEventHandler>>;

export interface IEventBus {
  subscriptions: Tsubscriptions;
  on(key: string, handler: TEventHandler): void;
  unsubscribe(key: string, handler: TEventHandler): void;
  emit(key: string, payload: unknown): void;
}

class EventBus implements IEventBus {
  subscriptions: Tsubscriptions = new Map();

  private getSubscriptions(key: string): Set<TEventHandler> | undefined {
    const subscriptions = this.subscriptions.get(key);
    if (subscriptions) {
      return subscriptions;
    } else {
      this.subscriptions.set(key, new Set());
      return this.subscriptions.get(key);
    }
  }

  on(key: string, handler: TEventHandler): () => void {
    const subscriptionsRef = this.getSubscriptions(key);
    subscriptionsRef?.add(handler);
    return () => this.unsubscribe(key, handler);
  }

  unsubscribe(key: string, handler: TEventHandler): void {
    const subscriptionsRef = this.getSubscriptions(key);
    subscriptionsRef?.delete(handler);
  }

  emit(key: string, payload: TEventHandlerParam): void {
    const subscriptionsRef = this.getSubscriptions(key);
    subscriptionsRef?.forEach((handler: TEventHandler) => {
      handler(payload);
    });
  }
}

export default EventBus;
