import { Box, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'
import './About.css'

const About = () => {
     return (
          <Box id='About' m='auto' py='20'>
               <Box>
                    <Heading color={'white'} textAlign='center' data-aos='fade-up'>About me</Heading>
                    <Box display={'flex'} flexDirection={{ base: "column", sm: "column", md: "row" }} w='100%' justifyContent='center' alignItems={'center'} my='20' data-aos='fade-down'>
                         <Box w='30%' display={'flex'} justifyContent={'center'} className='user-image'>
                              <Box boxSize={{ base: "100px", sm: "100px", md: "200px" }} borderRadius='50%' overflow={'hidden'}>
                                   <Image src='/Images/vishwa1.jpg' boxSize={'100%'} />
                              </Box>
                         </Box>
                         <Box color={'white'} w='70%' lineHeight={'30px'} className='user-summary'>
                              <Box className='about-name'>
                                   <Heading textTransform={'uppercase'} letterSpacing='2px' color='rgb(227, 64, 95)'>Vishwa vivek yadav</Heading>
                                   <Heading textTransform={'uppercase'} letterSpacing='2px' fontSize={'25px'} fontWeight='500'>Full Stack web Developer</Heading>
                              </Box>
                              <Text mt='5' color={'whiteAlpha.800'} letterSpacing='1px'>
                                   An enthusiastic Full Stack Web Developer skilled in MERN stack with 1300+
                                   hours of experience in coding. Knowledge of HTML, CSS, Javascript,
                                   React, Redux, Next.js, Node.js, Express.js and MongoDB. High adaptability
                                   to learn new technologies quickly and paying attention to details. Looking
                                   to start a career as a web developer with a reputed firm driven by
                                   technology.
                              </Text>
                         </Box>
                    </Box>
               </Box>
               <Box color='white' px='2' w='100%'>
                    <Heading textAlign={'center'} my='10' mb='55px' data-aos='fade-up'>Education</Heading>
                    <Box justifyContent='center' display={'grid'} gridTemplateColumns={{ base: 'repeat(1,1fr)', sm: "repeat(2,1fr)", md: 'repeat(2,1fr)' }} w='100%' className='education' gap='5%'>
                         <Box data-aos='fade-up' w='100%' p='5' border={'1px'} borderRadius='10px' borderColor={'rgb(227, 64, 95)'} boxShadow='lg' className='educ-card'>
                              <Box bg='white' display={'flex'} justifyContent='center' alignItems={'center'} className='educ-image' h='180px' py='5'>
                                   <Image src='https://aniportalimages.s3.amazonaws.com/media/details/Capture2021092207014520210922071739.jpg' h='100%' />
                              </Box>
                              <Text className='education-heading' fontWeight='semibold' letterSpacing={'2px'} color='rgb(227, 64, 95)'>FULL STACK WEB DEVELOPMENT</Text>
                              <Text color={'whiteAlpha.600'}>Masai School, Bengaluru</Text>
                              <Text color={'whiteAlpha.700'}>07/2022 - 03/2023</Text>
                         </Box>
                         <Box data-aos='fade-up' w='100%' p='5' border={'1px'} borderRadius='10px' borderColor={'rgb(227, 64, 95)'} boxShadow='lg' className='educ-card'>
                              <Box bg='white' display={'flex'} justifyContent='center' alignItems={'center'} className='educ-image' h='180px' py='5'>
                                   <Image src='http://veenapani.org/assets/vpic_logo.png' h='100%' />
                              </Box>
                              <Text className='education-heading' fontWeight='semibold' letterSpacing={'2px'} color='rgb(227, 64, 95)'>HIGHER SECONDARY SCHOOL</Text>
                              <Text color={'whiteAlpha.600'}>Veena Pani Inter College, Raebareli</Text>
                              <Text color={'whiteAlpha.700'}>03/2020 - 04/2021</Text>
                         </Box>
                    </Box>
               </Box>
          </Box >
     )
}

export default About