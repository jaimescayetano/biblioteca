const CardBook = ({ title, poster, rating }) => {
  return (
    <div className="bg-white w-72 rounded-xl p-3">
      <img src={poster} alt={title} className="w-full rounded-xl" />
      <div>
        <span>{rating}</span>
        <h3>{title}</h3>
      </div>
    </div>
  )
}

export default CardBook
