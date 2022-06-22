import { IconButton, MoonIcon, SunIcon, useColorMode } from "native-base";
import React from "react";

export default function ThemeButton() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      onPress={toggleColorMode}
      icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      accessibilityLabel="Color Mode Switch"
    />
  );
}
