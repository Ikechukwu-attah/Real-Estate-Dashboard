import React from "react";
import { useList } from "@pankod/refine-core";
import {
  PieCharts,
  PropertyReferrals,
  PropertyCard,
  TotalRevenue,
  TopeAgent,
} from "components";
import { Box, Typography, Stack } from "@pankod/refine-mui";

const Home = () => {
  return (
    <Box>
      <Typography fontSize={23} fontWeight={700} color="#11142D">
        Dashboard
      </Typography>
      <Box display={"flex"} mt="20px" flexWrap="wrap" gap={4}>
        <PieCharts
          title="Property for Sale"
          value={684}
          series={[75, 25]}
          colors={["475be8", "#e4e8ef"]}
        />

        <PieCharts
          title="Property for rent"
          value={6840}
          series={[75, 25]}
          colors={["#275be8", "#c4e8ef"]}
        />

        <PieCharts
          title="Total customers"
          value={6840}
          series={[75, 25]}
          colors={["#275be8", "#c4e8ef"]}
        />

        <PieCharts
          title="Total cities"
          value={600}
          series={[75, 25]}
          colors={["475be8", "#e4e8ef"]}
        />
      </Box>

      <Stack mt="25px" width="100%" direction={{ xs: "column", lg: "row" }}>
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>
    </Box>
  );
};

export default Home;
