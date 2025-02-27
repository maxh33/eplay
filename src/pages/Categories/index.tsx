import { useState, useEffect } from 'react'
import ProductsList from '../../components/ProductsList'
import { Game } from '../Home'
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
        <ProductsList games={gamesRPG} title="RPG" background="black" />
        <ProductsList games={gamesAcao} title="Ação" background="gray" />
        <ProductsList
          games={gamesEsportes}
          title="Esportes"
          background="black"
        />
        <ProductsList
          games={gamesSimulacao}
          title="Simulação"
          background="gray"
        />
        <ProductsList games={gamesLuta} title="Luta" background="black" />
      </>
    )
  }
  return <h4>Loading...</h4>
}

export default Categories
