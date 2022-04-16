import React from 'react';

import { 
  Container,
  Condition,
  Row,
  HeartIcon,
  DispatchTag,
  PriceCard,
  PriceRow,
  InstallmentsInfo,
  StackStatus,
  MethodCard,
  TruckIcon,
  Actions,
  Button,
  Benefits,
  ShieldIcon,
} from './styles';

const ProductAction: React.FC = () => {
  return(
    <Container>
      <Condition>Novo</Condition>

      <Row>
        <h1>Camiseta Branca de Marca Desconhecida</h1>
        <HeartIcon/>
      </Row>  

      <DispatchTag>Enviando normalmente</DispatchTag>

      <PriceCard>
        <PriceRow>
          <span className="symbol">R$</span>
          <span className="fraction">34</span>
          <span className="cents">99</span>
        </PriceRow>

        <InstallmentsInfo>em 3x de R$11,67</InstallmentsInfo>

      </PriceCard>


      <StackStatus>Estoque dísponivel</StackStatus>


      <MethodCard>
        <TruckIcon/>



        <div>
          <span className="title">Frete grátis</span>
          <span className='details'>Benefício Lorem Input</span>

          <a href="#" className="more">
            Ver mas opções  
          </a>

        </div>
      </MethodCard>

      <Actions>
        <Button solid >Comprar agora</Button>
        <Button >Adicionar no carrinho</Button>
      </Actions>

      <Benefits>
        <li>
          <ShieldIcon/>
          <p>
            Compra Garantida, receba o produto que está esperando ou devolvemos o dinheiro.
          </p>
        </li>
      </Benefits>
    </Container>
  );
}

export default ProductAction;