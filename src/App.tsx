import { GlobalStyled } from './globasStyles'

import { RightMenuBar } from './components/rightMenuBar/index'
import { TopMenuBar } from './components/TopMenuBar'
import { useContext } from 'react'
import { Context } from './contexts/Context'
import { MainRoutes } from './routes/mainRoutes'


function App() {
  const {state, dispatch} = useContext(Context)

  return (
    <GlobalStyled theme={state.theme.status as string}>
      
      <RightMenuBar/>
      <TopMenuBar/>
      <MainRoutes/>
    </GlobalStyled>  
  )
}

export default App
