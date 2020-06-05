export function formatPrice(value: number, currency: string, locale?: string) {
  return new Intl.NumberFormat(locale || navigator?.language || "", { style: "currency", currency }).format(value);
}

export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}