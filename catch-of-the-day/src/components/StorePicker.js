import React from 'react'; 
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // This method creates a prototype method
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // }
  // Not bound to class but to component
  goToStore(e) {
    e.preventDefault();
    console.log('you changed it!');

    // Grab the text from the box
    const storeId = this.storeInput.value;

    // Transition from / to /store/storeId
    this.context.router.transitionTo(`/store/${storeId}`);
  }
  // Bound to class
  render() {
    return (
      // This method for binding creates mulitple instances of this function
      <form className='store-selector' onSubmit={this.goToStore.bind(this)}>
        { /*This is how you comment in JSX*/ }
        <h2>Please Enter a Store</h2>
        { /* Function refs take in the component generated on the DOM */ }
        <input ref={(input) => { this.storeInput = input }} type='text' required placeholder='Store Name' defaultValue={getFunName()}/>
        <button type='submit'>Visit Store -></button>
      </form>
    );
  }
}

// Context allows something declared at a parent level and it will be availalbe to children components
StorePicker.contextTypes = {
  router: React.PropTypes.object
};

export default StorePicker;
