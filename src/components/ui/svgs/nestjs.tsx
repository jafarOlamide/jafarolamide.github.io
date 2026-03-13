import type { SVGProps } from "react";

const Nestjs = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="NestJS"
  >
    <rect width="64" height="64" rx="14" fill="#111827" />
    <path
      d="M32 12c9.389 0 17 7.611 17 17 0 8.575-6.385 15.66-14.664 16.83-.884.123-1.336-1.05-.63-1.622C37.33 41.36 40 37.247 40 32.5 40 25.596 34.404 20 27.5 20c-3.323 0-6.36 1.264-8.648 3.338-.6.553-1.574.094-1.463-.72C18.49 15.99 24.624 12 32 12Z"
      fill="#E0234E"
    />
    <path
      d="M20 30c.493 6.287 4.57 11.54 10.214 13.61.815.301.7 1.5-.167 1.69C24.96 46.32 21 44.074 19 40.5"
      fill="#E0234E"
    />
  </svg>
);

export { Nestjs };

