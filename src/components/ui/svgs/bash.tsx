import type { SVGProps } from "react";

const Bash = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Bash"
  >
    <rect width="64" height="64" rx="14" fill="#1E293B" />
    <path
      d="M16 20.5a1.5 1.5 0 0 1 2.12 0l7 7a1.5 1.5 0 0 1 0 2.12l-7 7a1.5 1.5 0 0 1-2.12-2.12L21.94 30l-5.82-5.5A1.5 1.5 0 0 1 16 20.5Z"
      fill="#34D399"
    />
    <rect x="28" y="34" width="12" height="3" rx="1.5" fill="#E5E7EB" />
  </svg>
);

export { Bash };

