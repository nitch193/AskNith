import React from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
} from '@chakra-ui/react';
function Register() {
  return (
    <Box maxW="7xl">
      <Flex align={'center'} justify={'center'}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign up for new account</Heading>
          </Stack>
          <Box
            rounded={'lg'}
            // bg={useColorModeValue('white', 'gray.700')}
            // boxShadow={'lg'}
            p={8}
          >
            <form>
              <Stack spacing={3}>
                <FormControl>
                  <FormLabel>Username</FormLabel>
                  <Input
                    // onChange={(e) => this.setState({ username: e.target.value })}
                    id="username-input"
                    variant="filled"
                    type="text"
                    placeholder="username"
                    size="md"
                    isRequired
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    // onChange={(e) => this.setState({ username: e.target.value })}
                    id="username-input"
                    variant="filled"
                    type="email"
                    placeholder="Email"
                    size="md"
                    isRequired
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <Input
                    // onChange={(e) => this.setState({ password: e.target.value })}
                    id="password-input"
                    variant="filled"
                    type="password"
                    placeholder="password"
                    size="md"
                    isRequired
                  />
                </FormControl>
                <Button type="submit">Register</Button>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    </Box>
  );
}

export default Register;
