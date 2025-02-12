"use client";

import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "@/hooks/use-toast";

export default function Login() {
  const router = useRouter();

  const formSchema = z.object({
    password: z
      .string()
      .min(1, "Password is required")
      .max(10, "Password must be less than 10 characters")
      .trim(),
  });

  type FormValues = z.infer<typeof formSchema>;

  const {
    register,
    handleSubmit,
    setError,
    formState: { isSubmitting, errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
    },
  });

  const handleLogin = async (data: FormValues) => {
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password: data.password }),
      });

      if (response.ok) {
        toast({
          title: "Login successful",
          description: "You have successfully logged in.",
        });
        router.push("/main/workspace");
        router.refresh();
      } else {
        setError("password", { message: "Invalid password" });
        toast({
          variant: "destructive",
          title: "Login Failed",
          description: "Invalid password",
        });
      }
    } catch (error) {
      console.error("Login failed:", error);
      throw new Error("Login failed");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-[400px] shadow-xl rounded-2xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-normal">Login</CardTitle>
          <p className="text-sm text-muted-foreground">
            Enter the password to access the main route
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(handleLogin)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                placeholder="Enter Password"
                {...register("password")}
                className="h-10"
              />
              {errors.password && (
                <p className="text-sm text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>
            <Button
              disabled={isSubmitting}
              type="submit"
              className="w-full rounded-3xl bg-black text-white hover:bg-black/90"
            >
              {isSubmitting ? <LoadingSpinner /> : "Login"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

const LoadingSpinner = () => {
  return (
    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
  );
};

LoadingSpinner;

function setError(arg0: string, arg1: { message: string }) {
  throw new Error("Function not implemented.");
}
