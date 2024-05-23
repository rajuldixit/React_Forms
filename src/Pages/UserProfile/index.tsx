import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserProfileSchema } from "./schema";

type userProfileFormValue = {
  username: string;
  password: string;
};

const UserProfile = () => {
  const form = useForm<userProfileFormValue>({
    defaultValues: {
      username: "",
      password: ""
    },
    resolver: yupResolver(UserProfileSchema)
  });
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = form;

  const submitHandler = (data: userProfileFormValue) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <input {...register("username")} />
        {errors.username && <p>{errors.username.message?.toString()}</p>}
        <input {...register("password")} />
        {errors.password && <p>{errors.password.message?.toString()}</p>}
        <button type="submit">submit</button>
      </form>
    </>
  );
};

export default UserProfile;
