"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { type ColorModeProviderProps } from "./color-mode";
import { ThemeProvider } from "next-themes";

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider {...props} />
    </ChakraProvider>
  );
}
