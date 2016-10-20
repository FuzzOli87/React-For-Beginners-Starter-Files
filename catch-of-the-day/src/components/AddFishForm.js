import React from 'react';

class AddFishForm extends React.Component {
  createFish(e) {
    e.preventDefault();
    console.log('Gonna make some fish! *-');
  }
  render(){
    return (
      <form className='fish-edit' onSubmit={this.createFish.bind(this)}>
        <input type='text' placeholder='Fish Name' />
        <input type='text' placeholder='Fish Price' />
        <select>
          <option value='available'>Fresh!</option>
          <option value='unavailable'>Sold Out!</option>
        </select>
        <input type='text' placeholder='Fish Status' />
        <textarea placeholder='Fish Desc'></textarea>
        <input type='text' placeholder='Fish Image' />
        <button type='submit'>+ Add Item</button>
      </form>
    );
  };
}

export default AddFishForm;
