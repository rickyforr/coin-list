import { Flex, useDisclosure } from "@chakra-ui/react";
import { ProfileForm } from "../ProfileForm/ProfileForm";

export const Header = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Flex justifyContent="space-between">
      {isOpen && <ProfileForm isOpen={isOpen} onClose={onClose} onOpen={onOpen} />}
      <h1>Header</h1>
      <span onClick={onOpen}>username</span>
    </Flex>
  );
};
