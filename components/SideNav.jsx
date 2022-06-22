import {
  Box,
  Center,
  Image,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { navLinks } from "../util/constants";

export default function SideNav() {
  return (
    <VStack
      display={["none", "none", "none", "flex"]}
      borderWidth="1px"
      borderLeftWidth="0px"
      _light={{
        bg: "white",
        borderColor: "#E5E7EB",
      }}
      _dark={{
        bg: "#111827",
        borderColor: "#374151",
      }}
      w={320}
    >
      <Center
        borderBottomWidth="1px"
        _light={{
          borderColor: "#E5E7EB",
        }}
        _dark={{
          borderColor: "#374151",
        }}
        w="100%"
        py="40px"
      >
        <Box>
          <Image
            size="140px"
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
        <Text fontSize={18} mt="12px">
          Jane Doe
        </Text>
        <Text fontSize={14} color="#6B7280">
          janedoe41@mydomain.com
        </Text>
      </Center>
      <VStack p="16px">
        {navLinks.map((link) => (
          <Pressable
            onPress={() => console.log(link.value)}
            key={link.value}
            borderRadius="5px"
            _hover={{
              bg: "#EDE9FE",
              _text: { color: "#4C1D95" },
              _dark: { bg: "#1F2937" },
            }}
            p="10px"
          >
            <Text>{link.label}</Text>
          </Pressable>
        ))}
      </VStack>

      <VStack
        borderTopWidth="1px"
        _light={{
          borderTopColor: "#E5E7EB",
        }}
        _dark={{
          borderTopColor: "#374151",
        }}
        marginTop="auto"
        p="10px"
      >
        <Pressable
          onPress={() => console.log("logout")}
          borderRadius="5px"
          _hover={{
            bg: "#EDE9FE",
            _text: { color: "#4C1D95" },
            _dark: { bg: "#1F2937" },
          }}
          px="16px"
          py="8px"
        >
          <Text>Logout</Text>
        </Pressable>
      </VStack>
    </VStack>
  );
}
