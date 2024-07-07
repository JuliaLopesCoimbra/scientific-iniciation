import './styles.css';
export default function Problema() {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden  px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
             O Problema de Pesquisa
              <br />
              
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              É o motivo do surgimento da pesquisa, a razão na qual o estudo se baseia em seu desenvolvimento e busca solucionar com os objetivos
            </p>
            
          </div>
          
        </div>
      </div>
      <div className='container-explica-problema'>
          <div className='grid-total'>
            <div className='grid-text'>
            Quando decidi fazer iniciação científica, senti-me completamente perdida sobre por <span className='highlight'>onde</span> começar e <span className='highlight'>como</span> proceder. Eu não tinha nenhum conhecimento sobre pesquisa acadêmica e suas metodologias. No entanto, uma coisa eu sabia com certeza: queria fazer algo relacionado à <span className='highlight'>Inteligência Artificial</span>. Minha curiosidade era especialmente forte em relação ao <span className='highlight'>ChatGPT</span>, um dos modelos de IA mais inovadores da atualidade. Mas, embora minha vontade fosse grande, eu não tinha a menor ideia de como abordar esse tema e transformá-lo em uma pesquisa científica.
            </div>
            <div className='grid-text'>
            Foi nesse momento de incerteza que percebi que tinha, na verdade, identificado meu problema de pesquisa. A <span className='highlight'>decisão</span> que eu precisava tomar estava justamente no cruzamento desses três pontos: <span className='highlight'>Tomada de Decisão, Inteligência Artificial e ChatGPT.</span> Este era o desafio que eu precisava enfrentar e resolver.
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
            <img
              src="/img/problema.jpg"
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div>
            <div className='grid-text'>
            Entendi que, para avançar, eu precisaria não apenas aprender sobre <span className='highlight'>Inteligência Artificial e ChatGPT,</span> mas também sobre como conduzir uma pesquisa acadêmica e tomar decisões informadas ao longo do processo. Decidi, então, que minha pesquisa se focaria nesse tripé: explorar como a Inteligência Artificial, especialmente através do ChatGPT, poderia auxiliar na tomada de decisões.            
            </div>
            <div className='grid-text'>
            Desde então, minha jornada de pesquisa se iniciou. Comecei a estudar a fundo os fundamentos da Inteligência Artificial, aprendendo sobre as diferentes abordagens e técnicas usadas na área. Ao mesmo tempo, mergulhei no mundo do ChatGPT, explorando como ele funciona e as potencialidades que oferece. Paralelamente, desenvolvi um entendimento mais sólido sobre o processo de tomada de decisões, tanto em <span className='highlight'>contextos humanos</span> quanto artificiais.           
            </div>  
            <div className='grid-text'>
            Essa combinação de temas não só me deu um foco claro para minha iniciação científica, mas também abriu portas para uma série de questões e investigações interessantes. Meu trabalho passou a ser guiado pela pergunta central de como a IA, e especificamente o ChatGPT, pode ser utilizada para <span className='highlight'>melhorar a tomada de decisões</span> em diferentes contextos. Essa perspectiva não apenas preencheu minha lacuna inicial de conhecimento, mas também me proporcionou uma trajetória rica e gratificante na pesquisa acadêmica.           
            </div> 
            <div className='grid-text seguinte'>
            Após descobrir o problema de pesquisa, minha investigação teve início. Para seguir com o processo da minha iniciação científica, precisei formular minhas hipóteses com base na revisão bibliográfica, estudando os principais pontos do ChatGPT na sociedade. Também analisei o processo de tomada de decisões e como tudo isso se encaixava com a inteligência artificial. Clicando <a href='./bibliografico'> <span className='highlight'>[aqui]</span></a>, você pode saber mais sobre meus estudos e tudo que adquiri ao longo da minha trajetória.
            </div>
          </div>


      </div>
    </div>
  )
}
