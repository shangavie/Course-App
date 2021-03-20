import React, {Component} from 'react';
import axios from 'axios';

export default class EditModule extends Component {

    //Use props to pass data from one component to another
    constructor(props) {
        super(props);

        this.onChangeModuleName = this.onChangeModuleName.bind(this);
        this.onChangeResponsiblePerson = this.onChangeResponsiblePerson.bind(this);
        this.onChangeRespectiveYear = this.onChangeRespectiveYear.bind(this);
        this.onChangeModuleCredit = this.onChangeModuleCredit.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            module_name:'',
            responsible_person:'',
            respective_year:'',
            module_credit:''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/modules/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    module_name: response.data.module_name,
                    responsible_person: response.data.responsible_person,
                    respective_year: response.data.respective_year,
                    module_credit: response.data.module_credit
                })
            })
            .catch(function(error) {
                console.log(error)
            })
    }

    //Get the updated user input for Module Name
    onChangeModuleName(e){
        this.setState({
            module_name:e.target.value
        });
    }

    //Get the updated user input for Responsible Person
    onChangeResponsiblePerson(e){
        this.setState({
            responsible_person: e.target.value
        });
    }

     //Get the updated user input for Year
     onChangeRespectiveYear(e){
        this.setState({
            respective_year: e.target.value
        });
    }

    //Get the updated user input for Credit
    onChangeModuleCredit(e){
        this.setState({
            module_credit: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            module_name: this.state.module_name,
            responsible_person: this.state.responsible_person,
            respective_year: this.state.respective_year,
            module_credit: this.state.module_credit
        };
        axios.post('http://localhost:4000/modules/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data),alert("The Course is Updated Successfully!"));

        this.props.history.push('/');
    }

    
    render() {
        return (
            <div>
                <h3>Update Module</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Module Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.module_name}
                                onChange={this.onChangeModuleName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Responsible Person: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.responsible_person}
                                onChange={this.onChangeResponsiblePerson}
                                />
                    </div>
                    <div className="form-group">
                        <label>Number of Credits: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.module_credit}
                                onChange={this.onChangeModuleCredit}
                                />
                    </div>
                    <label>Year: </label>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="yearOptions"
                                    id="1stYear"
                                    value="1st Year"
                                    checked={this.state.respective_year==='1st Year'}
                                    onChange={this.onChangeRespectiveYear}
                                    />
                            <label className="form-check-label">1st Year</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="yearOptions"
                                    id="2ndYear"
                                    value="2nd Year"
                                    checked={this.state.respective_year==='2nd Year'}
                                    onChange={this.onChangeRespectiveYear}
                                    />
                            <label className="form-check-label">2nd Year</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input"
                                    type="radio"
                                    name="yearOptions"
                                    id="3rdYear"
                                    value="3rd Year"
                                    checked={this.state.respective_year==='3rd Year'}
                                    onChange={this.onChangeRespectiveYear}
                                    />
                            <label className="form-check-label">3rd Year</label>
                        </div>
                        <br/>
                        <div className="form-group">
                            <input type="submit" 
                                   value="Update Module" 
                                   className="btn btn-primary" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}