import {useField} from "vee-validate";
import * as yup from "yup";
import {ref, computed} from "vue";
import type {Ref} from "vue";

export const useEmail = (name: string = "email", initialValue: string = "") => {
    return useField(
        name,
        yup
            .string()
            .required('This field required')
            .min(5, 'Minimum 6 characters')
            .email("Enter valid Email"),
        {initialValue},
    )
};
export const useTelegrram = (name: string = "telegram", initialValue: string = "") => {
    return useField(
        name,
        yup
            .string()
            .required('This field required')
            .min(5, 'Minimum 5 characters'),
        {initialValue},
    )
};

export const useName = (
    name: string = "field",
    initialValue: string = "",
) => {
    return useField(name, yup.string().min(3, 'Minimum 3 characters'),
        {initialValue},
    )
};
export const useMessage = (
    name: string = "field",
    initialValue: string = "",
) => {
    return useField(name, yup.string().min(70, 'Minimum 70 characters'), {
        initialValue,
    });
};