import { Button, HStack, Progress, Text, VStack } from "native-base";
import React from "react";
import CloudIcon from "../components/Icons/CloudIcon";
import Layout from "../components/Layout";
import { settings } from "../util/constants";

export default function Screen1() {
  return (
    <Layout pageTitle="Settings">
      <VStack
        py="20px"
        marginBottom="32px"
        _light={{ bg: "white" }}
        _dark={{ bg: "#1f2937" }}
        borderRadius="4px"
      >
        {settings.map((setting) => (
          <HStack
            px="16px"
            py="12px"
            alignItems="center"
            justifyContent="space-between"
          >
            <Text>{setting.label}</Text>
            {setting.applied && <Text color="#9CA3AF">{setting.applied}</Text>}
          </HStack>
        ))}
      </VStack>
      <HStack
        _light={{ bg: "white" }}
        _dark={{ bg: "#1f2937" }}
        w={["93%", "93%", "93%", "100%"]}
        mx="auto"
        borderRadius="4px"
        py="12px"
        px="16px"
        alignItems="center"
        space="12px"
      >
        <VStack flex={1} space="12px">
          <HStack alignItems="center" space="12px">
            <CloudIcon />
            <Text fontSize="16px">Storage</Text>
          </HStack>

          <Progress
            value={45}
            _filledTrack={{
              bg: "#8B5CF6",
            }}
          />
          <Text fontSize="12px">4 GB of 15 GB used</Text>
        </VStack>
        <Button
          px="20px"
          py="12px"
          _text={{ fontSize: "12px", fontWeight: "500" }}
          _light={{ borderColor: "#5b21b6", _text: { color: "#5b21b6" } }}
          _dark={{ borderColor: "#374151", _text: { color: "#6B7280" } }}
          variant="outline"
        >
          Buy Storage
        </Button>
      </HStack>
    </Layout>
  );
}
