import { Box, Button, Container, Stack, Typography } from "@mui/material"
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid2';
import { NeuBox, NeuButton } from "./main";

type Indentation = "indent" | "outdent" | "flat"
type Surface = "concave" | "convex" | "flat"
type ColorVariant = "white" | "blue"




export const TypoAndContainers = () => {
  return (
    <Container >
      <Stack spacing={3}>





        <div>
          <Typography variant="h1" color="primary">I'm an h1 heading</Typography>
          <Typography variant="h1" color="secondary">I'm an h1 heading</Typography>
          <Typography variant="h2">I'm an h2 heading</Typography>
          <Typography variant="h3" color="primary">I'm an h3 heading</Typography>
          <Typography variant="h4" color="primary">I'm an h4 heading</Typography>
          <Typography variant="h5">I'm an h5 heading</Typography>
          <Typography variant="h6">I'm an h6 heading</Typography>
          <Typography variant="subtitle1">I'm an subtitle1</Typography>
          <Typography variant="subtitle2">I'm an subtitle2</Typography>
          <Typography variant="body1">I'm an body1</Typography>
          <Typography variant="body2">I'm an body2</Typography>
          <Typography variant="caption">I'm an caption</Typography>
          <Typography variant="button">I'm an button</Typography>
        </div>


        <div >
          <Button color="primary" variant="contained" fullWidth >TEST</Button>
          <Button color="secondary" variant="contained" >TEST</Button>
        </div>
      </Stack>

    </Container>
  )
}








