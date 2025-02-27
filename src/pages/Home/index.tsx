import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

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
        <div id="home">
          <Banner />
        </div>
        <ProductsList
          games={onSaleGames}
          title="Promoções"
          background="gray"
          id="on-sale"
        />
        <div id="soon">
          <ProductsList
            games={soonGames}
            title="Em breve"
            background="black"
            id="soon"
          />
        </div>
      </>
    )
  }
  return <h4>Loading...</h4>
}

export default Home
