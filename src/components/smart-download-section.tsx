"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Mail } from "lucide-react";
import { sendEmail } from "@/app/actions/send-email";

export const SmartDownloadSection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const result = await sendEmail(email);

    setIsLoading(false);

    if (result.success) {
      toast({
        title: "You're on the list!",
        description: `We'll send updates to ${email}.`,
      });
      setEmail("");
    } else {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: result.error || "Please try again later.",
      });
    }
  };

  return (
    <div className="w-full max-w-md mx-auto md:mx-0">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row items-center gap-3"
      >
        <div className="relative w-full">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 h-12 text-base"
            disabled={isLoading}
            required
          />
        </div>
        <Button
          type="submit"
          size="lg"
          className="w-full sm:w-auto h-12 flex-shrink-0"
          disabled={isLoading}
        >
          {isLoading ? (
            <Loader2 className="animate-spin" />
          ) : (
            "Sign Up"
          )}
        </Button>
      </form>
       <p className="text-xs text-muted-foreground mt-2 text-center sm:text-left">
        This form is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
      </p>
    </div>
  );
};

    