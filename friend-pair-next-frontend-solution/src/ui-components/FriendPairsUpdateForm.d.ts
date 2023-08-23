/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FriendPairs } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FriendPairsUpdateFormInputValues = {
    user?: string;
    loggedUserId?: string;
    friend?: string;
};
export declare type FriendPairsUpdateFormValidationValues = {
    user?: ValidationFunction<string>;
    loggedUserId?: ValidationFunction<string>;
    friend?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FriendPairsUpdateFormOverridesProps = {
    FriendPairsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    user?: PrimitiveOverrideProps<TextFieldProps>;
    loggedUserId?: PrimitiveOverrideProps<TextFieldProps>;
    friend?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type FriendPairsUpdateFormProps = React.PropsWithChildren<{
    overrides?: FriendPairsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    friendPairs?: FriendPairs;
    onSubmit?: (fields: FriendPairsUpdateFormInputValues) => FriendPairsUpdateFormInputValues;
    onSuccess?: (fields: FriendPairsUpdateFormInputValues) => void;
    onError?: (fields: FriendPairsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: FriendPairsUpdateFormInputValues) => FriendPairsUpdateFormInputValues;
    onValidate?: FriendPairsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FriendPairsUpdateForm(props: FriendPairsUpdateFormProps): React.ReactElement;
