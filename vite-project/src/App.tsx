// import Background from './layouts/background'
import routes from './routes'
import './App.css'
import { RouterProvider } from 'react-router-dom'

function App() {

  return (
    <>
      <RouterProvider router={routes} fallbackElement={
        <div>
          <h2>Laoding...</h2>
        </div>
      } />

    </>
  )
}

export default App
