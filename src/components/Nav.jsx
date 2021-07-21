import { Flex, Button, Stack, useColorModeValue, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { useAuthState } from '../Context';
import ProfileMenu from './Menu';

export default function Nav() {
  const user = useAuthState();
  return (
    <Box maxW="full" display="flex" justifyContent="center">
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
        fontSize={{ base: 'md', xl: 'lg', md: 'md', sm: 'sm' }}
        maxW="7xl"
        w="7xl"
        justifyContent="space-between"
        direction={'row'}
        alignItems="center"
        px={4}
        h={12}
      >
        <Button
          as={Link}
          h="12"
          fontWeight={400}
          variant={'link'}
          fontSize="1.2em"
          to={'/'}
          _hover={{
            textDecoration: 'none',
            color: '#278FD4',
          }}
          _active={{ outline: 'none' }}
          _activeLink={{ outline: 'none' }}
        >
          AskNith
        </Button>
        {!user.token ? (
          <Stack direction="row" justify="end" h="100%" spacing={4}>
            <ColorModeSwitcher />
            <Button
              h="100%"
              as={Link}
              fontWeight={400}
              variant={'link'}
              to={'/login'}
              _hover={{
                textDecoration: 'none',
                borderBottom: '1px solid #278FD4',
                color: '#278FD4',
                borderRadius: 0,
              }}
            >
              Sign In
            </Button>
            <Button
              h="100%"
              as={Link}
              fontWeight={400}
              variant={'link'}
              to={'/register'}
              _hover={{
                textDecoration: 'none',
                borderBottom: '1px solid #278FD4',
                color: '#278FD4',
                borderRadius: 0,
              }}
            >
              Register
            </Button>
          </Stack>
        ) : (
          <Stack direction="row" justify="end" h="100%" spacing={4}>
            <ProfileMenu user={user} />
            <ColorModeSwitcher />
          </Stack>
        )}
      </Flex>
    </Box>
  );
}
