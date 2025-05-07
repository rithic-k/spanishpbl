import type { SVGProps } from 'react';

export function TennisIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2a10 10 0 0 0-4.5 19.1M12 22a10 10 0 0 0 4.5-19.1" />
      <path d="M2 12h20" />
      <path d="M17.9 14.5a5 5 0 0 0-11.8 0" />
    </svg>
  );
}
