import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

type Props = Pick<React.ComponentProps<typeof AppBar>, "sx" | "children">;

const Header = ({ sx, children }: Props) => {
  return (
    <AppBar position={"sticky"} sx={{ top: 0, bottom: "auto", ...sx }}>
      <Toolbar>
        <Typography
          variant={"h5"}
          component={"span"}
        >{`Jun's Portfolio`}</Typography>
        {children}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
