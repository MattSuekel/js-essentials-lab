function ScoreSummary(props) {
  const totalEntries = props.items.length;

  let highestScore = 0;
  let totalScore = 0;
  let averageScore = 0;

  if (props.items.length > 0) {
    highestScore = props.items[0].score;

    props.items.forEach((score) => {
      if (score.score > highestScore) {
        highestScore = score.score;
      }

      totalScore = totalScore + score.score;
    })

    averageScore = totalScore / props.items.length;
  }

  return (
  <div>
    <h2>Score Summary</h2>
    
    <p>Total Entries: {totalEntries}</p>
    <p>Highest Score: {highestScore}</p>
    <p>Average Score: {averageScore.toFixed(2)};</p>
  </div>
  )
}

export default ScoreSummary;
