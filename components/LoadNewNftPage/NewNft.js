import {
  Flex,
  Text,
  Box,
  Link,
  SimpleGrid,
  Button,
  Icon,
  InputGroup,
  InputLeftElement,
  children,
  Input,
} from "@chakra-ui/react";
import Image from "next/image";
import Card from "../Shared/Card";
import CardWithButton from "../Shared/CardWithButton";

import Pagination from "../Shared/Pagination";

export default function NewNft() {
  return (
    <Flex pt="4rem" direction={"column"}>
      <Flex
        alignItems={"center"}
        justifyContent={"end"}
        w="19.562rem"
        h="3.4375rem"
        border="1px solid #D7D7D7"
        borderLeft={"none"}
        borderRadius={"0px 10px 10px 0px"}
      >
        {" "}
        <Text color={"white"} pr="1.5rem">
          {" "}
          Load New N F T ’ s
        </Text>
      </Flex>

      <Flex pt="3rem" w="70%" alignSelf={"center"} direction="column" gap="1rem">
        <Flex
          alignItems={"center"}
          w="32.68rem"
          h="3.5625rem"
          border="1px solid #D7D7D7"
          borderRadius={"16px"}
        >
          <Image width="13px" height="16px" src="/title.png" alt="title" />
          <Input
            border="none"
            fontSize="xs"
            color=" #D7D7D7"
            placeholder={"Enter Title"}
          />
        </Flex>
        <Flex
          alignItems={"center"}
          w="32.68rem"
          h="3.5625rem"
          border="1px solid #D7D7D7"
          borderRadius={"16px"}
        >
          <Image width="24px" height="24px" src="/location.png" alt="title" />
          <Input
            border="none"
            fontSize="xs"
            color=" #D7D7D7"
            placeholder={"Enter Location"}
          />
        </Flex>


        <Flex
          alignItems={"center"}
          w="32.68rem"
          h="3.5625rem"
          border="1px solid #D7D7D7"
          borderRadius={"16px"}
        >
          <Image width="18px" height="18px" src="/amount.png" alt="title" />
          <Input
            border="none"
            fontSize="xs"
            color=" #D7D7D7"
            placeholder={"Amount of CO2e"}
          />
        </Flex>


        <Flex
          alignItems={"center"}
          w="32.68rem"
          h="3.5625rem"
          border="1px solid #D7D7D7"
          borderRadius={"16px"}
        >
          <Image width="18px" height="12px" src="/price.png" alt="title" />
          <Input
            border="none"
            fontSize="xs"
            color=" #D7D7D7"
            placeholder={"Enter Price"}
          />
        </Flex>


        <Flex
          alignItems={"center"}
          w="32.68rem"
          h="3.5625rem"
          border="1px solid #D7D7D7"
          borderRadius={"16px"}
        >
          <Image width="14px" height="18px" src="/stand.png" alt="title" />
          <Input
            border="none"
            fontSize="xs"
            color=" #D7D7D7"
            placeholder={"Standard"}
          />
        </Flex>
      </Flex>
    </Flex>
  );
}
