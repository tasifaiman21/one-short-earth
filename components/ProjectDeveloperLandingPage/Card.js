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
          <Flex pt="2rem" gap="1.5rem">
            <Image
            
              width="37px"
              height="37px"
              src="/profileCard.jpg"
              alt="profileCard"
            />
            <Flex direction={"column"}>
              <Text fontSize="sm" color="white">
                User Name
              </Text>
              <Text fontSize="xs" color="#D7D7D7" pt="0.5rem">
                0.21 Unit
              </Text>
            </Flex>
          </Flex>

          <Flex pt="2rem" gap="1.5rem">
            <Flex direction={"column"}>
              <Text fontSize="sm" color="white">
                WE ARE HERE
              </Text>

              <Flex justifyContent={"end"} gap="3" pt="0.5rem">
                <Image
                  width="18px"
                  height="18px"
                  src="/heart.png"
                  alt="heart"
                />
                <Text fontSize="xs" color="white">
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
