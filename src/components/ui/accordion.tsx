'use client'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import * as React from 'react'

import { cn } from '@/lib/utils'

function Accordion({ ...props }: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item data-slot="accordion-item" className={cn('', className)} {...props} />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          'focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=closed]]:rounded-[10px] [&[data-state=open]>svg]:rotate-[135deg] [&[data-state=open]>svg]:fill-kcire-4/50',
          className
        )}
        {...props}
      >
        {children}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="16"
          viewBox="0 0 15 16"
          fill="none"
          className="pointer-events-none transition-all fill-kcire-1 size-4 shrink-0 translate-y-0.5  duration-200"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0 8.00001C0 3.85787 3.35787 0.5 7.50002 0.5C11.6422 0.5 15.0001 3.85787 15.0001 8.00001C15.0001 12.1421 11.6422 15.5 7.50002 15.5C3.35787 15.5 0 12.1421 0 8.00001ZM8.43753 4.83543C8.43753 4.31766 8.01778 3.89793 7.50002 3.89793C6.98225 3.89793 6.56251 4.31766 6.56251 4.83543V7.062H4.33595C3.81817 7.062 3.39845 7.48174 3.39845 7.9995C3.39845 8.51727 3.81817 8.93698 4.33595 8.93698H6.56251V11.1636C6.56251 11.6814 6.98225 12.1011 7.50002 12.1011C8.01778 12.1011 8.43753 11.6814 8.43753 11.1636V8.93698H10.6641C11.1818 8.93698 11.6016 8.51727 11.6016 7.9995C11.6016 7.48174 11.1818 7.062 10.6641 7.062H8.43753V4.83543Z"
            // fill="#E6E6E6"
          />
        </svg>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn('pt-0 pb-4', className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger }
