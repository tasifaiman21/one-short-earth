import {
  Flex,
  Text,
  Box,
  Link,
  SimpleGrid,
  Button,
  Icon,
  Divider,
} from "@chakra-ui/react";
import Image from "next/image";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

export default function Pagination() {
  return (
    <Flex gap="1rem">
      <Flex
        w="1.75rem"
        h="1.75rem"
        alignItems={"center"}
        justifyContent="center"
        border="1px solid #D7D7D7"
        borderRadius={"5px"}
      >
        {" "}
        <Icon as={AiOutlineLeft} fontSize="sm" color="#D7D7D7" />{" "}
      </Flex>
      <Flex
        w="1.75rem"
        h="1.75rem"
        alignItems={"center"}
        justifyContent="center"
        border="1px solid #D7D7D7"
        borderRadius={"5px"}
        bgGradient={
          " linear-gradient(103.91deg, #9B51E0 21.01%, rgba(48, 129, 237, 0.8) 100%)"
        }
      >
        {" "}
        <Text fontSize="sm" color="#D7D7D7"> 1</Text>{" "}
      </Flex>
      <Flex
        w="1.75rem"
        h="1.75rem"
        alignItems={"center"}
        justifyContent="center"
        border="1px solid #D7D7D7"
        borderRadius={"5px"}
      >
        {" "}
        <Text color="#D7D7D7"  fontSize="sm"> 2</Text>{" "}
      </Flex>
      <Flex
        w="1.75rem"
        h="1.75rem"
        alignItems={"center"}
        justifyContent="center"
        border="1px solid #D7D7D7"
        borderRadius={"5px"}
      >
        {" "}
        <Text color="#D7D7D7"  fontSize="sm"> 3</Text>{" "}
      </Flex>
      <Flex
        w="1.75rem"
        h="1.75rem"
        alignItems={"center"}
        justifyContent="center"
        border="1px solid #D7D7D7"
        borderRadius={"5px"}
      >
        {" "}
        <Text color="#D7D7D7"  fontSize="sm"> ..</Text>{" "}
      </Flex>
      <Flex
        w="1.75rem"
        h="1.75rem"
        alignItems={"center"}
        justifyContent="center"
        border="1px solid #D7D7D7"
        borderRadius={"5px"}
      >
        <Text color="#D7D7D7"  fontSize="sm"> 40</Text>{" "}
      </Flex>
      <Flex
        w="1.75rem"
        h="1.75rem"
        alignItems={"center"}
        justifyContent="center"
        border="1px solid #D7D7D7"
        borderRadius={"5px"}
      >
        <Icon as={AiOutlineRight}  fontSize="sm" color="#D7D7D7" />{" "}
      </Flex>
    </Flex>
  );
}
