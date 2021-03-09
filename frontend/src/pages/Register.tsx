import {Form, Button} from "react-bootstrap";
import {Layout} from "../components/Layout";
import * as api from "../api/index";
import React, {useEffect, useState} from "react";
import {Redirect} from "react-router-dom";

export const Register = () => {
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                await api.user();
                await setIsLogin(true);
            }catch (e) {
                await setIsLogin(false);
            }
        })();
    }, []);

    const [error, setError] = useState({
        style: {},
        data: []
    });
    const handleRegister = async (e: React.SyntheticEvent) => {
        await e.preventDefault();
        const target = await e.target as typeof e.target & {
            code: { value: string };
            name: { value: string };
            email: { value: string };
            password: { value: string };

        };
        const {email, password, name, code} = await target;

        try {
            await api.register({
                email: email.value,
                password: password.value,
                name: name.value,
                code: code.value,
                type : "guardian"
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

    if(isLogin) {
        return <Redirect to={"dashboard"} />
    }

    return (
        <Layout>
            <div className="register">
                <div style={error.style}>
                    {error.data}
                </div>
                <Form onSubmit={handleRegister}>
                    <Form.Group>
                        <Form.Label>Code</Form.Label>
                        <Form.Control name="code" type="text" placeholder="Enter code"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" type="text" placeholder="Enter name"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name="email" type="email" placeholder="Enter email"/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control name="password" type="password" placeholder="Password"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </Layout>
    )
}