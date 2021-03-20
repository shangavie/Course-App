import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Module = props => (
    <tr>
        <td className={props.module.module_credit ? 1 : ''}>{props.module.module_name}</td>
        <td className={props.module.module_credit ? 1 : ''}>{props.module.responsible_person}</td>
        <td className={props.module.module_credit ? 1 : ''}>{props.module.respective_year}</td>
        <td className={props.module.module_credit ? 1 : ''}>{props.module.module_credit}</td>
        <td>
            <Link to={"/edit/"+props.module._id}>Edit</Link>
        </td>
        <td>
            <Link to={'delete/'+props.module._id} className="nav-link">Delete</Link>
        </td>
    </tr>
)

export default class ModuleList extends Component {

    constructor(props) {
        super(props);
        this.state = {modules: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/modules/')
            .then(response => {
                this.setState({modules: response.data});
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    componentDidUpdate() {
        axios.get('http://localhost:4000/modules/')
        .then(response => {
            this.setState({modules: response.data});
        })
        .catch(function (error) {
            console.log(error);
        })   
    }

    moduleList() {
        return this.state.modules.map(function(currentModule, i) {
            return <Module module={currentModule} key={i} />;
        });
    }

    render() {
        return (
            <div>
                <h3>Module List</h3>
                <table className="table table-striped" style={{ marginTop: 20 }}>
                    <thead>
                        <tr>
                            <th>Module Name</th>
                            <th>Responsible Person</th>
                            <th>Year</th>
                            <th>Credits</th>
                            <th>Edit Link</th>
                            <th>Delete Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.moduleList() }
                    </tbody>
                </table>
            </div>
        )
    }
}