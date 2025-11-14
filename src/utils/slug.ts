export function createSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-')
}