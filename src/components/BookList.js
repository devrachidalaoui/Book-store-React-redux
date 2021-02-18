import { connect } from 'react-redux'

const BookList = ({ books, onRemoveBook }) => {
  const removeBook = id => {
    onRemoveBook(id)
  }

  return (
    <div className='book__list'>
      {books.map(book => (
        <div key={book.id} className='book__card'>
          <li>Title : {book.title}</li>
          <li>Author : {book.author}</li>
          <li>price : {book.price}</li>
          <li>Number of pages : {book.numberOfPages}</li>
          <button className='remove' onClick={() => removeBook(book.id)}>
            Remove book
          </button>
        </div>
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    books: state,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRemoveBook: id => dispatch({ type: 'REMOVE_BOOK', payload: id }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
