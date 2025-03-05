import ProductsList from '../../components/ProductsList'
import {
  useGetActionGamesQuery,
  useGetSportsGamesQuery,
  useGetSimulationGamesQuery,
  useGetRPGGamesQuery,
  useGetFightingGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: gamesRPG, isLoading: isLoadingRPG } = useGetRPGGamesQuery()
  const { data: gamesAction, isLoading: isLoadingAction } =
    useGetActionGamesQuery()
  const { data: gamesSports, isLoading: isLoadingSports } =
    useGetSportsGamesQuery()
  const { data: gamesSimulation, isLoading: isLoadingSimulation } =
    useGetSimulationGamesQuery()
  const { data: gamesFight, isLoading: isLoadingFight } =
    useGetFightingGamesQuery()

  return (
    <>
      <ProductsList
        games={gamesRPG}
        title="RPG"
        background="black"
        id="rpg"
        isLoading={isLoadingRPG}
      />
      <ProductsList
        games={gamesAction}
        title="Ação"
        background="gray"
        id="action"
        isLoading={isLoadingAction}
      />
      <ProductsList
        games={gamesSports}
        title="Esportes"
        background="black"
        id="sports"
        isLoading={isLoadingSports}
      />
      <ProductsList
        games={gamesSimulation}
        title="Simulação"
        background="gray"
        id="simulation"
        isLoading={isLoadingSimulation}
      />
      <ProductsList
        games={gamesFight}
        title="Luta"
        background="black"
        id="fighting"
        isLoading={isLoadingFight}
      />
    </>
  )
}

export default Categories
