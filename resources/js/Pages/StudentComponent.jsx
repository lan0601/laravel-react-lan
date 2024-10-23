import React,{Component} from "react";

export default class StudentComponent extends Component{
    render(){
        const {student} = this.props;
        return(
            <>
                <h1>Student Details</h1>
                <p>Name: {student.name}</p>
                <p>Age: {student.age}</p>
                <p>Email: {student.email}</p>

            </>
        )
    }
}