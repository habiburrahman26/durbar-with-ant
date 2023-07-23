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
