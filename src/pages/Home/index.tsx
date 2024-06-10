import { ComposterData } from '../../App'
import logo from '../../assets/img/logo.png'
import {
  ComposterDataCard,
  ComposterDataContainer,
  DistanceContainer,
  HomeContainer,
  HomeContent,
  HumidityOContainer,
  LegendCard,
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

      <HomeContent>
        <main>
          <h1>{nome}</h1>

          <ComposterDataContainer>
            <ComposterDataCard>
              <Thermometer size={60} />
              <div>
                <TemperatureContainer
                  statusColor={temperatura > 25 ? 'red' : 'black'}
                >
                  {temperatura}&deg;C{' '}
                </TemperatureContainer>
              </div>
            </ComposterDataCard>

            <ComposterDataCard>
              <Drop size={60} />
              <div>
                <HumidityOContainer statusColor={umidade < 70 || umidade > 85 ? 'blue' : 'black'}>
                  {umidade}&#37;
                </HumidityOContainer>
              </div>
            </ComposterDataCard>

            <ComposterDataCard>
              <Ruler size={60} />
              <div>
                <DistanceContainer
                  statusColor={distancia < 10 ? 'green' : 'black'}
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

        <aside>
          <h2>Legenda</h2>

          <div>
            <LegendCard>
              <Thermometer size={40} />
              <span>20&deg;C - 25&deg;C</span>
            </LegendCard>

            <LegendCard>
              <Drop size={40} />
              <span>70% - 85%</span>
            </LegendCard>

            <LegendCard>
              <Ruler size={40} />
              <span>&gt;10cm</span>
            </LegendCard>
          </div>
        </aside>
      </HomeContent>
    </HomeContainer>
  )
}
