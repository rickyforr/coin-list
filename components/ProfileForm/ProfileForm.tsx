import { isUsernameValid } from "@/system/utils";
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
  DarkMode,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/react";
import { useState } from "react";

type Props = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onSaveUsername: (newUsername: string) => void;
};

/**
 * Renders a modal with the details of an item.
 */
export const ProfileForm = ({ isOpen, onClose, onSaveUsername }: Props) => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState(false);

  const handleChangeUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.currentTarget.value && setError(!isUsernameValid(e.currentTarget.value));
    setUsername(e.currentTarget.value);
  };

  const handleSaveUsername = () => {
    if (error || !username) return;
    onSaveUsername(username);
    onClose();
  }

  return (
    <>
      <DarkMode>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Username</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl isInvalid={error}>
                <FormLabel>Username</FormLabel>
                <Input onChange={handleChangeUsername} />
                {!error ? (
                  <FormHelperText>Enter a new username.</FormHelperText>
                ) : (
                  <FormErrorMessage>
                   Invalid username.
                  </FormErrorMessage>
                )}
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button
                variant="ghost"
                onClick={handleSaveUsername}
                disabled={error}
              >
                Save
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </DarkMode>
    </>
  );
};
