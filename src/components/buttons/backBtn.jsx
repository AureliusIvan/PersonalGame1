import { Box, Flex, Text } from '@chakra-ui/react';
import { ArrowBackIcon } from '@chakra-ui/icons';

function BackBTN(props) {
  return (
    <Box pos={'fixed'} top="0" left={0} right="0" width="100%">
      <Flex
        pos="relative"
        bgGradient={props.bgGradient}
        height={'50px'}
        alignItems={'center'}
        overflow="hidden"
      >
        <Box
          width={'20%'}
          height="500%"
          borderRadius={'10px'}
          pos="absolute"
          margin={'auto'}
          right="0"
          left={'0'}
          bgColor="rgb(255, 255, 255, .2)"
          transform={'rotate(45deg)'}
        ></Box>
        <Box
          width={'70px'}
          height="70px"
          borderRadius={'10px'}
          pos="absolute"
          margin={'auto'}
          right="10%"
          bgColor="rgb(255, 255, 255, .2)"
          transform={'rotate(45deg)'}
        ></Box>
        <Flex
          border="1px solid white"
          width={'100px'}
          marginLeft="10px"
          padding="5px"
          borderRadius={'20px'}
          bgColor="rgb(0, 0, 0, 0.1)"
          _hover={{ bgColor: 'rgb(0, 0, 0, .3)' }}
          onClick={props.onClick}
          zIndex="100"
          transition=".2s"
        >
          <ArrowBackIcon
            color={'white'}
            h="25px"
            w={'25px'}
            marginLeft="10px"
            _hover={{ filter: 'invert(0)' }}
          />
          <Text color={'white'} fontSize={'16px'}>
            BACK
          </Text>
        </Flex>
        <Text
          position={'absolute'}
          textAlign={'center'}
          margin="auto"
          left={'0'}
          right="0"
          justifySelf={'center'}
          color={'white'}
          fontSize={'36px'}
          filter="drop-shadow(3px 1px 1px black)"
        >
          {props.title}
        </Text>
      </Flex>
    </Box>
  );
}

export default BackBTN;
