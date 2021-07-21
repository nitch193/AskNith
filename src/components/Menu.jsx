import { ChevronDownIcon } from '@chakra-ui/icons';
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import React from 'react';
import { useAuthDispatch, logout } from '../Context';

function ProfileMenu({ user }) {
  const dispatch = useAuthDispatch();
  const userDetails = user;
  const handleLogut = async () => {
    await logout(dispatch);
  };
  return (
    <>
      <Menu isLazy>
        <MenuButton h="100%" as={Button} rightIcon={<ChevronDownIcon />}>
          {userDetails.username}
        </MenuButton>
        <MenuList>
          <MenuItem>Your posts</MenuItem>
          <MenuItem as={Button} onClick={handleLogut}>
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
}

export default ProfileMenu;
