


const StarBorder = ({
  as: Component = "button",
  className = "",
  color = "white",
  speed = "3s",
  borderSize = 2,
  children,
  ...rest
}) => {
  return (
    <Component
      {...rest}
      className={`relative inline-block rounded-full overflow-hidden ${className}`}
    >
      {/* ✅ TOP glow - moves left → right */}
      <span
        className="absolute top-0 left-0 w-full h-[2px] pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 70%)`,
          animation: `glow-top ${speed} linear infinite`,
        }}
      />

      {/* ✅ BOTTOM glow - moves right → left */}
      <span
        className="absolute bottom-0 right-0 w-full h-[2px] pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 70%)`,
          animation: `glow-bottom ${speed} linear infinite`,
        }}
      />

      {/* ✅ Keep content untouched */}
      <span className="relative z-10 block">{children}</span>

      {/* ✅ Animations */}
      <style>
        {`
          /* TOP: left → right */
          @keyframes glow-top {
            0%   { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }

          /* BOTTOM: right → left */
          @keyframes glow-bottom {
            0%   { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>
    </Component>
  );
};

export default StarBorder;``
