/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { FriendPairs } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function FriendPairsUpdateForm(props) {
  const {
    id: idProp,
    friendPairs: friendPairsModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    user: "",
    loggedUserId: "",
    friend: "",
  };
  const [user, setUser] = React.useState(initialValues.user);
  const [loggedUserId, setLoggedUserId] = React.useState(
    initialValues.loggedUserId
  );
  const [friend, setFriend] = React.useState(initialValues.friend);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = friendPairsRecord
      ? { ...initialValues, ...friendPairsRecord }
      : initialValues;
    setUser(cleanValues.user);
    setLoggedUserId(cleanValues.loggedUserId);
    setFriend(cleanValues.friend);
    setErrors({});
  };
  const [friendPairsRecord, setFriendPairsRecord] =
    React.useState(friendPairsModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(FriendPairs, idProp)
        : friendPairsModelProp;
      setFriendPairsRecord(record);
    };
    queryData();
  }, [idProp, friendPairsModelProp]);
  React.useEffect(resetStateValues, [friendPairsRecord]);
  const validations = {
    user: [],
    loggedUserId: [],
    friend: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          user,
          loggedUserId,
          friend,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            FriendPairs.copyOf(friendPairsRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "FriendPairsUpdateForm")}
      {...rest}
    >
      <TextField
        label="User"
        isRequired={false}
        isReadOnly={false}
        value={user}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user: value,
              loggedUserId,
              friend,
            };
            const result = onChange(modelFields);
            value = result?.user ?? value;
          }
          if (errors.user?.hasError) {
            runValidationTasks("user", value);
          }
          setUser(value);
        }}
        onBlur={() => runValidationTasks("user", user)}
        errorMessage={errors.user?.errorMessage}
        hasError={errors.user?.hasError}
        {...getOverrideProps(overrides, "user")}
      ></TextField>
      <TextField
        label="Logged user id"
        isRequired={false}
        isReadOnly={false}
        value={loggedUserId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user,
              loggedUserId: value,
              friend,
            };
            const result = onChange(modelFields);
            value = result?.loggedUserId ?? value;
          }
          if (errors.loggedUserId?.hasError) {
            runValidationTasks("loggedUserId", value);
          }
          setLoggedUserId(value);
        }}
        onBlur={() => runValidationTasks("loggedUserId", loggedUserId)}
        errorMessage={errors.loggedUserId?.errorMessage}
        hasError={errors.loggedUserId?.hasError}
        {...getOverrideProps(overrides, "loggedUserId")}
      ></TextField>
      <TextField
        label="Friend"
        isRequired={false}
        isReadOnly={false}
        value={friend}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              user,
              loggedUserId,
              friend: value,
            };
            const result = onChange(modelFields);
            value = result?.friend ?? value;
          }
          if (errors.friend?.hasError) {
            runValidationTasks("friend", value);
          }
          setFriend(value);
        }}
        onBlur={() => runValidationTasks("friend", friend)}
        errorMessage={errors.friend?.errorMessage}
        hasError={errors.friend?.hasError}
        {...getOverrideProps(overrides, "friend")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || friendPairsModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || friendPairsModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
