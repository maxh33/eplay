import ProductsList from '../../components/ProductsList'
import {
  useGetActionGamesQuery,
  useGetSportsGamesQuery,
  useGetSimulationGamesQuery,
  useGetRPGGamesQuery,
  useGetFightingGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: gamesRPG } = useGetRPGGamesQuery()
  const { data: gamesAcao } = useGetActionGamesQuery()
  const { data: gamesEsportes } = useGetSportsGamesQuery()
  const { data: gamesSimulacao } = useGetSimulationGamesQuery()
  const { data: gamesLuta } = useGetFightingGamesQuery()

  if (gamesRPG && gamesAcao && gamesEsportes && gamesSimulacao && gamesLuta) {
    return (
      <>
        <ProductsList
          games={gamesRPG}
          title="RPG"
          background="black"
          id="rpg"
        />
        <ProductsList
          games={gamesAcao}
          title="Ação"
          background="gray"
          id="action"
        />
        <ProductsList
          games={gamesEsportes}
          title="Esportes"
          background="black"
          id="sports"
        />
        <ProductsList
          games={gamesSimulacao}
          title="Simulação"
          background="gray"
          id="simulation"
        />
        <ProductsList
          games={gamesLuta}
          title="Luta"
          background="black"
          id="fighting"
        />
      </>
    )
  }
  return <h4>Loading...</h4>
}

export default Categories
