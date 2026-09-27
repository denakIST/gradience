import { cn } from '@/lib/utils'

type ContainerProps = React.ComponentProps<'div'> & {
  width?: 'content' | 'reading'
}

export function Container({ width = 'content', className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-(--layout-margin)',
        width === 'content' ? 'max-w-(--layout-page-max)' : 'max-w-[calc(var(--layout-reading)+var(--layout-margin)*2)]',
        className,
      )}
      {...props}
    />
  )
}

export function Grid({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      className={cn('grid grid-cols-4 gap-x-(--grid-gutter) gap-y-12 md:grid-cols-12', className)}
      {...props}
    />
  )
}

type ModeSurfaceProps = React.ComponentProps<'div'> & {
  mode: 'light' | 'intelligence'
  surface?: 'background' | 'surface'
}

export function ModeSurface({ mode, surface = 'background', className, ...props }: ModeSurfaceProps) {
  return (
    <div
      data-mode={mode}
      className={cn(surface === 'background' ? 'bg-background' : 'bg-surface', 'text-fg', className)}
      {...props}
    />
  )
}
