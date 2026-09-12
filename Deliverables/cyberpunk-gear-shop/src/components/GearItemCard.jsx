import Card from './card';
import PriceTag from './PriceTag';


function GearItemCard(props){
  return (
    <Card>
      <h2>{props.name}</h2>
      <h3>Category: {props.category}</h3>
      <p>Description: {props.description}</p>
      <PriceTag basePrice={props.basePrice} />
    </Card>
  );
}

export default GearItemCard;
