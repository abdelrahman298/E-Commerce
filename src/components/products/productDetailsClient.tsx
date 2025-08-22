"use client";

import { useColorModeValue } from "@/components/ui/color-mode";
import { IProduct } from "@/types/interface";
import {
  Box,
  Container,
  Stack,
  Text,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackSeparator,
  List,
} from "@chakra-ui/react";
import Image from "next/image";
import { MdLocalShipping } from "react-icons/md";

export default function ProductDetailsClient({
  product,
}: {
  product: IProduct;
}) {
  // console.log(product);

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        gap={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            // rounded={"md"}
            alt={"product image"}
            src={
              product.images[0] ||
              "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp"
            }
            style={{
              objectFit: "cover",
              alignSelf: "center",
              borderRadius: "50%",
              border: "1px solid #fff",
            }}
            width={500}
            height={500}
            // fit={"cover"}
            // align={"center"}
            // h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack gap={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {product.title}
            </Heading>
            <Text
              color={useColorModeValue("gray.900", "gray.400")}
              fontWeight={300}
              fontSize={"2xl"}
            >
              $ {product.price}USD
            </Text>
          </Box>

          <Stack
            gap={{ base: 4, sm: 6 }}
            direction={"column"}
            separator={
              <StackSeparator
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack gap={{ base: 4, sm: 6 }}>
              <Text fontSize={"lg"}>{product.description}</Text>
            </VStack>

            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Product Details
              </Text>

              <List.Root gap={2}>
                <List.Item>
                  <Text as={"span"} fontWeight={"bold"}>
                    rating:
                  </Text>{" "}
                  {product.rating}/5
                </List.Item>
                <List.Item>
                  <Text as={"span"} fontWeight={"bold"}>
                    category:
                  </Text>{" "}
                  {product.category}
                </List.Item>
              </List.Root>
            </Box>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
          >
            Add to cart
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}
