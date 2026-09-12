function PriceTag(props ) {

  const base = props.basePrice;
  const withTax = base * 1.15;

  return (
    <div>
      <p>Base Cost: {base}</p>
      <p>Total: {withTax.toFixed(2)}</p>
    </div>
  );
}

export default PriceTag;
