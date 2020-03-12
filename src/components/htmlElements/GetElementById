import React, { Component } from 'react'
export class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username:'',
            comment:'',
            select:'React'
        }
    }
    changeusername=(event) =>{
        this.setState({username:event.target.value})
    }
    changecomment=(event) =>{
        this.setState({comment:event.target.value})
    }
    changeselect=(event) =>{
        this.setState({select:event.target.value})
    }
    handleSubmit=(event) =>{
        alert(`${this.state.username}${this.state.comment}${this.state.select}`);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor='username'>Username</label>
                    <input type='text' name='username' value={this.state.username} onChange={this.changeusername}></input>
                </div>
                <div>
                    <label htmlFor='Comments'>Comments</label>
                    <textarea name='Comments' value={this.state.comment} onChange={this.changecomment}></textarea>
                </div>
                <div>
                    <label htmlFor='select'>Select:</label>
                    <select name='select' value={this.state.select} onChange={this.changeselect}>
                        <option value='React'>React</option>
                        <option value='Angular'>Killme</option>
                        <option value='Vue'>Vue</option>
                        <option value='Nodejs'>Joker</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}
export default Form