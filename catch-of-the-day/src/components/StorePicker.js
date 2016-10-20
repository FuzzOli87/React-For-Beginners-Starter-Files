import React from 'react'; 
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }
  goToStore(e) {
    e.preventDefault();
    console.log('you changed it!');

    // Grab the text from the box
    const storeId = this.storeInput.value;

    // Transition from / to /store/storeId
    this.context.router.transitionTo(`/store/${storeId}`);
  }
  render() {
    return (
      <form className='store-selector' onSubmit={this.goToStore.bind(this)}>
        { /*This is how you comment in JSX*/ }
        <h2>Please Enter a Store</h2>
        <input ref={(input) => { this.storeInput = input }} type='text' required placeholder='Store Name' defaultValue={getFunName()}/>
        <button type='submit'>Visit Store -></button>
      </form>
    );
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
};

export default StorePicker;
