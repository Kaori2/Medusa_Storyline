interface GoldenLineProps {
  d: string;
}
export default function GoldenLine({d}: GoldenLineProps) {
  return (
    <div>
      <svg
        className="absolute top-[90%] left-0 w-full h-[150px]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 200"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFB800" />
            <stop offset="50%" stopColor="#FFE08F" />
            <stop offset="100%" stopColor="#FFB800" />
          </linearGradient>
          <filter id="gold-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="15" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d={d}
          className="fill-transparent"
          style={{
            stroke: "url(#gold-gradient)",
            strokeWidth: 3,
            strokeLinecap: "round",
          }}
          filter="url(#gold-glow)"
        />
      </svg>
    </div>
  );
}