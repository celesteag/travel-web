import './DestinationCard.css'

function DestinationCard({ title, image, description }) {
  return (
    <article className="destination-card">
      <img src={image} alt={title} className="destination-image" />
      <h3 className="destination-title">{title}</h3>
      <p className="destination-description">{description}</p>
    </article>
  )
}

export default DestinationCard
