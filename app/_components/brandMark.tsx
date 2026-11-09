// "AB" with an underline, rotated -45°. Same design as app/icon.svg.
export default function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={className}>
      <g transform="rotate(-45 32 32)">
        <text
          x="32"
          y="40"
          textAnchor="middle"
          fontFamily="Helvetica, Arial, sans-serif"
          fontWeight="700"
          fontSize="30"
          letterSpacing="-0.5"
          className="fill-slate-800 dark:fill-slate-100"
        >
          AB
        </text>
        <rect x="13" y="45" width="38" height="4.5" rx="2.25" className="fill-red-500 dark:fill-red-400" />
      </g>
    </svg>
  );
}
