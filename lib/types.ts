
export type TagCategory = 'meaning' | 'environment' | 'care' | 'region';

export type Tag = {
  id: string;
  label: string;
  category: TagCategory;
  weight?: number;
};

export type Flower = {
  id: string;
  commonName: string;
  latinName?: string;
  origin?: string;
  description?: string;
  images: { src: string; alt: string }[];
  tags: string[];
  environment?: {
    sunlight: 'full' | 'partial' | 'shade';
    temperatureC?: { min?: number; max?: number };
    humidity?: 'low' | 'medium' | 'high';
    airflow?: 'low' | 'medium' | 'high';
    soil: {
      type?: string;
      pH?: { min?: number; max?: number };
      mixRecipe?: string[];
      drainageTest?: string;
    };
    hardinessZone?: string;
  };
  care?: {
    stages: Array<{
      stage: 'seed'|'seedling'|'vegetative'|'budding'|'flowering'|'dormant';
      durationHint?: string;
      actions: string[];
      warnings?: string[];
    }>;
    watering: { frequency: string; amount?: string; method?: string; seasonalAdjust?: string };
    nutrition: { type?: string; frequency?: string; notes?: string };
    environmentTips?: string[];
    likes?: string[];
    hates?: string[];
    commonIssues?: Array<{ issue: string; fix: string }>;
  };
  language?: {
    meanings: string[];
    spiritualNotes?: string;
    occasions?: string[];
    colorMeanings?: Array<{ color: string; meanings: string[] }>;
  };
  metadata?: { sources?: Array<{ name: string; url?: string }>; lastReviewedISO?: string };
};
