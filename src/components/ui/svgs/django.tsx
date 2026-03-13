import type { SVGProps } from "react";

const Django = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-label="Django"
  >
    <rect width="64" height="64" rx="14" fill="#092E20" />
    <path
      d="M22 18.5a1.5 1.5 0 0 1 1.5-1.5H31a1.5 1.5 0 0 1 0 3h-5v21c0 5.523-3.134 9-8.5 9-1.54 0-2.96-.26-4.25-.76a1.5 1.5 0 1 1 1.06-2.8c.88.33 1.88.56 3.19.56 3.27 0 5-1.94 5-6.01zm11.5 5a1.5 1.5 0 0 1 1.5-1.5h5.5c4.97 0 8.5 3.27 8.5 8.19 0 4.87-3.54 8.31-8.5 8.31h-4v5.5a1.5 1.5 0 0 1-3 0zm3 3v9.5h4c3.34 0 5.5-2.15 5.5-5.31 0-3.21-2.16-4.19-5.5-4.19z"
      fill="#FFFFFF"
    />
  </svg>
);

export { Django };

