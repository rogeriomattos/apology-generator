import * as S from './styles';
import promessasImg from '../../assets/promessas.jpg'

export const CardRandom = ({text}) => {
  return (
    <S.Container className={text?'':'non-padding'}>
      {text?
      <span>
        {text}
      </span>
      : <img alt="Festival Promessas" src={promessasImg}/>
      }
    </S.Container>
  )
}