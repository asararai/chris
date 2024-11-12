import { Box, Container,  Grid,  Grid2, Paper } from "@mui/material"
import { styled } from '@mui/material/styles'
import Checkbox from '@mui/material/Checkbox';

const MyComponent = styled('div')({
  color: 'green',
  backgroundColor: 'aliceblue',
  padding: 8,
  borderRadius: 4,
});


const MyThemeComponent = styled('div')(({ theme }) => ({
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.dark,
  padding: theme.spacing(1),
  borderRadius: 50,
}));

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: theme.status.danger,
  '&.Mui-checked': {
    color: theme.status.danger,
  },
}));


// const MyTestDiv = styled('div')(({ theme }) => ({
//   ...theme.testCss
// }));


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export const Test = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 6, md: 8 }}>
          <Item>xs=6 md=8</Item>
        </Grid2>
        <Grid2 size={{ xs: 6, md: 4 }}>
          <Item>xs=6 md=4</Item>
        </Grid2>
        <Grid2 size={{ xs: 6, md: 4 }}>
          <Item>xs=6 md=4</Item>
        </Grid2>
        <Grid2 size={{ xs: 6, md: 8 }}>
          <Item>xs=6 md=8</Item>
        </Grid2>
      </Grid2>
    </Box>
  )
}








