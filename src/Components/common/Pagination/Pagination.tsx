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
    if (props.currentPage - 2 === page ||
        props.currentPage - 1 === page ||
        props.currentPage === page ||
        props.currentPage + 1 === page ||
        props.currentPage + 2 === page ||
        pages.length === page ||
        page === 1 ) {
      return true
    }
    if (props.currentPage - 1 <= 0   &&
        (props.currentPage + 3 === page ||
        props.currentPage + 4 === page ||
        props.currentPage + 5 === page  ||
        props.currentPage + 6 === page)
        ) {
        return true
    }
    if (props.currentPage - 2 <= 0 &&
        (props.currentPage + 3 === page||
          props.currentPage + 4 === page ||
          props.currentPage + 5 === page)
        ) {
        return true
    }
    if (props.currentPage - 3 <= 0 &&
        (props.currentPage + 3 === page||
          props.currentPage + 4 === page)
        ) {
        return true
    }
    if (props.currentPage - 4 <= 0 &&
        (props.currentPage + 3 === page)
        ) {
        return true
    }

    if ( props.currentPage === props.pagesCount  &&
          (props.currentPage - 3 === page ||
          props.currentPage - 4 === page ||
          props.currentPage - 5 === page ||
          props.currentPage - 6 === page)
        ) {
      return true
    }
    if ( props.currentPage + 1 >= props.pagesCount  &&
          (props.currentPage - 3 === page ||
          props.currentPage - 4 === page ||
          props.currentPage - 5 === page)
        ) {
      return true
    }
    if ( props.currentPage + 2 >= props.pagesCount &&
          (props.currentPage - 3 === page||
            props.currentPage - 4 === page)
        ) {
      return true
    }
    if ( props.currentPage + 3 >= props.pagesCount &&
          (props.currentPage - 3 === page)
        ) {
      return true
    }

  })

  const pagesComponents = requiredPpages.map((i, index, arr) => {
    return (<>
    { (i === props.pagesCount  
      && arr[arr.length-2] !== pages.length-1 ) ? <div className={s.btnNotPage}>. . .</div> : ''}

    <button key={index} 
            className={s.btnPage + ' ' + (props.currentPage === i ? s.btnPage_active : '')}
            onClick={() => props.onPageChange(i)}>
      {i} 
    </button>

    { (i === 1 && arr[1] !== 2) ? <div className={s.btnNotPage}>. . .</div> : ''}
    </>)
  
})


  return (
    <div className={s.wrapp}>
      {pagesComponents}
    </div>
  )
  
}

export  default Pagination