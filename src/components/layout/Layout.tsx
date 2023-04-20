import { Box } from "@mui/material";
import { ReactNode } from "react";

type Props = {
  header?: ReactNode;
  children: ReactNode;
};

export function Layout({ header, children }: Props): JSX.Element {
  return (
    <>
      {header}
      <Box component={"main"}>{children}</Box>
    </>
  );
}

export default Layout;
