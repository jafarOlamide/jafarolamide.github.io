import type { SVGProps } from "react";

const Graphql = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="GraphQL"
  >
    <rect width="64" height="64" rx="14" fill="#1A1B26" />
    <g transform="translate(8 8)" fill="none" stroke="#E10098" strokeWidth="2">
      <polygon points="24 2 42 12 42 32 24 42 6 32 6 12" />
      <line x1="24" y1="2" x2="24" y2="42" />
      <line x1="6" y1="12" x2="42" y2="32" />
      <line x1="42" y1="12" x2="6" y2="32" />
      <circle cx="24" cy="2" r="3" fill="#E10098" />
      <circle cx="42" cy="12" r="3" fill="#E10098" />
      <circle cx="42" cy="32" r="3" fill="#E10098" />
      <circle cx="24" cy="42" r="3" fill="#E10098" />
      <circle cx="6" cy="32" r="3" fill="#E10098" />
      <circle cx="6" cy="12" r="3" fill="#E10098" />
    </g>
  </svg>
);

export { Graphql };

