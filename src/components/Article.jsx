export function Article({ titulo, data, conteudo, imagem }) {
  return (
    <article>
      <h2>{titulo}</h2>
      <time dateTime={data}>{data}</time>
      
      {conteudo.map((paragrafo, index) => (
        <p key={index}>{paragrafo}</p>
      ))}
      
      <figure>
        <img src={imagem.src} alt={imagem.alt} />
        <figcaption>{imagem.legenda}</figcaption>
      </figure>
    </article>
  );
}