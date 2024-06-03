import { ComposterData } from '../../App'
import logo from '../../assets/img/logo.png'
import {
  ComposterDataCard,
  ComposterDataContainer,
  DistanceContainer,
  HomeContainer,
  HumidityOContainer,
  TemperatureContainer,
} from './styles'
import { Thermometer, Drop, Ruler } from 'phosphor-react'

export function Home({ temperatura, nome, umidade, distancia }: ComposterData) {
  return (
    <HomeContainer>
      <header>
        <nav>
          <a href="">
            <img src={logo} alt="" />
          </a>
        </nav>
      </header>

      <main>
        <h1>{nome}</h1>

        <ComposterDataContainer>
          <ComposterDataCard>
            <Thermometer size={60} />
            <div>
              <TemperatureContainer
                statusColor={temperatura > 30 ? 'red' : 'green'}
              >
                {temperatura}&deg;C{' '}
              </TemperatureContainer>
            </div>
          </ComposterDataCard>

          <ComposterDataCard>
            <Drop size={60} />
            <div>
              <HumidityOContainer statusColor={umidade > 70 ? 'red' : 'green'}>
                {umidade}&#37;
              </HumidityOContainer>
            </div>
          </ComposterDataCard>

          <ComposterDataCard>
            <Ruler size={60} />
            <div>
              <DistanceContainer
                statusColor={distancia < 10 ? 'yellow' : 'green'}
              >
                {distancia}cm
              </DistanceContainer>
            </div>
          </ComposterDataCard>
        </ComposterDataContainer>

        <footer>
          <p>
            Ciclos: <span>0</span>
          </p>
        </footer>
      </main>
    </HomeContainer>
  )
}
