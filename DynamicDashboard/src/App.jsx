import { useState } from 'react'
import './App.css'
import DynamicGreeting from './DynamicDashboard'
import PremiumCheck from './PremiumCheck'
import TaskList from './TaskList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <DynamicGreeting />
   <PremiumCheck />
   <TaskList />
   <Date />
    </>
  )
}

export default App
