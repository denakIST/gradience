import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

const twMerge = extendTailwindMerge<'gradience-type'>({
  extend: {
    classGroups: {
      'gradience-type': [{ type: [(value: string) => value.length > 0] }],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
