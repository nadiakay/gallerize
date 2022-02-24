import { useDispatch } from 'react-redux'

import { setPage } from '../slices/images'

export const Pager = ({ page, totalPages }) => {
  const dispatch = useDispatch()
  var pages = []
  for (var i = 0; i < totalPages; i++) {
    pages.push(
      <option key={i} value={i + 1}>
        {i + 1}
      </option>
    )
  }

  return (
    <div className="pager">
      <p>
        Showing page{' '}
        <select
          name="pages"
          id="page-select"
          value={page}
          onChange={(e) => dispatch(setPage(e.target.value))}
        >
          {pages}
        </select>{' '}
        of {totalPages}
      </p>
    </div>
  )
}
