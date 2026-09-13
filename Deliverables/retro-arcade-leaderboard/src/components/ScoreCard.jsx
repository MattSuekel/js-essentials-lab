function ScoreCard(props) {
  return (
    <div>
      <h3>{props.playerInitials}</h3> 
      <h4>{props.gameTitle}</h4>
      <p>Score: {props.score}</p>
      <p>Category: {props.category}</p>
    </div>
  )
}

export default ScoreCard;
