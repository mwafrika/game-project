import React from 'react';

const VideoGameItemList = ({videogameItems,editVideoGameItem,deleteVideoGameItem }) => {
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
                    videogameItems.length > 0 ? (
                    videogameItems.map((videogameItem) => (
                        <tr key={videogameItem.id}>
                            <td>{ videogameItem.id }</td>
                            <td>{ videogameItem.title }</td>
                            <td>{ videogameItem.price }</td>
                            <td>{ videogameItem.publisherId }</td>
                            <td>{ videogameItem.tags }</td>
                            <td>{ videogameItem.releaseDate }</td>
                            <td>
                              
                                <button className="btn btn-success ml-2" onClick={() => editVideoGameItem(videogameItem) }>Edit</button>
                                <button className="btn btn-danger ml-2" onClick={() => deleteVideoGameItem(videogameItem.id) }>Delete</button>
                               
                            </td>
                        </tr>
                        )
                    )
              ) : (
                <tr>
                    <td colSpan={3}>No games</td>
                </tr>
              )
            }
            </tbody>
      </table>
    );
  }


export default VideoGameItemList;
