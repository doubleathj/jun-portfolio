import Layout from "@components/layout/Layout";
import MetaHead from "@components/shared/metaHead";
import { Button, Stack, Typography } from "@mui/material";
import { NextPage } from "next";
import { ReactElement } from "react";

const Home: NextPage = (): ReactElement => {
  const handleClick = () => {
    alert("아직 미완성이지만 찾아와 주셔서 감사합니다!");
  };

  return (
    <>
      <MetaHead />
      <Layout>
        <Stack
          minHeight={"100vh"}
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={4}
        >
          <Typography variant={"h6"}>
            {`Hi, my name is Hyunjun Choi`}
            <br />
            {`I'm the Frontend Developer`}
          </Typography>
          <Button
            variant={"outlined"}
            onClick={handleClick}
          >{`About Me`}</Button>
        </Stack>
      </Layout>
    </>
  );
};

export default Home;
