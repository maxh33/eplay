import { Game } from '../../pages/Home'
import Button from '../Button'

import Tag from '../Tag'
import { Banner, Infos } from './styles'
import { priceFormatter } from '../ProductsList'
import { add, open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

type Props = {
  game: Game
}

const Hero = ({ game }: Props) => {
  const dispatch = useDispatch()
  const addToCart = () => {
    dispatch(add(game))
    dispatch(open())
  }
  return (
    <Banner style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <div>
          <Tag>{game.details.category}</Tag>
          <Tag>{game.details.system}</Tag>
        </div>
        <Infos>
          <h2>{game.name}</h2>

          <p>
            {game.prices.discount && (
              <span>De {priceFormatter(game.prices.old)}</span>
            )}
            {game.prices.current && (
              <>Por {priceFormatter(game.prices.current)}</>
            )}
          </p>
          {game.prices.current && (
            <Button
              variant={'primary'}
              type={'button'}
              title={'Adcionar ao carrinho'}
              onClick={addToCart}
            >
              Adcionar ao carrinho
            </Button>
          )}
        </Infos>
      </div>
    </Banner>
  )
}

export default Hero
