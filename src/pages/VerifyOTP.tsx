import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { AuthLayout } from "@/components/layout/AuthLayout";
import { PageTransition } from "@/components/layout/PageTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Loader2, Mail, Phone } from "lucide-react";

const VerifyOTP = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [otp, setOtp] = useState(["", "", "", "", "", ""]);
    const [isLoading, setIsLoading] = useState(false);
    const [timeLeft, setTimeLeft] = useState(60);
    const [canResend, setCanResend] = useState(false);

    // Get email and phone number from registration
    const { email, phoneNumber } = location.state || {};

    useEffect(() => {
        if (!email || !phoneNumber) {
            navigate("/register");
        }
    }, [email, phoneNumber, navigate]);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (timeLeft > 0 && !canResend) {
            timer = setInterval(() => {
                setTimeLeft((prev) => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setCanResend(true);
        }
        return () => clearInterval(timer);
    }, [timeLeft, canResend]);

    const handleOtpChange = (index: number, value: string) => {
        if (value.length > 1) return; // Prevent multiple digits
        if (!/^\d*$/.test(value)) return; // Only allow digits

        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        // Auto-focus next input
        if (value && index < 5) {
            const nextInput = document.querySelector(`input[name=otp-${index + 1}]`) as HTMLInputElement;
            if (nextInput) nextInput.focus();
        }
    };

    const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Backspace" && !otp[index] && index > 0) {
            const prevInput = document.querySelector(`input[name=otp-${index - 1}]`) as HTMLInputElement;
            if (prevInput) prevInput.focus();
        }
    };

    const handleResendOTP = async () => {
        if (!canResend) return;

        setIsLoading(true);
        try {
            // In a real app, we would call an API to resend OTP
            await new Promise(resolve => setTimeout(resolve, 1000));
            setTimeLeft(60);
            setCanResend(false);
            toast.success("OTP resent successfully");
        } catch (error) {
            toast.error("Failed to resend OTP. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleVerify = async () => {
        const otpValue = otp.join("");
        if (otpValue.length !== 6) {
            toast.error("Please enter a valid 6-digit OTP");
            return;
        }

        setIsLoading(true);
        try {
            // In a real app, we would verify the OTP with your backend
            await new Promise(resolve => setTimeout(resolve, 1500));
            toast.success("Email verified successfully!");
            navigate("/login");
        } catch (error) {
            toast.error("Invalid OTP. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <PageTransition>
            <AuthLayout
                title="Verify your email"
                subtitle={`Enter the 6-digit code sent to ${email}`}
            >
                <div className="space-y-6">
                    <div className="flex flex-col items-center space-y-4">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                            <Mail className="w-8 h-8 text-primary" />
                        </div>
                        <div className="text-center space-y-2">
                            <p className="text-sm text-muted-foreground">
                                We've sent a verification code to your email address.
                                Please check your inbox and enter the code below.
                            </p>
                            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                                <Phone className="w-4 h-4" />
                                <span>Registered phone: {phoneNumber}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center space-x-2">
                        {otp.map((digit, index) => (
                            <Input
                                key={index}
                                name={`otp-${index}`}
                                type="text"
                                inputMode="numeric"
                                maxLength={1}
                                value={digit}
                                onChange={(e) => handleOtpChange(index, e.target.value)}
                                onKeyDown={(e) => handleKeyDown(index, e)}
                                className="w-12 h-12 text-center text-2xl"
                                autoFocus={index === 0}
                            />
                        ))}
                    </div>

                    <div className="text-center space-y-2">
                        <p className="text-sm text-muted-foreground">
                            {canResend ? (
                                "Didn't receive the code?"
                            ) : (
                                `Resend code in ${timeLeft}s`
                            )}
                        </p>
                        <Button
                            variant="link"
                            onClick={handleResendOTP}
                            disabled={!canResend || isLoading}
                            className="text-primary"
                        >
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Resending...
                                </>
                            ) : (
                                "Resend OTP"
                            )}
                        </Button>
                    </div>

                    <Button
                        className="w-full"
                        onClick={handleVerify}
                        disabled={isLoading || otp.join("").length !== 6}
                    >
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Verifying...
                            </>
                        ) : (
                            "Verify OTP"
                        )}
                    </Button>
                </div>
            </AuthLayout>
        </PageTransition>
    );
};

export default VerifyOTP; 