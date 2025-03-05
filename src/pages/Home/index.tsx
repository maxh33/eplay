import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import {
  useGetOnSaleGamesQuery,
  useGetSoonGamesQuery
} from '../../services/api'

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingSale } =
    useGetOnSaleGamesQuery()
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonGamesQuery()

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
        isLoading={isLoadingSale}
      />
      <div id="soon">
        <ProductsList
          games={soonGames}
          title="Em breve"
          background="black"
          id="soon"
          isLoading={isLoadingSoon}
        />
      </div>
    </>
  )
}

export default Home
