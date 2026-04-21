import { Header } from './components/Header';
import { Article } from './components/Article';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  const postPrincipal = {
    titulo: "Descobrindo as Praias do Nordeste",
    data: "15 de agosto de 2025",
    conteudo: [
      "Nesta viagem inesquecível, explorei as maravilhosas praias do litoral nordestino. A água cristalina e a areia branca formam um cenário de tirar o fôlego, perfeito para relaxar e esquecer a correria da cidade.",
      "Além das paisagens incríveis, a receptividade das pessoas e a culinária local são atrações à parte. Experimentar os pratos típicos da região com o pé na areia foi uma das melhores experiências da viagem. Recomendo a todos!"
    ],
    imagem: {
      src: "carneiros.jpg",
      alt: "Foto da Praia de Carneiros no Nordeste",
      legenda: "Praia de Carneiros, Pernambuco - Um verdadeiro paraíso."
    }
  };

  const linksRelacionados = [
    { titulo: "Dicas para economizar em passagens aéreas", link: "#post1" },
    { titulo: "O que levar na mala para o verão", link: "#post2" },
    { titulo: "Top 5 pousadas no litoral baiano", link: "#post3" }
  ];

  return (
    <div className="app-container">
      <Header tituloBlog="Meu Blog de Viagens" />
      
      <main>
        <Article 
          titulo={postPrincipal.titulo}
          data={postPrincipal.data}
          conteudo={postPrincipal.conteudo}
          imagem={postPrincipal.imagem}
        />
        
        <Sidebar postsRelacionados={linksRelacionados} />
      </main>

      <Footer />
    </div>
  );
}

export default App;