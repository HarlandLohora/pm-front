import { useState } from "react"
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useColorModeValue,
} from '@chakra-ui/react';
import axios from "axios";
import { useNavigate } from "react-router-dom";



export default function ResetPasswordForm() {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState('')

    const navigate = useNavigate()

    function handleSubmit(e) {
        console.log({ title, description })
        axios.post("http://localhost:5005/api/projects", { title, description })
            .then(nuevoProjecto => {
                navigate("/all")
            })
            .catch(err => console.log(err))
    }

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}
        >
            <Stack
                spacing={4}
                w={'full'}
                maxW={'md'}
                bg={useColorModeValue('white', 'gray.700')}
                rounded={'xl'}
                boxShadow={'lg'}
                p={6}
                my={12}>
                <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
                    New Project
                </Heading>
                <FormControl id="title" isRequired>
                    <FormLabel>Titulo</FormLabel>
                    <Input
                        placeholder="Agrega un titulo"
                        _placeholder={{ color: 'gray.500' }}
                        type="text"
                        value={title}
                        onChange={(evento) => setTitle(evento.target.value)}
                    />
                </FormControl>
                <FormControl id="description" isRequired>
                    <FormLabel>Descripcion</FormLabel>
                    <Input
                        type="text"
                        value={description}
                        onChange={(evento) => setDescription(evento.target.value)}
                    />
                </FormControl>
                <Stack spacing={6}>
                    <Button
                        bg={'blue.400'}
                        color={'white'}
                        _hover={{
                            bg: 'blue.500',
                        }}
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                </Stack>
            </Stack>
        </Flex>
    );
}