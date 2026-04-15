import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import RatingButton from './RatingButton'

function RatingCard({ selectedRating, onSelectRating, onSubmit }) {
  const ratings = [1, 2, 3, 4, 5]

  return (
    <motion.section
      className="card"
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="star-box">
        <Star size={18} fill="#fc7614" color="#fc7614" />
      </div>

      <h1>Como nos saímos</h1>

      <p>     
        Por favor, nos diga como foi sua experiência com a sua solicitação de suporte. Todos os comentários são
        apreciativos e nos ajudam a melhorar nossos serviços!
      </p>

      <div className="ratings">
        {ratings.map((item) => (
          <RatingButton
            key={item}
            value={item}
            isSelected={selectedRating === item}
            onClick={onSelectRating}
          />
        ))}
      </div>

      <button
        className={`submit-button ${selectedRating === null ? 'disabled' : ''}`}
        onClick={onSubmit}
        disabled={selectedRating === null}
      >
        Enviar
      </button>
    </motion.section>
  )
}

export default RatingCard