import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

class App extends Component {
  state = {
    Person:{
      fullName: 'Chaïma Mejbri',
      bio: 'lorem ipsum dolor sit amet, consectetur adip',
      imgSrc: 'https://images.unsplash.com/photo-1637070901110-c06a08018c35?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      profession: 'lorem ipsum dolor sit amet, consectetur adip',
      },
    shows: false,
    count: 0,
  };
  changeShows() {
    console.log("avant", this.state.shows)
    this.setState({shows: !(this.state.shows) }, () => console.log("apre", this.state.shows))
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);

  }
  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: 50, fontWeight:'normal'}} >
        <button onClick={() => { this.changeShows() }} >SHOW</button>
        {this.state.shows ? <div>
          <h3 style={{fontSize:'15px'}}> My name is {this.state.Person.fullName} </h3>
          <h3 style={{fontSize:'15px'}}> Bio : {this.state.Person.bio} </h3>
          <h3 style={{fontSize:'15px'}}> Profession :{this.state.Person.profession} </h3>
          <img src={this.state.Person.imgSrc} alt='img' className="image" style={{ width: "40%" }} />
        </div>
          : null}
        <p>
          Time interval since the component was mounted: {this.state.count}
        </p>


      </div>
    );

  };
}

export default App;