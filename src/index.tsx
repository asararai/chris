import { Container } from "@mui/material"
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


const MyTestDiv = styled('div')(({ theme }) => ({
  ...theme.testCss
}));

export const Test = () => {
  return (
    <Container style={{border:"3px solid blue", width:"100%"}} >
      <p>fsfsdf</p>
      <MyComponent>Styled div</MyComponent>
      <MyThemeComponent>MyThemeComponent23</MyThemeComponent>
      <CustomCheckbox defaultChecked />
      <MyTestDiv>MyTestDiv</MyTestDiv>
    </Container>
  )
}
