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

export default function Card() {
  return (
    <Flex direction={"column"}>
      <Flex position={"absolute"}  w="2.48rem" h="2.48rem" background={"#FB37FF"} filter="blur(200px)">
        {/* effect */}
      </Flex>

      <Flex
      position={"relative"}
        w="21.988rem"
        h="25.52rem"
        bgGradient={
          "linear-gradient(169.44deg, rgba(58, 129, 191, 0.08) 1.85%, rgba(65, 48, 90, 0.08) 98.72%)"
        }
        backdropBlur="1110px"
        borderRadius="35.0246px"
        direction={"column"}
      >
        <Flex p="1rem"  justifyContent={"center"} direction={"column"}>
          <Flex
            border="1px solid"
            borderRadius="20px"
            alignSelf={"center"}
            width="312.02px"
            height="312.72px"
            backgroundImage={'url("/card.jpg")'}
          ></Flex>

          <Flex justifyContent={"space-between"}>
            <Flex pt="1rem" gap="1.5rem">
              <Image
                width="37px"
                height="37px"
                src="/profileCard.png"
                alt="profileCard"
              />
              <Flex direction={"column"}>
                <Text fontSize="0.875rem" color="white">
                  NFT Name
                </Text>
                <Text fontSize="0.75rem" color="#D7D7D7" pt="0.5rem">
                  0.21 Unit
                </Text>
              </Flex>
            </Flex>

            <Flex pt="1rem" gap="1.5rem">
              <Flex direction={"column"}>
                <Text fontSize="0.625rem" color="white">
                  18 Dec 2022 12:45 am
                </Text>

                <Flex justifyContent={"end"} gap="3" pt="0.5rem">
                  <Image
                    width="18px"
                    height="18px"
                    src="/heart.png"
                    alt="heart"
                  />
                  <Text fontSize="0.875rem" color="white">
                    25
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex w="2.57rem" h="2.57rem" background={"#18B2DE"} filter="blur(200px)">
        {/* effect */}
      </Flex>
    </Flex>
  );
}
