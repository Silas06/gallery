import * as C from './styles'

type Props = {
  item: {
    name: string;
    url: string;
  }
}
export const PhotoItem = ({item}: Props) => {
  return (
    <C.Container>
      <img src={item.url} alt={ item.name }/>
      {item.name}
    </C.Container>
  )
}