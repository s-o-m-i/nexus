export default function OrbitMark({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2.5 20.5 12 12 21.5 3.5 12 12 2.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="rgba(159,25,63,0.15)"
      />
      <path d="M12 6v12M12 6l4 4M12 6 8 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
