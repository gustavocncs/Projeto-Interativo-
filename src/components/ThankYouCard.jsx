import { motion } from 'framer-motion'
import illustration from '../assets/illustration-thank-you.svg'

function ThankYouCard({ rating, onReset }) {
  return (
    <motion.section
      className="card thank-you-card"
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <img
        src={illustration}
        alt="Thank you illustration"
        className="thank-you-image"
      />

      <div className="selected-info">Você selecionou {rating} de 1 a 5</div>

      <h2>Obrigado</h2>

      <p>
        Agradecemos o tempo que você dedicou para avaliar o produto. Se precisar de mais ajuda, não hesite em entrar em contato!
      </p>

      <button className="reset-button" onClick={onReset}>
        Avaliar Novamente
      </button>
    </motion.section>
  )
}

export default ThankYouCard