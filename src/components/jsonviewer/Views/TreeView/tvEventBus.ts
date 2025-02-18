import EventBus, { TEventHandler } from "@/lib/EventBus";

export enum TV_EVENTS {
  tree = "tree",
}

export enum TV_EVENTS_TYPES {
  expandAll = "expandAll",
  collapseAll = "collapseAll",
}

const treeViewEventBus = new EventBus();

export function emitExpandAll() {
  treeViewEventBus.emit(TV_EVENTS.tree, {
    type: TV_EVENTS_TYPES.expandAll,
  });
}

export function emitCollapseAll() {
  treeViewEventBus.emit(TV_EVENTS.tree, {
    type: TV_EVENTS_TYPES.collapseAll,
  });
}

export function subscribeTVTreeEvents(handler: TEventHandler) {
  return treeViewEventBus.on(TV_EVENTS.tree, handler);
}

export default treeViewEventBus;
