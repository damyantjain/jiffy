import React from 'react'

class UserClass extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            count : 0
        }
    }

    render(){
        const { name } = this.props;
        this.setState({
            count : 3
        })
        return (
            <div className="user-card">
            <h3>{this.state.count}</h3>
            <h3>{name}</h3>
            <h4>Boston, MA</h4>
            <h4>Linkedin - @damyant</h4>
        </div>
        )
    }
}

export default UserClass;