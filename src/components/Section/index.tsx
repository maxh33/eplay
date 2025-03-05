import * as S from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
  children: React.ReactNode
}

const Section = ({ title, background, children }: Props) => {
  return (
    <S.Container background={background}>
      <div className="container">
        <S.Title>{title}</S.Title>
        {children}
      </div>
    </S.Container>
  )
}

export default Section
