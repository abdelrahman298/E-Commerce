import { Box, HStack, Spinner } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Box
      w="100%"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <HStack gap="5">
        <Spinner size="xl" />
      </HStack>
    </Box>
  );
}
