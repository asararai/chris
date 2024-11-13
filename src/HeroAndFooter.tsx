import { Box, Button, Container, Stack, Typography } from "@mui/material"
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid2';
import { NeuBox, NeuButton } from "./main";
import IconButton from '@mui/material/IconButton';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { HexIcon, RotatedHexContainer } from "./Elements";
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


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


export const NavBarContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  boxShadow: theme.indentation.blue.outdent,
  width:"100%"


}));

export const NavBar = styled("nav")(({ theme }) => ({
  // backgroundColor: theme.palette.primary.main,
  // // boxShadow: theme.indentation.blue.indent,
  // borderRadius: "0px 0px 20px 20px",
  padding: 20,
  display:"flex",
  flexDirection:"row",
  justifyContent:"space-between"

}));

export const HeroContent = styled("div")(({ theme }) => ({
  // border:"1px solid green",
  height:"calc(100% - 250px)",
  display:"flex"
}));


export const Hero = () => {
  return (
    <StyledHero>
      <NavBarContainer>
        <Container>
          <NavBar>
            <div style={{display:"flex", flexDirection:"row", gap:20}}>
            <img src={`/peerbyte_xr_logo.png`} style={{ width: "150px" }} />
            </div>
            <div style={{display:"flex", flexDirection:"row", gap:20}}>
              <NeuButton indentation="outdent" surface="flat" variant="white" shadowColor="white"> Click me </NeuButton>
              <NeuButton indentation="outdent" surface="flat" variant="white" shadowColor="white"> Click me </NeuButton>
              <NeuButton indentation="outdent" surface="flat" variant="blue" shadowColor="white"> Click me </NeuButton>
            </div>
          </NavBar>
        </Container>
      </NavBarContainer>
      <HeroContent>
        <Container style={{padding:40}} >
          <div style={{  minHeight:"100%",display:"flex" }}>
            <div style={{margin:"auto",display:"flex", flexDirection:"column"}}>
              <Typography variant="h4" color="secondary">
                Peerbyte XR
              </Typography>
              <Typography variant="h2" color="secondary">
                Pioneers in real-time XR visualisation of CAN based information
              </Typography>
              <div style={{marginTop:5}}>
                <Typography variant="h5" color="secondary">In-house team of engineers specialised in automotive embedded systems</Typography>
                <Typography variant="h5" color="secondary">Human Machine Interface and Photogrammetry Services tailored for the automotive industry</Typography>
                <Typography variant="h5" color="secondary">Fully compliant solutions to match the latest industry regulations and standards</Typography>
              </div>
              <div>
                <NeuButton style={{marginTop:15}} indentation="outdent" surface="flat" variant="white" shadowColor="blue"> Click me </NeuButton>
              </div>
            </div>
          </div>
        </Container>
      </HeroContent>
    </StyledHero>
  )
}

export const FooterContainer = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  boxShadow: theme.indentation.white.outdent,
  // width:"100vw"
  // border:"3px solid green",

  // position: "absolute",
  left: 0,
  right: 0,
  margin: 0,
  bottom: 0,
  marginTop:70,
  padding:40,display:"flex",alignItems:"center", justifyContent:"center"

}));

export const Footer = () => {
  return (
    <FooterContainer>
      <div style={{maxWidth:"60%", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <img src={`/peerbyte_xr_logo.png`} style={{ width: "200px" }} />
        <Typography variant="body1" style={{marginTop:5}}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio maecenas morbi consequat, cras consectetur adipiscing aliquam.
              Leo dictum risus sed lacus ac amet. Ridiculus eu sem nisl eu congue. Penatibus hac faucibus enim, in lacus
        </Typography>
        <div style={{ display: "flex", flexDirection: "row", gap: 10, marginTop:10 }}>
          <HexIcon>
            <RotatedHexContainer>
                <MailIcon />
            </RotatedHexContainer> 
          </HexIcon>
          <HexIcon>
            <RotatedHexContainer>
                <PhoneIcon />
            </RotatedHexContainer> 
          </HexIcon>
          <HexIcon>
            <RotatedHexContainer>
                <WhatsAppIcon />
            </RotatedHexContainer> 
          </HexIcon>
          <HexIcon>
            <RotatedHexContainer>
                <LinkedInIcon />
            </RotatedHexContainer> 
          </HexIcon>
        </div>
      </div>

    </FooterContainer>
  )
}









// export const Hero = () => {
//   return (
//     <StyledHero>
//       <Container>
//         <NavBar>
//           <div style={{display:"flex", flexDirection:"row", gap:20}}>
//           {/* <NeuButton indentation="outdent" surface="convex" variant="blue" shadowColor="blue"> Click me </NeuButton> */}
//           <NeuButton indentation="outdent" surface="concave" variant="blue" shadowColor="blue"> Click me </NeuButton>
//           {/* <NeuButton indentation="outdent" surface="flat" variant="blue" shadowColor="blue"> Click me </NeuButton> */}
//           {/* <NeuButton indentation="indent" surface="convex" variant="blue" shadowColor="blue"> Click me </NeuButton>
//           <NeuButton indentation="indent" surface="concave" variant="blue" shadowColor="blue"> Click me </NeuButton>
//           <NeuButton indentation="indent" surface="flat" variant="blue" shadowColor="blue"> Click me </NeuButton> */}
       
//        {/* <NeuButton indentation="outdent" surface="concave" variant="white" shadowColor="blue"> Click me </NeuButton>
//        <NeuButton indentation="outdent" surface="convex" variant="white" shadowColor="blue"> Click me </NeuButton> */}
//        <NeuButton indentation="outdent" surface="flat" variant="white" shadowColor="blue"> Click me </NeuButton>
//           </div>
         
//         </NavBar>

//       </Container>


//     </StyledHero>
//   )
// }