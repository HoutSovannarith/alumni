'use client'
import Image from "next/image";
import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';

interface FormValues {
    email: string;
    password: string;
}

const LogIn = () => {
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Required'),
    });

    const handleSubmit = (values: FormValues, actions: any) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
        }, 500);
    };

    return (
        <main className="h-screen flex justify-center items-center gap-8">
            <div
                className="border border-gray-200 bg-white drop-shadow-lg w-[550px] h-[550px] p-[50px] block rounded-xl">
                <h1 className="text-4xl font-bold text-primary text-[36px]">Sign In</h1>
                <p className="text-gray-500 my-5">Please enter your details.</p>
                <Formik
                    initialValues={{email: '', password: ''}}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({isSubmitting}) => (
                        <Form className="mx-auto mb-0 mt-8 max-w-md space-y-4">
                            <div>
                                <label htmlFor="email">Username / Email Address <span className="text-red-500">*</span></label>
                                <Field
                                    type="email"
                                    name="email"
                                    className="w-full my-2 rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm bg-white"
                                    placeholder="Enter email or username"
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500"/>
                            </div>

                            <div>
                                <label htmlFor="password">Password <span className="text-red-500">*</span></label>
                                <Field
                                    type="password"
                                    name="password"
                                    className="w-full my-2 rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm bg-white"
                                    placeholder="Enter password"
                                />
                                <ErrorMessage name="password" component="div" className="text-red-500"/>
                            </div>
                            <p className="text[16px] text-right text-gray-500 underline">
                                Forgot password?
                            </p>

                            <button type="submit" disabled={isSubmitting}
                                    className="inline-block w-full rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white">
                                {isSubmitting ? 'Signing in...' : 'Sign in'}
                            </button>
                            <p className="text[16px] text-center text-gray-500 ">
                                Don't have an account? &nbsp;
                                <a className="text-primary" href="/auth/register">Sign up</a>
                            </p>
                        </Form>
                    )}
                </Formik>

            </div>
            <Image src="/login/login.png" alt="login image" width="550" height="550"></Image>
        </main>
    )
}
export default LogIn