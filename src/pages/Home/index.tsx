import { useEffect } from 'react'
import { useState } from 'react'

import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'

import {
  useGetOnSaleGamesQuery,
  useGetSoonGamesQuery
} from '../../services/api'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: string
  name: string
  description: string
  releaseDate?: string
  prices: {
    discount?: number
    old?: number
    current: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: onSaleGames } = useGetOnSaleGamesQuery()
  const { data: soonGames } = useGetSoonGamesQuery()

  if (onSaleGames && soonGames) {
    return (
      <>
        <Banner />
        <ProductsList games={onSaleGames} title="Promoções" background="gray" />
        <ProductsList games={soonGames} title="Em breve" background="black" />
      </>
    )
  }
  return <h4>Loading...</h4>
}

export default Home
