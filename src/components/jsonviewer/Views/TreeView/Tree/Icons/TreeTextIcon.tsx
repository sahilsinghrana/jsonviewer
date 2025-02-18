function TreeTextIcon({ text }: { text: string }) {
  return (
    <i className="font-semibold font-mono text-zinc-500/60 not-italic mx-1">
      {text}
    </i>
  );
}

export default TreeTextIcon;
