import './card.css'

function Card(props) {
  return (
  <div className='card-styles'> 
    { props.children }
  </div>
  );
}

export default Card;
