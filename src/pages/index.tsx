import Layout from "@components/layout/Layout";
import MetaHead from "@components/shared/metaHead";
import { Box, Typography } from "@mui/material";
import { NextPage } from "next";
import { ReactElement } from "react";

const Home: NextPage = (): ReactElement => {
  return (
    <>
      <MetaHead />
      <Layout>
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant={"h6"}>
            {`Hi, my name is Hyunjun Choi`}
            <br />
            {`I'm the Frontend Developer`}
          </Typography>
        </Box>
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant={"h6"}>
            {`Hi, my name is Hyunjun Choi`}
            <br />
            {`I'm the Frontend Developer`}
          </Typography>
        </Box>
      </Layout>
    </>
  );
};

export default Home;
