import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import * as Yup from 'yup';
import Image from "@/components/image/Image";

interface FormValues {
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    password: string;
    passwordConfirmation: string;
    privacyAccept: boolean;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "";

const SignUp = async (formData: FormValues) => {
    const response = await fetch(`${API_BASE_URL}/api/v1/auth/register`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });

    const responseBody = await response.json();

    if (!response.ok) {
        throw new Error(responseBody.message);
    }

    const validationSchema = Yup.object({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        userName: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        password: Yup.string().required('Required'),
        passwordConfirmation: Yup.string()
            .oneOf([Yup.ref('password')], 'Passwords must match')
            .required('Required'),
        privacyAccept: Yup.boolean(),
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
                className="max-w-xl lg:max-w-3xl w-[550px] bg-white drop-shadow-lg p-[50px] block rounded-xl">
                <h1 className="text-4xl font-bold text-primary text-[36px]">Sign Up</h1>
                <Formik
                    initialValues={{
                        firstName: '',
                        lastName: '',
                        email: '',
                        username: '',
                        password: '',
                        passwordConfirmation: '',
                        privacyAccept: false,
                    }}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({isSubmitting}) => (
                        <Form className="mt-8 grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="FirstName"
                                       className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                    First Name
                                </label>
                                <Field
                                    type="text"
                                    name="firstName"
                                    className="w-full my-2 rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm bg-white"
                                    placeholder="Enter first name"
                                />
                                <ErrorMessage name="firstName" component="div"
                                              className="text-red-500 text-sm"/>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="LastName"
                                       className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                    Last Name
                                </label>
                                <Field
                                    type="text"
                                    name="lastName"
                                    className="w-full my-2 rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm bg-white"
                                    placeholder="Enter last name"
                                />
                                <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm"/>
                            </div>
                            <div className="col-span-6">
                                <label htmlFor="Username"
                                       className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                    Username
                                </label>
                                <Field
                                    type="text"
                                    name="username"
                                    className="w-full my-2 rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm bg-white"
                                    placeholder="Enter username"
                                />
                                <ErrorMessage name="username" component="div" className="text-red-500 text-sm"/>
                            </div>
                            <div className="col-span-6">
                                <label htmlFor="Email"
                                       className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                    Email
                                </label>
                                <Field
                                    type="email"
                                    name="email"
                                    className="w-full my-2 rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm bg-white"
                                    placeholder="Enter email"
                                />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-sm"/>
                            </div>
                            <div className="col-span-6">
                                <label htmlFor="Password"
                                       className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                    Password
                                </label>
                                <Field
                                    type="password"
                                    name="password"
                                    className="w-full my-2 rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm bg-white"
                                    placeholder="Enter pasword"
                                />
                                <ErrorMessage name="password" component="div" className="text-red-500 text-sm"/>
                            </div>
                            <div className="col-span-6">
                                <label
                                    htmlFor="PasswordConfirmation"
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                >
                                    Password Confirmation
                                </label>
                                <Field
                                    type="password"
                                    name="confirmPassword"
                                    className="w-full my-2 rounded-lg border border-gray-200 p-4 pe-12 text-sm shadow-sm bg-white"
                                    placeholder="Enter password confirmation"
                                />
                                <ErrorMessage name="passwordConfirmation" component="div"
                                              className="text-red-500 text-sm"/>
                            </div>
                            {/*<div className="col-span-6">*/}
                            {/*    <label htmlFor="MarketingAccept" className="flex gap-4 items-center">*/}
                            {/*        <Field*/}
                            {/*            type="checkbox"*/}
                            {/*            id="MarketingAccept"*/}
                            {/*            name="marketingAccept"*/}
                            {/*            className="size-5 rounded-md border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800 dark:focus:ring-offset-gray-900"*/}
                            {/*        />*/}
                            {/*        <span className="text-sm text-gray-700 dark:text-gray-200">*/}
                            {/*                    I want to receive emails about events, product updates and company announcements.*/}
                            {/*                </span>*/}
                            {/*    </label>*/}
                            {/*</div>*/}

                            <div className="col-span-6 flex flex-col items-center gap-4">
                                <button type="submit" disabled={isSubmitting}
                                        className="inline-block w-full rounded-lg bg-primary px-5 py-3 text-sm font-medium text-white">
                                    {isSubmitting ? 'Signing up...' : 'Sign up'}
                                </button>
                                <p className="mt-4 text-sm text-gray-500 sm:mt-0 dark:text-gray-400">
                                    Already have an account? <a href="/auth/login"
                                                                className="text-gray-700 underline dark:text-gray-200">Log
                                    in</a>.
                                </p>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
            <Image src="/register/register.png"
                   alt="Register image"
                   width={550}
                   height={550}></Image>
        </main>
    )
}

export default SignUp;