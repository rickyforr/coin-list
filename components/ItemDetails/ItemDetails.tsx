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
  Flex,
  Text,
  DarkMode,
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
 * @param props.isOpen Whether the modal is open.
 * @param props.onOpen Callback to open the modal.
 * @param props.onClose Callback to close the modal.
 */
export const ItemDetails = ({ item, isOpen, onClose, onOpen }: Props) => {
  useEffect(() => {
    onOpen();
  }, []);
  return (
    <>
      <DarkMode>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{item.name}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Flex>
                <Text>ID:</Text>
                <Text>{item.id}</Text>
              </Flex>
              <Flex>
                <Text>Volume: </Text>
                <Text>{item.volume_24h}</Text>
              </Flex>
              <Flex>
                <Text>Price: </Text>
                <Text>{item.price}</Text>
              </Flex>
              <Flex>
                <Text>Supply: </Text>
                <Text>{item.total_supply}</Text>
              </Flex>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </DarkMode>
    </>
  );
};
