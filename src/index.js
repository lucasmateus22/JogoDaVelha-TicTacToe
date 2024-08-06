import React  from "react"
import ReactDom from 'react-dom'
import '.index.css'

class App extends React.Component{
    render(){
        return(
            <div className="App">
                <h1>Hello World!</h1>
            </div>
        )
    }
}

ReactDom.render(<App/>, Document.getElementById('root'))