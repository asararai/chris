import { Box, Button, Container, Stack, Typography } from "@mui/material"
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid2';
import { NeuBox, NeuButton, TopBox } from "./main";
import { IconItem, TeamMember } from "./Elements";



export const BodyContent = () => {
  return (

    <Stack spacing={3}>
      {/* sec1 */}
      <TopBox p={5} >
        <Stack spacing={3}>
          <Box>
            <Typography variant="h3" color="primary">Revolutionary data analysis and <br /> visualization</Typography>
            {/* <Typography variant="h4" color="primary">I'm an h4 heading</Typography> */}
          </Box>
          <Grid container spacing={4} columns={12}>
            <Grid size={6} >
              <NeuBox indentation="indent" surface="flat" variant="white" />
            </Grid>
            <Grid size={6}>
              <Stack spacing={3} textAlign={"right"}>
                <Typography variant="body1" align="right">
                  Lorem ipsum dol76[]'\or sit amet, consectetur adipiscing elit. Odio maecenas morbi consequat, cras consectetur adipiscing aliquam.
                  Leo dictum risus sed lacus ac amet. Ridiculus eu sem nisl eu congue. Penatibus hac faucibus enim, in lacus, scelerisque vel in dictum. Suspendisse tincidunt condimentum aliquet ac ut. Lectus tin
                  <br />
                  cidunt mauris suspendisse facilisis diam. A porttitor volutpat eget vel nulla. Quis ridiculus tristique sit nunc nisl id. Dictumst elementum sed egestas maecenas non ut ridiculus tincidunt condimentum

                </Typography>
                <div>
                  <NeuButton indentation="outdent" surface="flat" variant="blue" shadowColor="white"> Learn more </NeuButton>
                </div>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </TopBox>
      {/* sec2 */}
      <Stack spacing={3} p={5}>
        <Box>
          <Typography align="left" variant="h3" color="primary">AR in cars are tipped to leave the dashboard</Typography>
          <Typography align="left" variant="h4" color="primary">Odio maecenas morbi consequat, cras consectetur</Typography>
        </Box>
        <Typography variant="body1" align="left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio maecenas morbi consequat, cras consectetur adipiscing aliquam.
          Leo dictum risus sed lacus ac amet. Ridiculus eu sem nisl eu congue. Penatibus hac faucibus enim, in lacus, scelerisque vel in dictum. Suspendisse tincidunt condimentum aliquet ac ut. Lectus tin
        </Typography>
        <Grid container spacing={4} columns={12}>
          <Grid size={6}>
            <NeuBox p={4} indentation="outdent" surface="convex" variant="blue" shadowColor="white">   <div>
              <Typography align="left" variant="h4" color="secondary"><strong>$0.21 bn</strong></Typography>
              <Typography align="left" variant="h5" color="secondary" style={{ lineHeight: 1.1 }}>Investment in 2017</Typography>
            </div>
            </NeuBox>
          </Grid>
          <Grid size={6}>
            <NeuBox p={4} indentation="outdent" surface="convex" variant="blue" shadowColor="white">   <div>
              <Typography align="left" variant="h4" color="secondary"><strong>$673.6 bn</strong></Typography>
              <Typography align="left" variant="h5" color="secondary" style={{ lineHeight: 1.1 }}>Forecast Investment in 2025</Typography>
            </div>
            </NeuBox>
          </Grid>

        </Grid>
        <Box>
          <Typography variant="body1" align="left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio maecenas morbi consequat, cras consectetur adipiscing aliquam.
            Leo dictum risus sed lacus ac amet. Ridiculus eu sem nisl eu congue. Penatibus hac faucibus enim, in lacus, scelerisque vel in dictum. Suspendisse tincidunt condimentum aliquet ac ut. Lectus tin
          </Typography>
        </Box>
      </Stack>
      {/* sec3 */}
      <NeuBox p={5} indentation="outdent" surface="flat" variant="white">
        <Stack spacing={3}>
          <Box>
            <Typography variant="h3" color="primary">XR Automotive Product Solutions</Typography>
            <Typography variant="h4" color="primary">I'm an h4 heading</Typography>
          </Box>
          <Grid container spacing={4} columns={12}>
            <Grid size={6}>
              <Stack spacing={3} textAlign={"right"} pt={2}>
                <IconItem title={"Human Machine Interface (HMI)"} />
                <IconItem title={"In-Vehicle Onboarding System (IVO)"} />
                <IconItem title={"Heads-Up Displays (HUD)  "} />
                {/* <Typography variant="body1" align="left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio maecenas morbi consequat, cras consectetur adipiscing aliquam.
                  Leo dictum risus sed lacus ac amet. Ridiculus eu sem nisl eu congue. Penatibus hac faucibus enim, in lacus, scelerisque vel in dictum. Suspendisse tincidunt condimentum aliquet ac ut. Lectus tin
                  <br />
                  cidunt mauris suspendisse facilisis diam. A porttitor volutpat eget vel nulla. Quis ridiculus tristique sit nunc nisl id. Dictumst elementum sed egestas maecenas non ut ridiculus tincidunt condimentum
                  condimentum alique tincidunt condimentum aliquerisus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio maecenas morbi consequat, cras consectetur adipiscing aliquam.
                </Typography> */}
                <div>
                  <NeuButton indentation="outdent" surface="flat" variant="blue" shadowColor="white"> Learn more </NeuButton>
                </div>
              </Stack>
            </Grid>
            <Grid size={6}>
              <NeuBox indentation="indent" surface="flat" variant="white" />
            </Grid>
          </Grid>
        </Stack>
      </NeuBox>
      {/* sec4 */}
      <Stack spacing={3} p={5}>
        <Box>
          <Typography variant="h3" color="primary">Experts on your side</Typography>
          <Typography variant="h4" color="primary">In-house team of engineers specialised in automotive embedded systems </Typography>
        </Box>
        <Typography variant="body1" >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio maecenas morbi consequat, cras consectetur adipiscing aliquam.
          Leo dictum risus sed lacus ac amet. Ridiculus eu sem nisl eu congue. Penatibus hac faucibus enim, in lacus, scelerisque vel in dictum. Suspendisse tincidunt condimentum aliquet ac ut. Lectus tin
        </Typography>
        <NeuBox p={4} indentation="indent" surface="concave" variant="blue" >
          <Grid container spacing={1} columns={6}>
            {[...Array(6)].map((i, index) => {
              return <TeamMember key={index} id={index} />
            })}
          </Grid>
        </NeuBox>
      </Stack>
      {/* sec6 */}
      <NeuBox p={5} indentation="outdent" surface="flat" variant="white">
        <Stack spacing={3}>
          <Box>
            <Typography variant="h3" color="primary">Training Metaspaces and Remote Assistance</Typography>
            <Typography variant="h4" color="primary">Icras consectetur adipiscing aliquam</Typography>
          </Box>
          <Grid container spacing={4} columns={12}>
            <Grid size={6}>
              <NeuBox indentation="indent" surface="flat" variant="white" />
            </Grid>
            <Grid size={6}>
              <Stack spacing={3} textAlign={"right"} pt={2}>
                <IconItem title={"Remote Support and Diagnostics"} />
                <IconItem title={"Real-time Visual Instructions"} />
                <IconItem title={"Component Identification and  Selection"} />
                <div>
                  <NeuButton indentation="outdent" surface="flat" variant="blue" shadowColor="white"> Learn more </NeuButton>
                </div>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </NeuBox>
      {/* sec7 */}
      <Stack spacing={3} p={5}>
        <Box>
          <Typography align="left" variant="h3" color="primary">Services tailored for the automotive industry</Typography>
          <Typography align="left" variant="h4" color="primary">Suspendisse tincidunt condimentum aliquet ac ut</Typography>
        </Box>
        <Typography variant="body1" align="left">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio maecenas morbi consequat, cras consectetur adipiscing aliquam.
          Leo dictum risus sed lacus ac amet. Ridiculus eu sem nisl eu congue. Penatibus hac faucibus enim, in lacus, scelerisque vel in dictum. Suspendisse tincidunt condimentum aliquet ac ut. Lectus tin
        </Typography>
        <Stack spacing={4} >
          <NeuBox indentation="outdent" surface="flat" variant="white" >
            <Grid container spacing={4} columns={2}>
              <Grid size={1}>
                <NeuBox indentation="flat" surface="flat" variant="white" />
              </Grid>
              <Grid size={1}>
                <Stack p={3} spacing={2} textAlign={"left"}>
                  <div>
                    <Typography variant="h6" color="primary" >Virtual Vehicle Customisation</Typography>
                    <Typography variant="body1" align="left">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio maecenas morbi consequat, cras consectetur adipiscing aliquam.
                      Leo dictum risus sed lacus ac amet.
                    </Typography>
                  </div>

                  <div>
                    <NeuButton indentation="outdent" surface="flat" variant="blue" shadowColor="white"> Learn more </NeuButton>
                  </div>
                </Stack>
              </Grid>
            </Grid>
          </NeuBox>
          <NeuBox indentation="outdent" surface="flat" variant="white" >
            <Grid container spacing={4} columns={2}>
              <Grid size={1}>
                <NeuBox indentation="flat" surface="flat" variant="white" />
              </Grid>
              <Grid size={1}>
                <Stack p={3} spacing={2} textAlign={"left"}>
                  <div>
                    <Typography variant="h6" color="primary" >Asset Optimization</Typography>
                    <Typography variant="body1" align="left">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio maecenas morbi consequat, cras consectetur adipiscing aliquam.
                      Leo dictum risus sed lacus ac amet.
                    </Typography>
                  </div>

                  <div>
                    <NeuButton indentation="outdent" surface="flat" variant="blue" shadowColor="white"> Learn more </NeuButton>
                  </div>
                </Stack>
              </Grid>
            </Grid>
          </NeuBox>
          <NeuBox indentation="outdent" surface="flat" variant="white" >
            <Grid container spacing={4} columns={2}>
              <Grid size={1}>
                <NeuBox indentation="flat" surface="flat" variant="white" />
              </Grid>
              <Grid size={1}>
                <Stack p={3} spacing={2} textAlign={"left"}>
                  <div>
                    <Typography variant="h6" color="primary" >3D Scanning and Photogrammetry Services </Typography>
                    <Typography variant="body1" align="left">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio maecenas morbi consequat, cras consectetur adipiscing aliquam.
                      Leo dictum risus sed lacus ac amet.
                    </Typography>
                  </div>

                  <div>
                    <NeuButton indentation="outdent" surface="flat" variant="blue" shadowColor="white"> Learn more </NeuButton>
                  </div>
                </Stack>
              </Grid>
            </Grid>
          </NeuBox>

        </Stack>
      </Stack>
      {/* sec7 */}

      <NeuBox p={5} indentation="outdent" surface="flat" variant="white">
        <Stack spacing={3}>
          <Box>
            <Typography variant="h3" color="primary">Immersive XR Experiences</Typography>
            <Typography variant="h4" color="primary">Suspendisse tincidunt condimentum aliquet ac ut.</Typography>
          </Box>
          <Typography variant="body1" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio maecenas morbi consequat, cras consectetur adipiscing aliquam.
            Leo dictum risus sed lacus ac amet. Ridiculus eu sem nisl eu congue. Penatibus hac faucibus enim, in lacus, scelerisque vel in dictum. Suspendisse tincidunt condimentum aliquet ac ut. Lectus tin
          </Typography>
          <NeuBox indentation="indent" surface="flat" variant="blue" p={3}>
            <Stack spacing={3}>
              <NeuBox indentation="outdent" surface="flat" variant="white" p={2} shadowColor={"blue"} style={{ height: 800 }}></NeuBox>
              <Typography color="secondary" variant="body1" align="left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio maecenas morbi consequat, cras consectetur adipiscing aliquam.
                Leo dictum risus sed lacus ac amet. Leo dictum risus sed lacus ac amet.
              </Typography>
            </Stack>
          </NeuBox>

        </Stack>
      </NeuBox>
    </Stack>
  )
}








