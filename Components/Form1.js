import React from 'react';
import { useState } from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'

export default function Form1() {

    let [form, setForm] = useState({
        f_name: "",
        l_name: "",
        number: "",
        email: "",
        message: "",
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value })
    }

    const submitForm = (e) => {
        e.preventDefault();
        axios.post('/api/send-email', form)
    }

    return (
        <div id='form1' className='form3'>
            <form className='form2'>
                <FormGroup>
                    <Label for="f_name">First Name</Label>
                    <Input
                        className="input"
                        name="f_name"
                        value={form.f_name}
                        onChange={(e) => handleChange(e)}
                        placeholder="First Name"
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="l_name">Last Name</Label>
                    <Input
                        className="input"
                        name="l_name"
                        value={form.l_name}
                        onChange={(e) => handleChange(e)}
                        placeholder="Last Name"
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="email"> E-mail</Label>
                    <Input
                        className="input"
                        name="email"
                        value={form.email}
                        onChange={(e) => handleChange(e)}
                        placeholder="E-mail"
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="number">Phone Number</Label>
                    <Input
                        className="input"
                        name="number"
                        value={form.number}
                        onChange={(e) => handleChange(e)}
                        placeholder="Phone Number"
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="message">Question/Message</Label>
                    <Input
                        className="input"
                        name="message"
                        value={form.message}
                        onChange={(e) => handleChange(e)}
                        placeholder="Message"
                    />
                </FormGroup>

                <Button onClick={(e) => submitForm(e)}>Submit</Button>

            </form>
        </div>

    )
}