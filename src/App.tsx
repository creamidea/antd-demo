import { Button } from 'antd';
import * as React from 'react';
import { PetApi } from './api/Petstore'
import './App.css';

class App extends React.Component {
  public componentWillMount () {
    const api = new PetApi();
    api.getPetById(1).then(data => {
      console.log(data);
    })
  }

  public render() {
    return (
      <div className="App">
        <Button type="primary">Button</Button>
      </div>
    );
  }
}

export default App;