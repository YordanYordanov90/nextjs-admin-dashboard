"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";




export default function Login() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        router.push("/main/workspace");
        router.refresh();
      } else {
        setError("Invalid password");
      }
    } catch (error) {
      console.error(error);
      setError("An error occurred");
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
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                required
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="h-10"
              />
              {error && <p className="text-sm text-red-500">{error}</p>}
            </div>
            <Button
              type="submit"
              className="w-full rounded-3xl bg-black text-white hover:bg-black/90"
            >
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
