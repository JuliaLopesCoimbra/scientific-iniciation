import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";

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
              <p className="mt-6 text-lg leading-8 text-gray-300">
              A coleta de dados em uma pesquisa refere-se ao processo sistemático de reunir informações relevantes para responder a perguntas de pesquisa, testar hipóteses e avaliar resultados. Este processo é fundamental para obter insights precisos e confiáveis sobre o assunto de interesse. </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-explica-problema bg-black mt-8">
        <div className="grid-total bg-black">
          <div className="grid-text">
            Entrevista 1
          </div>
          <div className="grid-text">
            Na primeira entrevista todos responderam que <span className='highlight' style={{ color: 'yellow', fontWeight: 'bold' }}>não se consideram produtivos sem a internet</span>, o que mostra que a era da tecnologia está presente.
          </div>
          <span className='highlight' style={{ color: 'yellow', fontWeight: 'bold' }}>não se consideram produtivos sem a internet</span>
          <div className="grid-text">
          O uso da Inteligência Artificial no cotidiano das pessoas fez parte de uma das perguntas da entrevista, e todos trouxeram exemplos de onde elas estão presentes em suas rotinas, não somente nos chats robôs, mas em várias outras partes do mundo virtual e real, <span className='highlight' style={{ color: 'yellow', fontWeight: 'bold' }}>áreas como na faculdade, no trabalho, nas redes sociais e para aumentar a produtividade em suas rotinas.</span>
          </div>
          <div className="grid-text">
          Esses resultados mostram que a Inteligência Artificial é altamente presente nas rotinas das pessoas, oferecendo um auxílio aos humanos e tornando-os mais produtivos.          
          </div>
          <div className="grid-text">
          Esses resultados mostram que a Inteligência Artificial é altamente presente nas rotinas das pessoas, oferecendo um auxílio aos humanos e tornando-os mais produtivos.          
          </div>
          <div className="grid-text">
          Desse modo, como o foco da primeira entrevista permaneceu no ChatGPT, pode-se obter respostas analíticas conforme o objetivo da pesquisa e com isso, com o total de 7 entrevistados, mais de  <span className='highlight' style={{ color: 'yellow', fontWeight: 'bold' }}>70% deles já utilizavam o ChatGPT para tomar decisões.</span> <br></br> <br></br>No entanto, as respostas da segunda entrevista iriam trazer resultados analíticos para o estudo, pois as pessoas que não usam a plataforma passarão pelo teste mudando sua rotina e trazendo resultados de acordo com o objetivo, já as pessoas que usam, apesar de terem em sua rotina, haveria resultados mais transparentes para o estudo. 
          </div>
          <div className="grid-text">
            Entrevista 2
          </div>
        </div>
      </div>
    </div>
  );
}
