import {
    MDBCarousel,
    MDBCarouselItem,
    MDBCarouselCaption,
  } from "mdb-react-ui-kit";
export default function Aprenda() {
    return (
        <div>
      <div>
        
      </div>
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
    )
}
