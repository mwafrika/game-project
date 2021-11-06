import React from 'react';
import './style.css';
const AddGameItemForm = ({
  addVideoGameItem,
  title,
  videogame,
  handleInputChange,
  price,
  releaseDate,
  tags,
  publisherId,
}) => {
  return (
    <div className="form">
      <form onSubmit={addVideoGameItem}>
        <div>
          <div className="row">
            <div className="form-group col-lg-12">
              <label>Game title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                value={title}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-lg-12">
              <label>Game price</label>
              <input
                type="number"
                className="form-control"
                name="price"
                value={price}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-lg-12">
              <label>Tags </label>
              <input
                type="text"
                className="form-control"
                name="tags"
                value={tags}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-lg-12">
              <label>Date </label>
              <input
                type="date"
                className="form-control"
                name="releaseDate"
                value={releaseDate}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <input
            type="hidden"
            className="btn btn-primary"
            value={publisherId}
            name="publisherId"
          />

          <button className="btn btn-primary"> Add game item </button>
        </div>
      </form>
    </div>
  );
};

export default AddGameItemForm;
