import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(){
    super()
    this.state = {sushiList:[], showPlate:0, wallet:100, eaten:[]}
  }

  componentDidMount(){
    this.fetchSushi()
  }

  fetchSushi = () => {
    fetch(API).then(res=>res.json()).then(allSushi => {this.setState({sushiList:allSushi})}).then(this.addEatenState)
  }

  addEatenState = () => {
    this.setState({
        sushiList: [ ...this.state.sushiList.map(sushi => { 
          sushi.eaten = false
          return sushi  })] }
    )    
  }

  handleShowSushi = () => {
    this.setState({showPlate: this.state.showPlate+4})
  }

  eatSushi = (id, price) => {
    console.log(`Receiving: ${price}`)
    if (this.state.wallet >= price){
      console.log('Eating Sushi!')
      this.setState({sushiList: [...this.state.sushiList.map(sushi => {
          if (sushi.id === id){sushi.eaten = true}
          return sushi
      })]})
      this.setState({wallet: this.state.wallet - price})
      this.setState({eaten: [...this.state.eaten, ""] })
    }else{alert("You can't afford this sushi!")}
  }

  render() {
    return (
      <div className="app">
        <SushiContainer allSushi={this.state.sushiList.slice(this.state.showPlate, this.state.showPlate+4)} plateView={this.handleShowSushi} onChooseSushi={this.eatSushi}/>
        <Table plateCount={this.state.eaten} remainingMoney={this.state.wallet}/>
      </div>
    );
  }
}

export default App;