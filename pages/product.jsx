import React, { useState } from "react";
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
import Layout from "../components/Layout";
import BackIcon from "../components/Icons/BackIcon";

export default function Product() {
  return (
    <Layout hideSideNav>
      <HStack alignItems="center" space="14px" marginBottom="16px">
        <BackIcon />
        <Text fontSize="18px" fontWeight="500">
          Body Suit
        </Text>
      </HStack>
      <HStack
        borderRadius="5px"
        p="32px"
        space="16px"
        _light={{ bg: "white" }}
        _dark={{ bg: "#1f2937" }}
      >
        <Box
          p="8px"
          borderRadius="5px"
          _dark={{ bg: "#374151" }}
          _light={{ bg: "#F5F3FF" }}
        >
          <Image
            borderRadius="5px"
            size={468}
            height={552}
            resizeMode="cover"
            source={{
              uri: "https://source.unsplash.com/500x600",
            }}
            fallbackSource={{
              uri: "https://www.w3schools.com/css/img_lights.jpg",
            }}
          />
        </Box>
        <VStack flex={1}>
          <HStack alignItems="center" justifyContent="space-between">
            <Text fontSize="18px" fontWeight="500">
              Body Suit
            </Text>
            <HStack alignItems="center" space="4px">
              <Text>ic</Text>
              <Text>4.9</Text>
              <Text color="#6B7280">(120)</Text>
            </HStack>
          </HStack>
          <Text color="#6B7280" fontSize="16px">
            Mother Care
          </Text>
          <Text fontSize="20px">₹500</Text>
          <HStack
            alignItems="center"
            justifyContent="space-between"
            marginTop="20px"
            marginBottom="12px"
          >
            <Text>
              Select Size <Text color="#6B7280">(Age Group)</Text>
            </Text>
            <Pressable>
              <Text _light={{ color: "#4C1D95" }} _dark={{ color: "#8B5CF6" }}>
                Size chart
              </Text>
            </Pressable>
          </HStack>
          <HStack alignItems="center" space="8px">
            {["New Born", "Tiny Baby", "0-3"].map((size) => (
              <Box
                borderRadius="4px"
                _light={{ bg: "#F5F3FF" }}
                _dark={{ bg: "#374151" }}
                p="12px"
              >
                {size}
              </Box>
            ))}
          </HStack>
          <HStack my="20px" alignItems="center" space="12px">
            <Center
              _light={{ bg: "#f5f3ff" }}
              _dark={{ bg: "#374151" }}
              w="45px"
              h="45px"
              borderRadius="4px"
            >
              ic
            </Center>
            <Button
              flex={1}
              fontWeight="500"
              h="45px"
              _light={{
                bg: "#4c1d95",
              }}
              _dark={{
                bg: "#6D28D9",
              }}
              _hover={{ bg: "#4c1d95" }}
            >
              CONTINUE
            </Button>
          </HStack>
          <TabComponent />
        </VStack>
      </HStack>
    </Layout>
  );
}

//TODO Constants
const tabs = [
  {
    id: 1,
    label: "Description",
    value:
      "Yellow bodysuit, has a round neck with envelope detail along the shoulder, short sleeves and snap button closures along the crotch. Yellow bodysuit, has a round neck with envelope detail along the shoulder, short sleeves and snap button closures along the crotch.Yellow bodysuit, has a round neck with envelo",
  },
  {
    id: 2,
    label: "Reviews",
    value:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam nobis accusantium minus hic veritatis tenetur! Praesentium odit molestiae dicta quia?",
  },
];

function TabComponent() {
  const [tab, setTab] = useState(tabs[0]);

  return (
    <VStack>
      <HStack>
        {tabs.map((each) => (
          <Pressable>
            <Text
              onPress={() => setTab(each)}
              py="8px"
              px="12px"
              fontWeight="500"
              borderBottomWidth="4px"
              _light={{
                color: tab.id === each.id ? "#4C1D95" : "#9CA3AF",

                borderBottomColor:
                  tab.id === each.id ? "#4C1D95" : "transparent",
              }}
              _dark={{
                color: tab.id === each.id ? "#8B5CF6" : "#9CA3AF",

                borderBottomColor:
                  tab.id === each.id ? "#8B5CF6" : "transparent",
              }}
            >
              {each.label}
            </Text>
          </Pressable>
        ))}
      </HStack>

      <Text marginTop={4}>{tab.value}</Text>
    </VStack>
  );
}
