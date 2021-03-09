import {Form, Button} from "react-bootstrap";
import {Layout} from "../components/Layout";
import React, {useEffect, useState} from "react";
import * as api from "../api/index";
import {Redirect} from "react-router-dom";

type userType = {
    name: string,
    email: string,
    type: string,
    password: string
}

export const Profile = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [user, setUser] = useState<userType>({
        name: "",
        email: "",
        type: "",
        password: ""
    });
    const [error, setError] = useState({});

    useEffect(() => {
        (async () => {
            try {
                let data = await api.user();
                await setUser({
                    ...data.data,
                    password: ""
                });
            } catch (e) {
                await setIsLogin(false);
            }
        })()
    }, []);

    const handleUpdate = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        const target = await e.target as typeof e.target & {
            name: { value: string };
            email: { value: string };
            password: { value: string };
        };

        const {email, password, name} = await target;

        try {
            await api.updateUser({
                email: email.value,
                password: password.value,
                name: name.value,
            });
        } catch (e) {
            let errorObj = e?.response?.data?.errors;
            if (errorObj) {
                let keys = Object.keys(errorObj);
                for (let i = 0; i < keys.length; i++) {
                    setError({style: {display: "block"}, data: errorObj[keys[i]]});
                }
            }
        }
    }

    if (!isLogin) {
        return <Redirect to={"login"}/>
    }
    return (
        <Layout>
            <div className="register">
                <Form onSubmit={handleUpdate}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" type="text" defaultValue={user.name}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" defaultValue={user.email}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" defaultValue={user.password}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Update
                    </Button>
                </Form>
            </div>
        </Layout>
    )
}