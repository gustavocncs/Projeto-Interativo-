function RatingButton({ value, isSelected, onClick }) {
  return (
    <button
      type="button"
      className={`rating-button ${isSelected ? 'selected' : ''}`}
      onClick={() => onClick(value)}
      aria-label={`Selecionar nota ${value}`}
    >
      {value}
    </button>
  )
}

export default RatingButton