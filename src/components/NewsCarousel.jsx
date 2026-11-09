import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
export default function NewsCarousel({ noticias }) {
  return <Carousel interval={null}>
    {noticias.map(noticia => <Carousel.Item key={noticia.id}>
      <img className="d-block w-100" src={noticia.imagem} alt="" height="260" />
      <Carousel.Caption>
        <h2>{noticia.titulo}</h2>
        <p>{noticia.descricao}</p>
        <Button as="a" href={noticia.link} variant="light" size="sm">Ver pisos</Button>
      </Carousel.Caption>
    </Carousel.Item>)}
  </Carousel>;
}
