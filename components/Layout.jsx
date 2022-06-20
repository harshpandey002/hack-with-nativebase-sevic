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
  View,
} from "native-base";
import Header from "./Header";
import SideNav from "./SideNav";

export default function Layout({ children }) {
  return (
    <Box
      _light={{
        bg: "#F5F3FF",
      }}
      _dark={{
        bg: "#374151",
      }}
      h="100vh"
    >
      <Header />
      <HStack alignItems="center" flex={1}>
        <SideNav />
        <Box p="32px" flex={1} h="100%">
          {children}
        </Box>
      </HStack>
    </Box>
  );
}
