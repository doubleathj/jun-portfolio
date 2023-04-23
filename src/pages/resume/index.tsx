import Header from "@components/layout/header/Header";
import Layout from "@components/layout/Layout";
import Summary from "@components/resume/contents/Summary";
import MetaHead from "@components/shared/metaHead";
import { ReactElement } from "react";

const Resume = (): ReactElement => {
  return (
    <>
      <MetaHead />
      <Layout header={<Header />}>
        <Summary />
      </Layout>
    </>
  );
};

export default Resume;
