import React from "react";

import {
  Center,
  useColorMode,
  Tooltip,
  IconButton,
  SunIcon,
  MoonIcon,
  Image,
  HStack,
  Text,
  Heading,
  Box,
  Link,
  VStack,
  Button,
  AspectRatio,
} from "native-base";

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
