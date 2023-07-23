export type CategoryType = {
  id: number;
  title: string;
  slug: string;
};

export type SubscriptionPackageType = {
  id: number;
  plan_name: string;
  plan_slug: string;
  regular_price: number;
  duration: number;
};

export type HomeSliderType = {
  id: number;
  title: string;
  description: string;
  bottom_title: string;
  root_category_id: number;
  slug: string;
  image: string;
  content_url: string;
  status: string;
  is_home: number;
  order: number;
  created_at: string;
  updated_at: string;
  root_category: {
    id: number;
    "movie type": string;
  };
};
