import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { Metadata } from 'next'


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}