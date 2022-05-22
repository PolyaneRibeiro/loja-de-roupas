import { Button } from "../components/Button";
import { Title } from "../components/Title";
import { Container } from '../components/Container'
import { BoxTendencia } from '../components/BoxTendencia'


export default function Home() {
  return (
    <>
    <Container>
      <img src='./banner.jpg' />
    </Container>
    <BoxTendencia/>
    </>
  )
}
