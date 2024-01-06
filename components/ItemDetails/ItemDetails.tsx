import { Item } from "@/system/types";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";

type Props = {
  item: Item;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

/**
 * Renders a modal with the details of an item.
 * @param props.item The item to render.
 */
export const ItemDetails = ({ item, isOpen, onClose, onOpen }: Props) => {
  useEffect(() => {
    onOpen();
  }, []);
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{item.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>asdasdaadssdsad</ModalBody>

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
