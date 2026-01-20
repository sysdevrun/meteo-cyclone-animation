// Development stages color mapping
export const developmentColors: Record<string, string> = {
  'disturbance': '#90EE90',
  'tropical disturbance': '#98FB98',
  'tropical depression': '#00BFFF',
  'moderate tropical storm': '#FFD700',
  'severe tropical storm': '#FFA500',
  'tropical cyclone': '#FF4500',
  'intense tropical cyclone': '#DC143C',
  'post-tropical depression': '#808080',
};

export function getColor(development: string | undefined): string {
  if (!development) return '#808080';
  return developmentColors[development.toLowerCase()] || '#808080';
}
