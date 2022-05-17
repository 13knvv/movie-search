import s from './Pagination.module.css'

interface IPaginationProps {
  pages: Array<number>
  currentPage: number
  onPageChange: (page: number) => void
}

const Pagination = (props: IPaginationProps) => {

  const pagesComponents = props.pages.map((i, index) => {
    //key={index} количество страничек не меняется
    return <button key={index} className={s.btnPage + ' ' + (props.currentPage === i ? s.btnPage_active : '')}
        onClick={() => props.onPageChange(i)}>{i}</button>
})


  return (
    <div className={s.wrapp}>
      {pagesComponents}
    </div>
  )
  
}

export  default Pagination