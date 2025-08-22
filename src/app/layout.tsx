import Navbar from "@/components/ui/navbar";
import { Provider } from "@/components/ui/provider";
import { Container } from "@chakra-ui/react";
import type { Metadata } from "next";
import StoreProvider from "./StoreProvider";
import Footer from "@/components/ui/footer";

export const metadata: Metadata = {
  title: "e-commerce project",
  description: "Everything you need for your e-commerce project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <StoreProvider>
          <Provider>
            <Navbar />
            <Container maxW={"8xl"}>{children}</Container>
            <Footer />
          </Provider>
        </StoreProvider>
      </body>
    </html>
  );
}
