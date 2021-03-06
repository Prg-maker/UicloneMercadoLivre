import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { Product } from '../Product';

import { Container  , Wrapper} from './styles';

export function Layout() {
  return (
    <Container>
        <Header/>


        <Wrapper>
          <Product/>
        </Wrapper>

        <Footer/>
    </Container>
  )
}
