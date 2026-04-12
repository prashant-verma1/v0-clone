export default function NavbarLogo() {
  return (
    <div className="flex items-center gap-2">
      
      {/* Small Icon */}
      <svg
        width="28"
        height="28"
        viewBox="0 0 200 200"
        className="shrink-0"
      >
        <defs>
          <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="50%" stopColor="#a78bfa" />
            <stop offset="100%" stopColor="#f472b6" />
          </linearGradient>
        </defs>

        <ellipse
          cx="100"
          cy="100"
          rx="70"
          ry="40"
          fill="none"
          stroke="url(#logoGrad)"
          strokeWidth="14"
          transform="rotate(20 100 100)"
        />
      </svg>

      {/* Text */}
      <span className="text-lg font-bold tracking-tight 
        bg-gradient-to-r from-blue-400 via-purple-300 to-pink-400 
        bg-clip-text text-transparent">
        OMAX
      </span>
    </div>
  );
}