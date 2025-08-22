"use client";
import {
  Box,
  Button,
  Collapsible,
  Flex,
  Icon,
  IconButton,
  Link,
  Popover,
  Stack,
  Text,
  Badge,
} from "@chakra-ui/react";
import { useColorModeValue } from "./color-mode";
import { FaChevronDown } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { useAppSelector } from "@/app/hooks";
import { selectCart } from "@/lib/features/cartSlice";

const Navbar = () => {
  return (
    <Box>
      {/* //! desktop nav */}
      <Flex
        // bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        flexGrow={1}
        justifyContent={"space-evenly"}
      >
        {/* //!Start burger and close btn of toggle */}
        <Flex
          // flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            // onClick={onToggle}
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          >
            <IoClose />
            <GiHamburgerMenu />
            {/* {isOpen ? (
              <IoClose width={3} height={3} />
            ) : (
              width={5} height={5} />
            )} */}
          </IconButton>
        </Flex>
        {/* //!End burger and close btn of toggle */}

        {/* //! Logo */}
        <Flex
          // flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
        >
          <Text
            // textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            // color={"black.800"}
          >
            Exclusive
          </Text>
        </Flex>
        {/* //! start Nav Tabs */}
        <Flex display={{ base: "none", md: "flex" }} ml={10}>
          <DesktopNav />
        </Flex>
        {/* //! end Nav Tabs */}
        {/* //! Sign In // Sign up */}
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          gap="10"
        >
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={400}
            variant={"solid"}
            // href={"#"}
          >
            Sign In
          </Button>
          <Button
            // as={"link"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            // to={"#"}
            _hover={{
              bg: "pink.300",
            }}
          >
            Sign Up
          </Button>
          <Button
            // as={"link"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"pink.400"}
            // to={"#"}
            _hover={{
              bg: "pink.300",
            }}
          >
            Logout
          </Button>
        </Stack>
      </Flex>
      {/* //! end desktop nav */}

      {/* //? start Mobile nav */}
      <Collapsible.Root>
        <Collapsible.Trigger>
          <MobileNav />
        </Collapsible.Trigger>
      </Collapsible.Root>
      {/* //? end Mobile nav */}
    </Box>
  );
};

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const { cartProducts } = useAppSelector(selectCart);
  console.log("Cart Products:", cartProducts);

  return (
    <Stack direction={"row"} gap={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover.Root>
            <Popover.Trigger asChild>
              <Button
                p={2}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {navItem.label === "Cart" ? (
                  <Box display="flex" alignItems="center" gap={2}>
                    <a href={navItem.href}>{navItem.label}</a>

                    {cartProducts.length === 0 ? (
                      ""
                    ) : (
                      <Badge variant="solid" colorPalette="green">
                        {cartProducts.length}
                      </Badge>
                    )}
                  </Box>
                ) : (
                  <a href={navItem.href}>{navItem.label}</a>
                )}
              </Button>
            </Popover.Trigger>
          </Popover.Root>
        </Box>
      ))}
    </Stack>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children }: NavItem) => {
  // const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack gap={4}>
      <Link
        py={2}
        as="a"
        // href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            transition={"all .25s ease-in-out"}
            // transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          >
            <FaChevronDown />
          </Icon>
        )}
      </Link>

      <Collapsible.Root style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box
                as="a"
                key={child.label}
                py={2}
                //  href={child.href}
              >
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapsible.Root>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Cart",
    href: "/cart",
  },
];

export default Navbar;
