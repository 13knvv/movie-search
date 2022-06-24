import s from './Pagination.module.css'

interface IPaginationProps {
  pagesCount: number
  currentPage: number
  onPageChange: (page: number) => void
}

const Pagination = (props: IPaginationProps) => {
  const pages = []
  for (let i = 1; i <= props.pagesCount; i++) {
        pages.push(i)
    }

  const requiredPpages = pages.filter(page => {
    // выглядет ужасно. ищу вариант рефакторинга

    // показать 2 страниц до текущей и 2 страниц после + 1-ую и последнюю
    if (props.currentPage - 2 === page ||
        props.currentPage - 1 === page ||
        props.currentPage === page ||
        props.currentPage + 1 === page ||
        props.currentPage + 2 === page ||
        pages.length === page ||
        page === 1 ) {
      return true
    }
    // если страница первая то показать после себя еще 4 кроме 2 по умолчанию
    if (props.currentPage === 1   &&
        (props.currentPage + 3 === page ||
        props.currentPage + 4 === page ||
        props.currentPage + 5 === page  ||
        props.currentPage + 6 === page)
        ) {
        return true
    }
    // если страница вторая то показать после себя еще 3  кроме 2 по умолчанию
    if (props.currentPage === 2 &&
        (props.currentPage + 3 === page||
          props.currentPage + 4 === page ||
          props.currentPage + 5 === page)
        ) {
        return true
    }
    // если страница третья то показать после себя еще 2  кроме 2 по умолчанию
    if (props.currentPage === 3 &&
        (props.currentPage + 3 === page||
          props.currentPage + 4 === page)
        ) {
        return true
    }
    // если страница четвертая то показать после себя еще 1  кроме 2 по умолчанию
    if (props.currentPage === 4 &&
        (props.currentPage + 3 === page)
        ) {
        return true
    }
    // тоже самое только длю конца
    if ( props.currentPage === props.pagesCount  &&
          (props.currentPage - 3 === page ||
          props.currentPage - 4 === page ||
          props.currentPage - 5 === page ||
          props.currentPage - 6 === page)
        ) {
      return true
    }
    if ( props.currentPage === props.pagesCount - 1  &&
          (props.currentPage - 3 === page ||
          props.currentPage - 4 === page ||
          props.currentPage - 5 === page)
        ) {
      return true
    }
    if ( props.currentPage === props.pagesCount - 2 &&
          (props.currentPage - 3 === page||
            props.currentPage - 4 === page)
        ) {
      return true
    }
    if ( props.currentPage === props.pagesCount - 3 &&
          (props.currentPage - 3 === page)
        ) {
      return true
    }

  })

  const pagesComponents = requiredPpages.map((i, index, arr) => {
    return (<div className={s.buttonWrapp} key={index}>
    { (i === props.pagesCount  
      && arr[arr.length-2] !== pages.length-1
      && arr[arr.length-2] ) ? <div className={s.btnNotPage}>. . .</div> : ''}

    <button 
            className={s.btnPage + ' ' + (props.currentPage === i ? s.btnPage_active : '')}
            onClick={() => props.onPageChange(i)}>
      {i} 
    </button>

    { (i === 1 && arr[1] !== 2 && arr[1]) ? <div className={s.btnNotPage}>. . .</div> : ''}
    </div>)
  
})

  if (pagesComponents.length === 1) {
    return <div></div>
  }

  return (
    <div className={s.wrapp}>
      {pagesComponents}
    </div>
  )
  
}

export  default Pagination