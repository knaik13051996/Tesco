import './Card.css';

function Card({cardDetails, setCartDetails}) {
  const {image, description, name, price,id }= cardDetails;
  return (
    <>
       
        <div class="card">
    <img src={image} alt="Product"/>
    <div class="card-details">
      <h2 class="card-title">{name}</h2>
      <p class="card-description">
       {description}
      </p>
       <p class="card-description">
       {price}
      </p>
      <div class="card-footer">
        <button onClick={()=>{
            setCartDetails(cardDetails)
        }}>🛒 Add to Cart</button>
      </div>
    </div>
  </div>
    </>
  )
}

export default Card;