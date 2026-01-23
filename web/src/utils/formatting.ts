// Format wind speed from knots to both kt and km/h
export function formatWind(kt: number): string {
  const kmh = Math.round(kt * 1.852);
  return `${kt} kt (${kmh} km/h)`;
}

// Format date for forecast label (DD/MM - HHh UTC)
export function formatForecastDate(isoDate: string): string {
  const date = new Date(isoDate);
  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const hours = String(date.getUTCHours()).padStart(2, '0');
  return `${day}/${month} - ${hours}h`;
}

// Format date for popup (DD/MM/YYYY HH:MM)
export function formatPopupDate(isoDate: string): string {
  const date = new Date(isoDate);
  const day = String(date.getUTCDate()).padStart(2, '0');
  const month = String(date.getUTCMonth() + 1).padStart(2, '0');
  const year = date.getUTCFullYear();
  const hours = String(date.getUTCHours()).padStart(2, '0');
  const minutes = String(date.getUTCMinutes()).padStart(2, '0');
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

// Format reference time for info display
export function formatReferenceTime(isoDate: string): string {
  return new Date(isoDate).toLocaleString('fr-FR');
}
