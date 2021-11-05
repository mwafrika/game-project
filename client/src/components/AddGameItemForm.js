import React from 'react';
import './style.css';
const AddGameItemForm = (props) => {
  return (
    <div className="form">
      <form onSubmit={props.addVideoGameItem}>
        <div>
          <div class='row'>
            <div class='form-group col-lg-12'>
              <label>Game title</label>
              <input
                type='text'
                class='form-control'
                name='videogame'
                value={props.videogame}
                onChange={props.handleInputChange}
              />
            </div>
          </div>
          <div class='row'>
            <div class='form-group col-lg-12'>
              <label>Game price</label>
              <input
                type='number'
                class='form-control'
                name='cost'
                value={props.cost}
                onChange={props.handleInputChange}
              />
            </div>
          </div>
          <div class='row'>
            <div class='form-group col-lg-12'>
              <label>Tags </label>
              <input
                type='text'
                class='form-control'
                name='tag'
                value={props.cost}
                onChange={props.handleInputChange}
              />
            </div>
          </div>
          <div class='row'>
            <div class='form-group col-lg-12'>
              <label>Date </label>
              <input
                type='date'
                class='form-control'
                name='date'
                value={props.cost}
                onChange={props.handleInputChange}
              />
            </div>
          </div>
          <button class='btn btn-primary'> Add game item </button>
        </div>
      </form>
    </div>
  );
};

export default AddGameItemForm;
