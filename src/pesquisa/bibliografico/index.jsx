import React from "react";

import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";

export default function Bibliografico() {
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
                  <stop stopColor="blue" />
                  <stop offset={1} stopColor="blue" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Levantamento bibliografico
                <br />
              </h2>
              <p className="mt-6  leading-8 text-gray-300">
                Uma etapa fundamental em qualquer pesquisa acadêmica ou científica. Ele consiste na busca, seleção e análise de materiais já publicados sobre o tema ou problema de pesquisa em questão.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-explica-problema bg-black mt-8">
        <div className="grid-total bg-black">
          <div className="grid-text">
            O levantamento bibliográfico foi crucial para abrir um leque de conhecimentos, pois representou uma das primeiras etapas da minha iniciação científica. Eu precisava conhecer e aprofundar-me no tema que estava pesquisando para poder conduzir meu trabalho de maneira fundamentada e eficiente.
          </div>
          <div className="grid-text">
            Nesse processo, dediquei-me a estudar os artigos relacionados ao assunto, mergulhando nas teorias, metodologias e resultados apresentados por outros pesquisadores. Esse estudo detalhado permitiu-me entender melhor o panorama geral da pesquisa, identificar lacunas no conhecimento existente e encontrar inspiração para novas abordagens e perspectivas.
          </div>
          <div className="mx-auto px-4 mt-8 mb-8 max-w-5xl lg:px-0">
        <MDBCarousel showIndicators showControls fade>
          <MDBCarouselItem itemId={1}>
            <a href="./bibliografico/gpt">
              <img
                src="././img/gpt.jpg"
                className="d-block w-100"
                alt="Luciano Rossoni"
              />
            </a>
            <MDBCarouselCaption>
              <h5>Chat GPT</h5>
              <p>Saiba os cenários que a plataforma fez a diferença</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem itemId={2}>
            <a href="./bibliografico/decisao">
              <img
                src="././img/decisao.jpg"
                className="d-block w-100"
                alt="..."
              />
            </a>
            <MDBCarouselCaption>
              <h5>A intuição da Tomada de Decisão</h5>
              <p>Como nós tomamos decisões?</p>
            </MDBCarouselCaption>
          </MDBCarouselItem>

          <MDBCarouselItem itemId={3}>
            <a href="./bibliografico/turing">
              <img
                src="././img/turing.jpg"
                className="d-block w-100"
                alt="..."
              />
            </a>
            <MDBCarouselCaption>
              <h5>O Teste de Turing</h5>
              <p>
                A importancia do matemático na história da Inteligência Artificial.
              </p>
            </MDBCarouselCaption>
          </MDBCarouselItem>
        </MDBCarousel>
      </div>
          <div className="grid-text">
            Através da leitura crítica e análise dos materiais coletados, consegui consolidar uma base sólida de conhecimento que foi essencial para o desenvolvimento do meu projeto. Esse conhecimento adquirido não apenas me proporcionou a segurança necessária para continuar com a pesquisa, mas também ampliou minha capacidade de questionamento e reflexão sobre o tema.
          </div>
          <div className="grid-text">
            Assim, o levantamento bibliográfico não foi apenas uma etapa inicial, mas uma fase contínua de aprendizagem e crescimento intelectual. Graças a essa dedicação aos estudos prévios, pude avançar de forma significativa em direção ao objetivo da minha pesquisa, sempre guiado pela compreensão e pela busca incessante por respostas mais aprofundadas e fundamentadas.
          </div>
          <div className="grid-text">
            Para entender melhor o objetivo da pesquisa, clique <a href='./objetivo'> <span className='highlight' style={{ color: 'blue', fontWeight: 'bold' }}>[aqui]</span></a>
          </div>
        </div>
      </div>
    </div>
  );
}


