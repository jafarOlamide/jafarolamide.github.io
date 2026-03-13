import type { SVGProps } from "react";

const Fastapi = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="FastAPI"
  >
    <rect width="64" height="64" rx="14" fill="#009688" />
    <path
      d="M30.5 14.5a1.5 1.5 0 0 1 3 0v12h8a1.5 1.5 0 0 1 0 3h-8v7h10a1.5 1.5 0 0 1 0 3h-10v10a1.5 1.5 0 0 1-3 0V39.5h-8a1.5 1.5 0 0 1 0-3h8v-7h-7a1.5 1.5 0 0 1 0-3h7z"
      fill="#E0F2F1"
    />
  </svg>
);

export { Fastapi };

