import { GlobalStyled } from './globasStyles'
import { MainStyled } from './globasStyles'
import { LeftMenuBar } from './components/leftMenuBar'
import { RightMenuBar } from './components/rightMenuBar/index'
import { TopMenuBar } from './components/TopMenuBar'
import { useContext } from 'react'
import { Context } from './contexts/Context'
import { Cover } from './components/Cover'
import { About } from './components/About'
import { Experiences } from './components/Experiences'
import { Skills } from './components/Skills'

function App() {
  const {state, dispatch} = useContext(Context)

  return (
    <GlobalStyled theme={state.theme.status as string}>
      <LeftMenuBar/>
      <RightMenuBar/>
      <TopMenuBar/>
      <Cover/>
      <MainStyled>
        <About/>
        <Experiences/>
        <Skills/>
      </MainStyled>
    </GlobalStyled>  
  )
}

export default App
