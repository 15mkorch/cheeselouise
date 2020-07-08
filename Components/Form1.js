import React from 'react';
import { useState } from 'react';
import { Button, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'

export default function Form1() {

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
                <form>
                    <FormGroup>
                        <Label for="firstName">First Name</Label>
                        <Input
                            className="input"
                            name="firstName"
                            value={form.firstName}
                            onChange={(e) => handleChange(e)}
                            placeholder="First Name"
                        />
                    </FormGroup>
                    <br />
                    <FormGroup>
                        <Label for="lastName">Last Name</Label>
                        <Input
                            className="input"
                            name="lastName"
                            value={form.lastName}
                            onChange={(e) => handleChange(e)}
                            placeholder="Last Name"
                        />
                    </FormGroup>
                    <br />

                    <FormGroup>
                        <Label for="phoneNumber">Phone Number</Label>
                        <Input
                            className="input"
                            name="phoneNumber"
                            value={form.phoneNumber}
                            onChange={(e) => handleChange(e)}
                            placeholder="Phone Number"
                        />
                    </FormGroup>
                    <br />

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
                    <br />

                    <FormGroup>
                        <Label for="zipCode">ZipCode</Label>
                        <Input
                            className="input"
                            name="zipCode"
                            value={form.zipCode}
                            onChange={(e) => handleChange(e)}
                            placeholder="Zip Code"
                        />
                    </FormGroup>
                    <br />

                    <FormGroup>
                        <Label for="eventType">Event Type</Label>
                        <Input
                            className="input"
                            name="eventType"
                            value={form.eventType}
                            onChange={(e) => handleChange(e)}
                            placeholder="What type of Event?"
                        />
                    </FormGroup>
                    <br />

                    <FormGroup>
                        <Label for="proposedDates">Proposed Dates</Label>
                        <Input
                            className="input"
                            name="proposedDates"
                            value={form.proposedDates}
                            onChange={(e) => handleChange(e)}
                            placeholder="What dates do you have in mind?"
                        />
                    </FormGroup>
                    <br />


                    <Button onClick={(e) => submitForm(e)}>Submit</Button>

                </form>
                <hr />
            </main>
        </div>

    )
}