import { Box, Button, Image, Text } from '@chakra-ui/react'
import { techStackImage } from '../../../Data/TechStack'
import React from 'react'

const ProjectCards = ({ title, description, live, codebase, techStack, landingPage }) => {
     return (
          <Box overflow={'hidden'} color={'white'} p='3' w='95%' m='auto' className='pr-card' borderRadius={'10px'} cursor='pointer'>
               <Box borderRadius={'5px'} overflow='hidden' className='project-image flex' bg='#ffefe3' h='100%' w='100%' p='25px'>
                    <Image src={landingPage} className='pr-image' boxShadow={'dark-lg'} w='100%' h={'100%'} />
               </Box>
               <Box className='pr-details'>
                    <Box>
                         <Text letterSpacing={'1px'} my='2' fontSize={'1.5rem'} fontWeight='semibold' color='#e3405f'>{title}</Text>
                         <Text my='2' className='project-card-desc' letterSpacing={'1px'} fontSize={{ base: "1.2rem", sm: ".8rem", md: '1rem' }}>{description}</Text>
                    </Box>
                    <Box display={'flex'} my='2' flexWrap={'wrap'}>
                         {techStack.map((tech, i) => {
                              return <Image key={i} title={tech.toUpperCase()} src={techStackImage[tech]} boxSize={{ base: "40px", sm: "30px", md: "35px", lg: "40px" }} m='1' />
                         })}
                    </Box>
                    <Box display={'flex'} justifyContent='space-between' alignItems={'center'}>
                         <Button as='a' color={'white'} href={live} target='_blank' colorScheme={'blackAlpha.600'} bg='blackAlpha.800' _hover={{ bg: "blackAlpha.600" }} className='BTN'>
                              <Text as='span' fontSize={{ base: ".8rem", sm: ".8rem", md: '1rem' }}>
                                   Visit Website
                              </Text>
                              <Text ml='2' bg='blackAlpha.800'>
                                   <Image src='/Images/external-link.png' w='10px' bg='transparent' filter={'invert(100)'} />
                              </Text>
                         </Button>
                         <Button as='a' color={'white'} href={codebase} target='_blank' colorScheme={'blackAlpha.600'} bg='blackAlpha.800' _hover={{ bg: "blackAlpha.600" }} className='BTN'>
                              <Text as='span' fontSize={{ base: ".8rem", sm: ".8rem", md: '1rem' }}>
                                   Codebase
                              </Text>
                              <Text ml='2' >
                                   <Image src='/Images/git.png' w='15px' bg='transparent' />
                              </Text>
                         </Button>
                    </Box>
               </Box>
          </Box>
     )
}

export default ProjectCards