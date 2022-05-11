import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Flex, Text, Box } from "@chakra-ui/react";
import ByerNavbar from "../components/ByerLandingPage/ByerNavbar";
import ByerMarketPlace from "../components/ByerLandingPage/ByerMarketPlace";
import ByerOwnNft from "../components/ByerLandingPage/ByerOwnNft";
import Footer from "../components/Shared/Footer";

export default function ByerLandingPage() {
  return (
    <Flex
      w="100vw"
      bgColor={"#1F1D2B"}
      justifyContent="center"
      direction={"column"}
    >
      <ByerNavbar />
      <ByerMarketPlace />
      <ByerOwnNft />
      <Footer />
    </Flex>
  );
}
