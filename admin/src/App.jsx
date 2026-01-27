import './App.css'
import DashboardPage from './Pages/DashboardPage'

function App() {

  return (
    <Routes>
      <Route path="/admin/dashboard" element={<DashboardPage />} />
      <Route path="/admin/products" element={<DashboardPage />} />
    </Routes>
  )
}

export default App
