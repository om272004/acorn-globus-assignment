
import './App.css'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'

function App() {

  return <div className='bg-[#f4f0f0] h-full grid grid-rows-[auto_1fr]'>
    <Header />

    <div className='h-full w-full flex'>
    <Sidebar />
    <div className='flex-1 overflow-y-auto px-8 pb-8'>
    <Dashboard />
    </div>
    </div>
  </div>
}

export default App
