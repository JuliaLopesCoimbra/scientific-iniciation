import React from 'react';
import './styles.css';

export default function Pesquisa() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0 ">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">ESTUDO DA INTELIGÊNCIA ARTIFICIAL E COMO O CHATGPT AUXÍLIA NA TOMADA DE DECISÃO</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A pesquisa</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              O projeto faz parte da bolsa PIBITI do Conselho Nacional de Desenvolvimento Científico e Tecnológico (CNPq), que oferece uma variedade de bolsas e apoios para pesquisadores, estudantes e instituições de pesquisa em todo o país. Suas atividades abrangem diversas áreas do conhecimento, desde ciências exatas e da vida até ciências sociais e humanidades.              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="././img/pesquisa.jpg"
            alt=""
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
              As etapas para realizar a pesquisa científica seguiram um processo básico com base no estudo da matéria Metodologia de Pesquisa que tive durante a minha graduação em Engenharia de Software. Essas são as etapas principais que foram desenvolvidas durante pesquisa:
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  {/* SVG da lâmpada */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 flex-none text-indigo-600" aria-hidden="true">
                    <path d="M10 1a6 6 0 0 0-3.815 10.631C7.237 12.5 8 13.443 8 14.456v.644a.75.75 0 0 0 .572.729 6.016 6.016 0 0 0 2.856 0A.75.75 0 0 0 12 15.1v-.644c0-1.013.762-1.957 1.815-2.825A6 6 0 0 0 10 1ZM8.863 17.414a.75.75 0 0 0-.226 1.483 9.066 9.066 0 0 0 2.726 0 .75.75 0 0 0-.226-1.483 7.553 7.553 0 0 1-2.274 0Z" />
                  </svg>
                  <span>
                    <strong className="font-semibold text-gray-900">Problema de Pesquisa.</strong> Identificar o problema ou questão que deseja investigar e formular uma pergunta clara e específica que orientará sua pesquisa.
                  </span>
                </li>
                {/* As outras etapas seguem aqui */}
                <li className="flex gap-x-3">
                  {/* SVG da lâmpada */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 flex-none text-indigo-600" aria-hidden="true">
                    <path d="M10 1a6 6 0 0 0-3.815 10.631C7.237 12.5 8 13.443 8 14.456v.644a.75.75 0 0 0 .572.729 6.016 6.016 0 0 0 2.856 0A.75.75 0 0 0 12 15.1v-.644c0-1.013.762-1.957 1.815-2.825A6 6 0 0 0 10 1ZM8.863 17.414a.75.75 0 0 0-.226 1.483 9.066 9.066 0 0 0 2.726 0 .75.75 0 0 0-.226-1.483 7.553 7.553 0 0 1-2.274 0Z" />
                  </svg>
                  <span>
                    <strong className="font-semibold text-gray-900">Revisão da Literatura.</strong> Realizar uma revisão abrangente da literatura existente sobre o tema de pesquisa para entender o que já foi estudado, quais lacunas existem no conhecimento e quais métodos foram utilizados por outros pesquisadores.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  {/* SVG da lâmpada */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 flex-none text-indigo-600" aria-hidden="true">
                    <path d="M10 1a6 6 0 0 0-3.815 10.631C7.237 12.5 8 13.443 8 14.456v.644a.75.75 0 0 0 .572.729 6.016 6.016 0 0 0 2.856 0A.75.75 0 0 0 12 15.1v-.644c0-1.013.762-1.957 1.815-2.825A6 6 0 0 0 10 1ZM8.863 17.414a.75.75 0 0 0-.226 1.483 9.066 9.066 0 0 0 2.726 0 .75.75 0 0 0-.226-1.483 7.553 7.553 0 0 1-2.274 0Z" />
                  </svg>
                  <span>
                    <strong className="font-semibold text-gray-900">Definição de Objetivos e Hipóteses.</strong> Com base na revisão da literatura, definir os objetivos específicos da pesquisa e formular hipóteses, se aplicável, que serão testadas durante o estudo.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  {/* SVG da lâmpada */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 flex-none text-indigo-600" aria-hidden="true">
                    <path d="M10 1a6 6 0 0 0-3.815 10.631C7.237 12.5 8 13.443 8 14.456v.644a.75.75 0 0 0 .572.729 6.016 6.016 0 0 0 2.856 0A.75.75 0 0 0 12 15.1v-.644c0-1.013.762-1.957 1.815-2.825A6 6 0 0 0 10 1ZM8.863 17.414a.75.75 0 0 0-.226 1.483 9.066 9.066 0 0 0 2.726 0 .75.75 0 0 0-.226-1.483 7.553 7.553 0 0 1-2.274 0Z" />
                  </svg>
                  <span>
                    <strong className="font-semibold text-gray-900">Seleção de Metodologia.</strong> Escolher a abordagem metodológica mais apropriada para responder à pergunta de pesquisa e alcançar os objetivos estabelecidos. Isso pode incluir métodos quantitativos, qualitativos ou uma combinação de ambos.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  {/* SVG da lâmpada */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 flex-none text-indigo-600" aria-hidden="true">
                    <path d="M10 1a6 6 0 0 0-3.815 10.631C7.237 12.5 8 13.443 8 14.456v.644a.75.75 0 0 0 .572.729 6.016 6.016 0 0 0 2.856 0A.75.75 0 0 0 12 15.1v-.644c0-1.013.762-1.957 1.815-2.825A6 6 0 0 0 10 1ZM8.863 17.414a.75.75 0 0 0-.226 1.483 9.066 9.066 0 0 0 2.726 0 .75.75 0 0 0-.226-1.483 7.553 7.553 0 0 1-2.274 0Z" />
                  </svg>
                  <span>
                    <strong className="font-semibold text-gray-900">Coleta de Dados.</strong> Implementar o plano de pesquisa definido, coletando dados relevantes de acordo com a metodologia escolhida. Isso pode envolver a realização de experimentos, entrevistas, pesquisas, observações ou análise de dados existentes.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  {/* SVG da lâmpada */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 flex-none text-indigo-600" aria-hidden="true">
                    <path d="M10 1a6 6 0 0 0-3.815 10.631C7.237 12.5 8 13.443 8 14.456v.644a.75.75 0 0 0 .572.729 6.016 6.016 0 0 0 2.856 0A.75.75 0 0 0 12 15.1v-.644c0-1.013.762-1.957 1.815-2.825A6 6 0 0 0 10 1ZM8.863 17.414a.75.75 0 0 0-.226 1.483 9.066 9.066 0 0 0 2.726 0 .75.75 0 0 0-.226-1.483 7.553 7.553 0 0 1-2.274 0Z" />
                  </svg>
                  <span>
                    <strong className="font-semibold text-gray-900">Análise de Dados.</strong> Analisar os dados coletados utilizando técnicas estatísticas ou qualitativas, dependendo da natureza dos dados e dos objetivos da pesquisa.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  {/* SVG da lâmpada */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 flex-none text-indigo-600" aria-hidden="true">
                    <path d="M10 1a6 6 0 0 0-3.815 10.631C7.237 12.5 8 13.443 8 14.456v.644a.75.75 0 0 0 .572.729 6.016 6.016 0 0 0 2.856 0A.75.75 0 0 0 12 15.1v-.644c0-1.013.762-1.957 1.815-2.825A6 6 0 0 0 10 1ZM8.863 17.414a.75.75 0 0 0-.226 1.483 9.066 9.066 0 0 0 2.726 0 .75.75 0 0 0-.226-1.483 7.553 7.553 0 0 1-2.274 0Z" />
                  </svg>
                  <span>
                    <strong className="font-semibold text-gray-900">Interpretação dos Resultados.</strong> Interpretar os resultados da análise de dados à luz da pergunta de pesquisa e das hipóteses, discutindo suas implicações e significado dentro do contexto do estudo.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  {/* SVG da lâmpada */}
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 flex-none text-indigo-600" aria-hidden="true">
                    <path d="M10 1a6 6 0 0 0-3.815 10.631C7.237 12.5 8 13.443 8 14.456v.644a.75.75 0 0 0 .572.729 6.016 6.016 0 0 0 2.856 0A.75.75 0 0 0 12 15.1v-.644c0-1.013.762-1.957 1.815-2.825A6 6 0 0 0 10 1ZM8.863 17.414a.75.75 0 0 0-.226 1.483 9.066 9.066 0 0 0 2.726 0 .75.75 0 0 0-.226-1.483 7.553 7.553 0 0 1-2.274 0Z" />
                  </svg>
                  <span>
                    <strong className="font-semibold text-gray-900">Elaboração de Conclusões.</strong> Chegar a conclusões fundamentadas com base nos resultados da pesquisa e discutir suas implicações para a área de estudo.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Seguir todas essas etapas de uma pesquisa científica foi crucial para garantir a validade, confiabilidade e relevância dos resultados obtidos.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900"> Ainda um pouco perdido?</h2>
              <p className="mt-6">
                  Fique calmo, abaixo explico todas as etapas da minha pesquisa de forma prática sem você precisar ler o artigo inteiro de 50 páginas.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br>
      </br>

      
      <div className='container-grid'>
        <div class="grid-container">
              <a href='/problema'>
                <div class="grid-item imagePesquisa"> 
              
                <div>
                  <p className='title'>Para entender o <br></br>PROBLEMA DE PESQUISA</p>
                  <br></br>
                  <p className='subtitle'> </p>
                </div>
              
              </div>
              </a>

              <a href='./bibliografico'>
                <div class="grid-item imagePesquisa"> 
              
                <div>
                  <p className='title'>Conheça a        <br></br>REVISÃO BIBLIOGRÁFICA</p>
                  <br></br>
                  <p className='subtitle'> </p>
                </div>
              
              </div>
              </a>

              <a href='/objetivo'>
                <div class="grid-item imagePesquisa"> 
              
                <div>
                  <p className='title'>Saiba o <br></br>OBJETIVO DE PESQUISA</p>
                  <br></br>
                  <p className='subtitle'> </p>
                </div>
              
              </div>
              </a>
              
              <a href='/metodologia'>
                <div class="grid-item imagePesquisa"> 
              
                <div>
                  <p className='title'>Entenda a <br></br>METODOLOGIA</p>
                  <br></br>
                  <p className='subtitle'> </p>
                </div>
              
              </div>
              </a>

              <a href='/coleta'>
                <div class="grid-item imagePesquisa"> 
              
                <div>
                  <p className='title'>Veja a <br></br> COLETA DE DADOS</p>
                  <br></br>
                </div>
              
              </div>
              </a>

              <a href='/analise'>
                <div class="grid-item imagePesquisa"> 
              
                <div>
                  <p className='title'>Estude a <br></br>ANÁLISE DE DADOS</p>
                  <br></br>
                </div>
              
              </div>
              </a>

              <a href='/interpretacao'>
                <div class="grid-item imagePesquisa"> 
              
                <div>
                  <p className='title'>Analise a <br></br>INTERPRETAÇÃO DE RESULTADOS</p>
                  <br></br>
                </div>
              
              </div>
              </a>

              <a href='/conclusao'>
                <div class="grid-item imagePesquisa"> 
              
                <div>
                  <p className='title'>Busque a <br></br>CONCLUSÃO</p>
                  <br></br>
                </div>
              
              </div>
              </a>
              
        </div>
      </div>


      

            













      


      
      
    </div>
    
    
  )
}




