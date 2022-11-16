const React = require('react')

class Show extends React.Component {
   render () {
    const {name, color, readyToEat} = this.props
    console.log(this.props.fruit)
    return (
    <div>
        <h1> Show Page </h1>
        <div>
            <p>The {name} is {color}.<br /></p>
            {readyToEat ? " It is ready to eat" : "It is not ready to eat, don't touch that!"}
        </div>
    </div>
     );
    }
 }
//  we can write javascript code inside the curly brackets
 module.exports  = Show;