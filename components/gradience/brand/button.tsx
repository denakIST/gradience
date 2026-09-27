import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

export const buttonVariants = cva(
  [
    'inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-control border font-semibold',
    'transition-colors duration-respond ease-controlled',
    'disabled:pointer-events-none disabled:border-line-subtle disabled:bg-surface disabled:text-fg disabled:opacity-55',
    'aria-disabled:pointer-events-none aria-disabled:border-line-subtle aria-disabled:bg-surface aria-disabled:text-fg aria-disabled:opacity-55',
  ],
  {
    variants: {
      variant: {
        primary: 'border-action bg-action text-on-action',
        secondary: 'border-line-emphasis bg-transparent text-fg',
      },
      size: {
        default: 'h-12 px-5 type-ui-default',
        compact: 'h-11.5 px-4.5 type-ui-small',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)

type ButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

export function Button({ variant, size, asChild = false, className, type, ...props }: ButtonProps) {
  const Component = asChild ? Slot : 'button'
  return (
    <Component
      type={asChild ? undefined : (type ?? 'button')}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}
