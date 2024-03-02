'use-client'
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Switch } from "./switch";
import { Label } from "@radix-ui/react-label";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState<boolean>(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme(mounted ? "dark" : "light");
  }, [mounted, setTheme]);

  useEffect(() => {
    setMounted(typeof window !== "undefined" ? sessionStorage.getItem("isDarkModeOn") === "true" : false)
},[])

  return (
    <>
      <Switch
        checked={mounted}
        onCheckedChange={() => {
            setMounted(prevMounted => {
              const newMounted = !prevMounted;
              sessionStorage.setItem("isDarkModeOn", JSON.stringify(newMounted));
              return newMounted;
            });
          }}
      />
      <Label htmlFor="airplane-mode">{mounted ? "Light Mode" : "Dark Mode"}</Label>
    </>
  );
}
