import React,{Component} from "react";
import StudentComponent from "./StudentComponent";

export default class AllStudentComponent extends Component{
    state={
        student:{
            name: 'John',
            age: 25,
            email: 'john@gmail.com'
        }
    }

    render(){
        return(
            <>
                <StudentComponent student = {this.state.student}/>
            </>
        )
    }
}