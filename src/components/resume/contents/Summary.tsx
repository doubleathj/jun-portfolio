import Section from "@components/resume/Section";
import TitleArea from "@components/resume/TitleArea";
import ImageComponent from "@components/shared/ImageComponent";
import { Box, Stack, Typography } from "@mui/material";

const Summary = () => {
  return (
    <Section>
      <Stack direction={"column"} spacing={2}>
        <TitleArea title={`SUMMARY`} />
        <Stack
          direction={"row"}
          justifyContent={"space-evenly"}
          alignContent={"center"}
          spacing={4}
        >
          <Box
            sx={{
              position: "relative",
              width: 150,
              height: 150,
              borderRadius: "100%",
              overflow: "hidden",
            }}
          >
            <ImageComponent
              alt={"my-face"}
              src={"/image/resume/face.jpg"}
              priority={true}
              fill
              sizes={"(max-width: 920px) 150px, 150px"}
            />
          </Box>
          <Box
            sx={{
              flex: 1,
            }}
          >
            <Typography variant={"body1"}>
              안녕하세요 프론트엔드 개발자 최현준 입니다.
            </Typography>
            {/*<Typography variant={"body1"}>Todo</Typography>*/}
            {/*<Typography variant={"body1"}>Todo</Typography>*/}
          </Box>
        </Stack>
      </Stack>
    </Section>
  );
};

export default Summary;
