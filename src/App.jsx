import './Styles/App.css'
import AddData from './Components/AddData'

function App() {

  return (
    <>
        <div className='flex items-center flex-col justify-center min-h-screen'>
          <div className='text-2xl font-bold'>Hello, Tech Team 🧑🏻‍💻</div>
          <AddData/>
        </div>
    </>
  )
}

export default App
