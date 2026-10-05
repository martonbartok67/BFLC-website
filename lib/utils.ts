import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const HU_MONTHS: Record<string, number> = {
  január: 0,
  február: 1,
  március: 2,
  április: 3,
  május: 4,
  június: 5,
  július: 6,
  augusztus: 7,
  szeptember: 8,
  október: 9,
  november: 10,
  december: 11,
}

// Parses dates in the "YYYY. hónapnév D." format used by the upcomingEvents arrays.
export function parseHungarianDate(dateStr: string): Date | null {
  const match = dateStr.match(/(\d{4})\.\s*(\p{L}+)\s*(\d{1,2})\./u)
  if (!match) return null
  const month = HU_MONTHS[match[2].toLowerCase()]
  if (month === undefined) return null
  return new Date(Number(match[1]), month, Number(match[3]))
}

export function isFutureEvent(dateStr: string): boolean {
  const date = parseHungarianDate(dateStr)
  if (!date) return true
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  return date >= today
}
