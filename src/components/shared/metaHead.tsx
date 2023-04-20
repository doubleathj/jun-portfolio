import Head from "next/head";
import React, { ReactNode } from "react";

interface Props {
  title?: string;
  description?: string;
  path?: string;
  children?: ReactNode;
  keywords?: string;
  image?: string;
}

const MetaHead = ({
  title = "Jun | 프론트엔드 개발자",
  description = "3년차 프론트엔드 개발자 Jun(최현준)의 포트폴리오입니다. React와 Typescript 를 주로 사용하고 있습니다.",
  path = "/",
  children,
  keywords = "프론트엔드, 개발자, 포트폴리오",
  image,
}: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://hyunjunchoi.com${path}`} />
        <meta name="og:title" property="og:title" content={title} />
        <meta
          name="og:description"
          property="og:description"
          content={description}
        />
        <meta name="og:locale" property="og:locale" content="ko_KR" />
        <meta property="og:image" content={image} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:creator" content="" />
        <meta name="twitter:image" content={image} />

        <link rel="canonical" href={`https://www.hyunjunchoi.com${path}`} />
        {children}
      </Head>
    </>
  );
};

export default MetaHead;
