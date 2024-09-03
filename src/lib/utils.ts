import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-us", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export const getRandomPercentage = (): string =>
  `${Math.floor(Math.random() * 80)}%`;

export const getRandomRotation = (): string =>
  `${(Math.random() * 12 - 6).toFixed(2)}deg`;

export function calculateReadingTime(text: string): string {
  const wordsPerMinute = 200; // Average reading speed
  const words = text.trim().split(/\s+/).length; // Count the number of words in the text
  const minutes = Math.ceil(words / wordsPerMinute); // Calculate the time in minutes

  return `${minutes} min read`;
}
