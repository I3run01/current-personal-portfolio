export class skillsClass {
    private img
    private skillName
    private txt_Eng
    private txt_PTBR

    constructor(image: string, name: string, text_Eng: string, text_PTBR: string) {
        this.img = image
        this.skillName = name
        this.txt_Eng = text_Eng
        this.txt_PTBR = text_PTBR
    }

    public get image () {
        return this.img
    }

    public get name () {
        return this.skillName
    }

    public get textEng () {
        return this.txt_Eng
    }

    public get textPTBR () {
        return this.txt_PTBR
    }
}

export const skillsObjects = [
    new skillsClass(
        'Skills/ReactJS.svg',

        'React.JS',

        'React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.',

        'React faz com que a criação de UIs interativas seja uma tarefa fácil. Crie views simples para cada estado na sua aplicação, e o React irá atualizar e renderizar de forma eficiente apenas os componentes necessários na medida em que os dados mudam'
    ),
    new skillsClass(
        'Skills/NodeJS.svg',

        'Node.JS',
        
        "Node.js is similar in design to, and influenced by, systems like Ruby's Event Machine and Python's Twisted. Node.js takes the event model a bit further. It presents an event loop as a runtime construct instead of as a library. In other systems, there is always a blocking call to start the event-loop. Typically, behavior is defined through callbacks at the beginning of a script, and at the end a server is started through a blocking call like EventMachine::run(). In Node.js, there is no such start-the-event-loop call. Node.js simply enters the event loop after executing the input script. Node.js exits the event loop when there are no more callbacks to perform. This behavior is like browser JavaScript — the event loop is hidden from the user.",

        "Node.js é semelhante no projeto, e influenciado por sistemas como Event Machine do Ruby ou Twisted do Python. Porém, leva o modelo de eventos um pouco mais além. No Node.js o event loop é exposto como uma parte do ambiente de execução ao invés de uma biblioteca. Em outros sistemas há sempre uma chamada bloqueante para iniciar o event-loop. Tipicamente o comportamento esperado é definido através de callbacks no início do script, e no final um servidor é iniciado por uma chamada bloqueante como por exemplo EventMachine::run()."
    ),
    new skillsClass(
        'Skills/TypeScript.svg',

        'TypeScript',
        
        "JavaScript and More <br/> TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor. <br/><br/> A Result You Can Trust <br/> TypeScript code converts to JavaScript, which runs anywhere JavaScript runs: In a browser, on Node.js or Deno and in your apps. Safety at Scale <br/> TypeScript understands JavaScript and uses type inference to give you great tooling without additional code.",
        
        "JavaScript e Mais <br/> O TypeScript adiciona sintaxe adicional ao JavaScript para oferecer suporte a uma integração mais estreita com seu editor. Detecte erros mais cedo em seu editor. <br/><br/> Um Resultado Que Você Pode Confiar <br/> O código TypeScript é convertido em JavaScript, que funciona em qualquer lugar em que o JavaScript é executado: em um navegador, em Node.js ou Deno e em seus aplicativos. <br/><br/> Segurança em Escala <br/> O TypeScript entende JavaScript e usa inferência de tipos para fornecer ótimas ferramentas sem código adicional."
    ),

    new skillsClass(
        'Skills/Python.svg',

        'Python',
        
        "Getting Started <br/> Python can be easy to pick up whether you're a first time programmer or you're experienced with other languages.<br/><br/> Applications <br/> The Python Package Index (PyPI) hosts thousands of third-party modules for Python. Both Python's standard library and the community-contributed modules allow for endless possibilities <br/><br/> Friendly & Easy to Learn <br/> The community hosts conferences and meetups, collaborates on code, and much more. Python's documentation will help you along the way, and the mailing lists will keep you in touch. <br/><br/> Open-source <br/>  Python is developed under an OSI-approved open source license, making it freely usable and distributable, even for commercial use. Python's license is administered by the Python Software Foundation.",
        
        "Começando <br/> Python pode ser fácil de aprender se você é um programador iniciante ou se tem experiência com outras linguagens.<br/><br/> Aplicativos <br/> O Python Package Index (PyPI) hospeda milhares de módulos de terceiros para Python. Tanto a biblioteca padrão do Python quanto os módulos de contribuição da comunidade permitem infinitas possibilidades <br/><br/> Amigável e fácil de aprender <br/> A comunidade organiza conferências e encontros, colabora em código e muito mais. A documentação do Python o ajudará ao longo do caminho, e as listas de discussão o manterão em contato. <br/><br/> Código aberto <br/> O Python é desenvolvido sob uma licença de código aberto aprovada pela OSI, tornando-o livremente utilizável e distribuível, mesmo para uso comercial. A licença do Python é administrada pela Python Software Foundation."
    ),

    new skillsClass(
        'Skills/Figma.svg',

        'Figma',
        
        "Figma is a collaborative web application for interface design, with additional offline features enabled by desktop applications for macOS and Windows. The feature set of Figma focuses on user interface and user experience design, with an emphasis on real-time collaboration, utilising a variety of vector graphics editor and prototyping tools. The Figma mobile app for Android and iOS allows viewing and interacting with Figma prototypes in real-time on mobile and tablet devices.",
        
        "O Figma é um aplicativo da Web colaborativo para design de interface, com recursos offline adicionais habilitados por aplicativos de desktop para macOS e Windows. O conjunto de recursos do Figma se concentra na interface do usuário e no design da experiência do usuário, com ênfase na colaboração em tempo real, utilizando uma variedade de editores de gráficos vetoriais e ferramentas de prototipagem. O aplicativo móvel Figma para Android e iOS permite visualizar e interagir com os protótipos Figma em tempo real em dispositivos móveis e tablets."
    ),

    new skillsClass(
        'Skills/MongoDB.svg',

        'MongoDB',
        
        "Get your ideas to market faster with a developer data platform built on the leading modern database. Support transactional, search, analytics, and mobile use cases while using a common query interface and the data model developers love.",
        
        "Leve suas ideias ao mercado mais rapidamente com uma plataforma de dados de desenvolvedor criada no banco de dados moderno. Dê suporte a casos de uso transacional, de pesquisa, de análise e móvel usando uma interface de consulta comum e o modelo de dados que os desenvolvedores adoram."
    ),
    new skillsClass(
        'Skills/MySQL.svg',

        'MySQL',
        
        "MySQL is the world's most popular open source database. With its proven performance, reliability and ease-of-use, MySQL has become the leading database choice for web-based applications, used by high profile web properties including Facebook, Twitter, YouTube, Yahoo! and many more. Oracle drives MySQL innovation, delivering new capabilities to power next generation web, cloud, mobile and embedded applications.",
        
        "MySQL é o banco de dados de código aberto mais popular do mundo. Com seu desempenho, confiabilidade e facilidade de uso comprovados, o MySQL tornou-se a principal escolha de banco de dados para aplicativos baseados na Web, usados ​​por propriedades da Web de alto perfil, incluindo Facebook, Twitter, YouTube, Yahoo! e muitos mais. A Oracle impulsiona a inovação do MySQL, oferecendo novos recursos para potencializar os aplicativos Web, em nuvem, móveis e incorporados da próxima geração."
    ),

    
]