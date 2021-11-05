import React from 'react';

const VideoGameItemList = (props) => {
    return (  
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Game Title</th>
                    <th>Game Price</th>
                    <th>Publisher</th>
                    <th>Tags</th>
                    <th>release date</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { 
                    props.videogameItems.length > 0 ? (
                    props.videogameItems.map((videogameItem) => (
                        <tr key={videogameItem.id}>
                            <td>{ videogameItem.id }</td>
                            <td>{ videogameItem.videogame }</td>
                            <td>{ videogameItem.cost }</td>
                            <td>{ videogameItem.id }</td>
                            <td>{ videogameItem.videogame }</td>
                            <td>{ videogameItem.cost }</td>
                            <td>
                              
                                <button className="btn btn-success ml-2" onClick={() => props.editVideoGameItem(videogameItem) }>Edit</button>
                                <button className="btn btn-danger ml-2" onClick={() => props.deleteVideoGameItem(videogameItem.id) }>Delete</button>
                               
                            </td>
                        </tr>
                        )
                    )
              ) : (
                <tr>
                    <td colSpan={3}>No money games</td>
                </tr>
              )
            }
            </tbody>
      </table>
    );
  }


export default VideoGameItemList;