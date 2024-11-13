import { Box, Button, Container, Stack, Typography } from "@mui/material"
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid2';
import { NeuBox, NeuButton } from "./main";
import IconButton from '@mui/material/IconButton';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';




export const StyledHero = styled("div")(({ theme }) => ({

  backgroundColor: theme.palette.primary.main,
  overflow: "hidden",
  position: "absolute",
  left: 0,
  right: 0,
  margin: 0,
  top: 0,
  height: "100vh"
}));

export const Hero = () => {
  return (
    <StyledHero>
      <div>
        dfgd
      </div>

    </StyledHero>
  )
}