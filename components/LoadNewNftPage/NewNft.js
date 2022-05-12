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

      <Flex pt="3rem" w="70%" alignSelf={"center"} gap="15rem">
        <Flex direction={"column"} gap="2rem">
          <Flex
            alignItems={"center"}
            w="32.68rem"
            h="3.5625rem"
            border="1px solid #D7D7D7"
            borderRadius={"16px"}
            pl="1rem"
          >
            <Image width="24px" height="24px" src="/title.png" alt="title" />
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
            pl="1rem"
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
            pl="1rem"
          >
            <Image width="24px" height="24px" src="/amount.png" alt="title" />
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
            pl="1rem"
          >
            <Image width="24px" height="24px" src="/price.png" alt="title" />
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
            pl="1rem"
          >
            <Image width="24px" height="24px" src="/stand.png" alt="title" />
            <Input
              border="none"
              fontSize="xs"
              color=" #D7D7D7"
              placeholder={"Standard"}
            />
          </Flex>

          <Button
            alignItems={"center"}
            w="32.68rem"
            h="3.5625rem"
            border="1px solid #D7D7D7"
            borderRadius={"16px"}
            bgGradient="linear-gradient(103.91deg, #9B51E0 21.01%, rgba(48, 129, 237, 0.8) 100%)"
          >
            Mint NFT
          </Button>
        </Flex>

        <Flex direction={"column"} gap="1rem">
         {/*  <Flex
            w="4.92rem"
            h="4.92rem"
            background={"#FB37FF"}
            filter="blur(200px)"
          >

          </Flex> */}

          <Flex
            w="20.025rem"
            h="23.243rem"
            bgGradient={
              "linear-gradient(169.44deg, rgba(58, 129, 191, 0.08) 1.85%, rgba(65, 48, 90, 0.08) 98.72%)"
            }
            backdropBlur="1110px"
            borderRadius={"35.0246px"}
            alignItems="center"
            justifyContent={"center"}
          >
            <Image
              width="95.36px"
              height="95.36px"
              src="/camera.png"
              alt="camera"
            />
          </Flex>

        {/*   <Flex
            w="4.92rem"
            h="4.92rem"
            background={"#18B2DE"}
            filter="blur(200px)"
          >
         
          </Flex> */}

          <Flex pl="10rem" pt="2rem" >
            <Button
              alignItems={"center"}
              justifyContent={"start"}
              w="23rem"
              h="3.4375rem"
              border="1px solid #D7D7D7"
              borderRight={"none"}
              borderRadius={"10px 0px 0px 10px"}
              background="transparent"
              pl="0.5rem"
            >
              {" "}
              <Text color={"white"}>
                {" "}
                Upload Image
              </Text>
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
