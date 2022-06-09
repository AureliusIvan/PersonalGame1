import useSound from 'use-sound';
import { Box, Flex, Grid } from '@chakra-ui/react';
import DrumSound from './Drums.mp3';

function BtnDrum(props) {
  return (
    <>
      <Box
        width={'100px'}
        height="100px"
        bgColor={'orange.500'}
        borderRadius="20px"
        margin="20px"
        onMouseDown={props.onMouseDown}
        onClick={{ bgColor: 'orange.800' }}
      >
        {props.content}
      </Box>
    </>
  );
}

function Drum() {
  const [play] = useSound(DrumSound, {
    sprite: {
      kick: [15000, 1000],
      hihat: [30000, 1000],
      snare: [45000, 1000],
      kickHat: [60000, 1000],
      crash: [75000, 1000],
      hiTom: [90000, 1000],
      midTom: [105000, 1000],
      loTom: [120000, 1000],
      snrCrsh: [145000, 1000],
      ride: [0, 4000],
    },
  });

  return (
    <>
      <Grid templateColumns={2} width={'100vh'} height="100vh">
        <BtnDrum onMouseDown={() => play({ id: 'kick' })} />
        <BtnDrum onMouseDown={() => play({ id: 'hihat' })} />
        <BtnDrum onMouseDown={() => play({ id: 'snare' })} />
        <BtnDrum onMouseDown={() => play({ id: 'kickHat' })} />
        <BtnDrum onMouseDown={() => play({ id: 'crash' })} />
        <BtnDrum onMouseDown={() => play({ id: 'hiTom' })} />
        <BtnDrum onMouseDown={() => play({ id: 'midTom' })} />
        <BtnDrum onMouseDown={() => play({ id: 'loTom' })} />
        <BtnDrum onMouseDown={() => play({ id: 'snrCrsh' })} />
        <BtnDrum onMouseDown={() => play({ id: 'ride' })} />
      </Grid>
    </>
  );
}
export default Drum;
