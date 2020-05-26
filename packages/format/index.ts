export function formatPrice(value: number, currency: string, locale?: string) {
  return new Intl.NumberFormat(locale || navigator?.language || "", { style: "currency", currency }).format(value);
}