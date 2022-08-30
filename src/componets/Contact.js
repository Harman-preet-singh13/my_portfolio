import React, { useState } from "react";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


function Contact() {
    const [status, setStatus] = useState("Submit");
    const handleSumbit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        })
        setStatus("Submit");
        let result = await response.json();
        alert(result.status)
    }
    return (
        <div id="contact">
            <hr></hr>
            <Typography variant="h2" component="div" gutterBottom>
                Contact me
            </Typography>
            <form onSubmit={handleSumbit}>
                <Stack spacing={1} mt={10}>

                    <div className="textfield">
                        <div className="spacing">
                            <TextField
                                id="name"
                                label="Name"
                                required
                            />
                        </div>
                        <div className="spacing">
                            <TextField
                                id="email"
                                label="Email"
                                required
                            />
                        </div>
                        <div className="spacing">
                            <TextField
                                id="message"
                                label="Message"
                                required
                            />
                        </div>
                        <div className="btn-spacing">
                        <Button variant="contained" type="submit">{status}</Button>
                    </div>
                    </div>
                </Stack>
            </form>
        </div>
    )
}

export default Contact