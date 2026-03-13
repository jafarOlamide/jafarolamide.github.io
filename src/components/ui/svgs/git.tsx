import type { SVGProps } from "react";

const Git = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Git"
  >
    <rect width="64" height="64" rx="14" fill="#111827" />
    <path
      d="M18.586 28.586 28.586 18.586a2 2 0 0 1 2.828 0l14 14a2 2 0 0 1 0 2.828l-10 10a2 2 0 0 1-2.828 0l-14-14a2 2 0 0 1 0-2.828Z"
      fill="#F05032"
    />
    <circle cx="30" cy="22" r="2.5" fill="#F9FAFB" />
    <circle cx="30" cy="32" r="2.5" fill="#F9FAFB" />
    <circle cx="38" cy="30" r="2.5" fill="#F9FAFB" />
    <path
      d="M30 24v6m2.121-1.879L36 27"
      stroke="#F9FAFB"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export { Git };

