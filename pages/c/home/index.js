import {
  Button,
  Flex,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import NextLink from "next/link";
import Image from "next/image";
import NavBar from "../navbar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import BottomNavBar from "../bottomnavbar";

const Home = () => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [comments, setComments] = useState("");

  const router = useRouter();

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
    <Flex width={"100vw"} backgroundColor={"#1c1c1c"} direction={"column"}>
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
      <NavBar />
      <Flex
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={20}
        height={"90vh"}
        width={"100%"}
        paddingLeft={5}
        paddingRight={5}
      >
        <Flex width={"30%"}>
          <Image
            src={"/assets/right.png"}
            alt={"Left factory"}
            width={150}
            height={150}
            layout={"responsive"}
          />
        </Flex>
        <Flex
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"70%"}
          gap={4}
        >
          <Text
            fontWeight={900}
            color={"white"}
            fontSize={{ base: "20pt", md: "30pt", lg: "40pt" }}
            textAlign={"center"}
          >
            Gauge market fit and gain user following
          </Text>
          <Text
            fontWeight={300}
            color={"white"}
            fontSize={{ base: "9pt", md: "13pt", lg: "18pt" }}
            textAlign={"center"}
          >
            Gloppa users allows for you to analyze and see whether users like
            your product or not. Additionally, this feature also permits you to
            gain an initial user base.
          </Text>
          <Button
            backgroundColor={"white"}
            color={"black"}
            fontWeight={600}
            fontSize={"25pt"}
            paddingLeft={8}
            paddingRight={8}
            height={"8vh"}
            onClick={onOpen}
          >
            Get Started
          </Button>
        </Flex>
        <Flex width={"30%"}>
          <Image
            src={"/assets/left.png"}
            alt={"Right factory"}
            width={150}
            height={150}
            layout={"responsive"}
          />
        </Flex>
      </Flex>
      <Flex
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"100vw"}
        marginTop={"10vh"}
        marginBottom={"10vh"}
        gap={100}
      >
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Image src={"/assets/one.png"} alt={"One"} width={300} height={300} />
        </Flex>
        <Flex
          width={"30%"}
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={5}
        >
          <Text
            color={"white"}
            fontWeight={800}
            fontSize={{ base: "17pt", md: "21pt", lg: "25pt" }}
            textAlign={"center"}
          >
            Gauge market fit
          </Text>
          <Text
            color={"white"}
            fontSize={{ base: "12pt", md: "15pt", lg: "18pt" }}
            textAlign={"center"}
          >
            Measure startup market fit by having an initial amount of organic
            users using the product.
          </Text>
        </Flex>
      </Flex>
      <Flex
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        width={"100vw"}
        marginTop={"10vh"}
        marginBottom={"30vh"}
        gap={100}
      >
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Image src={"/assets/two.png"} alt={"Two"} width={300} height={300} />
        </Flex>
        <Flex
          width={"30%"}
          direction={"column"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={5}
        >
          <Text
            color={"white"}
            fontWeight={800}
            fontSize={{ base: "17pt", md: "21pt", lg: "25pt" }}
            textAlign={"center"}
          >
            Initial userbase
          </Text>
          <Text
            color={"white"}
            fontSize={{ base: "12pt", md: "15pt", lg: "18pt" }}
            textAlign={"center"}
          >
            Get initial users that will begin your startup growth.
          </Text>
        </Flex>
      </Flex>

      <Flex
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={10}
        marginBottom={50}
      >
        <Text
          fontWeight={900}
          color={"white"}
          fontSize={{ base: "20pt", md: "30pt", lg: "40pt" }}
          textAlign={"center"}
          width={"75%"}
        >
          Are you ready to take the next step in your startup journey?
        </Text>
        <Button
          backgroundColor={"white"}
          color={"black"}
          fontWeight={600}
          fontSize={"25pt"}
          paddingLeft={8}
          paddingRight={8}
          height={"8vh"}
          onClick={onOpen}
        >
          Get Started
        </Button>
      </Flex>
      <BottomNavBar />
    </Flex>
  );
};

export default Home;
