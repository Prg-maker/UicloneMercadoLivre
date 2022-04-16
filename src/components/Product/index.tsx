import React from "react";

import TshirtImg from "../../assets/tshirt.png";
import ProductAction from "../ProductAction";
import {SellerInfo} from "../SellerInfo";

import { 
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from "./styles";

export function Product() {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img src={TshirtImg} alt="T-Shirt" />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction/>
          <SellerInfo/>
          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
}

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Lorem</p>
        <p className="description">Receba o seu produto que você esta esperando o devolvemos o seu dinheiro! </p>
      </span>

      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">sem garantia </p>
      </span>
    </div>
    <a href="#">Saiba mais sobre garantia</a>
  </Section>
)

const Info = () => (
  <Description>
    <h2>Descrição</h2>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
      veritatis at odit assumenda, autem consectetur debitis sit possimus
      beatae. Laudantium, ratione deleniti itaque quisquam magni ullam in
      repellendus doloremque vitae!
      <br />
      <br />
      Items inclusos: <br />
      - 1x LED <br />
      - 1x Panela <br />
      - 1x Fio <br />
      - 1x Pão de queijo <br />
      <br />
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit nisi
      quo libero aperiam distinctio delectus numquam perspiciatis, incidunt
      nesciunt excepturi impedit molestiae illum mollitia totam assumenda,
      obcaecati modi neque sit! Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Assumenda inventore ab eveniet et fugiat eius quae
      aspernatur, quod rem sed debitis odit beatae veritatis natus saepe nisi
      voluptas perspiciatis ex? Repellendus fugit doloremque porro iure ab
      cupiditate illo, assumenda quo provident repudiandae. Tenetur corrupti
      officiis deserunt debitis aut cumque, a alias, voluptates quod natus
      numquam vero fugit atque deleniti commodi.
    </p>
  </Description>
);
