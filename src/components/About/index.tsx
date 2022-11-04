import { useContext, useEffect, useState } from "react"
import { Context } from "../../contexts/Context"
import { AboutStyled } from "./styled"

export const About = () => {
    //Texts
    const mainTextEngish = 'Hi, I am very happy to see you in my profile. Let me tell you a little about me. Call me Bruno and I am a junior full stack developer, Initially, I graduated in civil engineering, but some time later, I noticed that did not make sense anymore to continue working in engineering, my projects ideas always was bloked because of programming, because of that I made a career transition, I am very happy to make that choice. I am always studying new techs, working as a freelancer, or making more complex work. Be welcome to see the rest of my profile'

    const mainTextPortuguese = 'Oi, fico feliz que esteja vendo o meu perfil, deixe me contar um pouco sobre mim. Me chamo Bruno e sou um desenvolvedor júnior full stack. Inicialmente eu me formei em engenharia civil mas depois de um tempo atuando na área de construção, percebi que não fazia mais sentido seguir a carreira de engenheiro, pois todas as ideias que eu tinha de projeto acabava esbarrando na programação, foi assim que optei por fazer uma transição de carreira, fico muito feliz por ter tomado esssa escolha. Estou sempre estudando novas técnologias, realizando trabalhos como freela e criando projetos cada vez mais complexos. Fique a vontade para ver o resto do perfil.'

    const {state, dispatch} = useContext(Context)
    const [mainText, setMainText] = useState<string>(state.language.status === 'english' ? mainTextEngish : mainTextPortuguese)

    useEffect(() => {
        state.language.status === 'english' ? setMainText(mainTextEngish) : setMainText(mainTextPortuguese)
    }, [state.language.status])

    return (
        <AboutStyled
        theme={state.theme.status}
        id='AboutIndex'>
            <h1>About</h1>
            <img src="About/personalPhoto.png" alt="" />
            <div id="text">
                <p>{mainText}</p>
            </div>
        </AboutStyled>
    )
}