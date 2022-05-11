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

  export default function Footer() {
    return (
      <Flex w="85%" alignSelf={"center"} pt="5rem" direction={"column"}>
        <Flex justifyContent={"space-between"}>
          <Flex direction={"column"}>
            <Flex>
              {" "}
              <Image width="288px" height="22px" src="/logo.png" alt="Logo" />
            </Flex>
  
            <Flex>
              <Text fontSize="xs" color={"#D7D7D7"} pt="2rem" pb="2rem">
                aaasaaLorem Ipsum has been the industry's standard dummy text ever{" "}
                <br />
                since the 1500s, when an unknown printer took a galley of type and{" "}
                <br /> scrambled it to make a type specimen book.
              </Text>
            </Flex>
          </Flex>
  
          <Flex direction={"column"} gap="1rem">
            <Text fontSize="md" color={"#D7D7D7"}>
              About
            </Text>
            <Text fontSize="xs" color={"#D7D7D7"}>
              Product
            </Text>
            <Text fontSize="xs" color={"#D7D7D7"}>
              Terms & Condition
            </Text>
            <Text fontSize="xs" color={"#D7D7D7"}>
              FAQ
            </Text>
          </Flex>
  
          <Flex direction={"column"} gap="1rem">
            <Text fontSize="md" color={"#D7D7D7"}>
              Company
            </Text>
            <Text fontSize="xs" color={"#D7D7D7"}>
              Our Team
            </Text>
            <Text fontSize="xs" color={"#D7D7D7"}>
              Partner With Us
            </Text>
            <Text fontSize="xs" color={"#D7D7D7"}>
              Privacy & Policy
            </Text>
          </Flex>
  
          <Flex direction={"column"} gap="1rem">
            <Text fontSize="md" color={"#D7D7D7"}>
              Contact
            </Text>
            <Text fontSize="xs" color={"#D7D7D7"}>
              +1 339-707-5370
            </Text>
            <Text fontSize="xs" color={"#D7D7D7"}>
              saquib@terolabs.org
            </Text>
          </Flex>
        </Flex>
  
        <Flex w="100%" pb="2rem" pt="2rem">
          <Divider />
        </Flex>
  
        <Flex justifyContent={"space-between"}>
          <Flex gap="1rem">
            <Link href="" isExternal>
              <Image
                width="32.51px"
                height="32px"
                src="/Instagram.png"
                alt="Instagram"
              />
            </Link>
            <Link href="" isExternal>
              <Image
                width="32.51px"
                height="32px"
                src="/Facebook.png"
                alt="Facebook"
              />
            </Link>
  
            <Link href="" isExternal>
              <Image
                width="32.51px"
                height="32px"
                src="/Twitter.png"
                alt="Twitter"
              />
            </Link>
          </Flex>
  
          <Flex>
            <Text fontSize="xs" color={"#828282"}>
              Copyright 2022 Tero Labs
            </Text>
          </Flex>
        </Flex>
  
  
       
        
      </Flex>
    );
  }