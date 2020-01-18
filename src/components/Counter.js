import React from "react";

export class Counter extends React.Component {
  //이걸 원래는 생성자 안에서 this.state={}로 해야하는데 이렇게 쉽게 할 수 있음 이때는 this를 안씀
  state = {
    score: 30,
    a : 1
  }

  constructor(){
    super();
    this.handleScore = this.handleScore.bind(this);
  }

  handleScore(delta) {
    this.setState(prevState => {
      return {score: prevState.score + delta}
    })
  }

  render() {
    return (
      <div className="counter">
        <button className="counter-action decrement" onClick={()=>this.handleScore(-1)}> - </button>
        <span className="counter-score">{this.state.score}</span>
        <button className="counter-action increment" onClick={()=>this.handleScore(1)}> + </button>
      </div>
    )
  }
}