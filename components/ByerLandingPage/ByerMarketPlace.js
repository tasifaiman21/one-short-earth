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
import Pagination from "../Shared/Pagination";
import CardWithButton from "../Shared/CardWithButton";
  
  export default function ByerMarketPlace() {
    return (
        <Flex  pt="4rem"    direction={"column"}>

        <Flex alignItems={"center"}  justifyContent={"end"} w="19.562rem" h="3.4375rem" border="1px solid #D7D7D7"  borderLeft={"none"} borderRadius={"0px 10px 10px 0px"}> <Text   color={"white"} pr="1.5rem"> M A R K E T   P L A C E</Text></Flex>
         
        <Flex  pt="3rem"  w="70%" alignSelf={"center"} direction="column">
        
        <SimpleGrid
        columns={[3, 3, 3, 3, 3]}
        spacing={["3rem", "8rem", "18rem", "5rem", "3rem"]}
        
      >
      <Flex> <CardWithButton/> </Flex>
      <Flex> <CardWithButton/> </Flex>
      <Flex> <CardWithButton/> </Flex>
      <Flex> <CardWithButton/> </Flex>
      <Flex> <CardWithButton/> </Flex>
      <Flex> <CardWithButton/> </Flex>
      
        
      </SimpleGrid>
  
      <Flex justifyContent={"end"} pt="3rem" >
  
     <Pagination/>
      
      </Flex>
  
        </Flex>
        </Flex>
    );
  }
  