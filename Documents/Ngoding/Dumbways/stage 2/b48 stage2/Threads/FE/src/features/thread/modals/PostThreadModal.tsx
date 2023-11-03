import React, { useState } from 'react';
import {
  Button,
  Box,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Input,
  Image,
} from '@chakra-ui/react';
import { BiSolidImageAdd } from 'react-icons/bi';

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePost: (event: React.FormEvent<HTMLFormElement>) => void;
  handleButtonClick: () => void;
  fileInputRef: React.RefObject<HTMLInputElement>;
}

const CreatePostModal: React.FC<CreatePostModalProps> = ({
  isOpen,
  onClose,
  handleChange,
  handlePost,
  handleButtonClick,
  fileInputRef,
}) => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePreview(imageUrl);
    } else {
      setImagePreview(null);
    }

    handleChange(event);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Box>
            <Text fontWeight="bold" fontSize={20} py={4} color="green">
              Update Status
            </Text>
          </Box>
          <form method="POST" onSubmit={handlePost} encType="multipart/form-data">
            <Box display="flex" justifyContent="center" alignItems="center">
              <Input
                placeholder="What's up today?"
                name="content"
                onChange={handleChange}
                border="1px solid grey"
              />
              <Button
                variant="ghost"
                color="brand.green"
                onClick={handleButtonClick}
                border="1px solid grey"
                marginLeft="5px"
                marginRight="5px"
              >
                <BiSolidImageAdd style={{ height: '50px', width: '50px' }} />
              </Button>
              <Input
                type="file"
                name="image"
                onChange={handleImageChange}
                style={{ display: 'none' }}
                ref={fileInputRef}
              />
            </Box>
            {imagePreview && (
              <Box display="flex" justifyContent="center" alignItems="center" mt={3}>
                <Image src={imagePreview} alt="Image Preview" maxH="200px" />
              </Box>
            )}
            <ModalFooter>
              <Button
                onClick={onClose}
                type="submit"
                backgroundColor="green"
                color="white"
                colorScheme="green"
                variant="ghost"
              >
                Post!
              </Button>
            </ModalFooter>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CreatePostModal;
