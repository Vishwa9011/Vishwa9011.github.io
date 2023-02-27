import { Box, Grid, GridItem, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Styles from './Navbar.module.css'
import resume from '../../pdf/Vishwa_Vivek_Yadav_Resume.pdf'
import { MdMenu } from 'react-icons/md';

const Navbar = () => {

     const [isOpen, setIsOpen] = useState(true);
     const [size, setSize] = useState(`1111`)
     useEffect(() => {
          const menu = (e) => {
               setSize(e.target.innerWidth)
               let w = e.target.innerWidth
               if (w <= 1024) setIsOpen(false);
               else setIsOpen(true);
          }
          window.addEventListener('resize', menu)
          return () => {
               window.removeEventListener('resize', menu)
          }
     }, [size])

     return (
          <Box color={'white'} className={Styles.navbar} w='100%' pos='relative'>
               <Grid gridTemplateColumns='repeat(2,1fr)' gridTemplateRows={'auto'} w='100%' justifyContent='space-between' alignItems={'center'} pt='2' h='100%' >
                    <GridItem data-aos="fade-down" mb='2' data-aos-duration="1000" display={'flex'} h='100%' justifyContent='flex-start' alignItems={'center'} fontSize='1.3em' className={Styles.logoContainer}>
                         <Text fontSize={'1.5em'}> {"<"} </Text>
                         <Text as='a' href='/' mx='2' className={Styles.logo}>Vishwa Vivek Yadav</Text>
                         <Text fontSize={'1.5em'}>/</Text>
                         <Text fontSize={'1.5em'}> {'>'} </Text>
                    </GridItem>
                    <GridItem cursor={'pointer'} mb='2' fontSize={'2rem'} display={{ base: 'block', sm: 'block', md: 'block', lg: 'none' }} data-aos="fade-down" data-aos-duration="1000">
                         <Box w='100%' px='2' display={{ base: 'flex', sm: 'flex', md: 'flex', lg: 'none' }} justifyContent='flex-end'>
                              <Box onClick={() => setIsOpen(p => !p)}>
                                   <MdMenu />
                              </Box>
                         </Box>
                    </GridItem>
                    {isOpen && <GridItem zIndex={'998'} colSpan={{ base: 2, sm: 2, md: 2, lg: 1 }} bg='#1d1d1d' className='flex' w='100%' h='100%'>
                         <Box data-aos="fade-down" data-aos-duration="1000" className={Styles.navLinks}>
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
                                   <Text className={Styles.navLinksItems} as='a' cursor={'pointer'} href={resume} download='Vishwa_Vivek_Yadav_Resume' onClick={(e) => window.open("https://drive.google.com/file/d/1cPoxPCZTNaIWFici__RAnZxwNmhPOnOC/view")} target='_blank'>Resume</Text>
                              </Box>
                         </Box>
                    </GridItem>}
               </Grid>
          </Box>
     )
}

export default Navbar;