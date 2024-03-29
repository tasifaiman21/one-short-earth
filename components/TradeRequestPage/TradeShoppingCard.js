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

export default function TradeShoppingCard() {
  return (
    <Flex direction="column">
      <Flex w="2.48rem" h="2.48rem" background={"#FB37FF"} filter="blur(200px)">
        {/* effect */}
      </Flex>

      <Flex
        w="21.988rem"
        h="25.52rem"
        bgGradient={
          "linear-gradient(169.44deg, rgba(58, 129, 191, 0.08) 1.85%, rgba(65, 48, 90, 0.08) 98.72%)"
        }
        borderRadius="35.0246px"
        direction={"column"}
        backdropFilter={"blur(1110px)"}
      >
        <Flex
          p="1rem"
          
          justifyContent={"center"}
          direction={"column"}
          gap="0.5rem"
        >
          <Text fontSize="0.625rem" color="white">
            18 Dec 2022 12:45 am
          </Text>

          <Flex
          alignSelf={"center"}
            border="1px solid"
            borderRadius="20px"
            width="312px"
            height="294px"
            backgroundImage={'url("/card.jpg")'}
          ></Flex>

          <Flex justifyContent={"space-between"}>
            <Flex>
              <Text fontSize="0.625rem" color="white">
                Vendor 5da2..fse3
              </Text>
            </Flex>
            <Flex>
              <Text fontSize="0.625rem" color="white">
                Owner Transfer
              </Text>
            </Flex>
            <Flex>
              <Text fontSize="0.625rem" color="white">
                User 5da2..fse3
              </Text>
            </Flex>
          </Flex>

          <Flex justifyContent={"center"}>
            {" "}
            <Button
              w="6.8125rem"
              h="1.5625rem"
              border="1px solid #E2E2E2"
              borderRadius={"8px"}
              color="#E2E2E2"
              background="transparent"
              fontSize="0.625rem"
            >
              {" "}
              Buy Now{" "}
            </Button>{" "}
          </Flex>
        </Flex>
      </Flex>

      <Flex w="2.57rem" h="2.57rem" background={"#18B2DE"} filter="blur(200px)">
        {/* effect */}
      </Flex>
    </Flex>
  );
}
