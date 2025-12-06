'use strict';
'use server';

import { count } from "console";
import { auth } from "../better-auth/auth";
import { inngest } from "../inngest/client";

export const singUpWithEmailFunction = async ({fullName, country, email, password, investmentGoals , riskTolerance, preferredIndustry}: SignUpFormData) => {
    try {
        console.log('Signing up user:', fullName);
        const response = await auth.api.signUpEmail({
            body : {
                email: email,
                password: password,
                name: fullName,
            }
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
        return {succes : false, message: 'Sign up failed'};
    }
}