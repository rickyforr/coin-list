import { Avatar, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import { ProfileForm } from "../ProfileForm/ProfileForm";
import { useState } from "react";

/**
 * Renders a header with the app name and a button to open the profile form.
 */
export const Header = () => {
  const [username, setUsername] = useState("username");
  const { isOpen, onClose, onOpen } = useDisclosure();

  const handleSaveUsername = (newUsername: string) => {
    setUsername(newUsername);
  };

  return (
    <Flex justifyContent="space-between" p="2rem" boxShadow="md">
      {isOpen && (
        <ProfileForm
          isOpen={isOpen}
          onClose={onClose}
          onOpen={onOpen}
          onSaveUsername={handleSaveUsername}
        />
      )}
      <Heading size="md">COIN LIST</Heading>
      <Flex alignItems="center" onClick={onOpen} cursor="pointer">
        <Avatar size="sm" mr="1rem" />
        {username}
      </Flex>
    </Flex>
  );
};
