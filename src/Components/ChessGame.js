import React, { useState } from "react";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
// import Stockfish from "stockfish";

const ChessGame = () => {
  const [game, setGame] = useState(new Chess());
  const [engine, setEngine] = useState(null);

//   React.useEffect(() => {
//     const stockfish = Stockfish();
//     stockfish.postMessage("uci");
//     setEngine(stockfish);
//   }, []);

  const makeMove = (move) => {
    const newGame = new Chess(game.fen());
    if (newGame.move(move)) {
      setGame(newGame);
      setTimeout(() => botMove(newGame), 500);
    }
  };

  const botMove = (newGame) => {
    if (!engine) return;
    engine.postMessage("position fen " + newGame.fen());
    engine.postMessage("go depth 10");
    engine.onmessage = (message) => {
      if (message.includes("bestmove")) {
        const bestMove = message.split(" ")[1];
        newGame.move(bestMove, { sloppy: true });
        setGame(new Chess(newGame.fen()));
      }
    };
  };

  return (
    <div>
    <Chessboard boardWidth={800} position={game.fen()} onPieceDrop={(source, target) => makeMove({ from: source, to: target, promotion: "q" })} />
    </div>
  );
};

export default ChessGame;
