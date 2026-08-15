export type Project = {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  description: string | null;
  category: string;
  location: string | null;
  image_url: string | null;
  goal_amount: number;
  raised_amount: number;
  beneficiaries: number;
  status: string;
  featured: boolean;
  published: boolean;
  created_at: string;
};

export type NewsPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string | null;
  body: string | null;
  category: string;
  image_url: string | null;
  published_at: string | null;
  published: boolean;
  created_at: string;
};

export type Event = {
  id: string;
  title: string;
  description: string | null;
  location: string | null;
  event_date: string;
  category: string;
  image_url: string | null;
  registration_url: string | null;
  published: boolean;
  created_at: string;
};

export type GalleryItem = {
  id: string;
  title: string;
  category: string;
  media_type: 'image' | 'video';
  media_url: string;
  thumbnail_url: string | null;
  published: boolean;
  created_at: string;
};
