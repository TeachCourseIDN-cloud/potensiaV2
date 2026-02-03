import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Potensia</h1>
        <p className="text-gray-600 mb-6">Aktivasi Potensi AI - Dari Bingung Jadi Punya Arah & Income</p>
        
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 mb-6">
          <p className="text-white text-5xl font-bold">{count}</p>
        </div>
        
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition duration-200"
        >
          Increment
        </button>
        
        <p className="text-gray-500 text-sm mt-6">Ready to activate your potential?</p>
      </div>
    </div>
  )
}

export default App
