import bannerImg from '../../assets/images/fundo_hogwarts.png'
import Button from '../Button'

import Tag from '../Tag'
import { Banner, Infos } from './styles'

const Hero = () => (
  <Banner style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <div>
        <Tag>RPG</Tag>
        <Tag>PS5</Tag>
      </div>
      <Infos>
        <h2>Hogwats Legacy</h2>

        <p>
          <span>De R$ 349,90</span>
          Por R$ 249,90
        </p>

        <Button
          variant={'primary'}
          type={'button'}
          title={'Adcionar ao carrinho'}
        >
          Adcionar ao carrinho
        </Button>
      </Infos>
    </div>
  </Banner>
)

export default Hero
