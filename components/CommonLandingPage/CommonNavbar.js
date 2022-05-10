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


export default function CommonNavbar() {
  return (
    <Flex w="85%" alignSelf={"center"} pt="2rem">
      <SimpleGrid
        columns={[3, 3, 3, 3, 3]}
        spacing={["3rem", "8rem", "18rem", "9rem", "12rem"]}
      >
        {/* flex for company start */}
        <Flex alignItems="center" justifyContent="start">
          <Image width="285px" height="22px" src="/logo.png" alt="Logo" />
        </Flex>
        {/* flex for company end */}

        {/* flex for buttons start */}
        <Flex
          gap="2rem"
          alignItems="center"
          justifyContent="center"
         
        >
          <Link href="">
            <Button fontSize="xs" variant="link" color="#9B51E0">
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
              HOW IT WORKS
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
        <Flex alignItems="center" justifyContent="end">
          {" "}
          <Button
            w="12.4375rem"
            h="2.8125rem"
            border="1px solid #D7D7D7"
            borderRadius={"10px"}
          >
            CONNECT WALLET
          </Button>
        </Flex>

        {/* flex for wallet end */}
      </SimpleGrid>
    </Flex>
  );
}
