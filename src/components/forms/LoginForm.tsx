import { useState } from "react";
// inputs
import PasswordInput from "@/components/inputs/PasswordInput";
import Input from "@/components/inputs/Input";
// button   
import Button from "@/components/elements/Button";
// hook form
import { useForm, Controller } from "react-hook-form";
// yup
import { yupResolver } from "@hookform/resolvers/yup";
// types
import { LoginFormType } from "@/types";
// schema
import { loginFormSchema } from "@/lib/yupSchema";

// toast
import toast from "react-hot-toast";
import Link from "next/link";

const LoginForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormType>({
    mode: "onChange",
    resolver: yupResolver(loginFormSchema),
  });

  const onSubmit = (data: LoginFormType) => {
    setIsLoading(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
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
              className="w-full mt-2"
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
              className="w-full mt-2"
              disabled={isLoading}
            />
          )}
        />

        <Button
          theme="primary"
          type="submit"
          className="mt-8"
          disabled={!isValid || isLoading}
        >
          Log In
        </Button>

        <div className="flex justify-center gap-x-2 mt-7">
          <p className="text-xs text-black">New to modimal?</p>
          <button type="button" disabled={isLoading}>
            <Link href={"/register"}>
              <p className="text-xs text-primary-400">create an account</p>
            </Link>
          </button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
