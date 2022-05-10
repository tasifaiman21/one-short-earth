import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Flex, Text, Box } from "@chakra-ui/react";
import CommonNavbar from '../components/CommonLandingPage/CommonNavbar';
import CommonHero from '../components/CommonLandingPage/CommonHero';
import CommonGettingStart from '../components/CommonLandingPage/CommonGettingStart';

export default function CommonLandingPage() {
  return (
   <Flex w="100vw"  bgColor={"#1F1D2B"} justifyContent="center" direction={"column"}>
   <CommonNavbar/>
   <CommonHero/>
   <CommonGettingStart/>
  
   </Flex>
  )
}
