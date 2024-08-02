import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";

export default function Conclusao() {
  return (
    <div className="bg-white">
      <div className="bg-white">
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
             
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl " >
                Conclusão
                <br />
              </h2>
              <p className="mt-6  leading-8 text-black-300">
              A conclusão de um artigo científico é fundamental porque sintetiza os principais achados do estudo, proporcionando uma visão clara e concisa dos resultados. A conclusão amarra todos os aspectos do artigo, fornecendo uma visão final abrangente e destacando a relevância e a contribuição da pesquisa.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-explica-problema bg-white mt-8 text-black">
        <div className="grid-total bg-white">
          <div className="grid-text">
          Desde os primeiros milênios, as decisões humanas moldaram eventos significativos, influenciando crises, avanços e o curso da história. Com o desenvolvimento da Inteligência Artificial, especialmente o ChatGPT, uma ferramenta revolucionária, a maneira como tomamos decisões está se transformando. Este projeto de pesquisa explora o papel do ChatGPT, destacando seu impacto na tomada de decisões e produtividade.
          </div>
          <div className="grid-text">
          O ChatGPT oferece suporte crucial em situações de conhecimento limitado, proporcionando respostas rápidas e precisas. No âmbito profissional, a ferramenta se mostrou eficaz na resolução de problemas técnicos, elaboração de planos de aula, estratégias de marketing, desenvolvimento de projetos acadêmicos e planos de desenvolvimento de funcionários. Além disso, o ChatGPT tem um impacto significativo em decisões pessoais, fornecendo suporte emocional e conselhos práticos que melhoram a confiança e a autoestima.
         </div>
          <div className="grid-text">
          Os entrevistados reconheceram o ChatGPT como um recurso essencial, vendo-o como um apoio valioso para tomar decisões informadas. O site apresenta detalhadamente a pesquisa, compartilhando descobertas e orientações sobre o uso eficiente do ChatGPT, melhorando a transparência e acessibilidade da ferramenta.
          </div>
          <div className="grid-text" >
          A seção <a href='./sobre'> <span className='highlight'>"Sobre Mim"</span></a> oferece uma visão pessoal da minha trajetória, humanizando o conteúdo e criando uma conexão emocional com os visitantes. Compartilhando minhas experiências e conquistas para inspira os visitantes a perseguirem seus sonhos com determinação, destacando valores como resiliência e inovação.
          </div>
        </div>
      </div>
    </div>
  );
}
