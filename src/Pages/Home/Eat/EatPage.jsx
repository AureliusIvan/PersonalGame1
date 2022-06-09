import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
} from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';
import { useDisclosure } from '@chakra-ui/react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Eat2 from './Eat2';
import BackBTN from '../../../components/buttons/backBtn';

function EatPage(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialFocusRef = React.useRef();

  return (
    <DndProvider backend={HTML5Backend}>
      <Box>
        {/* <Button
          zIndex={1}
          pos={'absolute'}
          top="10px"
          left={'10px'}
          fontWeight={0}
          borderRadius={'50%'}
          h="50px"
          w="50px"
          padding={0}
          bgColor="black"
          onClick={() => props.handleClick('home')}
        >
          <ArrowBackIcon
            filter="invert(1)"
            h="50px"
            w={'50px'}
            position={'absolute'}
            _hover={{ filter: 'invert(0)' }}
          />
        </Button> */}
        <BackBTN onClick={() => props.handleClick('home')} title="Let's Eat" bgGradient="linear(to-l, green.600, blue.600)" />
        <Eat2 />
      </Box>
    </DndProvider>
  );
}

export default EatPage;
