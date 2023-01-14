import { Box, Button, Heading, Image, Input, Link, Text, Textarea, useToast } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css";

const Contact = () => {
     const [email, SetEmail] = useState({ user_name: "", user_email: "", message: '' })
     const formRef = useRef()
     const toast = useToast();
     const sendEmail = (e) => {
          e.preventDefault();
          if (email.user_name === "" || email.user_email === '' || email.message === "") {
               toast({ title: `Please fill all feilds.`, status: 'error', position: 'top-right', variant: 'left-accent', isClosable: true, })
               return;
          }

          emailjs.sendForm('service_ngso518', 'template_7hv9sfq', formRef.current, 'khd5AipK7AKRkkUlD')
               .then((result) => {
                    console.log(result.text);
               }, (error) => {
                    console.log(error.text);
               });

          toast({ title: `Message has been sent.`, status: 'success', position: 'top-right', variant: 'left-accent', isClosable: true, })
          e.target.reset();
          SetEmail({ user_name: "", user_email: "", message: '' })
     }

     const HandleOnChange = (e) => {
          SetEmail(p => ({ ...p, [e.target.name]: e.target.value }))
     }

     return (
          <Box id='Contact' color={'white'} py='5' w='100%'>
               <Box display={'flex'} gap='5%' h='fit-content' w='100%' flexDirection={{ base: "column", sm: "column", md: 'row' }}>
                    <form style={{ width: '40%', height: '100%' }} ref={formRef} onSubmit={sendEmail} className='form'>
                         <Box data-aos="fade-up" >
                              <Heading color='#e3405f'>Contact</Heading>
                              <Box my='10' pos={'relative'}>
                                   <Text className='name-label'>Name</Text>
                                   <Input placeholder='Your Name' h='45px' onChange={HandleOnChange} name="user_name" borderRadius={'18px'} borderColor='whiteAlpha.500' className='name' />
                              </Box>
                              <Box my='10' pos={'relative'}>
                                   <Text className='name-label'>Email</Text>
                                   <Input type={'email'} placeholder='Your Email' onChange={HandleOnChange} h='45px' borderRadius={'18px'} borderColor='whiteAlpha.500' name="user_email" className='name' />
                              </Box>
                              <Box my='10' pos={'relative'}>
                                   <Text className='name-label'>Message</Text>
                                   <Textarea placeholder='Type your message here...' onChange={HandleOnChange} minH={'150px'} borderRadius={'18px'} borderColor='whiteAlpha.500' name="message" className='name' />
                              </Box>
                              <Button data-aos-duration="2000" type='submit' bg='#FC1056' color={'white'} className='BTN send-btn' colorScheme={'#FC1056'} borderRadius='10px'>
                                   Send
                                   <Text as='span' bg='transparent' className='flex' ml='3'>
                                        <Image src='/Images/paper-plane1.png' boxSize={'20px'} filter='invert(100)' className='send-img' bg='transparent' />
                                   </Text>
                              </Button>
                         </Box>
                    </form>
                    <Box w='60%' minH='100%' display='flex' py='10' pos={'relative'} data-aos="fade-up" className='contact-right'>
                         <Box w='100%'>
                              <Box display={'flex'} my='10' gap='20px' alignItems={'center'}>
                                   <Box borderRadius={'50%'} p='2' bg='whiteAlpha.400'>
                                        <Image src='/Images/at-the-rate.png' boxSize={'20px'} bg='transparent' />
                                   </Box>
                                   <Box>
                                        <Text as='a' href='mailto:vishu842301@gmail.com' color='whiteAlpha.800' fontSize={'1.1rem'} letterSpacing={'1px'} fontWeight={'semibold'}>vishu842301@gmail.com</Text>
                                   </Box>
                              </Box>
                              <Box display={'flex'} my='10' gap='20px' alignItems={'center'}>
                                   <Box borderRadius={'50%'} p='2' bg='whiteAlpha.400'>
                                        <Image src='/Images/telephone.png' boxSize={'20px'} bg='transparent' />
                                   </Box>
                                   <Box>
                                        <Text color='whiteAlpha.800' fontSize={'1.1rem'} letterSpacing={'1px'} fontWeight={'semibold'}>+918423017075</Text>
                                   </Box>
                              </Box>
                              <Box display={'flex'} my='10' gap='20px' alignItems={'center'}>
                                   <Box borderRadius={'50%'} p='2' bg='whiteAlpha.400'>
                                        <Image src='/Images/location-pin.png' boxSize={'20px'} bg='transparent' />
                                   </Box>
                                   <Box>
                                        <Text whiteSpace={'nowrap'} color='whiteAlpha.800' fontSize={'1.1rem'} letterSpacing={'1px'} fontWeight={'semibold'}>Malik Mau, Gayatri Nagar</Text>
                                        <Text whiteSpace={'nowrap'} color='whiteAlpha.800' fontSize={'1.1rem'} letterSpacing={'1px'} fontWeight={'semibold'}>Raebareli - 229001, UttarPradesh</Text>
                                   </Box>
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
                         </Box>
                         <Box w='100%' pos='absolute' bottom={0} justifyContent={'flex-end'} alignItems='flex-end' display={{ base: 'none', sm: "none", md: 'none', lg: 'flex' }}>
                              <Image src='https://www.pngkey.com/png/full/39-397672_sms-marketing-gateway-sms-marketing-images-png.png' w='30%' />
                         </Box>
                    </Box>
               </Box>
          </Box>
     )
}

export default Contact