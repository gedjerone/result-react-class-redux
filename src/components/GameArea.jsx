import React from "react";
import Tile from "./Tile.jsx";
import { connect } from "react-redux";
  
class GameArea extends React.Component {
  render() {
    let tiles = this.props.tiles;
    let winner = this.props.winner;
    let dispatch = this.props.dispatch;

    return (
      <div className={'p-0.5 bg-black border-2 border-black gap-1 grid grid-cols-3'}>
        {tiles.map((value, i) => (
          <Tile
            tile={value}
            index={i}
            setTile={(index) => dispatch({
              type: 'SET_TILES',
              index: index
            })}
            disabled={!!winner}
            key={i}
          />
        ))}
      </div>
    )
  }
}


function mapStateToProps(state) {
  const tiles = state.tiles;
  const winner = state.winner;
  return {
    tiles,
    winner
  };
}

export default connect(mapStateToProps)(GameArea)
