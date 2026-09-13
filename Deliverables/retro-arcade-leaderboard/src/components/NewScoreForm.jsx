import { useState } from 'react';

function NewScoreForm(props){

  const [enteredInitials, setEnteredInitials] = useState('');
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredScore, setEnteredScore] = useState('');
  const [enteredCat, setEnteredCat] = useState('Arcade Classic');

  const submitHandler = (event) => {
    event.preventDefault();

    const highScoreData = {
      id: Math.random().toString(),
      playerInitials: enteredInitials,
      gameTitle: enteredTitle,
      score: Number(enteredScore),
      category: enteredCat,
    }

    props.onAddScore(highScoreData);

    setEnteredInitials('');
    setEnteredTitle('');
    setEnteredScore('');
    setEnteredCat('Arcade Classic');
  }

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Initials</label>
        <input 
          type="text" 
          value={enteredInitials}
          onChange={(e) => setEnteredInitials(e.target.value)}
        />
      </div>
      <div>
        <label>Game Title</label>
        <input 
          type="text" 
          value={enteredTitle}
          onChange={(e) => setEnteredTitle(e.target.value)}
        />
      </div>
      <div>
        <label>Score</label>
        <input 
          type="number" 
          value={enteredScore}
          onChange={(e) => setEnteredScore(e.target.value)}
        />
      </div>
      <div>
        <label>Category</label>
        <select
          value={enteredCat}
          onChange={(e) => setEnteredCat(e.target.value)}
        >
          <option value="Arcade Classic">Arcade Classic</option>
          <option value="Sci-Fi Shooter">Sci-Fi Shooter</option>
          <option value="Pinball">Pinball</option>
          <option value="Puzzle">Puzzle</option>
        </select>
      </div>
      <button type="submit">Add Score</button>
    </form>
  )
}

export default NewScoreForm;
