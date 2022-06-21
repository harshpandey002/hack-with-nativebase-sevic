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
  ScrollView,
} from "native-base";
import Header from "./Header";
import SideNav from "./SideNav";
import BackIcon from "./Icons/BackIcon";
import MobHeader from "./MobHeader";

export default function Layout({ children, hideSideNav, pageTitle }) {
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
      <MobHeader pageTitle={pageTitle} />

      <ScrollView>
        <HStack alignItems="center" flex={1}>
          {!hideSideNav && <SideNav />}
          <Box
            p={["0px", "0px", "0px", "32px"]}
            flex={1}
            h="100%"
            maxW={hideSideNav ? "1016px" : ""}
            m="auto"
          >
            {children}
          </Box>
        </HStack>
      </ScrollView>
    </Box>
  );
}
