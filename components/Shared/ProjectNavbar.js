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
  
  
  export default function ProjectNavbar() {
    return (
      <Flex w="85%" alignSelf={"center"} pt="2rem">
        <SimpleGrid
          columns={[3, 3, 3, 3, 3]}
          spacing={["3rem", "8rem", "18rem", "4rem", "0.5rem"]}
        >
          {/* flex for company start */}
          <Flex alignItems="center" justifyContent="start">
            <Image width="285px" height="22px" src="/logo.png" alt="Logo" />
          </Flex>
          {/* flex for company end */}
  
          {/* flex for buttons start */}
          <Flex
            gap="2rem"
            alignItems="center" justifyContent="start"
           
          >
            <Link href="">
              <Button textDecoration={"underline"} textUnderlineOffset="0.5rem" fontSize="xs" variant="link" color="#9B51E0">
                HOME
              </Button>
            </Link>
            <Link href="">
              <Button fontSize="xs" variant="link" color="#BCBCBC">
                ABOUT US
              </Button>
            </Link>
  
  
            <Link href="">
              <Button fontSize="xs" variant="link" color="#BCBCBC">
                CONTACT
              </Button>
            </Link>
          </Flex>
          {/* flex for buttons end */}
  
          {/* flex for wallet start */}
          <Flex  gap="1rem" alignItems="center" justifyContent="start" >

          <Flex>  <Button
          w="9.8125rem"
          h="2.8125rem"
            border="1px solid #D7D7D7"
            borderRadius={"10px"}
            background="transparent"
            color="#BCBCBC"
          >
            TRADE REQUEST
          </Button></Flex>
            {" "}
           
            <Flex>   <Button
            w="9.8125rem"
            h="2.8125rem"
              border="1px solid #D7D7D7"
              borderRadius={"10px"}
              background="transparent"
              color="#BCBCBC"
            >
              LOAD NEW NFT
            </Button></Flex>

            <Flex>  <Button
            w="9.8125rem"
            h="2.8125rem"
            border="1px solid #D7D7D7"
            borderRadius={"10px"}
            bgGradient={"linear-gradient(103.91deg, #9B51E0 21.01%, rgba(48, 129, 237, 0.8) 100%)"}
            color="#BCBCBC"
          >
            CONNECTED
          </Button></Flex>
          

           
          </Flex>
  
          {/* flex for wallet end */}
        </SimpleGrid>
      </Flex>
    );
  }
  