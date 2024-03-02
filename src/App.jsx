import { Provider } from 'react-redux'
import './App.css'
import {Search} from './components/Search/Search'
import { Weather } from './components/Weather/Weather'
import { store } from './app/store'
import { useEffect } from 'react'
function App() {
  return (
    <>
    <Provider store={store}>
      <Search/>
      <Weather/>
    </Provider>
    </>
  )
}

export default App
