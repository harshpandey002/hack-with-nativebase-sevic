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
  Progress,
  Pressable,
} from "native-base";
import BackIcon from "./Icons/BackIcon";
import ThemeButton from "./ThemeButton";

export default function PageInfo({ pageTitle }) {
  return (
    <HStack
      display={["none", "none", "none", "flex"]}
      alignItems="center"
      space="14px"
      marginBottom="16px"
    >
      <BackIcon />
      <Text fontSize="18px" fontWeight="500">
        {pageTitle}
      </Text>
    </HStack>
  );
}
