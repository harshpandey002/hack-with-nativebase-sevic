import {
  Box,
  Button,
  Center,
  HStack,
  Image,
  Pressable,
  Stack,
  Text,
  VStack,
} from "native-base";
import React, { useState } from "react";
import Layout from "../components/Layout";
import { tabs } from "../util/constants";

export default function Screen2() {
  return (
    <Layout hideSideNav pageTitle="Body Suit">
      <Stack
        direction={["column", "column", "column", "row"]}
        borderRadius={[0, 0, "5px"]}
        p={["16px", "16px", "16px", "32px"]}
        space="16px"
        _light={{ bg: "white" }}
        _dark={{ bg: "#1f2937" }}
      >
        <Box
          p="8px"
          minH="246px"
          borderRadius="5px"
          _dark={{ bg: "#374151" }}
          _light={{ bg: "#F5F3FF" }}
        >
          <Image
            borderRadius="5px"
            size={["full", "full", "full", "468px"]}
            // h={["246px", "246px", "246px", "552px"]}
            flex={1}
            source={{
              uri: "https://images.unsplash.com/photo-1567822781105-a80d1b601697?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80",
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
            {["New Born", "Tiny Baby", "0-3 M"].map((size) => (
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
      </Stack>
    </Layout>
  );
}

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
