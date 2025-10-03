import { PageMeta } from "../components/Layout";
import { Formik, Form } from "formik";
import ButtonPrimary from "../components/buttonPrimary";
import useLogin from "../hooks/useLogin";
import { LoginSchema } from "../validations/loginSchema";
import { InputField } from "../components/InputField";

export const Login = () => {
  const { submitHandler, isLoading } = useLogin();

  return (
    <PageMeta title="Login" description="Login to MyMarketplace">
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4">
        <div className="max-w-md w-full bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 text-center">
            Login
          </h2>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={submitHandler}
          >
            <Form className="flex flex-col gap-4">
              <InputField
                label="Email"
                name="email"
                type="email"
                placeholder="you@example.com"
              />
              <InputField
                label="Password"
                name="password"
                type="password"
                placeholder="********"
              />

              <ButtonPrimary
                text="Sign in"
                type="submit"
                className="w-full py-3"
                loading={isLoading}
              />
            </Form>
          </Formik>
        </div>
      </div>
    </PageMeta>
  );
};

export default Login;
