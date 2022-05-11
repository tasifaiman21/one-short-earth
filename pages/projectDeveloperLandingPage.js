import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Flex, Text, Box } from "@chakra-ui/react";
import Footer from '../components/Shared/Footer';
import ProjectNavbar from '../components/ProjectDeveloperLandingPage/ProjectNavbar';
import MintedNfts from '../components/ProjectDeveloperLandingPage/MintedNfts';
import Card from '../components/ProjectDeveloperLandingPage/Card';

export default function CommonLandingPage() {
  return (
   <Flex w="100vw"  bgColor={"#1F1D2B"} justifyContent="center" direction={"column"}>
 <ProjectNavbar/>
 <MintedNfts/>
 <Footer/>

  
   </Flex>
  )
}
