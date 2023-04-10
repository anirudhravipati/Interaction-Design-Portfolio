import Title from './components/Title/Title'
import ProjectList from './components/Project-List/Project-list'
import './App.css'
import { Outlet } from 'react-router-dom'



function App() {
  return (
    <div className="App">
      <Title />
      <ProjectList />

    </div>
  )
}

export default App
