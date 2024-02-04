import React, {Component} from 'react'

class Welcome extends Component{
    render(){
        const {name,heroName} = this.props
        // return <h1>Welcome {this.props.name} a.k.a. {this.props.heroName} in Class Component</h1>
        return <h1>Welcome {name} a.k.a. {heroName} in Class Component</h1>
    }
}

export default Welcome