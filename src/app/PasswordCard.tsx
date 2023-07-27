"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
interface trainInfo {
  [key: number]: any;
}

const PasswordCard = () => {
  const [showPassword, toggleShow] = useState(false);
  const [password, changePassword] = useState("");
  const [green, changeGreen] = useState({ color: `red-500`, width: `0` });

  useEffect(() => {
    const colorObj: trainInfo = {
      0: { color: `red-500`, width: `0` },
      1: { color: `orange-500`, width: `1/4` },
      2: { color: `yellow-400`, width: `1/2` },
      3: { color: `green-200`, width: `3/4` },
      4: { color: `green-800`, width: "full" },
    };
    let points = 0;
    var special = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    var caps = /[A-Z]+/;
    var lowcCaps = /^[a`-z]/;
    if (password.length > 10) {
      console.log("lensucc");
      points++;
    }
    if (special.test(password)) {
      console.log("special");

      points++;
    }
    if (caps.test(password)) {
      console.log("caps");

      points++;
    }
    if (lowcCaps.test(password)) {
      console.log("low");

      points++;
    }
    console.log(points);
    changeGreen(colorObj[points]);
  }, [password]);

  return (
    <div>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Strength Checker</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4 ">
              <div className={`flex flex-col space-y-1.5 `}>
                <Label htmlFor="name">Password</Label>
                <Input
                  id="name"
                  value={password}
                  type={showPassword ? "password" : "text"}
                  onChange={(e) => changePassword(e.target.value)}
                  placeholder="ABCdefc£$% "
                  className={`border-${green.color} placeholder:text-zinc-600`}
                />
              </div>
            </div>
          </form>
          <div className="w-full bg-gray-200  h-1 mb-4 ">
            <div className={`bg-${green.color} h-1  w-${green.width}`}></div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => toggleShow(!showPassword)}>
            {showPassword ? "Show Password" : "Hide Password"}
          </Button>
          <Button>Check</Button>
        </CardFooter>
      </Card>
    </div>
  );
};
export default PasswordCard;
