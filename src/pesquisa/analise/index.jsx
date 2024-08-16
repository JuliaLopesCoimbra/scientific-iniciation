import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";

export default function Analise() {
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
                  <stop stopColor="white" />
                  <stop offset={1} stopColor="red" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl " >
                Análise dos Resultados
                <br />
              </h2>
              <p className="mt-6  leading-8 text-gray-300">
              A análise de resultados em um artigo científico é crucial porque valida hipóteses, interpreta dados, fundamenta conclusões e garante a reprodutibilidade. Isso é essencial para a credibilidade, validade e impacto do estudo.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-explica-problema bg-black mt-8">
        <div className="grid-total bg-black">
          <div className="grid-text">
          O uso do ChatGPT revelou-se um recurso valioso e multifacetado para diversos entrevistados, ajudando-os a tomar decisões informadas em situações onde faltava conhecimento. 
          </div>
          <div className="grid-text">
          Na área técnica, a ferramenta foi essencial para resolver <span className='highlight' style={{ color: 'red', fontWeight: 'bold' }}>problemas de código</span>, identificar erros em SGBDs e guiar ações na AWS, reduzindo o tempo de resolução de dias para minutos. 
         </div>
          <div className="grid-text">
          Além disso, o ChatGPT auxiliou na <span className='highlight' style={{ color: 'red', fontWeight: 'bold' }}>criação de planos de aula dinâmicos</span> para um professor de inglês.
          </div>
          <div className="grid-text">
          Forneceu <span className='highlight' style={{ color: 'red', fontWeight: 'bold' }}>estratégicas de marketing</span> eficazes para um gerente de vendas.
          </div>
          <div className="grid-text">
          Apoiou estudantes em seus <span className='highlight' style={{ color: 'red', fontWeight: 'bold' }}>projetos acadêmicos</span>, oferecendo ideias e referências detalhadas.
          </div>
          <div className="grid-text">
          A ferramenta também se destacou em <span className='highlight' style={{ color: 'red', fontWeight: 'bold' }}>decisões pessoais</span>. Um jovem profissional recebeu conselhos práticos para melhorar seu desempenho no trabalho.
          </div>
          
          <div className="grid-text">
          E outro usuário encontrou ajuda na <span className='highlight' style={{ color: 'red', fontWeight: 'bold' }}>escolha de um notebook ideal </span>adequado às suas necessidades.
          </div>
          
          <div className="grid-text">
          Esses exemplos demonstram o impacto positivo do ChatGPT em diversas esferas da vida, promovendo eficiência, inovação e confiança tanto no âmbito profissional quanto pessoal.
          </div>
          <div className="grid-text" >
          Em resumo, o ChatGPT mostrou-se uma ferramenta versátil e eficaz, proporcionando soluções rápidas e personalizadas, refletindo as experiências únicas de cada usuário e atendendo a uma ampla gama de necessidades.          
          </div>
          
          <div className="grid-text">
          Todas essas situações foram estudadas e analisadas com estratégia, clique <a href='./aprenda'> <span className='highlight' style={{ color: 'red', fontWeight: 'bold' }}>[aqui]</span></a> para aprender com a pesquisa
          </div>
          <div className="grid-text">
            Ou para saber sobre a conclusão da pesquisa, clique <a href='./conclusao'> <span className='highlight' style={{ color: 'red', fontWeight: 'bold' }}>[aqui]</span></a>   
          </div>
        </div>

      </div>
    </div>
  );
}
