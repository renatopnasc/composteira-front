import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;

  nav {
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1rem;

    img {
      width: 75px;
      height: 75px;
    }
  }

  main {
    height: calc(100vh - 17rem);
    background: rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 25px -14px rgba(0, 0, 0, 0.75);
    margin: 5rem auto;
    padding: 2.5rem;

    max-width: 70rem;
    width: 100%;

    border-radius: 8px;

    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 3rem;
      line-height: 1.6;
      text-transform: uppercase;
    }

    footer p {
      font-size: 2rem;
      line-height: 1.6;
      font-weight: 600;
    }

    footer p span {
      font-weight: 400;
    }

    @media (width <= 768px) {
      height: 100vh;
    }
  }
`
export const ComposterDataContainer = styled.div`
  width: 100%;

  height: 100%;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (width <= 768px) {
    & {
      flex-direction: column;
    }
  }
`

const STATUS_COLOR = {
  yellow: 'YELLOW_500',
  red: 'RED_500',
  black: 'black',
  green: 'DARK_GREEN',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLOR
}

export const ComposterDataCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  width: 100%;

  padding: 3rem;
`

const StatusBase = styled.h2<StatusProps>`
  font-size: 4rem;
  line-height: 1.6;
`

export const TemperatureContainer = styled(StatusBase)`
  color: ${(props) => props.theme[STATUS_COLOR[props.statusColor]]};
`

export const DistanceContainer = styled(StatusBase)`
  color: ${(props) => props.theme[STATUS_COLOR[props.statusColor]]};
`

export const HumidityOContainer = styled(StatusBase)`
  color: ${(props) => props.theme[STATUS_COLOR[props.statusColor]]};
`
