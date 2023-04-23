import { Box } from "@mui/material";
import React from "react";

type Props = Pick<React.ComponentProps<typeof Box>, "sx" | "children">;
const Section = ({ sx, children }: Props) => {
  return (
    <Box
      component={"section"}
      sx={{ maxWidth: 1200, marginY: 8, marginX: "auto", paddingX: 4, ...sx }}
    >
      {children}
    </Box>
  );
};

export default Section;
