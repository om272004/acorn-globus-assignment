import './App.css'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Dashboard } from './components/Dashboard'
import { useState } from 'react'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className='bg-[#f4f0f0] h-screen w-full flex flex-col overflow-hidden font-sans'>
      <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />

      <div className='flex-1 flex overflow-hidden relative'>
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-transparent z-20 lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        <div className={`
            absolute inset-y-0 left-0 z-30 bg-[#f4f0f0] transform transition-transform duration-300 ease-in-out h-full
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            lg:relative lg:translate-x-0 lg:block
        `}>
          <Sidebar />
        </div>

        <div className='flex-1 overflow-y-auto px-4 pb-4 lg:px-8 lg:pb-8 w-full'>
          <Dashboard />
        </div>

      </div>
    </div>
  )
}

export default App