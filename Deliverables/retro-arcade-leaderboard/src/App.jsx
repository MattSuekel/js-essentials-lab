
import { useState } from 'react';
import NewScoreForm from './components/NewScoreForm';
import LeaderboardList from './components/LeaderboardList';
import CategoryFilter from './components/CategoryFilter';
import ScoreSummary from './components/ScoreSummary';
import './App.css'

const INITIAL_SCORES = [
  { 
    id: "s1", 
    playerInitials: "PAC", 
    gameTitle: "Pac-Man", 
    score: 3333360,
    category: "Arcade Classic"
  },
  { 
    id: "s2", 
    playerInitials: "MAR", 
    gameTitle: "Donkey Kong", 
    score: 1260700,
    category: "Arcade Classic"
  },
  { 
    id: "s3", 
    playerInitials: "ACE", 
    gameTitle: "Galaga", 
    score: 1599100,
    category: "Sci-Fi Shooter"
  }
];

function App() {
  const [scores, setScores] = useState(INITIAL_SCORES);
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  const setScoresHandler = (newEntry) => {
    setScores((prevScores) => [newEntry, ...prevScores]);
  }

  const filterChangeHandler = (selectedValue) => {
    setSelectedCategory(selectedValue);
  };

  const filteredScores = scores.filter((score) => {
    if (selectedCategory === 'All Categories') {
      return true
    }

    return score.category === selectedCategory;
  })


  return (
    <div>
      <h1>Arcade Leaderboard and Score Tracker</h1>
      
      <NewScoreForm onAddScore={setScoresHandler} />

      <CategoryFilter
        selected={selectedCategory}
        onChangeFilter={filterChangeHandler}
      />

      <ScoreSummary items = {filteredScores} />

      <LeaderboardList items={filteredScores} />

    </div>
  )
}

export default App
