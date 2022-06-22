import { Box, HStack, ScrollView, Text } from "native-base";
import React from "react";
import Header from "./Header";
import BackIcon from "./Icons/BackIcon";
import MobHeader from "./MobHeader";
import SideNav from "./SideNav";

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
            <PageInfo pageTitle={pageTitle} />
            {children}
          </Box>
        </HStack>
      </ScrollView>
    </Box>
  );
}

function PageInfo({ pageTitle }) {
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
