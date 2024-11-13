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

const MiniIconBtn = styled(IconButton)(({ theme }) => ({
  backgroundColor: 'white',
  color: theme.palette.primary.main,
  width: 24,
  height: 24,
  boxShadow: theme.indentation.blue.outdent,
  // clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)',
  borderRadius: '6px !important',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  '&:hover': {
    color: theme.palette.secondary.main,
    boxShadow: theme.indentation.blue.indent
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
  overflow: "hidden"
}));

export const HexIcon = styled("div")<any>(({ theme, bgColor = "primary", iconColor = "secondary", shadowColor = "white" }) => ({
  backgroundColor: theme.palette[bgColor].main,
  color: theme.palette[iconColor].main,
  width: 30,
  height: 30,
  boxShadow: theme.indentation[shadowColor].outdent,
  clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)', // Hexagon shape
  transform: 'rotate(90deg)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  overflow: "hidden",

  '& .MuiSvgIcon-root': {
    fontSize: 16,
  },
}));

// Outer wrapper to apply rotation
export const RotatedHexContainer = styled("div")({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transform: 'rotate(-90deg)',
  borderRadius:"50px"
});

export const IconItem: React.FC<any> = ({textAlign="left",  title="missing", info="Aliquam erat volutpat. Integer malesuada turpis id fringilla suscipit. Maecenas ultrices."}) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: 10 }}>
      <div >
      <HexIcon>
        <RotatedHexContainer>
            <MailIcon />
        </RotatedHexContainer> 
      </HexIcon>
      </div>
      <div >
        <Typography align={textAlign} variant="h6" color="primary">{title}</Typography>
        <Typography align={textAlign}>{info}</Typography>

      </div>


    </div>
  )
}


export const TeamMember: React.FC<any> = ({ id }) => {
  return (
    <Grid size={{sm:12, md:1}}>
      <img src={`/t${id + 1}.png`} style={{ width: "100%" }} />
      <div>
        <Typography variant="body1" color="secondary"><strong>Thomas Mayer</strong></Typography>
        <Typography variant="body2" color="secondary" style={{ lineHeight: 1.1 }}> Commercial Director</Typography>
      </div>
      <div style={{ display: "flex", flexDirection: "row", gap: 12, justifyContent: "center", marginTop: 12, marginBottom: 12 }}>
        <MiniIconBtn>
          <LinkedInIcon />
        </MiniIconBtn>
        <MiniIconBtn>
          <MailIcon />
        </MiniIconBtn>
      </div>
    </Grid>
  )
}

