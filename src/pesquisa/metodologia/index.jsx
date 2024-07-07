import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";

export default function Metodologia() {
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
                  <stop stopColor="green" />
                  <stop offset={1} stopColor="green" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl " >
                Metodologia de Pesquisa
                <br />
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
              A metodologia de pesquisa é o conjunto de métodos e técnicas utilizados para coletar, analisar e interpretar dados em um estudo científico. Ela define o caminho a ser seguido para alcançar os objetivos da pesquisa, garantindo que o processo seja sistemático, rigoroso e replicável. </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-explica-problema bg-black mt-8">
        <div className="grid-total bg-black">
          <div className="grid-text">
          Amostra
          </div>
          <div className="grid-text">
          A pesquisa foi realizada com estudantes de graduação na área de computação, que possuem funções ativas em suas rotinas, para garantir resultados transparentes e dinâmicos, foi pensado dessa maneira, pois as pessoas que não tinham um costume com a tecnologia não iria trazer resultados precisos para a pesquisa. A amostra consistiu em <span className='highlight' style={{ color: 'green', fontWeight: 'bold' }}>7 graduandos em Computação</span>, considerados apropriados para a coleta de dados.
          </div>
          <div className="grid-text">
          Tipo de Metodologia
          </div>
          <div className="grid-text" >
          A pesquisa seguiu uma abordagem <span className='highlight' style={{ color: 'green', fontWeight: 'bold' }}>qualitativa e exploratória</span>, utilizando <span className='highlight' style={{ color: 'green', fontWeight: 'bold' }}>entrevistas e estudos bibliográficos</span>. Foram realizadas duas entrevistas com os participantes: <span className='highlight' style={{ color: 'green', fontWeight: 'bold' }}>a primeira para conhecer suas rotinas</span> e introduzir o estudo, e a <span className='highlight' style={{ color: 'green', fontWeight: 'bold' }}>segunda, mais específica, após um período de teste onde utilizaram o ChatGPT como auxílio em suas decisões.</span>
          </div>
          <div className="grid-text" >
          As respostas das entrevistas foram transcritas, analisadas e organizadas em um canvas no Obsidian, uma plataforma de anotações que utiliza a linguagem Markdown. O Obsidian permitiu a separação e análise das informações, facilitando a identificação de padrões e semelhanças nas respostas dos entrevistados.
          </div>
          <img
              src="/img/metodologia.png"
              alt="App screenshot"
              width={1824}
              height={1080}
            />
          <div className="grid-text" >
          Essa metodologia visou compreender como o ChatGPT pode ser utilizado para melhorar a tomada de decisões e aumentar a produtividade das pessoas, proporcionando uma análise aprofundada e detalhada das experiências dos participantes.
          </div>
          <div className="grid-text" >
            Para continuar e saber dos resultados você pode clicar <a href="/coleta"><span className='highlight' style={{ color: 'green', fontWeight: 'bold' }}>[aqui]</span></a>
          </div>
        </div>
      </div>
    </div>
  );
}
