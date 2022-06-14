import * as S from './styles';
import promessasImg from '../../assets/promessas.jpg'

export const CardRandom = ({text, apologyIndex}) => {
  return (
    <S.Container className={text?'':'non-padding'}>
      {text &&
      <S.ApologyIndex>Nº: {apologyIndex+1}</S.ApologyIndex>}
      {text?
      <span>
        {text}
      </span>
      : <img alt="Festival Promessas" src={promessasImg}/>
      }
    </S.Container>
  )
}