// src/components/icons/Arrow.tsx

import type { SVGProps } from 'react'

export function Arrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M.5.5v3.56h8.924L.5 12.982V15.5h2.517l8.924-8.924V15.5H15.5V.5z" />
    </svg>
  )
}
