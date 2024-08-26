import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function extractSiteName(url: string) {
  try {
    const parsedUrl = new URL(url);
    let hostname = parsedUrl.hostname;

    // Remove 'www.' prefix if present
    // if (hostname.startsWith("www.")) {
    //   hostname = hostname.slice(4);
    // }

    // Remove the TLD suffix
    // const domainParts = hostname.split(".");
    // if (domainParts.length > 2) {
    //   hostname = domainParts.slice(0, -2).join(".");
    // } else if (domainParts.length > 1) {
    //   hostname = domainParts[0];
    // }

    // Capitalize the first letter of the site name
    // return hostname.charAt(0).toUpperCase() + hostname.slice(1);
  } catch (error) {
    console.error("Invalid URL:", error);
    return null;
  }
}
