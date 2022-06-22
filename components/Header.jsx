import React from "react";
import { Image, HStack, Heading, Box } from "native-base";
import MenuIcon from "./Icons/MenuIcon";
import ThemeButton from "./ThemeButton";

export default function Header() {
  return (
    <HStack
      display={["none", "none", "none", "flex"]}
      _light={{
        bg: "white",
      }}
      _dark={{
        bg: "#111827",
      }}
      p="20px 35px"
      justifyContent="space-between"
    >
      <HStack alignItems="center" space="12px">
        <MenuIcon _light={{ color: "black" }} _dark={{ color: "white" }} />
        <Heading
          fontSize="24px"
          _light={{
            color: "#8b5cf6",
          }}
          _dark={{ color: "#885cfc" }}
        >
          HackWith
          <Heading
            fontSize="24px"
            _light={{
              color: "black",
            }}
            _dark={{ color: "white" }}
          >
            NativeBase
          </Heading>
        </Heading>
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
