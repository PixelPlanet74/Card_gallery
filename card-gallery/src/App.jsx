import { Navbar } from './components/Navbar'
import { Products } from './components/Products'
import Routing_cards from './config/Routing_cards'

function App() {

  return (
    <div className='space-y-12'>
      <Navbar />
      <Routing_cards />
      
      {/* <Products /> */}
    </div>
  )
}

export default App
