import ProductDetailsClient from "@/components/products/productDetailsClient";
import { IProduct } from "@/types/interface";

export default async function Product({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const getPost = async (id: string) => {
    const response = await fetch(`${process.env.DUMMY_BASE_URL}products/${id}`);
    // console.log(
    //   `Fetching product with ID: ${id} and the response ${response.json()}`
    // );

    return response.json();
  };
  const { id } = await params;

  const productData: IProduct = await getPost(id);

  return <ProductDetailsClient product={productData} />;
}
