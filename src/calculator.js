import React from 'react';
import TextField from 'material-ui/TextField';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import './index.css';
import AppBar from 'material-ui/AppBar';
import Grid from 'material-grid/dist/Grid/Grid';
import Cell from 'material-grid/dist/Grid/Cell';
import Paper from 'material-ui/Paper';


export default class Calculator extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      value : "",
    };

    this.handelChange = this.handleChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  handleChange(e){
    this.setState({value : e.target.value});
  }

  keyPress(e){

    var addToHistory = function(p,r) {

      var parent = document.createElement("div")
      parent.className = "parent"

      var problem = document.createElement("div")
      problem.className = "problem"
      problem.innerHTML = p

      var result = document.createElement("div")
      result.className = "result"
      result.innerHTML = r

      parent.appendChild(problem)
      parent.appendChild(result)


      var history = document.getElementById("history")
      history.insertBefore(parent, history.firstChild);
    }

    if(e.keyCode === 13){
      var problem = e.target.value;
      try{
        var result = eval(problem)
      }
      catch(TypeError){
        var result = "not valid input"
      }
      finally{
          addToHistory(problem, result);
          this.setState({value : ""})
      }
    }

  }

  render(){
    return(
      <div className="container">
          <AppBar><h1>Calculator</h1></AppBar>

          <TextField
            id="problem-input"
            placeholder="Enter your problem here"
            value={this.state.value}
            onChange={this.handelChange}
            onKeyDown={this.keyPress}
            fullWidth
          />

          <div className="parent">

            <div className="problem">
              <Paper>Problems</Paper>
            </div>

            <div className="result">
              <Paper>Results</Paper>
            </div>

          </div>
          <div id="history">

          </div>

      </div>
    )}

}
