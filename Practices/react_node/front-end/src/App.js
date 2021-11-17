import React from 'react';
import axios from 'axios';

import User from './components/User';
import Car from './components/Car';


class App extends React.Component {
  // calls at very first with component renders..
  constructor(props) {
    super(props);
    console.log('Hello world');
    
    this.state = {
      userData: [],
      carsData: []
    };
    
  }

  // calls at last of component renders..
  componentDidMount() {
    console.log('Hello React World oF DidMount!');
    this.fetchUsers();
    this.fetchCars();
  }


  // get users data from api backend node server..
  fetchUsers = () => {
    axios.get('/api/users')
    .then(res => {
      console.log(res.data);
      this.setState({...this.state, userData: res.data});
    });
  }

  // get cars data from api backend node server..
  fetchCars = () => {
    axios.get('/api/cars')
    .then(res => {
      console.log(res.data);
      this.setState({...this.state, carsData: res.data});
    });
  }

  // rendering method..
  render() {
    // console.log('This is rendered', this.state.userData.length);
    const { userData, carsData } = this.state;

    if (!userData.length || !carsData.length){
      return <h1>Loading...</h1>;

    }else{
      
      return (
        <>
          {console.log('Rendered Component!')}
          <h1>Hello React | Node World!</h1>
  
          <User data={ userData } />
          <Car data={ carsData } />
  
        </>
      );
    }
  }

}

export default App;