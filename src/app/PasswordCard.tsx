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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
interface trainInfo {
  [key: number]: string;
}

const PasswordCard = () => {
  const [showPassword, toggleShow] = useState(false);
  const [password, changePassword] = useState("");
  const [green, changeGreen] = useState("");

  const strengthCheck = (pas: string) => {
    const colorObj: trainInfo = {
      0: `border-red-500`,
      1: `border-orange-500`,
      2: `border-yellow-400`,
      3: `border-green-200`,
      4: `border-green-800`,
    };
    let points = 0;
    var special = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    var caps = /^[A-Z]/;
    var lowcCaps = /^[a-z]/;
    if (pas.length > 10) {
      points++;
    }
    if (special.test(pas)) {
      points++;
    }
    if (caps.test(pas)) {
      points++;
    }
    if (lowcCaps.test(pas)) {
      points++;
    }
    console.log(points)

    return colorObj[points];
  };


  console.log(strengthCheck(password));


  return (
    <div>
      {" "}
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Strength Checker</CardTitle>
          <CardDescription>
            Check Password stringth with just one click
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4  ">
              <div className={`flex flex-col space-y-1.5 ${password}`}>
                <Label htmlFor="name">Password</Label>
                <Input
                  id="name"
                  value={password}
                  type={showPassword ? "password" : "text"}
                  onChange={(e) => changePassword(e.target.value)}
                  placeholder="Name of your project"
                  className={`${strengthCheck(password)} `}
                />
              </div>
            </div>
          </form>
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
