import React from "react";

import './styles.css'
export default function Objetivo() {
  return (
    <div className="bg-black ">
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
                  <stop stopColor="white" />
                  <stop offset={1} stopColor="white" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl " >
                Objetivo de Pesquisa
                <br />
              </h2>
              <p className="mt-6  leading-8 text-gray-300">
              Um objetivo de pesquisa de um artigo científico é uma declaração clara e precisa que define o propósito e a direção do estudo. Este objetivo serve como a bússola do pesquisador, orientando todas as etapas do processo de investigação, desde a formulação de hipóteses até a coleta e análise de dados, e finalmente, à interpretação dos resultados.              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="tudo">
        <div className="container-explica-problema bg-black mt-8">
          <div className="grid-total bg-black">
            <div className="grid-text">
            O objetivo de pesquisa foi analisar como o ChatGPT pode auxiliar as pessoas a tomarem decisões e a aumentar sua produtividade em suas rotinas diárias. O objetivo segue com a mesma ideia do problema de pesquisa, porém com a capacidade de buscar a solução.         </div>
           
  
            <div className="grid-text" >
              Com isso, a metodologia de pesquisa passou por diversos processos para conseguir solucionar isso, clique <a href='./metodologia'> <span style={{ color: 'white', fontWeight: 'bold' }} className='highlight'>[aqui] </span></a>e veja como foi esse desenvolvimento.
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
