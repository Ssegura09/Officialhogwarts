import React from "react";
import Images from "./Images";

class Game extends React.Component {
  render() {
    return (
      <div className="memory-background">
        <div className="memory-container">
          <Images score={this.props.score} endGame={this.props.endGame} />
        </div>
      </div>
    );
  }
}

export default Game;
