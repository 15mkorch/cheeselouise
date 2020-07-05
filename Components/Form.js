import { useState, useEffect } from 'react';
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default function Form() {

    let [form, setForm] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        email: "",
        zipCode: "",
        eventType: "",
        proposedDates: ""
    })

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        if (type == 'checkbox') {
            setForm({ ...form, [name]: checked })
        } else {
            setForm({ ...form, [name]: value })
        }
    }

    const submitForm = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/forms', form)
    }

    return (
        <div>
            <main className="form">
                <Form>
                    <Input
                        className="input"
                        name="firstName"
                        value={form.firstName}
                        onChange={(e) => handleChange(e)}
                        placeholder="First Name"
                    />
                    <br />

                    <Input
                        className="input"
                        name="lastName"
                        value={form.lastName}
                        onChange={(e) => handleChange(e)}
                        placeholder="Last Name"
                    />
                    <br />

                    <Input
                        className="input"
                        name="phoneNumber"
                        value={form.phoneNumber}
                        onChange={(e) => handleChange(e)}
                        placeholder="Phone Number"
                    />
                    <br />

                    <Input
                        className="input"
                        name="email"
                        value={form.email}
                        onChange={(e) => handleChange(e)}
                        placeholder="E-mail"
                    />
                    <br />

                    <Input
                        className="input"
                        name="zipCode"
                        value={form.zipCode}
                        onChange={(e) => handleChange(e)}
                        placeholder="Zip Code"
                    />
                    <br />

                    <Input
                        className="input"
                        name="eventType"
                        value={form.eventType}
                        onChange={(e) => handleChange(e)}
                        placeholder="What type of Event?"
                    />
                    <br />
                    <Input
                        className="input"
                        name="proposedDates"
                        value={form.proposedDates}
                        onChange={(e) => handleChange(e)}
                        placeholder="What dates do you have in mind?"
                    />
                    <br />

                    <Button onClick={(e) => submitForm(e)}>Submit</Button>
                </Form>
                <hr />
            </main>
            <style jsx>{`
                .form
                {
                width: 100%;
                length: 100%;
                display: inline-block;
                text-align: center;
                font-family: "Poppins";
                }
                .button
                 {
                    background-color: #9cd6d6;
                    border: none;
                    color: white;
                    padding: 15px 32px;
                    text-align: center;
                    text-decoration: none;
                    display: inline-block;
                    font-size: 16px;
                }
                .input {
                    width: 30%;
                    padding: 12px 20px;
                    margin: 8px 0;
                    box-sizing: border-box;
                }
                .checkbox {
                    opacity: 0;
                    position: absolute;
                    width: 0;
                    height: 0;
                    margin-bottom: 10px;
                }
                .check {
                    font-family: "Poppins";
                    text-align: left;
                    display: inline-block;
                    width: 30%;
                    position: relative;
                    padding-left: 40px;
                    box-sizing: border-box;
                }
                h4 {
                    font-size: 15px;
                    font-family: poppins;
                    display: inline-block;
                    vertical-align: middle;
                    margin: 5px;
                }

                .checkmark {
                    background-color: #eee;
                    height: 25px;
                    left: 0;
                    position: absolute;
                    top: 0;
                    width: 25px;
                }
                .check input:checked ~ .checkmark {
                    background-color: #9cd6d6;
                }

                .checkmark:after {
                    color: #ffffff;
                    content: "L";
                    display: none;
                    font-size: 20px;
                    left: 9px;
                    position: absolute;
                    top: -4px;
                    -webkit-transform: rotate(40deg) scale(-1, 1);
                    -ms-transform: rotate(40deg) scale(-1, 1);
                    transform: rotate(40deg) scale(-1, 1);
                }

                .check input:checked ~ .checkmark:after {
                    display: block;
                }
            `}</style>
        </div>

    )
}