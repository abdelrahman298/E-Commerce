export interface IProductCard {
  product: IProduct;

  // onAddToCart: () => void;
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  quantity: number;
  images: string[];
}
