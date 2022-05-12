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

export default function CommonHero() {
  return (
    <Flex w="85%" alignSelf={"center"} pt="6rem">
      <Flex direction={"column"} w="50%" pt="5rem">
        <Text fontSize="5xl" color={"#FFFFFF"}>
          Explore, fund and offset in the most comprehensive Carbon Marketplace
        </Text>

        <Text fontSize="md" pt="2rem" color=" #E2E2E2">
          We facilitate the creation of carbon credits for project developers,
          registries and MRV companies
        </Text>

        <Flex gap="2rem" pt="3rem" pb="2rem">
          <Button
            w="12.4375rem"
            h="3.5625rem"
            bgColor={"#9B51E0"}
            borderRadius="16px"
            color={"white"}
          >
            {" "}
            Learn More{" "}
          </Button>
          <Button
            w="12.4375rem"
            h="3.5625rem"
            bgColor={"transparent"}
            borderRadius="16px"
            border=" 1px solid #D7D7D7"
            color={"white"}
          >
            {" "}
            FAQ{" "}
          </Button>
        </Flex>
      </Flex>

      <Flex w="50%" justifyContent={"end"}>
        <Flex
          w="7.68rem"
          h="7.68rem"
          background={"#FB37FF"}
          filter=" blur(200px)"
        >
          {/* effect */}
        </Flex>

        <Flex
          w="31.5rem"
          h="36.56rem"
          bgGradient={
            "linear-gradient(169.44deg, rgba(58, 129, 191, 0.08) 1.85%, rgba(65, 48, 90, 0.08) 98.72%)"
          }
          borderRadius="35.0246px"
          direction={"column"}
        >
          <Flex p="2rem" alignItems={"center"} justifyContent={"center"} direction={"column"}>
            <Flex
              border="1px solid"
              borderRadius="20px"
              width="447px"
              height="448px"
              backgroundImage={'url("/card.jpg")'}
            ></Flex>

            <Flex justifyContent={"space-between"}>
              <Flex pt="2rem" gap="1.5rem">
                <Image
                  width="53px"
                  height="53px"
                  src="/profileCard.png"
                  alt="profileCard"
                />
                <Flex direction={"column"}>
                  <Text fontSize="md" color="white">
                    User Name
                  </Text>
                  <Text fontSize="sm" color="#D7D7D7" pt="0.5rem">
                    0.21 Unit
                  </Text>
                </Flex>
              </Flex>

              <Flex pt="2rem" gap="1.5rem">
                <Flex direction={"column"}>
                  <Text fontSize="md" color="white">
                    WE ARE HERE
                  </Text>

                  <Flex justifyContent={"end"} gap="3" pt="0.5rem">
                    <Image
                      width="18px"
                      height="18px"
                      src="/heart.png"
                      alt="heart"
                    />
                    <Text fontSize="sm" color="white">
                      25
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>

        <Flex
        w="7.68rem"
        h="7.68rem"
        background={"#18B2DE"}
        filter="blur(200px)"
        >
        {/* effect */}
        </Flex>
      </Flex>
    </Flex>
  );
}
