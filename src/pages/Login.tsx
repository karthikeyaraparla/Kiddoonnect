import { AuthLayout } from "@/components/layout/AuthLayout";
import { LoginForm } from "@/components/auth/LoginForm";
import { PageTransition } from "@/components/layout/PageTransition";

const Login = () => {
  return (
    <PageTransition>
      <AuthLayout
        title="Welcome back"
        subtitle="Enter your credentials to access your account"
      >
        <LoginForm />
      </AuthLayout>
    </PageTransition>
  );
};

export default Login;
