import { Box, Center, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import ReactTooltip from 'react-tooltip'
import './Skills.css'
const Skills = () => {
     return (
          <Box id='Skills' color={'white'} my='10' py='10' w='100%'>
               <Box w='100%'>
                    <Heading textAlign={'center'} my='10' data-aos="fade-up" data-aos-duration="1000">
                         Skills
                    </Heading>
                    <Box className='slider' data-aos='fade-up' data-aos-duration="1000">
                         <Box className='slide-track'>
                              {/* slides */}
                              <Box className='slide'>
                                   <Image className='slide-image' title='HTML5' src='https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg' />
                              </Box>
                              <Box className='slide'>
                                   <Image className='slide-image' title='CSS3' src='https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg' />
                              </Box>
                              <Box className='slide'>
                                   <Image className='slide-image' title='JAVASCRIPT' src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' />
                              </Box>
                              <Box className='slide'>
                                   <Image className='slide-image' title='REACT' src='https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg' />
                              </Box>
                              <Box className='slide'>
                                   <Image className='slide-image' title='NEXTJS' src='https://cdn.worldvectorlogo.com/logos/nextjs-2.svg' />
                              </Box>
                              <Box className='slide'>
                                   <Image className='slide-image' title='BOOTSTRAP' src='https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg' />
                              </Box>
                              <Box className='slide'>
                                   <Image className='slide-image' title='NODEJS' src='https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg' />
                              </Box>
                              <Box className='slide'>
                                   <Image className='slide-image' title='TAILWIND' src='https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' />
                              </Box>

                              {/* Slides double */}

                              <Box className='slide'>
                                   <Image className='slide-image' title='HTML5' src='https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg' />
                              </Box>
                              <Box className='slide'>
                                   <Image className='slide-image' title='CSS3' src='https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg' />
                              </Box>
                              <Box className='slide'>
                                   <Image className='slide-image' title='JAVASCRIPT' src='https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' />
                              </Box>
                              <Box className='slide'>
                                   <Image className='slide-image' title='REACT' src='https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg' />
                              </Box>
                              <Box className='slide'>
                                   <Image className='slide-image' title='NEXTJS' src='https://cdn.worldvectorlogo.com/logos/nextjs-2.svg' />
                              </Box>
                              <Box className='slide'>
                                   <Image className='slide-image' title='BOOTSTRAP' src='https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg' />
                              </Box>
                              <Box className='slide'>
                                   <Image className='slide-image' title='NODEJS' src='https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg' />
                              </Box>
                              <Box className='slide'>
                                   <Image className='slide-image' title='TAILWIND' src='https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg' />
                              </Box>
                         </Box>
                    </Box>
                    <Heading textAlign={'center'} my='10' data-aos="fade-up" data-aos-duration="1000">
                         Tools
                    </Heading>
                    <Flex className='tools-container'>
                         <Box className='tools'>
                              <Image title='GITHUB' src='https://img.icons8.com/ios-glyphs/512/github.png' />
                         </Box>
                         <Box className='tools'>
                              <Image title='VS CODE' src='https://i.ibb.co/61nck0S/download-removebg-preview.png' />
                         </Box>
                         <Box className='tools'>
                              <Image title='GIT' src='https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg' />
                         </Box>
                         <Box className='tools'>
                              <Image title='REPLIT' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/New_Replit_Logo.svg/1200px-New_Replit_Logo.svg.png' />
                         </Box>
                         <Box className='tools'>
                              <Image title='FIREBASE' src='https://img.icons8.com/color/512/firebase.png' />
                         </Box>
                         <Box className='tools'>
                              <Image title='CODEPEN' src='https://img.icons8.com/ios-filled/512/codepen.png' />
                         </Box>
                         <Box className='tools'>
                              <Image title='CODE SANDBOX' src='https://img.icons8.com/external-tal-revivo-color-tal-revivo/512/external-codesandbox-an-online-code-editor-and-sharing-web-application-projects-logo-color-tal-revivo.png' />
                         </Box>
                    </Flex>
                    <Heading textAlign={'center'} my='10' data-aos="fade-up" data-aos-duration="1000">Github Stats</Heading>
                    <Box className='github-card' w='100%' display='grid' justifyContent={'center'} alignItems='center' gridTemplateColumns={{ base: 'repeat(1,1fr)', sm: 'repeat(1,1fr)', md: 'repeat(2,1fr)' }} gap='10px' m='auto'>
                         <Box w='100%' className='flex' data-aos="fade-down" data-aos-duration="1000">
                              <Image width="100%" src="https://github-readme-stats.vercel.app/api?username=vishwa9011&show_icons=true&hide_border=true&theme=radical" />
                         </Box>
                         <Box w='100%' className='flex' data-aos="fade-down" data-aos-duration="1000">
                              <Image width="100%" src="https://github-readme-streak-stats.herokuapp.com/?user=vishwa9011&hide_border=true&theme=radical" />
                         </Box>
                    </Box>
                    <Center className='calendar'>
                         <GitHubCalendar username="vishwa9011" color="#4a8af4" children={<ReactTooltip html />} />
                    </Center>
               </Box>
          </Box>

     )
}

export default Skills