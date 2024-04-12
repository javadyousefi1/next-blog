import Link from "next/link";
import Styles from "../../styles/style.module.css";
import Button from "@/components/elements/Button";
import { Controller, useForm } from "react-hook-form";
import { registerFormSchema } from "@/lib/yupSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { RegisterFormType } from "@/types";
import { useState } from "react";
import Input from "@/components/inputs/Input";
import PasswordInput from "@/components/inputs/PasswordInput";
import axios from "axios";
import { useRouter } from "next/router";
const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegisterFormType>({
    mode: "onChange",
    resolver: yupResolver(registerFormSchema),
  });

  const onSubmit = (data: RegisterFormType) => {
    setIsLoading(true);
    axios
      .post("/api/register", data)
      .then((res) => {
        toast.success("You registered succsesfully 🥳");
        router.push("/");
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message);
        setIsLoading(false);
      });
  };
  return (
    <div
      className={`${Styles.dotBackground} w-full flex justify-center items-center`}
    >
      <div className="bg-ligth-gray1 w-[400px] my-10 rounded-lg p-10 flex-col">
        <h1 className="text-blue font-bold text-3xl text-center mb-8">
          Register
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="firstName"
            control={control}
            defaultValue=""
            render={({ field: { name, onChange, value } }) => (
              <Input
                value={value}
                name={name}
                type="text"
                error={!!errors.firstName}
                onChange={onChange}
                placeHolder="First Name"
                disabled={isLoading}
              />
            )}
          />

          <Controller
            name="lastName"
            control={control}
            defaultValue=""
            render={({ field: { name, onChange, value } }) => (
              <Input
                value={value}
                name={name}
                type="text"
                error={!!errors.lastName}
                onChange={onChange}
                placeHolder="Last Name"
                className="mt-2"
                disabled={isLoading}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field: { name, onChange, value } }) => (
              <Input
                value={value}
                name={name}
                type="text"
                error={!!errors.email}
                onChange={onChange}
                placeHolder="Email"
                className="mt-2"
                disabled={isLoading}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            defaultValue=""
            render={({ field: { name, onChange, value } }) => (
              <PasswordInput
                value={value}
                name={name}
                error={!!errors.password}
                onChange={onChange}
                placeHolder="Password"
                className="mt-2"
                disabled={isLoading}
              />
            )}
          />

          <div className="flex justify-center gap-x-2 mt-7">
            <p className="text-xs text-black">Already Have an account?</p>
            {/* <Link to="/login"> */}
            <p className="text-xs text-primary-400">Log In</p>
            {/* </Link> */}
          </div>

          <Button
            theme="primary"
            type="submit"
            className="mt-8"
            disabled={!isValid || isLoading}
          >
            Register Now
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;
