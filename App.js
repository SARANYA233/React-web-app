
import React from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from '../src/components/form.component';


function App() {
  return (
    <div className="ReactFormApp">
      <Form />
    </div>
  );
}


class App extends React.Component {


    constructor(props) {

        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }
    }

    componentDidMount() {

        fetch('https://dry-bayou-99944.herokuapp.com/profiles')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });

    }

    render() {

        const { isLoaded, items } = this.state;

        if (!isLoaded)
            return <div>Loading...</div>;

        return (
            <div className="App">
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            Name: {item.name} | Email: {item.email}
                            Contact: {item.contact} | Address: {item.address}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default App;