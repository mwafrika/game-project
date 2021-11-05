import React, { Component } from 'react';
import VideoGameItemList from './components/GameItemList';
import AddVideoGameItemForm from './components/AddGameItemForm';
import EditVideoGameItemForm from './components/EditGameItemForm';

class App extends Component {

  constructor() {
    super();
    this.state = {
      id: null,
      userId: 1,
      videogame: '',
      cost: '',
      status: false,
      videogameItem: {},
      videogameItems: [],
      editing: false
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.deleteVideoGameItem = this.deleteVideoGameItem.bind(this);
    this.boughtVideoGameItem = this.boughtVideoGameItem.bind(this);
    this.addVideoGameItem = this.addVideoGameItem.bind(this);
    this.editVideoGameItem = this.editVideoGameItem.bind(this);
    this.setEditing = this.setEditing.bind(this);
    this.updateVideoGameItem = this.updateVideoGameItem.bind(this);
  }

  handleInputChange(event) {
    event.preventDefault();
    const target = event.target;
    const value = target.value;
    const name = target.name;
 
    this.setState({
      [name]:value
    })
  }

  addVideoGameItem(event){
    event.preventDefault()
    if (!this.state.videogame) return;
    const videogameItem = {
      id: this.state.videogameItems.length + 1,
      videogame: this.state.videogame,
      cost: this.state.cost,
      userId: this.state.userId,
      status: this.state.status
    };

    this.setState({
      videogame: '',
      cost: '',
      videogameItem: videogameItem,
      videogameItems: [...this.state.videogameItems, videogameItem]
    })
  }
  deleteVideoGameItem(id) {
    const videogameItems = this.state.videogameItems.filter( item => item.id !== id );
    this.setState({videogameItems: videogameItems});
  }

  boughtVideoGameItem(currentVideoGame) {
    const updatedCurrentVideoGame = Object.assign({}, currentVideoGame, { status: true });
    const videogameItems = this.state.videogameItems.map((videogameItem, index) => (videogameItem.id === currentVideoGame.id ? updatedCurrentVideoGame : videogameItem));
    this.setState({videogameItems: videogameItems})
  }

  editVideoGameItem(videogameItem) {
    this.setEditing(true);
    this.setState({
      videogame:videogameItem.videogame,
      cost:videogameItem.cost,
      videogameItem: videogameItem
    });
  }
  
  setEditing(value) {
    if(typeof value !== 'boolean') { throw " This value must either be true or false"}
    this.setState({
      editing: value
    })
  }

  updateVideoGameItem(event) {
    event.preventDefault();
    const updatedVideoGame = this.state.videogame;
    const updatedCost = this.state.cost;
    const updatedVideoGameItem = Object.assign({}, this.state.videogameItem, { videogame: updatedVideoGame, cost: updatedCost })
    const videogameItems = this.state.videogameItems.map((videogameItem) => (videogameItem.id === this.state.videogameItem.id ? updatedVideoGameItem : videogameItem));
    this.setState({ videogame:'', cost: '', videogameItems: videogameItems});
    this.setState({ editing: false});
  }


render() {
  const { cost, videogame, videogameItems, editing } = this.state;
    return (
      <div className="App">
        <div>
          <VideoGameItemList 
            videogameItems= {videogameItems} 
            deleteVideoGameItem={this.deleteVideoGameItem}
            boughtVideoGameItem={this.boughtVideoGameItem}
            editVideoGameItem={this.editVideoGameItem}
          />
        </div>
        <div>
        { 
          editing  ? (
          <EditVideoGameItemForm 
           videogame={this.state.videogame}
           cost={this.state.cost} 
           handleInputChange={this.handleInputChange}
           setEditing={this.setEditing}
           updateVideoGameItem={this.updateVideoGameItem}
          />
          ) : (
          <AddVideoGameItemForm 
            videogame={this.state.videogame}
            cost={this.state.cost} 
            handleInputChange={this.handleInputChange} 
            addVideoGameItem={this.addVideoGameItem}
          />
          )
        }
        </div>
      </div>
    );
  }
}
export default App;