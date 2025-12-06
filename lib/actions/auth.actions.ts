'use strict';
'use server';

import { count } from "console";
import { getAuth } from "../better-auth/auth";
import { inngest } from "../inngest/client";
import { headers } from "next/headers";

export const singUpWithEmailFunction = async ({fullName, country, email, password, investmentGoals , riskTolerance, preferredIndustry}: SignUpFormData) => {
    try {
        console.log('Signing up user:', fullName);
        const auth = await getAuth();
        const response = await auth.api.signUpEmail({
            body : {
                email: email,
                password: password,
                name: fullName,
            },
            headers: await headers()
        } as any)

        if(response){
            await inngest.send({
                name : "app/user.created",
                data : {
                    email: email,
                    name : fullName,
                    country,
                    investmentGoals,
                    riskTolerance,
                    preferredIndustry

                }

            })
        }
        return {succes : true, data: response};
    } catch(e) {
        console.log(e);
        return {success : false, message: 'Sign up failed'};
    }
}

export const signOut = async() =>{
    try{
        const auth = await getAuth();
        await auth.api.signOut({
            headers : await headers()
        });
    }
    catch(e){
        console.log(e);
        return {success : false, message: 'Sign out failed'};
    }
}

export const signInWithEmailFunction = async({email, password} : SignInFormData) =>{
    try{
        const auth = await getAuth();
        const response = await auth.api.signInEmail({
            body : {
                email,
                password
            },
            headers: await headers()
        } as any)

        return {success : true, data: response};
    }
    catch(e){
        console.log(e);
        return {success : false, message: 'Sign in failed'};
    }
}