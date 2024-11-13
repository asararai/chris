
import { Container, styled } from '@mui/material'
import './App.css'
import { BodyContent } from './BodyContent'
import { TypoAndContainers } from './TypoAndContainers'
import { Hero } from './Hero'

export const MainContainer = styled(Container)<any>(({ theme }) => ({

  // boxShadow: theme.indentation?.white.indent,

}));


function App() {


  return (
    <>
   
      <MainContainer >
      <Hero/>
      <BodyContent />
      <TypoAndContainers/>
    </MainContainer>
    </>
  
  )
}

export default App
