import React from "react";
import {FaRegCircle, FaXmark} from "react-icons/fa6";

class Tile extends React.Component {
  constructor(props) {
    super(props);
  }
  
  setValue (value) {
    if (value !== "X" && value !== "O") {
      return (
        <div className={'w-16 h-16'}></div>
      )
    }
    return (
      value === "X"
        ? <FaXmark color={'red'} size={'4rem'}/>
        : <FaRegCircle color={'blue'} size={'4rem'}/>
    )
  }

  render() {
      
    const tile = this.props.tile;
    const setTile = this.props.setTile;
    const index = this.props.index;
    const disabled = this.props.disabled;

    return (
        <button 
          className={'p-8 flex items-center justify-center bg-white'}
          disabled={disabled}
          onClick={() => (tile === "" && setTile(index))}
        >
            {this.setValue(tile)}
        </button>
    )
  }
}

export default Tile;
