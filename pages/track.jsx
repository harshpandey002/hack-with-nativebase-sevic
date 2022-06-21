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
  Stack,
} from "native-base";
import Layout from "../components/Layout";
import BackIcon from "../components/Icons/BackIcon";
import CloudIcon from "../components/Icons/CloudIcon";
import PageInfo from "../components/PageInfo";
import CheckIcon from "../components/Icons/CheckIcon";

export default function Track() {
  return (
    <Layout pageTitle="Track Order">
      <Stack
        marginBottom="32px"
        _light={{ bg: "white" }}
        _dark={{ bg: "#1f2937" }}
        borderRadius="4px"
        flex={1}
        px="16px"
        py={["20px", "20px", "20px", "32px"]}
      >
        <VStack maxW="768px" mx="auto" w="100%" space="32px" flex={1}>
          <HStack
            p="16px"
            _light={{ bg: "#F3F4F6" }}
            _dark={{ bg: "#374151" }}
            space="12px"
            borderRadius="4px"
          >
            <Box>
              <Image
                borderRadius="4px"
                size="74px"
                height="90px"
                source={{
                  uri: "https://images.unsplash.com/photo-1475179377649-672d1c1c75ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2946&q=80",
                }}
                fallbackSource={{
                  uri: "https://www.w3schools.com/css/img_lights.jpg",
                }}
              />
            </Box>
            <VStack>
              <Text fontWeight="700" fontSize="16px">
                Sweater Dress
              </Text>
              <Text color="#6B7280">Girls self design</Text>
              <Text marginTop="auto" fontWeight="700">
                ₹1,199
              </Text>
            </VStack>
          </HStack>
          <VStack px="8px">
            <Status
              title="Order Placed"
              desc="We have received your order on 28-May-2021."
              time="5:38 pm"
            />
            <Status
              title="Order Packed"
              desc="Seller has processed your order on 29th. Your item has been picked up by courier partner on 30 May-2021."
              time="12:30 pm"
            />
            <Status
              title="Order Packed"
              desc="Your item has been picked up not yet shipped."
              isPending
            />
            <Status
              title="Out for Delivery"
              desc="Your order is out for delivery."
              isPending
              isLast
            />
          </VStack>
        </VStack>
      </Stack>
    </Layout>
  );
}

function Status({ title, desc, time, isPending, isLast }) {
  const { colorMode } = useColorMode();

  const getIconColor = () => {
    if (isPending && colorMode === "dark") return "#9CA3AF";
    if (!isPending && colorMode === "dark") return "#8B5CF6";
    if (isPending && colorMode !== "dark") return "#C4B5FD";
    if (!isPending && colorMode !== "dark") return "#4C1D95";
  };

  return (
    <VStack
      paddingLeft="26px"
      paddingBottom="16px"
      borderLeftWidth={isLast ? "0px" : "1px"}
      borderColor={getIconColor()}
      borderStyle={isPending ? "dashed" : "solid"}
      position="relative"
    >
      <Box position="absolute" left="-8px">
        <CheckIcon fill={getIconColor()} />
      </Box>
      <Text
        fontWeight="500"
        color={isPending ? "#9CA3AF" : ""}
        _light={{
          color: isPending ? "#9CA3AF" : "",
        }}
        _dark={{
          color: isPending ? "#9CA3AF" : "white",
        }}
      >
        {title}
      </Text>
      <Text fontSize="12px" color={isPending ? "#9CA3AF" : "#6B7280"}>
        {desc}
      </Text>
      {!isPending && (
        <Text fontSize="12px" color="#9CA3AF">
          {time}
        </Text>
      )}
    </VStack>
  );
}
