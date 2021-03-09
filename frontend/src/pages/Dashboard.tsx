import {Layout} from "../components/Layout";
import {Table} from "react-bootstrap";
import React, {useEffect, useState} from "react";
import * as api from "../api/index";
import {Redirect} from "react-router-dom";

type parentType = {
    id: string,
    name: string,
    email: string,
    studentName: string
}

export const Dashboard = () => {
    const [isLogin, setIsLogin] = useState(true);

    const [parent, setParent] = useState<parentType>({
        id: "",
        name: "",
        email: "",
        studentName: ""
    });
    useEffect(() => {
        (async () => {
            try {
                let data = await api.parent();
                await setParent(data.data);
            } catch (e) {
                await setIsLogin(false);
            }
        })();
    }, []);

    if (!isLogin) {
        return <Redirect to={"login"}/>
    }
    return (
        <Layout>
            <div className="dashboard">
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Parent</th>
                        <th>Guardian Name</th>
                        <th>Guardian Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>{parent.id}</td>
                        <td>{parent.studentName}</td>
                        <td>{parent.name}</td>
                        <td>{parent.email}</td>
                    </tr>
                    </tbody>
                </Table>
            </div>
        </Layout>
    )
}