import './styles.css';
import styled from 'styled-components';



const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const GridItem = styled.div`
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  padding: 20px;
  text-align: center;
`;


export default function Aprenda() {


  return (
    <div className="bg-white">

<div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Aprenda a tomar decisões com o ChatGPT
            </h1>
            <p className="mt-4 text-xl text-gray-500">
            Aqui, você encontrará lições de experiências pessoais sobre o auxílio do ChatGPT nas tomadas de decisões.
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          alt=""
                          src="././img/teacher.png"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="././img/dev.png"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="././img/codigo.png"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="././img/aws.png"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="././img/tecno2.png"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="././img/tecno.png"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          alt=""
                          src="././img/graphics.png"
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#aprenda"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
              >
                Começar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>






    <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
    <p className=" text-xl leading-8 text-gray-700  text-center">
    <b>Os entrevistados compartilharam diversas situações em que o GPT os auxiliou, revelando histórias fascinantes sobre suas experiências.</b>
      </p>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              "Dou aulas de inglês e o ChatGPT conseguiu me ajudar a transformar minhas aulas, que eram monótonas e sem criatividade, em estratégicas e chamativas.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt=""
              src="././img/teacher.png"
              className="mx-auto h-10 w-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
             
            
              <div className="text-gray-600">Professora de Inglês</div>
            </div>
          </figcaption>
        </figure>
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              "Tinha muito dificuldade em saber como funcionava a plataforma da AWS em meu trabalho, o ChatGPT conseguiu me guiar de maneira muito rápido para solucionar os meus erros a tornarem soluções”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt=""
              src="././img/aws.png"
              className="mx-auto h-10 w-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
             
            
              <div className="text-gray-600">Programador</div>
            </div>
          </figcaption>
        </figure>
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              "Eu não tinha ideia de como escolher um notebook ideal para as minhas necessidades, mas o ChatGPT conseguiu me recomendar uma máquina que atendia perfeitamente às minhas exigências, sem qualquer intenção de obter vantagem em cima disso.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt=""
              src="././img/tecno2.png"
              className="mx-auto h-10 w-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
             
            
              <div className="text-gray-600">Universitária</div>
            </div>
          </figcaption>
        </figure>
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              "Precisava fazer um trabalho sobre cidades inteligentes na faculdade e eu não tinha nenhum conhecimento sobre o assunto, busquei essas informações no ChatGPT e ele me ofereceu um conhecimento para prosseguir com o projeto.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt=""
              src="././img/graphics.png"
              className="mx-auto h-10 w-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
             
            
              <div className="text-gray-600">Universitário</div>
            </div>
          </figcaption>
        </figure>
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              "Eu estava em um novo emprego e precisava ser promovido, mas não tinha um bom controle emocional. Decidi pedir algumas dicas ao ChatGPT sobre como agir de maneira correta para alcançar esse objetivo. Ele me ofereceu orientações e comportamentos que me ajudaram a conquistar a vaga.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt=""
              src="././img/dev.png"
              className="mx-auto h-10 w-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
             
            
              <div className="text-gray-600">Desenvolvedor</div>
            </div>
          </figcaption>
        </figure>
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              "As vendas da minha empresa estavam em declínio, e eu sabia que precisava de uma mudança. O GPT me ofereceu dicas valiosas que impulsionaram significativamente as vendas da empresa"
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt=""
              src="././img/dev.png"
              className="mx-auto h-10 w-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
             
            
              <div className="text-gray-600">Desenvolvedor</div>
            </div>
          </figcaption>
        </figure>
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              "Eu estava com dificuldade para escolher o título do meu Trabalho de Conclusão de Curso e não conseguia pensar em algo adequado. Pedi ao GPT que criasse um título, e ele se encaixou perfeitamente no contexto do meu trabalho."
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt=""
              src="././img/graphics.png"
              className="mx-auto h-10 w-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
             
            
              <div className="text-gray-600">Universitário</div>
            </div>
          </figcaption>
        </figure>
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              "Como gerente, eu precisava desenvolver um plano de progressão individual para meus funcionários, mas não sabia por onde começar. Pedi auxílio ao GPT, que me ajudou a criar um plano eficaz. Hoje, vejo que essa iniciativa faz uma diferença significativa em nossa empresa.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt=""
              src="././img/tecno2.png"
              className="mx-auto h-10 w-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
             
            
              <div className="text-gray-600">Gerente</div>
            </div>
          </figcaption>
        </figure>
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
            <p>
              "Trabalho com React e muitas vezes perdia horas procurando por erros no código. Desde que comecei a utilizar o GPT em minhas atividades, meu tempo se tornou muito mais produtivo, pois ele identifica rapidamente os erros, permitindo que eu os corrija em segundos.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt=""
              src="././img/dev.png"
              className="mx-auto h-10 w-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
             
            
              <div className="text-gray-600">Programador</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>


    <div className='container-grid' id='respostas'>
        <div class="grid-container">
             
                <div class="grid-item imagePesquisa"> 
              
                <div>
                  <p className='title'> <p className='cem'>100% </p> dos entrevistados mudaram sua forma de tomar decisões</p>
                  <br></br>
                  <p className='subtitle'> </p>
                </div>
              
              </div>
              

             
                <div class="grid-item imagePesquisa meio"> 
              
                <div>
                  <p className='title'>Os entrevistados afirmaram que não se consideravam produtivos sem a internet, o que demonstra que o público escolhido foi ideal para passar pelo teste utilizando uma IA em sua rotina.</p>
                  <br></br>
                  <p className='subtitle'> </p>
                </div>
              
              </div>
             

            
                <div class="grid-item imagePesquisa"> 
              
                <div>
                  <p className='title'><p className='cem'>20% </p> dos entrevistados tinham medo de usar a plataforma por medo de oferecer dados incorretos ou plagiados</p>
                  <br></br>
                  <p className='subtitle'> </p>
                </div>
              
              </div>
             
              
              
                <div class="grid-item imagePesquisa"> 
              
                <div>
                  <p className='title'><p className='cem'>70% </p> dos entrevistados utilizavam outros sites para consultas e passaram a utilizar o ChatGPT para soluções em uma fração de tempo</p>
                  <br></br>
                  <p className='subtitle'> </p>
                </div>
              
              </div>
              
              
                <div class="grid-item imagePesquisa meio"> 
              
                <div>
                  <p className='title'>Todos pretendem continuar usando a plataforma para tomar decisões</p>
                  <br></br>
                </div>
              
              </div>
             

             
                <div class="grid-item imagePesquisa"> 
              
                <div>
                  <p className='title'><p className='cem'>80% </p> dos entrevistados classificam o ChatGPT como um brilhante insight para seus projetos </p>
                  <br></br>
                </div>
              
              </div>
              

              
                <div class="grid-item imagePesquisa meio"> 
              
                <div>
                  <p className='title'>Os entrevistados confessaram que não utilizavam as respostas do GPT na íntegra, mas sim como base para desenvolver suas próprias ideias</p>
                  <br></br>
                </div>
              
              </div>
              

             
                <div class="grid-item imagePesquisa"> 
              
                <div>
                  <p className='title'><p className='cem'>100% </p> dos entrevistados tiveram uma grande mudança em sua rotina, aumentando a produtividade e a segurança dos dados </p>
                  <br></br>
                </div>
              
              </div>
             
            
                <div class="grid-item imagePesquisa"> 
              
                <div>
                  <p className='title'><p className='cem'>40% </p> dos entrevistados acham que o ChatGPT precisa ser aprimorado em algumas areas</p>
                  <br></br>
                </div>
              
              </div>
              
              
        </div>
      </div>
   

      <p className=" text-xl leading-8 text-gray-700  text-center naoso">
    <b>Nem todas as respostas foram positivas e gratificantes. Durante a entrevista, alguns indicaram que é necessário escrever muito bem as palavras para obter respostas satisfatórias do GPT. Isso me fez pensar: se os entrevistados, que eram pessoas da área de computação, já encontraram dificuldades, como as pessoas sem esse tipo de conhecimento conseguiriam ter experiências similares no GPT?</b>
      </p>
      


   


    <div className="relative isolate overflow-hidden bg-white px-6 py-0 lg:overflow-visible lg:px-0 " id='prompt'>
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
              <p className="text-base font-semibold leading-7 text-indigo-600">UM POUCO SOBRE O TRANSFORMER</p>
              <h1 className=" text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Como funciona o prompt do ChatGPT</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
              Antes de tudo, o chat não é inteiramente composto por engenharia de prompt, mas essa técnica é usada para interagir eficazmente com o GPT e obter resultados desejados. A engenharia de prompt envolve criar e refinar textos de entrada para obter respostas precisas e adequadas de modelos de linguagem como o GPT. Embora o GPT, incluindo versões como o GPT-4, seja treinado em grandes volumes de texto para compreender e gerar linguagem natural, a interação eficaz com ele pode afetar significativamente os resultados. Portanto, a engenharia de prompt é essencial para maximizar a utilidade dessas interações. A arquitetura do GPT é baseada no modelo Transformer, que usa mecanismos de atenção para processar texto e lidar com dependências de longo alcance e contextos complexos.
              </p>
              <p className=" text-xl leading-8 text-gray-700 ">
                Um exemplo do Transformer é possível ver no <b>código ao lado</b>, foi importada a classe 'GPT2Tokenizer' para tokenizar o texto e 'GPT2LMHeadModel' para carregar o modelo GPT-3.5. <br></br>
                Em seguida, o tokenizador e o modelo pré-treinado do GPT-3.5 foram carregados, e um texto de entrada foi definido.<br></br>
                Assim, o texto de entrada foi tokenizado e convertido em tokens. O modelo foi então usado para gerar texto com base no texto de entrada, e as saídas geradas foram decodificadas em forma de texto na linguagem do usuário.
                Com esse funcionamento da estrutura de Rede Neural do GPT, pode-se ver, uma parte, na prática, como é o sistema Transformer e no que ele se baseia ao utilizar a ferramenta.
              </p>
            </div>
          </div>
        </div>
        
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            src="././img/transformer.png"
            alt=""
          />
        </div>
      </div>
    </div>


    <p className=" text-center naoso ccontainer-grid">
    Além das considerações mencionadas, é importante destacar que o ChatGPT não só facilita o processo de tomada de decisões, mas também oferece a possibilidade de aprimorar a qualidade dessas decisões. Pensando nisso, ao utilizar prompts bem estruturados e específicos, os usuários podem explorar o potencial máximo da ferramenta, direcionando-a para fornecer respostas mais precisas e relevantes. Logo,  a elaboração cuidadosa dos prompts permite que o ChatGPT entenda melhor o contexto e as necessidades do usuário, resultando em insights mais alinhados com a situação apresentada. É possível aprender com as dicas abaixo:
      </p>
   

    <div className='ccontainer-grid ' id='aprendaaqui'>
    <GridContainer>
      <GridItem className='grid-item title bloco bg-black'>
  
                      Procure escrever os <b className='cem'>VERBOS NO IMPERATIVO </b> 
                       O ChatGPT também possui limites e para oferecer os dados corretos ele precisa saber as ações que se pede
      </GridItem >
      <GridItem className='grid-item title  bloco bg-black'>Esclareça sua pergunta com mais detalhes, como por exemplo, em vez de perguntar: "Como melhorar meu código?", pergunte: <b className='menor'>"Como posso otimizar este trecho de código React para melhorar a performance?"</b></GridItem>
      <GridItem className='grid-item title  bloco bg-black'>Use o gpt para compartilhar ideias com outras pessoas, <b className='cem'>compartilhe o link </b> da sessao com seus amigos para eles poderem comaprtilhar com as mesmas ideias</GridItem>
      <GridItem className='grid-item title  bloco bg-black'>Aprimore seus conhecimentos com o ChatGPT. Primeiro, <b className='menor'>pergunte o que é</b> e entenda para que serve. Em seguida, <b className='menor'>pergunte como ele pode ser usado</b> em seu projeto.</GridItem>
      <GridItem className='grid-item title  bloco bg-black'>Obtenha respostas no formato que você deseja, já estruturadas de acordo com sua necessidade. Por exemplo, você pode solicitar que as informações sejam apresentadas em formato de <b className='menor'>lista</b>, em <b className='menor'>texto corrido</b>, ou de outra forma específica. Isso facilita a compreensão e a aplicação do conteúdo nas suas atividades.</GridItem>
      <GridItem className='grid-item title  bloco bg-black'>Tenha mais informações caso tiver uma resposta ruim e peça <b className='menor'>"Pode explicar isso de outra forma?"</b> ou <b className='menor'>"Você pode fornecer um exemplo prático disso?"</b></GridItem>
      <GridItem className='grid-item title  bloco bg-black'>Use palavras-chave conforme suas necessidades, como <b className='menor'>DETALHES, EXPLIQUE, ou RESUMA</b> para orientar as respostas do ChatGPT. Essas palavras ajudam a direcionar o foco da resposta</GridItem>
      <GridItem className='grid-item title  bloco bg-black'><b className='cem'>Forneça o contexto </b>(suba imagens, textos, códigos) no prompt do ChatGPT juntamente com o seu pedido, não peça somente mas coloque o conteúdo em si para ser modificado</GridItem>
      <GridItem className='grid-item title  bloco bg-black'>Use cenarios como exemplos para entender melhor a sua necessidade <b className='menorzin'>"Se eu estiver desenvolvendo uma aplicação web que precisa escalar rapidamente, quais são os melhores frameworks para usar?"</b></GridItem>
    </GridContainer>
    </div>

    <p className="    text-center naoso preto">
    Dessa forma, é possível ver que o ChatGPT, quando utilizado de maneira estratégica, não só auxilia nas decisões, mas também contribui para que essas decisões sejam fundamentadas, ponderadas e adaptadas às particularidades de cada situação. A explicação do prompt, portanto, se torna uma ferramenta essencial para maximizar os benefícios que o ChatGPT pode oferecer, tornando-o um aliado indispensável no cotidiano de quem busca tomar decisões melhores e mais informadas.
      </p>
      <img
                          alt=""
                          src="././img/pp.jpg"
                          className="mx-auto block w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
                        />
      <p className="    text-center naoso preto">
      Esse aspecto reforça a importância de uma educação direcionada ao uso eficaz da tecnologia, onde os usuários aprendem a explorar o potencial do ChatGPT de maneira consciente e produtiva. Assim, ao compreender a lógica por trás da construção de prompts, os usuários podem aprimorar continuamente suas interações com a IA, garantindo que as decisões tomadas sejam cada vez mais inteligentes e bem fundamentadas por qualquer pessoa, <b className='seja'>seja de qual idade, conhecimento ou profissão.</b>
      </p>

    <p className="    text-center naoso preto finalize">
    <b>Convido você a entender mais a fundo minha pesquisa e a ler um resumo sobre como foi cada etapa deste projeto. <a href='/pesquisa'>Clique aqui para saber mais.</a></b>
      </p>

    </div>
  )
}
