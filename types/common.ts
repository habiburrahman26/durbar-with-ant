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

export type OttContent = {
  id: number;
  title: string;
  uuid: string;
  poster: string;
  access: string;
  runtime: number;
};

export type ContentType = {
  id: number;
  content_id: number;
  publish_date: string;
  is_active: number;
  is_upcoming: number;
  sorting_position: number;
  frontend_custom_content_type_id: number;
  ott_content: OttContent;
};

export type ContentSectionType = {
  id: number;
  content_type_slug: string;
  content_type_title: string;
  more_info_slug: string;
  is_available_on_single_page: number;
  is_featured_section: number;
  frontend_custom_content_limited_data: ContentType[];
};
