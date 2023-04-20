import Header from "@components/layout/header/Header";
import Layout from "@components/layout/Layout";
import MetaHead from "@components/shared/metaHead";
import { Typography } from "@mui/material";
import { NextPage } from "next";

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <MetaHead />
      <Layout header={<Header />}>
        <Typography
          variant={"h6"}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          Todo: Summary, Experience, Education, Skills, Projects, Contact, etc..
        </Typography>
      </Layout>
    </>
  );
};

export default Home;
