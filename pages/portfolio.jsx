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

const portfolio = [
  {
    company_name: "Aditya Birla Sun Life Flexi Cap- Fund",
    investment: "$50,000",
    current_value: "$4,351.50",
    returns: "14%",
  },
  {
    company_name: "Axis Sun Life Flexi Cap- Fund",
    investment: "$50,000",
    current_value: "$4,351.50",
    returns: "14%",
  },
  {
    company_name: "Aditya Birla Sun Life Flexi Cap- Fund",
    investment: "$50,000",
    current_value: "$4,351.50",
    returns: "14%",
  },
  {
    company_name: "Axis Sun Life Flexi Cap- Fund",
    investment: "$50,000",
    current_value: "$4,351.50",
    returns: "14%",
  },
  {
    company_name: "Aditya Birla Sun Life Flexi Cap- Fund",
    investment: "$50,000",
    current_value: "$4,351.50",
    returns: "14%",
  },
  {
    company_name: "Axis Sun Life Flexi Cap- Fund",
    investment: "$50,000",
    current_value: "$4,351.50",
    returns: "14%",
  },
  {
    company_name: "Aditya Birla Sun Life Flexi Cap- Fund",
    investment: "$50,000",
    current_value: "$4,351.50",
    returns: "14%",
  },
  {
    company_name: "Axis Sun Life Flexi Cap- Fund",
    investment: "$50,000",
    current_value: "$4,351.50",
    returns: "14%",
  },
];

const portfolioLabels = [
  { label: "Company Name", flex: 4 },
  { label: "Investment", flex: 2 },
  { label: "Current Value", flex: 2 },
  { label: "Returns", flex: 2 },
];

export default function Portfolio() {
  return (
    <Layout hideSideNav pageTitle="Mutual Fund Portfolio">
      <Stack
        _light={{ bg: "white" }}
        _dark={{ bg: "#1f2937" }}
        borderRadius="4px"
        flex={1}
        px="16px"
        py={["20px", "20px", "20px", "32px"]}
      >
        <VStack maxW="768px" mx="auto" w="100%" flex={1}>
          <HStack space="16px" marginBottom="20px">
            <Center
              _light={{ borderColor: "#5B21B6" }}
              _dark={{ borderColor: "#8B5CF6" }}
              borderWidth="1px"
              py="12px"
              borderRadius="5px"
              flex={1}
            >
              <Text
                _light={{ color: "#5B21B6" }}
                _dark={{ color: "#8B5CF6" }}
                color="#5B21B6"
                fontWeight="500"
                fontSize="24px"
              >
                $15303.00
              </Text>
              <Text
                _light={{ color: "#5B21B6" }}
                _dark={{ color: "#8B5CF6" }}
                color="#5B21B6"
                fontWeight="500"
                fontSize="16px"
              >
                Total Invested
              </Text>
            </Center>
            <Center
              _light={{ borderColor: "#065F46" }}
              _dark={{ borderColor: "#10B981" }}
              borderWidth="1px"
              borderColor="#065F46"
              py="12px"
              borderRadius="5px"
              flex={1}
            >
              <Text
                _light={{ color: "#065F46" }}
                _dark={{ color: "#10B981" }}
                color="#065F46"
                fontWeight="500"
                fontSize="24px"
              >
                $45303.00
              </Text>
              <Text
                _light={{ color: "#065F46" }}
                _dark={{ color: "#10B981" }}
                color="#065F46"
                fontWeight="500"
                fontSize="16px"
              >
                14% Return
              </Text>
            </Center>
          </HStack>
          <Text
            display={["block", "block", "block", "none"]}
            marginBottom="20px"
            fontSize="16px"
            fontWeight="500"
          >
            Portfolio Details
          </Text>
          <VStack
            borderWidth={["0px", "0px", "0px", "1px"]}
            _light={{ borderColor: "#E5E7EB" }}
            _dark={{ borderColor: "#374151" }}
            borderRadius="5px"
          >
            <HStack
              display={["none", "none", "none", "flex"]}
              px="16px"
              py="12px"
            >
              {portfolioLabels.map((each) => (
                <Text
                  fontWeight="700"
                  _light={{ color: "#6B7280" }}
                  _dark={{ color: "#9CA3AF" }}
                  flex={each.flex}
                >
                  {each.label}
                </Text>
              ))}
            </HStack>

            <VStack space={["12px", "12px", "12px", "0px"]}>
              {portfolio.map((data) => (
                <PortfolioCard data={data} />
              ))}
            </VStack>
          </VStack>
        </VStack>
      </Stack>
    </Layout>
  );
}

function PortfolioCard({ data }) {
  return (
    <Stack
      direction={["column", "column", "column", "row"]}
      borderTopWidth={["0px", "0px", "0px", "1px"]}
      _light={{
        bg: ["#F3F4F6", "#F3F4F6", "#F3F4F6", ""],
        borderColor: "#E5E7EB",
      }}
      _dark={{
        bg: ["#374151", "#374151", "#374151", ""],
        borderColor: "#374151",
      }}
      borderRadius={["5px", "5px", "5px", "0px"]}
      px="16px"
      py="12px"
      bg="gray"
      flex={1}
    >
      <Text fontWeight={["700", "700", "700", "500"]} flex={4}>
        {data.company_name}
      </Text>
      <Text
        display={["block", "block", "block", "none"]}
        px="8px"
        py="2px"
        w="max-content"
        borderRadius="2px"
        _light={{
          bg: "#059669",
          color: "white",
        }}
        _dark={{
          bg: "#10B981",
          color: "black",
        }}
      >
        SIP × 6
      </Text>
      <HStack marginTop={["12px", "12px", "12px", "0px"]} flex={6}>
        <VStack flex={1}>
          <Text
            display={["block", "block", "block", "none"]}
            _light={{ color: "#6B7280" }}
            _dark={{ color: "#9CA3AF" }}
            fontWeight="500"
            fontSize="12px"
          >
            Investment
          </Text>
          <Text fontWeight="500" flex={1}>
            {data.investment}
          </Text>
        </VStack>
        <VStack flex={1}>
          <Text
            display={["block", "block", "block", "none"]}
            _light={{ color: "#6B7280" }}
            _dark={{ color: "#9CA3AF" }}
            fontWeight="500"
            fontSize="12px"
          >
            Current Value
          </Text>
          <Text fontWeight="500" flex={1}>
            {data.current_value}
          </Text>
        </VStack>
        <VStack>
          <Text
            display={["block", "block", "block", "none"]}
            _light={{ color: "#6B7280" }}
            _dark={{ color: "#9CA3AF" }}
            fontWeight="500"
            fontSize="12px"
          >
            Returns
          </Text>
          <Text
            fontWeight="500"
            _light={{ color: "#059669" }}
            _dark={{ color: "#10B981" }}
            flex={1}
          >
            {data.returns}
          </Text>
        </VStack>
      </HStack>
    </Stack>
  );
}
