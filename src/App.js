import Footer from './components/Footer'
import Form from './components/Form'
import Header from './components/Header'
import BookList from './components/BookList'
import { store } from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <Header />
        <main>
          <h2>Add new book</h2>
          <Form />
          <BookList />
        </main>
        <Footer />
      </div>
    </Provider>
  )
}

export default App
