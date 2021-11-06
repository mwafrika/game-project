import React from 'react';
import './style.css'
const EditGameItemForm = ({handleInputChange, setEditing, updateVideoGameItem, price,title,tags, releaseDate}) => {
    return (
        <form>
          <div>
            <div className="row">
                <div className= "form-group col-lg-12">
                    <label>Game title</label>
                    <input type="text" className="form-control" name="title" value={title} onChange={handleInputChange}/>
                </div>
            </div>
            <div className="row">
                <div className="form-group col-lg-12">
                    <label>Game price</label>
                    <input type="number" className="form-control" name="price" value={price} onChange={handleInputChange} />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-lg-12">
                    <label>Tags </label>
                    <input type="text" className="form-control" name="tags" value={tags} onChange={handleInputChange} />
                </div>
            </div>
            <div className="row">
                <div className="form-group col-lg-12">
                    <label>Date </label>
                    <input type="date" className="form-control" name="releaseDate" value={releaseDate} onChange={handleInputChange} />
                </div>
            </div>
            <button className="btn btn-primary btn-block" onClick={updateVideoGameItem}> Update </button>
            <button className="btn btn-danger" onClick={() =>setEditing(false)}> Cancel </button>
          </div>
        </form>
      )
}

export default EditGameItemForm;
