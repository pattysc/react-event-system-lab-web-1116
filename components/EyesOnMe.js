const React = require('react');

class EyesOnMe extends React.Component{

  log(){
    console.log('Good!')
  }

  angry(){
    console.log('Hey! Eyes on me!')
  }

  render(){
    return(
      <div>
        <button onFocus={this.log} onBlur={this.angry}/>
      </div>
    )
  }
}

module.exports = EyesOnMe
