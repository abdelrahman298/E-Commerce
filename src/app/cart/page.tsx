"use client";

import { selectCart } from "@/lib/features/cartSlice";
import {
  Box,
  Flex,
  Text,
  Separator,
  Button,
  Table,
  Image,
  Input,
} from "@chakra-ui/react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { IProduct } from "@/types/interface";
import { removeFromCart, updateQuantity } from "@/lib/features/cartSlice";

export default function CartPage() {
  const { cartProducts } = useAppSelector(selectCart);
  const dispatch = useAppDispatch();

  // Calculate total price
  const totalPrice = cartProducts.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    dispatch(updateQuantity({ productId, quantity: newQuantity }));
  };

  const handleRemoveProduct = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <Box h="100vh">
      <Flex justifyContent={"center"} alignItems={"start"}>
        <Box p={"40px"} flex="2" borderRight={"1px solid #ccc"}>
          <Text fontSize="2xl" fontWeight="bold" mb="4">
            Shopping Cart
          </Text>
          <Separator mb="4" />
          <Box>
            <Table.Root>
              <Table.Header>
                <Table.Row>
                  <Table.ColumnHeader></Table.ColumnHeader>
                  <Table.ColumnHeader>Product</Table.ColumnHeader>
                  <Table.ColumnHeader>Price</Table.ColumnHeader>
                  <Table.ColumnHeader>Quantity</Table.ColumnHeader>
                  <Table.ColumnHeader>Subtotal</Table.ColumnHeader>
                  <Table.ColumnHeader>Actions</Table.ColumnHeader>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {cartProducts.map((product: IProduct) => (
                  <Table.Row key={product.id}>
                    <Table.Cell>
                      <Image
                        alt="Product Image"
                        h="100px"
                        w="100px"
                        objectFit="cover"
                        src={product.images[0]}
                        borderRadius="md"
                      />
                    </Table.Cell>
                    <Table.Cell>
                      <Text fontWeight="medium">{product.title}</Text>
                    </Table.Cell>
                    <Table.Cell>${product.price}</Table.Cell>
                    <Table.Cell>
                      <Flex alignItems="center" gap={2}>
                        <Button
                          size="sm"
                          onClick={() =>
                            handleQuantityChange(
                              product.id,
                              Math.max(1, product.quantity - 1)
                            )
                          }
                        >
                          -
                        </Button>
                        <Input
                          value={product.quantity}
                          size="sm"
                          w="60px"
                          textAlign="center"
                          onChange={(e) => {
                            const value = parseInt(e.target.value) || 1;
                            handleQuantityChange(
                              product.id,
                              Math.max(1, value)
                            );
                          }}
                        />
                        <Button
                          size="sm"
                          onClick={() =>
                            handleQuantityChange(
                              product.id,
                              product.quantity + 1
                            )
                          }
                        >
                          +
                        </Button>
                      </Flex>
                    </Table.Cell>
                    <Table.Cell>
                      ${(product.price * product.quantity).toFixed(2)}
                    </Table.Cell>
                    <Table.Cell>
                      <Button
                        size="sm"
                        colorScheme="red"
                        variant="ghost"
                        onClick={() => handleRemoveProduct(product.id)}
                      >
                        Remove
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Root>

            {cartProducts.length === 0 && (
              <Box textAlign="center" py="20">
                <Text fontSize="lg" color="gray.500">
                  Your cart is empty
                </Text>
                <Button
                  mt="4"
                  colorScheme="blue"
                  onClick={() => window.history.back()}
                >
                  Continue Shopping
                </Button>
              </Box>
            )}
          </Box>
        </Box>

        {/* //! Total Price Container */}

        <Box p={"40px"} flex="1">
          <Text fontSize="2xl" fontWeight="bold" mb={"20px"}>
            Cart Totals
          </Text>
          <Separator mb="4" />
          <Box
            my="20px"
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            flexDirection="row"
          >
            <Text fontSize="lg">Total Price</Text>
            <Text fontSize="lg" fontWeight="bold">
              ${totalPrice.toFixed(2)}
            </Text>
          </Box>
          <Separator />
          <Button
            mt={"20px"}
            w={"100%"}
            colorScheme="blue"
            disabled={cartProducts.length === 0}
          >
            Proceed to checkout
          </Button>
        </Box>
      </Flex>
    </Box>
  );
}
