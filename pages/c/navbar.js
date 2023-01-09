import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import emailjs from "@emailjs/browser";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const NavBar = () => {
  const router = useRouter();
  const [display, changeDisplay] = useState("none");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [comments, setComments] = useState("");
  const toast = useToast();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_bmjv4hd",
        "template_a3pwiqu",
        e.target,
        "JfLC0fGpwy8w9QTCJ"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast({
            title: "Request submitted!",
            description: "The request successfully submitted!",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          setEmail("");
          setCompanyName("");
          setFirstName("");
          setLastName("");
          setComments("");
          onClose();
        },
        (error) => {
          console.log(error.text);
          toast({
            title: "Request did not submit!",
            description: "There was some error so the request did not submit!",
            status: "error",
            duration: 3000,
            isClosable: true,
          });
        }
      );
  };

  return (
    <Flex
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      width={"100%"}
      paddingLeft={8}
      paddingRight={8}
      paddingTop={5}
    >
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Get Started</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={(e) => sendEmail(e)}>
              <Flex direction={"column"} alignItems={"center"} gap={3}>
                <Text textAlign={"center"} color={"#232323"}>
                  Contact about potential offers to get users in order to
                  kickstart your business and track down your market fit
                  statistics.
                </Text>
                <Flex
                  direction={"row"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  gap={2}
                >
                  <FormControl isRequired>
                    <FormLabel color={"black"}>First Name</FormLabel>
                    <Input
                      required
                      height={50}
                      placeholder="First Name"
                      color={"black"}
                      value={firstName}
                      name={"first_name"}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <FormLabel color={"black"}>Last Name</FormLabel>
                    <Input
                      required
                      height={50}
                      placeholder="Last Name"
                      color={"black"}
                      value={lastName}
                      name={"last_name"}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </FormControl>
                </Flex>
                <FormControl isRequired>
                  <FormLabel color={"black"}>Email</FormLabel>
                  <Input
                    required
                    height={50}
                    placeholder="Email"
                    color={"black"}
                    value={email}
                    type={"email"}
                    name={"email"}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl isRequired>
                  <FormLabel color={"black"}>Company Name</FormLabel>
                  <Input
                    required
                    height={50}
                    placeholder="Company Name"
                    color={"black"}
                    value={companyName}
                    name={"company_name"}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel color={"black"}>
                    Additional Comments/Questions
                  </FormLabel>
                  <Textarea
                    resize={"none"}
                    height={150}
                    placeholder="Additional Comments/Questions"
                    color={"black"}
                    name={"message"}
                    value={comments}
                    onChange={(e) => setComments(e.target.value)}
                  />
                </FormControl>
                <Button
                  colorScheme={"green"}
                  paddingLeft={5}
                  paddingRight={5}
                  paddingTop={1.5}
                  paddingBottom={1.5}
                  type={"submit"}
                >
                  Submit
                </Button>
              </Flex>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Flex
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={8}
      >
        <Link
          color={"white"}
          fontSize={{ base: "11pt", md: "13.5pt", lg: "16pt" }}
        >
          <NextLink href={"/c/home"}>Gloppa Users</NextLink>
        </Link>
      </Flex>
      <Flex
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={8}
        // display={["none", "none", "flex", "flex"]}
      >
        <Link
          color={"white"}
          fontSize={{ base: "11pt", md: "13.5pt", lg: "16pt" }}
        >
          <NextLink href={"https://www.gloppa.co"} passHref>
            Main Page
          </NextLink>
        </Link>
        <Link
          color={"white"}
          fontSize={{ base: "11pt", md: "13.5pt", lg: "16pt" }}
        >
          <NextLink href={"/c/contact"}>Contact</NextLink>
        </Link>
        <Link
          color={"white"}
          onClick={onOpen}
          fontSize={{ base: "11pt", md: "13.5pt", lg: "16pt" }}
        >
          Get Started
        </Link>
      </Flex>
      {/* <IconButton
          aria-label="Open Menu"
          size="lg"
          mr={2}
          icon={<HamburgerIcon />}
          onClick={() => changeDisplay("flex")}
          display={["flex", "flex", "none", "none"]}
        /> */}
      {/**Mobile */}

      {/*
        

  
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
            <NextLink href="/" passHref>
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
                Gloppa
              </Button>
            </NextLink>
            <NextLink href="/c/main#first" passHref>
              <Button
                as="a"
                variant="ghost"
                colorScheme={"transparent"}
                color={"white"}
                aria-label="Contact"
                my={5}
                onClick={() => changeDisplay("flex")}
                w="100%"
              >
                Product
              </Button>
            </NextLink>
  
            <NextLink href="/c/partners" passHref>
              <Button
                as="a"
                variant="ghost"
                colorScheme={"transparent"}
                color={"white"}
                aria-label="Contact"
                my={5}
                w="100%"
              >
                Partners
              </Button>
            </NextLink>
  
            <NextLink href="/c/careers" passHref>
              <Button
                as="a"
                variant="ghost"
                colorScheme={"transparent"}
                color={"white"}
                aria-label="Contact"
                my={5}
                w="100%"
              >
                Careers
              </Button>
            </NextLink>
  
            <NextLink href="/c/contact" passHref>
              <Button
                as="a"
                variant="ghost"
                colorScheme={"transparent"}
                color={"white"}
                aria-label="Contact"
                my={5}
                w="100%"
              >
                Contact
              </Button>
            </NextLink>
  
            <Button
              backgroundColor={"#0094FF"}
              paddingLeft={5}
              paddingRight={5}
              paddingTop={2}
              paddingBottom={2}
              colorScheme={"transparent"}
              color={"white"}
              borderRadius={20}
              onClick={() => router.push("/app/register")}
            >
              Get Started
            </Button>
          </Flex>
        </Flex>*/}
    </Flex>
  );
};

export default NavBar;
