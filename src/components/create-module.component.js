import React, {Component} from 'react';
import axios from 'axios';

export default class CreateModule extends Component{

    //Use props to pass data from one component to another
    constructor(props) {
        super(props);

        this.onChangeModuleName = this.onChangeModuleName.bind(this);
        this.onChangeResponsiblePerson = this.onChangeResponsiblePerson.bind(this);
        this.onChangeRespectiveYear = this.onChangeRespectiveYear.bind(this);
        this.onChangeModuleCredit = this.onChangeModuleCredit.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state={
            module_name:'',
            responsible_person:'',
            respective_year:'',
            module_credit:''
        }
    }
    //Get the user input for Module Name
    onChangeModuleName(e){
        this.setState({
            module_name:e.target.value
        });
    }
    //Get the user input for Responsible Person
    onChangeResponsiblePerson(e){
        this.setState({
            responsible_person: e.target.value
        });
    }
    //Get the user input for Year
    onChangeRespectiveYear(e){
        this.setState({
            respective_year: e.target.value
        });
    }
    //Get the user input for Credit
    onChangeModuleCredit(e){
        this.setState({
            module_credit: e.target.value
        });
    }

    //Store the details to the database
    onSubmit(e){
        e.preventDefault();

        console.log(`form submitted:`);
        console.log(` Module Name: ${this.state.module_name}`);
        console.log(` Responsible Person: ${this.state.responsible_person}`);
        console.log(` Year: ${this.state.respective_year}`);
        console.log(` Credit: ${this.state.module_credit}`);
       
            const newModule = {
                module_name: this.state.module_name,
                responsible_person: this.state.responsible_person,
                respective_year: this.state.respective_year,
                module_credit: this.state.module_credit
        }

        axios.post('http://localhost:4000/modules/add', newModule)
            .then(res => console.log(res.data),alert("The New Course is Created Successfully!"));

        this.setState({
            module_name:'',
            responsible_person:'',
            respective_year:'',
            module_credit:''
        })
    }
    
    //Form Design
    render() {
        return (
            <div style={{marginTop: 20}}>
               <h3>Create New Module</h3>
               <form onSubmit={this.onSubmit}>
                   <div className="form-group">
                       <label>Module Name: </label>
                       <input type="text" 
                              className="form-control" 
                              value={this.state.module_name} 
                              onChange={this.onChangeModuleName}/>
                   </div>
                   <div className="form-group">
                       <label>Responsible Person: </label>
                       <input type="text" 
                              className="form-control" 
                              value={this.state.responsible_person} 
                              onChange={this.onChangeResponsiblePerson}/>
                   </div>
                   <div className="form-group">
                       <label>Number of Credits: </label>
                       <input type="text" 
                              className="form-control" 
                              value={this.state.module_credit} 
                              onChange={this.onChangeModuleCredit}/>
                   </div>
                   <label>Year: </label>
                   <div className="form-group">
                       <div className="form-check form-check-inline">
                           <input className="form-check-input" 
                                  type="radio" 
                                  name="yearOptions" 
                                  id="1stYear" 
                                  value="1st Year" 
                                  checked={this.state.respective_year ==='1st Year'} 
                                  onChange={this.onChangeRespectiveYear}>
                            </input>
                       <label className="form-check-label">1st Year </label>
                       </div>
                       <div className="form-check form-check-inline">
                           <input className="form-check-input" 
                                  type="radio" 
                                  name="yearOptions" 
                                  id="2ndYear" 
                                  value="2nd Year" 
                                  checked={this.state.respective_year ==='2nd Year'} 
                                  onChange={this.onChangeRespectiveYear}>
                            </input>
                       <label className="form-check-label">2nd Year </label>
                       </div>
                       <div className="form-check form-check-inline">
                           <input className="form-check-input" 
                                  type="radio" 
                                  name="yearOptions" 
                                  id="3rdYear" 
                                  value="3rd Year" 
                                  checked={this.state.respective_year ==='3rd Year'} 
                                  onChange={this.onChangeRespectiveYear}>
                            </input>
                       <label className="form-check-label">3rd Year </label>
                       </div>
                   </div>
                   <div className="form-group">
                       <input type="submit" 
                              value="Create Module" 
                              className="btn btn-primary">
                        </input>
                   </div>
               </form>
            </div>
        )
    }
}