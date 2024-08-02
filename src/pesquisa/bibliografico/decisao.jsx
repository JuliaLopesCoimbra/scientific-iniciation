
import React from 'react';
import { Accordion, AccordionTab } from 'primereact/accordion';

export default function Decisao() {
    return (
        <div className="card">
            <Accordion activeIndex={0}>
                <AccordionTab header="A razão das emoções: um ensaio sobre 'O erro de Descartes. TOMAZ, Carlos; GIUGLIANO, Lilian.">
                    <p className="m-0">
                    O artigo "A razão das emoções: um ensaio sobre 'O erro de Descartes'" discute o livro de António Damásio, que argumenta contra a separação cartesiana entre mente e corpo.  <br></br>Damásio propõe que emoções são cruciais para a racionalidade e para a tomada de decisões, apresentando evidências de casos clínicos e estudos neuropsicológicos. Ele introduz a hipótese do marcador somático, que sugere que emoções influenciam diretamente a razão.  <br></br> <br></br>
                    O artigo destaca a importância de integrar estudos neurobiológicos e psicológicos para compreender melhor o comportamento humano.
                    </p>
                    <br></br>
                    <p>Através desse conhecimento filosófico que obtive nesse artigo, eu acho legal vincular isso na tomada de decisão com o ChatGPT, pois é possível ao destacar a importância das emoções na racionalidade. Damásio argumenta que as emoções são fundamentais para decisões eficientes, sugerindo que sistemas de IA, como o ChatGPT, podem ser aprimorados ao incorporar modelos que simulam a influência das emoções humanas. Isso pode resultar em respostas mais empáticas e adequadas ao contexto emocional do usuário, melhorando a interação e a tomada de decisão assistida por IA.</p>
                    <br></br>
                    <p className="m-0">
                        Uma ótima leitura para quem gosta de entender a mente humana, para ler clique <a href='https://www.scielo.br/j/epsic/a/h9g4nvbPw4Q5hxtQJmBJP9y/'>aqui</a>
                    </p>
                   
                </AccordionTab>
               
            </Accordion>
            <Accordion activeIndex={0}>
                <AccordionTab header="Uma breve história da tomada de decisão.  BUCHANAN, Leigh; O’CONNELL, Andrew">
                    <p className="m-0">
                    O artigo explora a evolução da tomada de decisão desde suas origens até os dias atuais, destacando as mudanças nas abordagens e nas ferramentas utilizadas ao longo do tempo.
                    </p>
                    <p className="m-0">
                    Inicialmente, a tomada de decisão era intuitiva e baseada em experiências individuais. Com o tempo, as civilizações, como a grega, começaram a desenvolver métodos mais estruturados, introduzindo a lógica e a filosofia para decisões racionais.                    
                    </p>
                    <br></br>
                    <p className="m-0">
                    Durante a Revolução Industrial, a administração científica de Frederick Taylor trouxe eficiência e padronização, com técnicas como a análise de custo-benefício e estatísticas.

                    No século XX, a pesquisa operacional e a teoria dos jogos influenciaram a tomada de decisões complexas, especialmente em contextos militares e empresariais. Com a era digital e o big data, algoritmos e inteligência artificial passaram a permitir a análise de grandes volumes de dados para prever resultados, levantando questões éticas sobre a transparência e responsabilidade das decisões automatizadas.
                    </p>
                    <br></br>
                    <p className="m-0">
                    O artigo destaca a necessidade de equilibrar inovação tecnológica e responsabilidade ética para um desenvolvimento sustentável das tecnologias de tomada de decisão. Você pode ver mais clicando <a href='https://www.academia.edu/9158812/UMA_BREVE_HISTÓRIA_DA_TOMADA_DE_DECISÃO'>aqui</a>
                    </p>
                   
                </AccordionTab>
               
            </Accordion>
        </div>
    )
}
        