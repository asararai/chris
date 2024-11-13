
import { Container, styled } from '@mui/material'
import './App.css'
import { BodyContent } from './BodyContent'
import { TypoAndContainers } from './TypoAndContainers'
import { Footer, Hero } from './HeroAndFooter'

export const MainContainer = styled(Container)<any>(({ theme }) => ({

  // boxShadow: theme.indentation?.white.indent,

}));


function App() {


  return (
    <>
   <Hero />
      <MainContainer >
     
        <BodyContent />
        {/* <TypoAndContainers /> */}
        
      </MainContainer>
      <Footer/>
    </>

  )
}

export default App
