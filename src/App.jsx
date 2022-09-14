import { useCallback, useState } from 'react'
import './App.css'
import BingoBoard from './BingoBoard'
import BingoSidebar from './BingoSidebar'

function App() {
  const [gameNumber, setGameNumber] = useState(0);
  const [currentBall, setCurrentBall] = useState(null);

  const handleNewGame = useCallback(() => {
    setGameNumber((prevState) => prevState+1);
    setCurrentBall(null);
  }, [setGameNumber, setCurrentBall]);

  return (
    <div className="app">
      <div className="bingo">
        <BingoSidebar onNewGame={handleNewGame} currentBall={currentBall}/>
        <BingoBoard key={gameNumber} onBallSelected={setCurrentBall}/>
      </div>
    </div>
  )
}

export default App;
