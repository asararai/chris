import { Box, Button, Container, Stack, Typography } from "@mui/material"
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid2';
import { NeuBox, NeuButton } from "./main";
import IconButton from '@mui/material/IconButton';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


export const HexImg = styled("div")(({ theme }) => ({
  "& img": {
    width: "100%",
  }
}));

const HexagonIconButton = styled(IconButton)(({ theme }) => ({
  backgroundColor: 'white',
  color: theme.palette.primary.main,
  width: 24,
  height: 24,
  boxShadow:theme.indentation.blue.outdent,
  // clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)',
  borderRadius: '6px !important', // Slight rounding for the corners
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0, // Remove default padding for a tighter fit
  '&:hover': {
    color: theme.palette.secondary.main,
    boxShadow:theme.indentation.blue.indent
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20, // Scale down icon for the smaller button
  },
  overflow:"hidden"
}));

export const TeamMember: React.FC<any> = ({ id }) => {
  return (
    <Grid size={1}>
      <img src={`/t${id + 1}.png`} style={{ width: "100%" }} />
      <div>
        <Typography variant="body1" color="secondary"><strong>Thomas Mayer</strong></Typography>
        <Typography variant="body2" color="secondary" style={{ lineHeight: 1.1 }}> Commercial Director</Typography>
      </div>
      <div style={{display:"flex", flexDirection:"row", gap:12, justifyContent:"center", marginTop:12, marginBottom:12}}>
        <HexagonIconButton>
          <LinkedInIcon />
        </HexagonIconButton>
        <HexagonIconButton>
          <MailIcon />
        </HexagonIconButton>
      </div>
    </Grid>
  )
}