import React from 'react'
import { BrowserRouter as Router,Route} from 'react-router-dom'


export default class ReactDemo extends React.Component{
    render(){
        <Router>
            <Route path="/home" component={home} />
            <Route path="/about" component={about} />
        </Router>
    }

}