import {checkPlayer} from "../game.js";
import {FaArrowRotateLeft} from "react-icons/fa6";
import React from "react";
import { connect } from "react-redux";

class Display extends React.Component {
  render() {
    let player = this.props.player;
    let winner = this.props.winner;
    let playerColor = `font-normal ${this.props.player ? 'text-red-600' : 'text-blue-600'}`;
    let winnerColor = `font-normal text-2xl ${this.props.winner === 'X' ? 'text-red-600' : 'text-blue-600'}`;
    let dispatch = this.props.dispatch;
    if (winner) {
      return (
        <div className={'mb-4 flex flex-col items-center'}>
          <div className={'flex flex-row gap-4 items-center'}>
            <button
              className={'px-4 py-4 rounded-full'}
              onClick={() => dispatch({ type: 'SET_INITIAL' })}>
              <FaArrowRotateLeft className={'hover:text-blue-600 text-2xl'}/>
            </button>
            <p
              className={winnerColor}
            >
              {winner !== "Draw" ? `Winner: ${winner}` : `Draw`}
            </p>
              </div>
        </div>
      )
    }
    return (
      <div className={'mb-4 flex flex-col items-center'}>
        <h2 className={playerColor}>Turn: {checkPlayer(player)}</h2>
      </div>
    )
  }
}

function mapStateToProps(state) {
  const player = state.player;
  const winner = state.winner;
  return {
    player,
    winner
  };
}

export default connect(mapStateToProps)(Display)
