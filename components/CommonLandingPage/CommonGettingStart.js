import {
  Flex,
  Text,
  Box,
  Link,
  SimpleGrid,
  Button,
  Icon,
} from "@chakra-ui/react";
import Image from "next/image";

export default function CommonNavbar() {
  return (
    <Flex w="85%" alignSelf={"center"} pt="2rem" direction={"column"}>
      <Flex textAlign={"center"} direction={"column"} pt="4rem">
        <Text fontSize="5xl" color={"#FFFFFF"}>
          Getting started
        </Text>
        <Text fontSize="md" color={"#E2E2E2"} pt="1rem">
          In publishing and graphic design, Lorem ipsum is a placeholder
        </Text>
      </Flex>

      <SimpleGrid columns={[4]} spacing="2rem" pt="3rem">
        <Flex
          alignItems={"center"}
          justifyContent="center"
          direction={"column"}
        >
          <Flex
            alignItems={"center"}
            justifyContent="center"
            w="9.375rem"
            h="8.625rem"
            background={"rgba(255, 255, 255, 0.095)"}
            boxShadow={
              "inset 2.01px -2.01px 20px rgba(214, 214, 214, 0.17), inset -3.01333px 3.01333px 3.01333px rgba(255, 255, 255, 0.39)"
            }
            backdropFilter={"blur(74.4293px)"}
            borderRadius="26px"
          >
            <Image
              width="46.57px"
              height="52.24px"
              src="/wallet.png"
              alt="wallet"
            />
          </Flex>

          <Text fontSize="sm" color={"#FFFFFF"} pt="1rem">
            Connect your wallet
          </Text>
        </Flex>


        <Flex
        alignItems={"center"}
        justifyContent="center"
        direction={"column"}
      >
        <Flex
          alignItems={"center"}
          justifyContent="center"
          w="9.375rem"
          h="8.625rem"
          background={"rgba(255, 255, 255, 0.095)"}
          boxShadow={
            "inset 2.01px -2.01px 20px rgba(214, 214, 214, 0.17), inset -3.01333px 3.01333px 3.01333px rgba(255, 255, 255, 0.39)"
          }
          backdropFilter={"blur(74.4293px)"}
          borderRadius="26px"
        >
          <Image
            width="51.33px"
            height="46.67px"
            src="/trade.png"
            alt="trade"
          />
        </Flex>

        <Text fontSize="sm" color={"#FFFFFF"} pt="1rem">
        Request Trade
        </Text>
      </Flex>


      <Flex
      alignItems={"center"}
      justifyContent="center"
      direction={"column"}
    >
      <Flex
        alignItems={"center"}
        justifyContent="center"
        w="9.375rem"
        h="8.625rem"
        background={"rgba(255, 255, 255, 0.095)"}
        boxShadow={
          "inset 2.01px -2.01px 20px rgba(214, 214, 214, 0.17), inset -3.01333px 3.01333px 3.01333px rgba(255, 255, 255, 0.39)"
        }
        backdropFilter={"blur(74.4293px)"}
        borderRadius="26px"
      >
        <Image
          width="53.67px"
          height="44.33px"
          src="/nft.png"
          alt="nft"
        />
      </Flex>

      <Text fontSize="sm" color={"#FFFFFF"} pt="1rem">
      Load New NFT
      </Text>
    </Flex>

    <Flex
    alignItems={"center"}
    justifyContent="center"
    direction={"column"}
  >
    <Flex
      alignItems={"center"}
      justifyContent="center"
      w="9.375rem"
      h="8.625rem"
      background={"rgba(255, 255, 255, 0.095)"}
      boxShadow={
        "inset 2.01px -2.01px 20px rgba(214, 214, 214, 0.17), inset -3.01333px 3.01333px 3.01333px rgba(255, 255, 255, 0.39)"
      }
      backdropFilter={"blur(74.4293px)"}
      borderRadius="26px"
    >
      <Image
        width="56px"
        height="56px"
        src="/credit.png"
        alt="credit"
      />
    </Flex>

    <Text fontSize="sm" color={"#FFFFFF"} pt="1rem">
    Burn your Carbon Credit
    </Text>
  </Flex>
      </SimpleGrid>
    </Flex>
  );
}
