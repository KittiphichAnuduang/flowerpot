
import type { Tag } from './types';

export const TAGS: Tag[] = [
  // Meaning
  { id: 'love', label: 'Love', category: 'meaning', weight: 5 },
  { id: 'gratitude', label: 'Gratitude', category: 'meaning', weight: 3 },
  { id: 'purity', label: 'Purity', category: 'meaning', weight: 3 },
  { id: 'sympathy', label: 'Sympathy', category: 'meaning', weight: 3 },
  { id: 'respect', label: 'Respect', category: 'meaning', weight: 4 },
  { id: 'celebration', label: 'Celebration', category: 'meaning', weight: 2 },
  { id: 'congratulations', label: 'Congratulations', category: 'meaning', weight: 2 },
  { id: 'apology', label: 'Apology', category: 'meaning', weight: 2 },
  { id: 'friendship', label: 'Friendship', category: 'meaning', weight: 3 },

  // Environment
  { id: 'full-sun', label: 'Full Sun', category: 'environment', weight: 1 },
  { id: 'partial-sun', label: 'Partial Sun', category: 'environment', weight: 1 },
  { id: 'shade', label: 'Shade', category: 'environment', weight: 1 },
  { id: 'low-humidity', label: 'Low Humidity', category: 'environment', weight: 1 },
  { id: 'medium-humidity', label: 'Medium Humidity', category: 'environment', weight: 1 },
  { id: 'high-humidity', label: 'High Humidity', category: 'environment', weight: 1 },
  { id: 'cool', label: 'Cool', category: 'environment', weight: 1 },
  { id: 'warm', label: 'Warm', category: 'environment', weight: 1 },
  { id: 'indoor-friendly', label: 'Indoor Friendly', category: 'environment', weight: 1 },
  { id: 'outdoor', label: 'Outdoor', category: 'environment', weight: 1 },

  // Care
  { id: 'beginner', label: 'Beginner', category: 'care', weight: 2 },
  { id: 'drought-tolerant', label: 'Drought Tolerant', category: 'care', weight: 2 },
  { id: 'pet-safe', label: 'Pet Safe', category: 'care', weight: 2 },
  { id: 'heavy-feeder', label: 'Heavy Feeder', category: 'care', weight: 2 },
  { id: 'fragile', label: 'Fragile', category: 'care', weight: 2 },
  { id: 'prone-to-pests', label: 'Prone to Pests', category: 'care', weight: 2 },
  { id: 'fast-growing', label: 'Fast Growing', category: 'care', weight: 2 },
  { id: 'slow-growing', label: 'Slow Growing', category: 'care', weight: 2 },

  // Region
  { id: 'asia', label: 'Asia', category: 'region', weight: 1 },
  { id: 'europe', label: 'Europe', category: 'region', weight: 1 },
  { id: 'americas', label: 'Americas', category: 'region', weight: 1 },
  { id: 'tropics', label: 'Tropics', category: 'region', weight: 1 },
  { id: 'temperate', label: 'Temperate', category: 'region', weight: 1 },
];

export const TAG_WEIGHTS: Record<string, number> = Object.fromEntries(
  TAGS.map(t => [t.id, t.weight ?? 0])
);
