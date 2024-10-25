import React,{Component} from "react";
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default class StudentComponent extends Component{
    render(){
        const {student} = this.props;
        return(
            <>
                <AuthenticatedLayout
                header={
                    <h2 className="text-xl font-semibold leading-tight text-gray-800">
                        Students
                    </h2>
                }
                >
                <Head title="Student" />
                <div className="py-12">
                    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                            <h1>Student Details</h1>
                            <p>Name: {student.name}</p>
                            <p>Age: {student.age}</p>
                            <p>Email: {student.email}</p>
                            </div>
                        </div>
                    </div>
                </div>
                </AuthenticatedLayout>
            </>
        )
    }
}