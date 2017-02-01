const React = require('react');

class Keypad extends React.Component{
  
  log(){
    console.log('Entering password...')
  }

  render(){
    return(
      <div>
        <input type="password" onKeyUp={this.log}/>
      </div>
    )
  }
}

module.exports = Keypad
