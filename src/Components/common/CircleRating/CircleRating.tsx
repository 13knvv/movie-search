import { useEffect, useRef } from 'react'
import s from './CircleRating.module.css'

interface ICircleRatingProps {
  percent: number
  inCard?: true | false 
}
const CircleRating = (props: ICircleRatingProps) => {
  const circle = useRef<null | any>(null)
  const color = props.percent * 10 >= 65 ? '#05bc05' :
                props.percent * 10 >= 50 ? 'yellow' : 'red' 

  useEffect(() => {
    const radius = circle.current.r.baseVal.value
    const circumference = 2 * Math.PI * radius

    circle.current.style.strokeDasharray = `${circumference} ${circumference}`
    circle.current.style.strokeDashoffset = circumference - props.percent  * 10 / 100 * circumference
  }, [])

  return ( <>
     { props.inCard ? 
          <div className={s.ratingWrapp}>
            <svg width="60" height="60">
              <circle className={s.circle} ref={circle} stroke={color} 
                strokeWidth="3" cx="30" cy="30" r="24" fill="transparent" />
            </svg>
            <span className={s.ratingText}  style={{ color:`${color}`, fontSize: "16px"}}>
              {props.percent}
            </span>
          </div>
          :
           <div className={s.ratingWrapp}>
            <svg width="80" height="80">
              <circle className={s.circle} ref={circle} stroke={color} 
                strokeWidth="5" cx="40" cy="40" r="30" fill="transparent" />
            </svg>
            <span className={s.ratingText}  style={{ color:`${color}`, fontSize: "24px"}}>
              {props.percent}
            </span>
          </div>
    }
  </>)
}

export default CircleRating