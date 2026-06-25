
import Home from './components/Home'
import './App.css'
import { ThemeProvider } from './contexts/ThemeProvider'

function App() {


  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  )
}

export default App
