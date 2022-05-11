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
      <Flex
        w="21.988rem"
        h="25.52rem"
        bgGradient={
          "linear-gradient(169.44deg, rgba(58, 129, 191, 0.08) 1.85%, rgba(65, 48, 90, 0.08) 98.72%)"
        }
        borderRadius="35.0246px"
        direction={"column"}
      >
        <Flex p="2rem" justifyContent={"center"} direction={"column"}>
          <Flex>
            <Image  border="1px solid" borderRadius="20px" width="312.02px" height="312.72px" src="/card.jpg" alt="card" />
          </Flex>
  
          <Flex justifyContent={"space-between"}>
            <Flex pt="2rem" gap="0.5rem">
              <Image
              
                width="37px"
                height="37px"
                src="/profileCard.jpg"
                alt="profileCard"
              />
              <Flex direction={"column"}>
                <Text fontSize="0.875rem" color="white">
                  NFT Name
                </Text>

                <Button fontSize="0.75rem" color="#D7D7D7"  w="6.8125rem" h="1.5625rem" border={"1px solid #E2E2E2"} borderRadius="8px" background={"transparent"}> Request Trade </Button>
               
              </Flex>
            </Flex>
  
            <Flex pt="2rem" gap="0.5rem">
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
    );
  }
  