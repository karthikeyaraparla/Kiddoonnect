import { AuthLayout } from "@/components/layout/AuthLayout";
import { OTPVerificationForm } from "@/components/auth/OTPVerificationForm";
import { PageTransition } from "@/components/layout/PageTransition";

const VerifyOTP = () => {
  return (
    <PageTransition>
      <AuthLayout
        title="Verify Your Email"
        subtitle="Enter the verification code sent to your email"
      >
        <OTPVerificationForm />
      </AuthLayout>
    </PageTransition>
  );
};

export default VerifyOTP;
