import ScoreCard from './ScoreCard';

function LeaderboardList(props) {
  return(
    <div className='leaderboard'>
      <h2>Leaderboard</h2>

      {
        props.length === 0 ? (
          <p>No Scores Found</p>
        ) : (
          props.items.map((score) => (
            <ScoreCard 
              key={score.id}
              playerInitials={score.playerInitials}
              gameTitle={score.gameTitle}
              score={score.score}
              category={score.category}
            />
          ))
        )
      }
    </div>
  )
}

export default LeaderboardList;
