import { MainStyled } from '../globasStyles'
import { Cover } from '../components/Cover'
import { About } from '../components/About'
import { Experiences } from '../components/Experiences'
import { Skills } from '../components/Skills'
import { Projects } from '../components/Projects'


export const Home = () => {

    return (
        <div>
            <Cover/>
            <MainStyled>
                <About/>
                <Experiences/>
                <Skills/>
                <Projects/>
            </MainStyled>
        </div>
    )
}