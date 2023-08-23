/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  PasswordField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Users } from "../../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function UsersCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    username: "",
    password: undefined,
  };
  const [username, setUsername] = React.useState(initialValues.username);
  const [password, setPassword] = React.useState(initialValues.password);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setUsername(initialValues.username);
    setPassword(initialValues.password);
    setErrors({});
  };
  const validations = {
    username: [{ type: "Required" }],
    password: [{ type: "Required" }],
  };

  const processSubmit = 
    async (event) => {
      event.preventDefault();
      let modelFields = {
        username,
        password,
      };
      validateFormData(modelFields).then((results) => {
        if(results.some((r) => r.hasError)){
          return;
        };
      });
      if (onSubmit) {
        modelFields = onSubmit(modelFields);
      }
      saveUser(modelFields);
    }
         
    async function validateFormData(modelFields) {
      const fieldNames = Object.keys(validations);
      const validationPromises = fieldNames.reduce((promises, fieldName) => {
        if (Array.isArray(modelFields[fieldName])) {
          const validationPromise = validateArrayField(
            fieldName,
            modelFields[fieldName]
          );
          promises.push(validationPromise);
        } else {
          const validationPromise = validateFormField(fieldName, modelFields[fieldName]);
          promises.push(validationPromise);
        }
        return promises;
      }, []);
    
      const validationResponses = await Promise.all(validationPromises);
      return validationResponses;
    }

    async function validateArrayField(fieldName, items) {
      const validationPromises = items.map((item) =>
        runValidationTasks(fieldName, item)
      );
      const validationResponses = await Promise.all(validationPromises);
      return validationResponses;
    }

    async function validateFormField(fieldName, value) {
      const validationResponse = await runValidationTasks(fieldName, value);
      return validationResponse;
    }
    
    async function runValidationTasks(fieldName, currentValue) {
      
      const validationResponse = await runFieldValidation(fieldName, currentValue);
      await updateErrors(fieldName, validationResponse);
      return validationResponse;
    }
        
    async function runFieldValidation(fieldName, value) {
      const validationResponse = await validateField(value, validations[fieldName]);
      const customValidator = fetchByPath(onValidate, fieldName);
      if (customValidator) {
        return customValidator(value, validationResponse);
      }
      return validationResponse;
    }
    
    async function updateErrors(fieldName, validationResponse) {
      setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    }
    
    const saveUser = async (modelFields) => {
      try {
        Object.entries(modelFields).forEach(([key, value]) => {
          if (typeof value === "string" && value.trim() === "") {
            modelFields[key] = undefined;
          }
        });
        await DataStore.save(new Users(modelFields));
        console.log("a guarda.",onSuccess);
        if (onSuccess) {
          onSuccess(modelFields);
        console.log("guardado", modelFields);

        }
        if (clearOnSuccess) {
          resetStateValues();
        }
      } catch (err) {
        if (onError) {
          onError(modelFields, err.message);
        }
      } 
    }

  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={processSubmit}
      {...getOverrideProps(overrides, "UsersCreateForm")}
      {...rest}
    >
      <TextField
        label="Username"
        isRequired={true}
        isReadOnly={false}
        value={username}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username: value,
              password,
            };
            const result = onChange(modelFields);
            value = result?.username ?? value;
          }
          if (errors.username?.hasError) {
            runValidationTasks("username", value);
          }
          setUsername(value);
        }}
        onBlur={() => runValidationTasks("username", username)}
        errorMessage={errors.username?.errorMessage}
        hasError={errors.username?.hasError}
        {...getOverrideProps(overrides, "username")}
      ></TextField>
      <PasswordField
        label="Password"
        isRequired={true}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              username,
              password: value,
            };
            const result = onChange(modelFields);
            value = result?.password ?? value;
          }
          if (errors.password?.hasError) {
            runValidationTasks("password", value);
          }
          setPassword(value);
        }}
        onBlur={() => runValidationTasks("password", password)}
        errorMessage={errors.password?.errorMessage}
        hasError={errors.password?.hasError}
        {...getOverrideProps(overrides, "password")}
      ></PasswordField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
