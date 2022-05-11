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
import Card from "../Shared/Card";
import CardWithButton from "../Shared/CardWithButton";

import Pagination from "../Shared/Pagination";
  
  
  export default function MintedNfts() {
    return (
      <Flex  pt="4rem"    direction={"column"}>

      <Flex alignItems={"center"}  justifyContent={"end"} w="19.562rem" h="3.4375rem" border="1px solid #D7D7D7"  borderLeft={"none"} borderRadius={"0px 10px 10px 0px"}> <Text   color={"white"} pr="1.5rem"> M i n t e d       N F T ’ s</Text></Flex>
       
      <Flex  pt="3rem"  w="70%" alignSelf={"center"} direction="column">
      
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

    <Flex justifyContent={"end"} pt="3rem" >

   <Pagination/>
    
    </Flex>

      </Flex>
      </Flex>
    );
  }
  