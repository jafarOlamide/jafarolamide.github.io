import type { SVGProps } from "react";

const Terraform = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Terraform"
  >
    <rect width="64" height="64" rx="14" fill="#020617" />
    <path
      d="M14 16 30 25.5v13L14 29z"
      fill="#7B42F6"
    />
    <path
      d="M32 18 48 27.5v13L32 31z"
      fill="#7B42F6"
    />
    <path
      d="M32 33 48 42.5v6L32 39z"
      fill="#A855F7"
    />
    <path
      d="M14 31 30 40.5v6L14 37z"
      fill="#A855F7"
    />
  </svg>
);

export { Terraform };

