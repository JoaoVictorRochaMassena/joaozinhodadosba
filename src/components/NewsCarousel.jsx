import { Carousel, Button } from 'react-bootstrap';

export default function NewsCarousel({ noticias }) {
  return (
    <Carousel className="news-carousel" interval={null} indicators controls>
      {noticias.map(noticia => (
        <Carousel.Item key={noticia.id}>
          <img className="d-block w-100 slide-image" src={noticia.imagem} alt="" />
          <Carousel.Caption className="slide-caption text-start">
            <span className="slide-kicker">Em destaque</span>
            <h2 className="h3 fw-bold mt-2">{noticia.titulo}</h2>
            <p>{noticia.descricao}</p>
            <Button as="a" href={noticia.link} variant="light" size="sm" className="fw-semibold">{noticia.acao}</Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
