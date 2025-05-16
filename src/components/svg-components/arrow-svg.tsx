interface ArrowSvgProps {
  direction: "right" | "left";
  disabled?: boolean;
}

export default function ArrowSvg({
  direction,
  disabled = false,
}: ArrowSvgProps) {
  const arrowColor = disabled ? "#9CA3AF" : "#4B5563";

  const groupTransform =
    direction === "right" ? "rotate(180 20 20)" : undefined;

  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_28783_17162)" transform={groupTransform}>
        <circle cx="20" cy="20" r="19.5" fill="white" stroke="#E5E7EB" />
        <path
          d="M21.5 16.6666L18 20.1666L21.5 23.6666"
          stroke={arrowColor}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_28783_17162">
          <rect width="40" height="40" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
