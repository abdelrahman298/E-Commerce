"use client";

import { useAppDispatch } from "@/app/hooks";
import { addToCart } from "@/lib/features/cartSlice";
import { IProductCard } from "@/types/interface";
import { Box, Button, Card, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }: IProductCard) => {
  const Dispatch = useAppDispatch();
  const onAddToCart = () => {
    Dispatch(addToCart(product));
  };

  return (
    <Card.Root
      // as={Link}
      maxW={"1/5"}
      h={"md"}
      pb={6}
      overflow="hidden"
      _hover={{
        boxShadow: "lg",
      }}
    >
      <Link href={`/products/${product.id}`}>
        <Box>
          <Image
            width={250}
            height={250}
            src={
              product.images[0] ||
              "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
            }
            alt="Green double couch with wooden legs"
          />
          <Card.Body gap="2" p="2">
            <Card.Title>{product.title}</Card.Title>
            <Card.Description textOverflow={"ellipsis"} lineClamp={1}>
              {product.description}
            </Card.Description>
            <Text
              textStyle="2xl"
              fontWeight="medium"
              letterSpacing="tight"
              mt="2"
              fontSize={"2xl"}
            >
              ${product.price}
            </Text>
          </Card.Body>
        </Box>
      </Link>
      <Card.Footer
        py="1"
        // bg={"teal.300"}
        display={"flex"}
        justifyContent="space-evenly"
      >
        <Button onClick={onAddToCart} variant="solid">
          Add to cart
        </Button>
      </Card.Footer>
    </Card.Root>
  );
};

export default ProductCard;
