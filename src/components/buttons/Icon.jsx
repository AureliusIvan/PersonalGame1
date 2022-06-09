import { Box, Tooltip, Image, Text, VStack } from '@chakra-ui/react';

function IconTemp(props) {
  return (
    <>
      <Tooltip label={props.label} placement="start">
        <VStack
          w="100px"
          h="40px"
          bgColor={'red.500'}
          marginY="10px"
          border={'2px solid white'}
          borderRadius="10px"
          onClick={props.onClick}
          transition="0.3s"
          _hover={{ transform: 'scale(1.1)' }}
          justifyContent="center"
          spacing="0"
        >
          <Image
            src={props.src}
            width={{ base: 10, sm: 90, md: 125 }}
            height={{ base: 10, sm: 90, md: 125 }}
            cursor="pointer"
            filter="drop-shadow(1px 1px 5px black)"
          />
          <Text
            pos={'absolute'}
            fontSize={'20px'}
            color="white"
            filter="drop-shadow(2px 2px 2px black)"
          >
            
          </Text>
        </VStack>
      </Tooltip>
    </>
  );
}

export default IconTemp;
