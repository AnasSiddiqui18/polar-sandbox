"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { polar } from "@/lib/polar";
import { redirect } from "next/navigation";
import { useTransition } from "react";

export default function Home() {
  const [pending, startTransition] = useTransition();

  async function redirectToPaymentPage() {
    startTransition(async () => {
      const checkout = await polar.checkouts.create({
        products: ["ab156955-c48e-4360-bf0e-c12107409d86"],
      });

      redirect(checkout.url);
    });
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <Card className="w-full max-w-sm rounded-md">
        <CardContent className="space-y-5">
          <img src="/react.png" alt="no-img" className="size-16 rounded-md" />
          <div>
            <h2 className="font-bold">React Course 2025</h2>
            <p className="text-sm text-muted-foreground">
              The ultimate react course 2025.
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            disabled={pending}
            onClick={redirectToPaymentPage}
            className="cursor-pointer"
          >
            Buy now
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
