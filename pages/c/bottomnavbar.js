import { Flex, Link, IconButton, Button } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const BottomNavBar = () => {
  const router = useRouter();
  const [display, changeDisplay] = useState("none");
  return (
    <Flex
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      width={"100%"}
      paddingLeft={8}
      paddingRight={8}
      paddingTop={8}
      paddingBottom={8}
    >
      <Link color={"white"} fontSize={"16pt"}>
        <NextLink href={"/c/home"}>Gloppa Users</NextLink>
      </Link>
      <Flex
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={8}
        display={["none", "none", "flex", "flex"]}
      >
        <Link color={"white"} fontSize={"16pt"}>
          <NextLink
            passHref
            target={"_blank"}
            href={"https://twitter.com/GloppaG"}
          >
            Twitter
          </NextLink>
        </Link>
        <Link color={"white"} fontSize={"16pt"}>
          <NextLink
            passHref
            target={"_blank"}
            href={"https://www.facebook.com/profile.php?id=100088483672818"}
          >
            Facebook
          </NextLink>
        </Link>
        <Link color={"white"} fontSize={"16pt"}>
          <NextLink href={"/c/terms"}>Terms</NextLink>
        </Link>
        <Link color={"white"} fontSize={"16pt"}>
          <NextLink href={"/c/privacy"}>Privacy</NextLink>
        </Link>
      </Flex>
      <IconButton
        aria-label="Open Menu"
        size="lg"
        mr={2}
        icon={<HamburgerIcon />}
        onClick={() => changeDisplay("flex")}
        display={["flex", "flex", "none", "none"]}
      />
      <Flex
        w="100vw"
        display={display}
        bgColor="#1c1c1c"
        zIndex={20}
        h="100vh"
        pos="fixed"
        top="0"
        left="0"
        overflowY="auto"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="lg"
            icon={<CloseIcon />}
            onClick={() => changeDisplay("none")}
          />
        </Flex>

        <Flex flexDir="column" align="center">
          <NextLink href="/c/home">
            <Button
              fontWeight={600}
              fontSize={"20pt"}
              as="a"
              variant="ghost"
              colorScheme={"transparent"}
              color={"white"}
              aria-label="Home"
              my={5}
              w="100%"
            >
              Gloppa Users
            </Button>
          </NextLink>

          <NextLink
            href="https://twitter.com/GloppaG"
            passHref
            target={"_blank"}
          >
            <Button
              as="a"
              variant="ghost"
              colorScheme={"transparent"}
              color={"white"}
              aria-label="Twitter"
              my={5}
              w="100%"
            >
              Twitter
            </Button>
          </NextLink>

          <NextLink
            href="https://www.facebook.com/profile.php?id=100088483672818"
            passHref
            target={"_blank"}
          >
            <Button
              as="a"
              variant="ghost"
              colorScheme={"transparent"}
              color={"white"}
              aria-label="Facebook"
              my={5}
              w="100%"
            >
              Facebook
            </Button>
          </NextLink>

          <NextLink href="/c/terms" passHref>
            <Button
              as="a"
              variant="ghost"
              colorScheme={"transparent"}
              color={"white"}
              aria-label="Terms"
              my={5}
              w="100%"
            >
              Terms
            </Button>
          </NextLink>
          <NextLink href="/c/privacy" passHref>
            <Button
              as="a"
              variant="ghost"
              colorScheme={"transparent"}
              color={"white"}
              aria-label="Privacy"
              my={5}
              w="100%"
            >
              Privacy
            </Button>
          </NextLink>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default BottomNavBar;
