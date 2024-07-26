import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";
import './styles.css'

export default function Coleta() {
  return (
    <div className="bg-black">
      <div className="bg-black">
        <div className="mx-auto max-w-7xl lg:px-8">
          <div className="relative isolate overflow-hidden px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle
                cx={512}
                cy={512}
                r={512}
                fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                fillOpacity="0.7"
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="yellow" />
                  <stop offset={1} stopColor="yellow" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl " >
               Coleta de dados
                <br />
              </h2>
              <p className="mt-6  leading-8 text-gray-300">
              A coleta de dados em uma pesquisa refere-se ao processo sistemático de reunir informações relevantes para responder a perguntas de pesquisa, testar hipóteses e avaliar resultados. Este processo é fundamental para obter insights precisos e confiáveis sobre o assunto de interesse. </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-explica-problema bg-black mt-8">
        <div className="grid-total bg-black">
          <div className="grid-text">
            <b>Entrevista 1
            </b>
          </div>
          <div className="grid-text">
            Na primeira entrevista todos responderam que <span className='highlight' style={{ color: 'yellow', fontWeight: 'bold' }}>já não se consideravam produtivos sem a internet</span>, o que mostra uma forte relação com os resultados necessários para a pesquisa.
          </div>
          <div className="grid-text">
          O uso da Inteligência Artificial no cotidiano das pessoas fez parte de uma das perguntas da entrevista, e todos trouxeram exemplos de onde elas estão presentes em suas rotinas, não somente nos chats robôs, mas em várias outras partes do mundo virtual e real, <span className='highlight' style={{ color: 'yellow', fontWeight: 'bold' }}>áreas como na faculdade, no trabalho, nas redes sociais e para aumentar a produtividade em suas rotinas.</span>
          <img
              src="/img/area.png"
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          </div>
          <div className="grid-text">
          Esses resultados mostram que a Inteligência Artificial é altamente presente nas rotinas das pessoas, oferecendo um auxílio aos humanos e tornando-os mais produtivos.          
          </div>
          
          <div className="grid-text">
          Desse modo, como o foco da primeira entrevista permaneceu no ChatGPT, pode-se obter respostas analíticas conforme o objetivo da pesquisa e com isso, mais de  <span className='highlight' style={{ color: 'yellow', fontWeight: 'bold' }}>70% deles já utilizavam o ChatGPT para tomar decisões.</span> 
          <img
              src="/img/gpt.png"
              alt="App screenshot"
              width={1824}
              height={1080}
            />
             <br></br>Perante esses primeiros dados, as respostas da segunda entrevista iriam trazer resultados mais analíticos para o estudo, pois as pessoas que não usam a plataforma passarão pelo teste mudando sua rotina e trazendo resultados de acordo com o objetivo, já as pessoas que usam, apesar de terem em sua rotina, haveria resultados mais estretégicos para o estudo. 
          </div>
          <div className="grid-text">
          Assim, conhecendo a rotina de cada indivíduo e compreendendo as expectativas de cada um em relação ao ChatGPT presente em suas vidas, foi desenvolvida a segunda entrevista para obter os dados necessários.          
          </div>
        </div>
        <div className="grid-text">
            <br></br><b>Entrevista 2</b>
        </div>
        <br></br>
        <div className="grid-text">
            A segunda entrevista teve o objetivo de aprofundar mais nas ideias dos entrevistados e estudar como foi o comportamento deles ao utilizar o ChatGPT como auxílio em suas tomada de decisões 
        </div>
        <br></br>
        <div className="grid-text">
          Posso citar inúmeros resultados que obtive diante desse período de teste, mas a principal diferença na rotina dos entrevistados foi que o           <span className='highlight' style={{ color: 'yellow', fontWeight: 'bold' }}>ChatGPT conseguiu oferecer mais eficiência na rotina deles. </span>
           Todas as necessidades que eles tinham, se pesquisassem em outros fóruns, <span className='highlight' style={{ color: 'yellow', fontWeight: 'bold' }}>levariam mais que o dobro do tempo do que se pesquisassem no ChatGPT</span>
        </div>
        <br></br>
        <div className="grid-text">
        Cada indivíduo trouxe, ao menos, três situações nas quais não tinham conhecimento sobre o assunto e precisavam tomar uma decisão, e usaram o GPT para auxiliá-los. 
        </div>
      
        <br></br>
        <div className="grid-text">
          Essas situações foram analisadas profundamente com o intuito de reconhecer como a plataforma fez a diferença, clicando <a href="analise"><span className='highlight' style={{ color: 'yellow', fontWeight: 'bold' }}>[aqui]</span></a> você pode ler uma das partes mais interessantes da pesquisa.
        </div>
        <br></br>
        <div className="grid-text pequeno">
          Porém, outros dados também foram coletados a partir da segunda entrevista. Uma pergunta crucial foi feita para todos os entrevistados, e ela foi a seguinte:           <span className='highlight' style={{ color: 'yellow', fontWeight: 'bold' }}> "A forma como você toma decisões mudou após passar por esse período de teste?". </span>
          Todos responderam que a mudança em suas tomadas de decisões foi que           <span className='highlight' style={{ color: 'yellow', fontWeight: 'bold' }}> passaram a utilizar 100% da ferramenta. </span>
          Primeiramente, porque se sentiam mais produtivos com ela e, segundo, porque tinham certeza de que os dados estariam seguros para serem usados posteriormente. 
         
        </div>
        <br></br>
        <div className="grid-text pequeno">
          É importante mencionar que todos confessaram que em nenhum momento deixaram de utilizar suas ideias, ou seja, não utilizaram na íntegra as respostas do ChatGPT, mas que utilizaram a ferramenta como uma         <span className='highlight' style={{ color: 'yellow', fontWeight: 'bold' }}>base para suas ideias. </span>
        </div>
        <br></br>
        <div className="grid-text pequeno">
        Alguns falaram que tinham receio de usar o ChatGPT antes do período de teste, pois não confiavam na ferramenta. Sentiam-se como se estivessem errados por acharem que o ChatGPT poderia usar plágios ou fornecer dados incorretos. No entanto, ao usar a ferramenta, puderam perceber que estavam equivocados e que a ferramenta foi uma solução de auxílio em sua rotina.        
        </div>
        <br></br>
        <div className="grid-text pequeno">
        Todas essas situações resultaram em grandes melhorias na vida dos entrevistados. Com o auxílio da ferramenta, todos os indivíduos concordaram que se sentiram mais produtivos quando utilizaram o ChatGPT em suas rotinas. Falaram que poderiam realizar todas as tarefas sem a ferramenta, porém não com o mesmo desempenho e nem dentro do mesmo tempo.       
        </div>
      </div>
    </div>
  );
}
