import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  CloseButton,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { loginUser, useAuthState, useAuthDispatch } from '../Context';

function Login() {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const { loading, errorMessage } = useAuthState();
  const history = useHistory();
  const dispatch = useAuthDispatch();
  const submitHandler = async e => {
    e.preventDefault();
    let payload = { email, password };
    try {
      let response = await loginUser(dispatch, payload);
      if (!response.user) return;
      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box maxW="7xl">
      <Flex
        align={'center'}
        justify={'center'}
        // bg={useColorModeValue('gray.50', 'gray.800')}
      >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            // bg={useColorModeValue('white', 'gray.700')}
            // boxShadow={'lg'}
            p={8}
          >
            {errorMessage ? (
              <Alert status="error">
                <AlertIcon />
                <AlertTitle mr={2}>Can not login!</AlertTitle>
                <AlertDescription>Something is wrong.</AlertDescription>
                <CloseButton position="absolute" right="8px" top="8px" />
              </Alert>
            ) : null}
            <form onSubmit={submitHandler}>
              <Stack spacing={4}>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={e => setemail(e.target.value)}
                    disabled={loading}
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    value={password}
                    onChange={e => setpassword(e.target.value)}
                    disabled={loading}
                  />
                </FormControl>
                <Stack spacing={10}>
                  <Button type="submit" color={'white'}>
                    Sign in
                  </Button>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}

export default Login;
