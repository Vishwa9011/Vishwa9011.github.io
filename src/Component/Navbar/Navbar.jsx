import { Box, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import Styles from './Navbar.module.css'
import resume from '../../pdf/Vishwa_Vivek_Yadav_Resume.pdf'
import { MdMenu } from 'react-icons/md';

const Navbar = () => {

     const [isOpen, setIsOpen] = useState(true);

     return (
          <Box color={'white'} className={Styles.navbar} w='100%' pos='sticky' left={0} top={0}>
               <Grid gridTemplateColumns='repeat(2,1fr)' gridTemplateRows={'auto'} w='100%' justifyContent='space-between' alignItems={'center'} pt='2' h='100%' >
                    <GridItem mb='2' display={'flex'} h='100%' justifyContent='flex-start' alignItems={'center'} fontSize='1.3em' className={Styles.logoContainer}>
                         <Text fontSize={'1.4em'}> {"<"} </Text>
                         <Text as='a' href='/' mx='2' className={Styles.logo}>Vishwa Vivek Yadav</Text>
                         <Text fontSize={'1.4em'}>/</Text>
                         <Text fontSize={'1.4em'}> {'>'} </Text>
                    </GridItem>
                    <GridItem cursor={'pointer'} mb='2' fontSize={'2rem'} className={Styles.menu} >
                         <Flex justifyContent={'flex-end'} w='100%' px='2' ml='auto'>
                              <Box onClick={() => setIsOpen(p => !p)}>
                                   <MdMenu />
                              </Box>
                         </Flex>
                    </GridItem>
                    <GridItem zIndex={'998'} className={`${Styles.menu_item} ${isOpen ? Styles.menu_show : ""}`} bg='#1d1d1d' display={'flex'} justifyContent='center' w='100%' h='100%'>
                         <Box className={Styles.navLinks}>
                              <Box className={Styles.navLinksBox}>
                                   <Text className={Styles.navLinksItems} as='a' href='/'>Home</Text>
                              </Box>
                              <Box className={Styles.navLinksBox}>
                                   <Text className={Styles.navLinksItems} as='a' href='#About'>About</Text>
                              </Box>
                              <Box className={Styles.navLinksBox}>
                                   <Text className={Styles.navLinksItems} as='a' href='#Skills'>Skills</Text>
                              </Box>
                              <Box className={Styles.navLinksBox}>
                                   <Text className={Styles.navLinksItems} as='a' href='#Project'>Projects</Text>
                              </Box>
                              <Box className={Styles.navLinksBox}>
                                   <Text className={Styles.navLinksItems} as='a' href='#Contact'>Contact</Text>
                              </Box>
                              <Box className={Styles.navLinksBox}>
                                   <Text className={Styles.navLinksItems} as='a' cursor={'pointer'} href={resume} download='fw21_0101_Vishwa_Vivek_Yadav_Resume' onClick={(e) => window.open("https://drive.google.com/file/d/1cPoxPCZTNaIWFici__RAnZxwNmhPOnOC/view")} target='_blank'>Resume</Text>
                              </Box>
                         </Box>
                    </GridItem>
               </Grid>
          </Box>
     )
}

export default Navbar;