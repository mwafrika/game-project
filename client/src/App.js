import React, { useState, useEffect } from 'react';
import VideoGameItemList from './components/GameItemList';
import AddVideoGameItemForm from './components/AddGameItemForm';
import EditVideoGameItemForm from './components/EditGameItemForm';
import axios from 'axios';

const App = () => {
  const [state, setState] = useState({
    id: null,
    publisherId: 1,
    tags: '',
    price: '',
    title: '',
    releaseDate: new Date().toISOString().substr(0, 10),
    status: false,
    editing: false,
  });

  const [videoGameItems, setVideoGameItems] = useState([]);
  //const url = 'https://game-project-test1.herokuapp.com/game';
  const url = 'https://game-project-test1.herokuapp.com/game';

  const handleInputChange = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };

  const setEditing = (value) => {
    if (typeof value !== 'boolean') {
      throw ' This value must either be true or false';
    }
    setState({
      editing: value,
    });
  };
  const addVideoGameItem = (event) => {
    event.preventDefault();
    axios
      .post(url, {
        publisherId: state.publisherId,
        tags: state.tags,
        price: state.price,
        title: state.title,
        status: state.status,
        releaseDate: state.releaseDate,
      })
      .then((res) => {
        console.log('Mwafrika', res);
        console.log(res.data);
        setState(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteVideoGameItem = (id) => {
    axios
      .delete(url + '/' + id)
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const editVideoGameItem = (id) => {
    axios
      .get(`${url}/${id}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setState({
          ...state,
          title: res.data.title,
          publisherId: res.data.publisherId,
          price: res.data.price,
          status: res.data.status,
          tags: res.data.tags,
          releaseDate: res.data.releaseDate,
          editing: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const updateVideoGameItem = () => {
    // const videogameItem = state.videogameItems.find(item => item.id === state.id);
    axios
      .put(`${url}/${state.id}`, {
        title: state.title,
        publisherId: state.publisherId,
        price: state.price,
        status: state.status,
        releaseDate: state.releaseDate,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setState({
          ...state,
          editing: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAll = () => {
    axios
      .get(url)
      .then((res) => {
        setVideoGameItems(res.data);
        console.log(videoGameItems);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getAll();
  }, [videoGameItems]);

  const boughtVideoGameItem = (currentVideoGame) => {
    const updatedCurrentVideoGame = Object.assign({}, currentVideoGame, {
      status: true,
    });
    const videogameItems = state.videogameItems.map((videogameItem, index) =>
      videogameItem.id === currentVideoGame.id
        ? updatedCurrentVideoGame
        : videogameItem,
    );
    setState({ videogameItems: videogameItems });
  };

  return (
    <div className="App">
      <div>
        <VideoGameItemList
          videogameItems={videoGameItems}
          deleteVideoGameItem={deleteVideoGameItem}
          boughtVideoGameItem={boughtVideoGameItem}
          editVideoGameItem={editVideoGameItem}
        />
      </div>
      <div>
        {state.editing ? (
          <EditVideoGameItemForm
            title={state.title}
            price={state.price}
            releaseDate={state.releaseDate}
            handleInputChange={handleInputChange}
            setEditing={setEditing}
            updateVideoGameItem={updateVideoGameItem}
          />
        ) : (
          <AddVideoGameItemForm
            title={state.title}
            releaseDate={state.releaseDate}
            price={state.price}
            tags={state.tags}
            publisherId={state.publisherId}
            handleInputChange={handleInputChange}
            addVideoGameItem={addVideoGameItem}
          />
        )}
      </div>
    </div>
  );
};

export default App;
