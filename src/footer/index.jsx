import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter style={{ backgroundColor: 'black', color: 'white' }} className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom' style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
        <div>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                Iniciação Cientifíca.
              </h6>
              <p>
                Esse site foi desevolvido com o intuito de mostrar como o ChatGPT pode ser importante para ajudar as pessoas a tomarem decisões melhores com a tecnologia.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Aprenda com a Pesquisa</h6>
              <p>
                <a href='#aprendaaqui' className='text-reset'>
                  Como tomar desicões com o ChatGPT
                </a>
              </p>
              <br></br>
              <p>
                <a href='#respostas' className='text-reset'>
                  Respostas dos entrevistados
                </a>
              </p>
              <br></br>
              <p>
                <a href='#prompt' className='text-reset'>
                  O prompt do ChatGPT
                </a>
              </p>
              
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Saiba mais</h6>
              <p>
                <a href='/problema' className='text-reset'>
                  Problema de pesquisa
                </a>
              </p>
              <br></br>
              <p>
                <a href='/bibliografico' className='text-reset'>
                  Levantamento Bibliográfico
                </a>
              </p>
              <br></br>
              <p>
                <a href='/coleta' className='text-reset'>
                  Coleta de Dados
                </a>
              </p>
              <br></br>
              <p>
                <a href='/interpretacao' className='text-reset'>
                 Interpretação dos Resultados
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contato</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Franca, SP. Brasil
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                juliacristinalopes2607@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 55 16 99284-8085    
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright: 
        <a className='text-reset fw-bold' href=''>
           Julia Lopes
        </a>
      </div>
    </MDBFooter>
  );
}
