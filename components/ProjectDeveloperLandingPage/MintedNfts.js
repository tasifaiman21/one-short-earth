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
import Card from "./Card";
import CardWithButton from "./CardWithButton";
  
  
  export default function MintedNfts() {
    return (
      <Flex  pt="2rem" direction={"column"}>
      <Flex  justifyContent={"end"} w="19.562rem" h="3.4375rem" border="1px solid #D7D7D7" borderRadius={"10px"}> <Text  color={"white"}> Minted Nfts</Text></Flex>
       
      <Flex pt="2rem" w="70%" alignSelf={"center"} color="white">
      
      <SimpleGrid
      columns={[3, 3, 3, 3, 3]}
      spacing={["3rem", "8rem", "18rem", "5rem", "3rem"]}
    >
    <Flex> <Card/> </Flex>
    <Flex> <CardWithButton/> </Flex>
    <Flex> <Card/> </Flex>
    <Flex> <Card/> </Flex>
    <Flex> <CardWithButton/> </Flex>
    <Flex> <Card/> </Flex>
      
    </SimpleGrid>
      </Flex>
      </Flex>
    );
  }
  