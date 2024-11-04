import React from 'react';
import './styles.css';

const Publicacao = () => {
  const downloadPdf = () => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/relatorio.pdf`;
    link.download = 'ArtigoJulia.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-black px-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white text-center">Publicação</h1>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 text-center">
        Se você é um leitor ou tem curiosidade em ler meu artigo científico completo, você pode encontrá-lo aqui abaixo. Assim, poderá desfrutar do meu estudo na íntegra.
      </p>
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8 text-center">
        Baixe o artigo científico no botão a seguir
      </p>
      <button onClick={downloadPdf} className="glow-on-hover">
        download
      </button>
    </div>
  );
};

export default Publicacao;
