import s from './Heart.module.css'
import heartSvg from '../../../assets/svg/heart.svg'
import heartRedSvg from '../../../assets/svg/heart-red.svg'
import { useState } from 'react'


const Heart = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false)

  const onClick = () => {
    setIsLiked(!isLiked)
  }
  
  return (
    <div onClick={onClick} className={s.heartWrapp} >
      <img src={isLiked ? heartRedSvg : heartSvg } alt="" />
    </div>
  )
  
}

export  default Heart