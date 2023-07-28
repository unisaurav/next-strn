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
interface colorType {
  [key: number]: any;
}

const PasswordCard =() => {
  const [showPassword, toggleShow] = useState(false);
  const [password, changePassword] = useState("");
  const [green, changeGreen] = useState({ color: `bg-red-500`, width: `w-0` });

  useEffect(() => {
    const colorObj: colorType = {
      0: { color: `bg-red-500`, width: `w-0` },
      1: { color: `bg-orange-500`, width: `w-1/4` },
      2: { color: `bg-yellow-400`, width: `w-1/2` },
      3: { color: `bg-green-200`, width: `w-3/4` },
      4: { color: `bg-green-800`, width: "w-full" },
    };
    let strength = 0;
    var special = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    var caps = /[A-Z]+/;
    var lowcCaps = /^[a`-z]/;
    if (password.length > 10) {
      console.log("lensucc");
      strength++;
    }
    if (special.test(password)) {
      console.log("special");

      strength++;
    }
    if (caps.test(password)) {
      console.log("caps");

      strength++;
    }
    if (lowcCaps.test(password)) {
      console.log("low");

      strength++;
    }
    console.log(strength);
    changeGreen(colorObj[strength]);
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
                  className={`border-green-800 placeholder:text-zinc-600`}
                />
              </div>
            </div>
          </form>
          <div className="w-full bg-gray-200  h-1 mb-4 ">
            <div className={`${green.color} h-1  ${green.width}`}></div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => toggleShow(!showPassword)}>
            {showPassword ? "Show Password" : "Hide Password"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
export default PasswordCard;
