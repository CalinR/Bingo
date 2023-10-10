import useReducerWithLocalStorage from "../../hooks/useReducerWithLocalStorage";
import bonanzaReducer from "../../reducer/bonanzaReducer";
import BonanzaRow from "../BonanzaRow/BonanzaRow";
import './Bonanza.css';

const initialState = {
  selectedBalls: [0],
}

function Bonanza() {
  const [gameState, dispatch] = useReducerWithLocalStorage(bonanzaReducer, initialState, 'BINGO_PLAYER_STATE');

  return (
    <section className="bingo__board">
      <BonanzaRow rowNumber={0} dispatch={dispatch} selectedBalls={gameState.selectedBalls} />
      <BonanzaRow rowNumber={1} dispatch={dispatch} selectedBalls={gameState.selectedBalls} />
      <BonanzaRow rowNumber={2} dispatch={dispatch} selectedBalls={gameState.selectedBalls} />
      <BonanzaRow rowNumber={3} dispatch={dispatch} selectedBalls={gameState.selectedBalls} />
      <BonanzaRow rowNumber={4} dispatch={dispatch} selectedBalls={gameState.selectedBalls} />
    </section>
  )
}

export default Bonanza;
