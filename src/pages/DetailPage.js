import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import axios from 'axios'

import {
    Box,
    Heading,
    Link,
    Image,
    Text,
    useColorModeValue,
    Container,
    Skeleton,
    Button,
    IconButton,
    Popover,
    PopoverBody,
    PopoverContent,
    Portal,
    PopoverTrigger,
    PopoverCloseButton,
    useToast
} from '@chakra-ui/react';

import { Link as David } from "react-router-dom"

const DetailPage = () => {
    const [project, setProject] = useState({})
    const toast = useToast()
    //toggle 
    const [cargo, setCargo] = useState(false)
    const { id } = useParams()
    console.log(id)



    useEffect(() => {
        axios.get(`http://localhost:5005/api/projects/${id}`)
            .then(datos => {
                setProject(datos.data)
                setCargo(true)
            })
            .catch(err => console.log(err))
    }, [id])


    function handleDelete() {

        axios.delete(`http://localhost:5005/api/projects/${id}`)
            .then(() => {
                toast({
                    title: 'Project deleted.',
                    description: ":( se nos fue",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                })
            })
    }


    return (
        <Container maxW={'7xl'} p="12">
            <Box
                marginTop={{ base: '1', sm: '5' }}
                display="flex"
                flexDirection={{ base: 'column', sm: 'row' }}
                justifyContent="space-between">
                <Box
                    display="flex"
                    flex="1"
                    marginRight="3"
                    position="relative"
                    alignItems="center">
                    <Box
                        width={{ base: '100%', sm: '85%' }}
                        zIndex="2"
                        marginLeft={{ base: '0', sm: '5%' }}
                        marginTop="5%">
                        <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                            <Image
                                borderRadius="lg"
                                src={
                                    'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80'
                                }
                                alt="some good alt text"
                                objectFit="contain"
                            />
                        </Link>
                    </Box>
                    <Box zIndex="1" width="100%" position="absolute" height="100%">
                        <Box
                            bgGradient={useColorModeValue(
                                'radial(orange.600 1px, transparent 1px)',
                                'radial(orange.300 1px, transparent 1px)'
                            )}
                            backgroundSize="20px 20px"
                            opacity="0.4"
                            height="100%"
                        />
                    </Box>
                </Box>
                <Box
                    display="flex"
                    flex="1"
                    flexDirection="column"
                    justifyContent="center"
                    marginTop={{ base: '3', sm: '0' }}>
                    <Skeleton height='20px' isLoaded={cargo}>
                        <Heading marginTop="1">
                            <Link textDecoration="none" _hover={{ textDecoration: 'none' }}>
                                {project.title}
                            </Link>
                        </Heading>
                        <Text
                            as="p"
                            marginTop="2"
                            color={useColorModeValue('gray.700', 'gray.200')}
                            fontSize="lg">
                            {project.description}
                        </Text>
                        <David to={`/edit/${project._id}`}>
                            <IconButton
                                variant='outline'
                                colorScheme='blue'
                                aria-label='Call Sage'
                                fontSize='20px'
                                icon={<EditIcon />}
                            />
                        </David>
                        <Popover>
                            <PopoverTrigger>
                                <IconButton
                                    variant='outline'
                                    colorScheme='red'
                                    aria-label='Call Sage'
                                    fontSize='20px'
                                    icon={<DeleteIcon />}
                                />
                            </PopoverTrigger>
                            <Portal>
                                <PopoverContent>
                                    <PopoverCloseButton />
                                    <PopoverBody>
                                        <strong>Tas seguro? </strong>
                                        <Button colorScheme='blue' onClick={handleDelete}>Delete</Button>
                                    </PopoverBody>
                                </PopoverContent>
                            </Portal>
                        </Popover>

                    </Skeleton>
                </Box>
            </Box>
        </Container>
    );
};

export default DetailPage;