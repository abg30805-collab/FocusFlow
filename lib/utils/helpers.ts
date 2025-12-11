export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export function getProgressColor(progress: number): string {
  if (progress >= 75) return 'text-green-500';
  if (progress >= 50) return 'text-blue-500';
  if (progress >= 25) return 'text-yellow-500';
  return 'text-gray-400';
}

export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

