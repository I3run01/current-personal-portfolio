import { GlobalStyled } from './globasStyles'
import { LeftMenuBar } from './components/leftMenuBar'
import { RightMenuBar } from './components/rightMenuBar/index'
import { TopMenuBar } from './components/TopMenuBar'
import { useContext } from 'react'
import { Context } from './contexts/Context'


function App() {
  const {state, dispatch} = useContext(Context)

  return (
    <GlobalStyled theme={state.theme.status as string}>
      <LeftMenuBar/>
      <RightMenuBar/>
      <TopMenuBar/>
    </GlobalStyled>  
  )
}

export default App
