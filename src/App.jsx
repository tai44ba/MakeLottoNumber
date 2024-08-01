
import './App.css'
import EuroNumbers from './componets/Eurojackpot/EuroNumbers.jsx'
import LuckyNumber649 from './componets/Lotto-6-49/LuckyNumber649.jsx'

function App() {
  return (
    <>
      <div className='Lbox'>
        <LuckyNumber649 />
      </div>
      <div>
        <EuroNumbers />
      </div>
    </>
  )
}

export default App
