import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
} from "@chakra-ui/react";
import { useEffect } from "react";

type Props = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

/**
 * Renders a modal with the details of an item.
 */
export const ProfileForm = ({ isOpen, onClose, onOpen }: Props) => {

  useEffect(() => {
    onOpen();
  }, []);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Username</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder="Username" />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
