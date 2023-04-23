import { Box, Typography } from "@mui/material";
import React from "react";

type Props = Partial<React.ComponentProps<typeof Box>> & {
  title: string;
  subtitle?: string;
};

const TitleArea = ({ title, subtitle, ...rest }: Props) => {
  return (
    <Box {...rest}>
      <Typography variant={"h4"}>{title}</Typography>
      <Typography variant={"subtitle2"}>{subtitle}</Typography>
    </Box>
  );
};

export default TitleArea;
