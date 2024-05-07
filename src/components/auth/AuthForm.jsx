import React from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoIosWarning } from "react-icons/io";
import { schema } from "../../validations/formValidation";

const AuthFrom = ({ onSubmit }) => {

  
  // used react-hook-form and yup for strict form validations.
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full p-5 flex flex-col gap-y-4"
    >
      <input
        type="text"
        {...register("name", {
          required: true,
        })}
        placeholder="Enter your name"
        className="rounded-full px-10 py-5 focus:outline outline-blue-600 bg-gray-100 text-xl"
      />
      {errors.name?.message ? (
        <p className="text-red-600 flex gap-2 items-center ml-5">
          <IoIosWarning /> {errors.name?.message}
        </p>
      ) : null}
      <input
        type="text"
        {...register("email", {
          required: true,
        })}
        placeholder="Enter your email"
        className="rounded-full px-10 py-5 focus:outline outline-blue-600 bg-gray-100 text-xl"
      />
      {errors.email?.message ? (
        <p className="text-red-600 flex gap-2 items-center ml-5">
          <IoIosWarning /> {errors.email?.message}
        </p>
      ) : null}

      <button
        type="submit"
        className="bg-black rounded-full text-white py-5 cursor-pointer disabled:bg-[#C9C9C9]"
        disabled={!isValid}
      >
        Submit
      </button>
    </form>
  );
};

export default AuthFrom;
