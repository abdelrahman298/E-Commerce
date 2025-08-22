import ProductCard from "@/components/products/productCard";
import { IProduct } from "@/types/interface";
import { Flex } from "@chakra-ui/react";

export default async function ProductsPage() {
  const response = await fetch(`${process.env.DUMMY_BASE_URL}products`);
  const getAllProducts = await response.json();
  const Products = getAllProducts.products;

  return (
    <>
      <Flex
        w={"100%"}
        // gap="4"
        gap={5}
        justifyContent={"space-between"}
        alignItems={"center"}
        wrap="wrap"
      >
        {Products.map((product: IProduct) => (
          <ProductCard key={product.id} product={product} />
        ))}

        {/* <ProductCard /> */}
      </Flex>
    </>
  );
}
