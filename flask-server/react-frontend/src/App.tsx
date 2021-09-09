import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import axios from 'axios'

interface IMessage {
    message: any
}

interface IResponse {
    status: number,
    data: IMessage
}

const defaultImessage: IMessage = {message: 'nothing yet initialised'}
const defaultIResponse: IResponse = {status: 400, data: defaultImessage}

function App() {
    const [getMessage, setGetMessage] = useState<IResponse>(defaultIResponse)

    useEffect(() => {
        axios.get('http://localhost:5000/players').then(response => {
            console.log("SUCCESS", response)
            const res: IResponse = {
                status: response.status,
                data: {
                    message: response.data[0].GamerTag
                }
            };
            setGetMessage(res)
            console.log('get message:', getMessage)
            console.log('another one')
        }).catch(error => {
            console.log(error)
        })

    }, [])
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>React + Flask Tutorial</p>
                <div>{getMessage.status === 200 ?
                    <h3>{getMessage.data.message}</h3>
                    :
                    <h3>LOADING</h3>}</div>
            </header>
        </div>
    );
}

export default App;