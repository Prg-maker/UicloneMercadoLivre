
import {
  Container,
  Title,
  LocationCard,
  LocationIcon,
  ReputationCard,
  ReputataionThermomete,
  ReputationRow,
  SupportIcon,
  ClockIcon,
  More,

} from './styles';

export function SellerInfo(){
  return(
    <Container>
      <Title>Informações sobre o vendendor</Title>

      <LocationCard>
        <LocationIcon/>

        <div>
          <p>Localização</p>
          <strong>São Paulo, São Paulo</strong>
        </div>

      </LocationCard>

      <ReputationCard>
        <ReputataionThermomete>
          <li/>
          <li/>
          <li/>
          <li className="active"/>
          <li />
        </ReputataionThermomete>

        <ReputationRow>
          <div>
            <strong>561</strong>
            <span>Presta um attendimento</span>
          </div>

          <div>
            <strong><SupportIcon/></strong>
            <span>vendas nos últimos 4 messes</span>
          </div>

          <div>
            <strong><ClockIcon/></strong>
            <span>vendas nos últimos 4 messes</span>
          </div>
        </ReputationRow>
      
      </ReputationCard>

      <More href="#">Ver mais dados do vendedor</More>
    </Container>
  )
}
