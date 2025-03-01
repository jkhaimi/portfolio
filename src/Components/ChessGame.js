import './ChessGame.css';
import { useState, useEffect } from 'react';
import { Chessboard } from 'react-chessboard';
import { Chess } from 'chess.js';

function ChessGame() {
  const [game, setGame] = useState(new Chess());
  const [winner, setWinner] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  // Funktio turvalliseen tilan muokkaukseen
  function safeGameMutate(modify) {
    setGame((prevGame) => {
      const updatedGame = new Chess(prevGame.fen()); // Luo uusi Chess-olio nykyisestä FEN:stä
      modify(updatedGame);
      return updatedGame;
    });
  }

  // Tietokoneen siirto
  function makeRandomMove() {
    setGame((prevGame) => {
      const updatedGame = new Chess(prevGame.fen());
      const possibleMoves = updatedGame.moves();

      // Tarkista, onko peli päättynyt
      if (updatedGame.isGameOver() || updatedGame.isDraw() || possibleMoves.length === 0) {
        setGameOver(true);
        setWinner(updatedGame.turn() === 'w' ? 'Black' : 'White');
        return updatedGame;
      }

      // Valitse satunnainen siirto
      const randomIndex = Math.floor(Math.random() * possibleMoves.length);
      updatedGame.move(possibleMoves[randomIndex]);

      return updatedGame;
    });
  }

  // Pelaajan siirto
  function onDrop(source, target) {
    if (gameOver) return false;

    let moveValid = false;
    setGame((prevGame) => {
      const updatedGame = new Chess(prevGame.fen());
      const move = updatedGame.move({
        from: source,
        to: target,
        promotion: 'q',
      });

      if (move !== null) {
        moveValid = true;
        setTimeout(makeRandomMove, 200);
      }

      return updatedGame;
    });

    return moveValid;
  }

  // Pelin nollaus
  function restartGame() {
    setGame(new Chess());
    setGameOver(false);
    setWinner(null);
  }

  // Kuuntelee Enter-näppäimen painallusta pelin uudelleenkäynnistämiseksi
  useEffect(() => {
    function handleKeyPress(event) {
      if (event.key === 'Enter') {
        restartGame();
      }
    }
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div className="app">
      <div className="chessboard-container">
        <Chessboard position={game.fen()} onPieceDrop={onDrop} />
        {gameOver && (
          <div className="game-over">
            <p>Game Over</p>
            <p>Winner: <strong>{winner}</strong></p>
            <p>Press Enter to restart</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ChessGame;
