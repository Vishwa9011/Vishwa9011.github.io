import { Box, Button, Heading, Image, Link, Text } from '@chakra-ui/react'
import React from 'react'
import resume from '../../pdf/Vishwa_Vivek_Yadav_Resume.pdf'
import './LandingPage.css';
const LandingPage = () => {
     return (
          <>
               <Box display={'flex'} id='LandingPage' className='landingPage' w='100%'>
                    <Box className='landingPage-left' px='20' data-aos='fade-down' data-aos-duration="1500">
                         <Box>
                              <Heading color={'white'} fontSize='45px'>Hello 👋.</Heading>
                              <Box color='rgb(141, 141, 141)' fontSize={'20px'} lineHeight='40px'>
                                   <Text>I'm <Text fontWeight={'semibold'} as='span' color={'rgb(227, 64, 95)'}>Vishwa Vivek Yadav.</Text> An</Text>
                                   <Text>Enthusiastic Full Stack Web Developer 🔥</Text>
                                   Skilled in <Text fontWeight={'semibold'} as='span' color={'rgb(227, 64, 95)'}>MERN</Text> stack.
                              </Box>
                              <Box display={'flex'} gap='30px' my='20px'>
                                   <Box bg='blackAlpha.100' borderRadius={'50%'} w='40px' h='40px' display={'flex'} justifyContent='center' alignItems={'center'}>
                                        <Link href='https://github.com/Vishwa9011'>
                                             <Image src='/Images/git.png' borderRadius={'50%'} />
                                        </Link>
                                   </Box>
                                   <Box w='40px' h='40px' display={'flex'} justifyContent='center' alignItems={'center'}>
                                        <Link href='https://www.linkedin.com/in/vishwa-vivek-yadav-28a501240/'>
                                             <Image src='/Images/linkedin.png' bg='transparent' />
                                        </Link>
                                   </Box>
                                   <Box backgroundColor='white' border={'1px'} borderColor='white' borderRadius={'50%'} p='2' w='40px' h='40px' display={'flex'} justifyContent='center' alignItems={'center'}>
                                        <Link href='mailto:vishwa842301@gmail.com'>
                                             <Image src='/Images/gmail.png' backgroundColor='white' />
                                        </Link>
                                   </Box>
                              </Box>
                              <Box display={'flex'} gap='20px'>
                                   <Button className='BTN' as='a' href='#Contact' _active={{ scale: "0.1" }} bg='rgb(252,16,86)' colorScheme={'rgb(252,16,86)'} color='white' fontSize='1.2em'>Contact me</Button>
                                   <Button className='BTN' as='a' href={resume} download='Vishwa_Vivek_Yadav_Resume' _active={{ scale: "0.1" }} bg='rgb(252,16,86)' colorScheme={'rgb(252,16,86)'} color='white' fontSize='1.2em'>Download CV</Button>
                              </Box>
                         </Box>
                    </Box>
                    <Box data-aos-delay="200" className='landingPage-right flex' data-aos='fade-down' data-aos-duration="1500">
                         <Image src='/Images/boy.png' boxSize={{ base: '100%', sm: '100%', md: "70%" }} />
                    </Box>
               </Box>
          </>
     )
}

export default LandingPage