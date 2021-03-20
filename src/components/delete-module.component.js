import {Component} from 'react';
import axios from 'axios';

export default class DeleteModule extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        axios.delete('http://localhost:4000/modules/delete/'+this.props.match.params.id)
            .then(res => console.log(res.data),alert("The Course is deleted Successfully!"));

            this.props.history.push('/');
    }
    onSubmit(e){
        e.preventDefault();
        axios.delete('http://localhost:4000/modules/delete/'+this.props.match.params.id)
            .then(res => console.log(res.data),alert("The Course is deleted Successfully!"));

            this.props.history.push('/');
    }
    
    //Form Design
    render() {
        return (
            <div style={{marginTop: 20}}>
               <form onSubmit={this.onSubmit}>
                   <div className="form-group" >
                       <input type="submit" 
                              value="Delete Module Confirmation"
                              className="btn btn-primary">
                        </input>
                   </div>
               </form>
            </div>
        )
    }
}