import {Table} from "react-bootstrap";
import {Layout} from "../components/Layout";
import React, {useEffect, useState} from "react";
import * as api from "../api";
import {Redirect} from "react-router-dom";

export const Students = () => {
    const [error, setError] = useState({
        style: {},
        data: []
    });
    const [isLogin, setIsLogin] = useState(true);

    const [students, setStudents] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                let data = await api.students();
                await setStudents(data.data);
                await setIsLogin(true);
            }catch (e) {
                await setIsLogin(false);
            }
        })()
    }, [])

    if(!isLogin) {
        return <Redirect to={"login"} />
    }

    return (
        <Layout>
            <div className="dashboard">
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Guardian Name</th>
                        <th>Guardian Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {students.map((item: any) => {
                        return (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.guardianName}</td>
                                <td>{item.guardianEmail}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </Table>
            </div>
        </Layout>
    )
}