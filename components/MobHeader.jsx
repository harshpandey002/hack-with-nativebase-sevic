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

export default function MobHeader({ pageTitle }) {
  return (
    <HStack
      display={["flex", "flex", "flex", "none"]}
      _light={{
        bg: "#4c1d95",
      }}
      _dark={{
        bg: "#111827",
      }}
      p="20px 35px"
      justifyContent="space-between"
    >
      <HStack alignItems="center" space="14px">
        <BackIcon />
        <Text fontSize="18px" fontWeight="500" color="white">
          {pageTitle}
        </Text>
      </HStack>
      <HStack alignItems="center" space="16px">
        <ThemeButton />
        <Box>
          <Image
            size="32px"
            alt="fallback text"
            borderRadius={100}
            source={{
              uri: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde",
            }}
            fallbackSource={{
              uri: "https://www.w3schools.com/css/img_lights.jpg",
            }}
          />
        </Box>
      </HStack>
    </HStack>
  );
}
