// "AB" with an underline, rotated -45°, in a circle. Same design as app/icon.svg.
export default function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className}>
      <circle cx="32" cy="32" r="32" className="fill-slate-800 dark:fill-slate-200" />
      <g transform="rotate(-45 32 32)">
        <text
          x="32"
          y="38"
          textAnchor="middle"
          fontFamily="Helvetica, Arial, sans-serif"
          fontWeight="700"
          fontSize="24"
          className="fill-slate-50 dark:fill-slate-800"
        >
          AB
        </text>
        <rect x="17" y="42" width="30" height="3.5" rx="1.75" className="fill-red-400 dark:fill-red-600" />
      </g>
    </svg>
  );
}
