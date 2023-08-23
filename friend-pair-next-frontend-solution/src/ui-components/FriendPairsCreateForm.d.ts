/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FriendPairsCreateFormInputValues = {
    user?: string;
    loggedUserId?: string;
    friend?: string;
};
export declare type FriendPairsCreateFormValidationValues = {
    user?: ValidationFunction<string>;
    loggedUserId?: ValidationFunction<string>;
    friend?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FriendPairsCreateFormOverridesProps = {
    FriendPairsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    user?: PrimitiveOverrideProps<TextFieldProps>;
    loggedUserId?: PrimitiveOverrideProps<TextFieldProps>;
    friend?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FriendPairsCreateFormProps = React.PropsWithChildren<{
    overrides?: FriendPairsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: FriendPairsCreateFormInputValues) => FriendPairsCreateFormInputValues;
    onSuccess?: (fields: FriendPairsCreateFormInputValues) => void;
    onError?: (fields: FriendPairsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FriendPairsCreateFormInputValues) => FriendPairsCreateFormInputValues;
    onValidate?: FriendPairsCreateFormValidationValues;
} & React.CSSProperties>;
export default function FriendPairsCreateForm(props: FriendPairsCreateFormProps): React.ReactElement;
