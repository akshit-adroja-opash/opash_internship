import { Container, Grid, TextField, Box } from "@mui/material";
import './App.css'
import {useForm } from 'react-hook-form';
import { useState } from "react";

type FormValues = {
    email: string;
    password: string;
};

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const onSubmit = (data: FormValues) => {
        console.log(data);
        
        

        if(data.password.length < 6){
            alert("Password must be at least 6 characters long");
        }
        else{
            alert("Login Successful");
        }
    }
    return (
        <div className="bg-color">
            <div>
                <Container className="form-container">
                    <div>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={4} lg={6}>
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <Box component="div" sx={{ p: 2, border: '1px dashed grey', textAlign: 'left' }}>
                                        <h1>login</h1>
                                    </Box>
                                    <Box>
                                        <TextField
                                            label="Email"
                                            variant="outlined"
                                            fullWidth
                                            margin="normal"
                                            {...register("email", { required: "Email is required" })}
                                            error={!!errors.email}
                                            helperText={errors.email?.message}
                                        />
                                        <TextField
                                            label="Password"
                                            type="password"
                                            variant="outlined"
                                            fullWidth
                                            margin="normal"
                                            {...register("password", { required: "Password is required" })}
                                            error={!!errors.password}
                                            helperText={errors.password?.message}
                                        />
                                        <button type="submit" className="submit-btn">Login</button>
                                    </Box>
                                </form>
                            </Grid>
                        </Grid>
                    </div>
                </Container>
            </div>
        </div>
    );
}
export default LoginForm;
