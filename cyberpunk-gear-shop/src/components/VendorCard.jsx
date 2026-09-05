import Card from "./card";

function VendorCard(props) {
  return (
    <Card>
      <h2>Vendor: {props.vendorName}</h2>
      <p>location: {props.location}</p>
    </Card>
  );
}

  export default VendorCard;
