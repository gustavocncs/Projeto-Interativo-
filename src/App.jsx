import { useState } from 'react'
import RatingCard from './components/RatingCard'
import ThankYouCard from './components/ThankYouCard'

function App() {
  const [selectedRating, setSelectedRating] = useState(null)
  const [submitted, setSubmitted] = useState(false)

  function handleSelectRating(value) {
    setSelectedRating(value)
  }

  function handleSubmit() {
    if (selectedRating === null) return
    setSubmitted(true)
  }

  function handleReset() {
    setSelectedRating(null)
    setSubmitted(false)
  }

  return (
    <main className="app">
      {!submitted ? (
        <RatingCard
          selectedRating={selectedRating}
          onSelectRating={handleSelectRating}
          onSubmit={handleSubmit}
        />
      ) : (
        <ThankYouCard rating={selectedRating} onReset={handleReset} />
      )}
    </main>
  )
}

export default App