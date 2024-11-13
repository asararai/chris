import { Box, Container, Grid2, Stack, Typography } from "@mui/material"
import { styled } from '@mui/material/styles'


type Indentation = "indent" | "outdent" | "flat"
type Surface = "concave" | "convex" | "flat"

interface NeuBoxProps {
  indentation?: Indentation
  surface?: Surface
  color?: "white" | "blue"
}

const NeuBox = styled(Box)<NeuBoxProps>(({ theme, indentation = "flat", surface = "flat", color = "white" }) => ({
  background: theme.surface[color][surface],
  boxShadow: theme.indentation[color][indentation],
  flexGrow: 1,
  // margin: 20,
  padding: 20,
  borderRadius: 20, minHeight: 200
}));



export const Test = () => {
  return (
    <Container style={{ width: "100%" }}  >
      <Stack spacing={5}>



        <NeuBox indentation="indent" surface="flat" color="white">MyTestDiv
          <Grid2 container columns={2}>
            <NeuBox indentation="outdent" surface="flat" color="white">MyTestdfgdfgDiv</NeuBox>
            <NeuBox indentation="flat" surface="flat" color="white">MyTestdfgdfgDiv</NeuBox>
          </Grid2>
        </NeuBox>
        <NeuBox indentation="outdent" surface="flat" color="white">
          <Grid2 container columns={3}>
            <NeuBox indentation="indent" surface="flat" color="white">MyTestdfgdfgDiv</NeuBox>
            <NeuBox indentation="flat" surface="flat" color="white">MyTestdfgdfgDiv</NeuBox>
            <NeuBox indentation="indent" surface="flat" color="white">MyTestdfgdfgDiv</NeuBox>
          </Grid2>
        </NeuBox>
        <NeuBox indentation="indent" surface="flat" color="blue">MyTestDiv</NeuBox>
        <NeuBox indentation="indent" surface="flat" color="blue">
          <Stack spacing={5}>
            <NeuBox indentation="indent" surface="flat" color="white">MyTestdfgdfgDiv</NeuBox>
            <NeuBox indentation="outdent" surface="concave" color="blue">MyTestDiv</NeuBox>
            <NeuBox indentation="outdent" surface="convex" color="blue">MyTestDiv</NeuBox>
            <NeuBox indentation="outdent" surface="flat" color="blue">MyTestDiv</NeuBox>
          </Stack>
        </NeuBox>
      </Stack>

    </Container>
  )
}








