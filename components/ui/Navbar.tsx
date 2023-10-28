import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import Link from "next/link";

export const Navbar = () => {
  return (
    <AppBar style={{ background: "#815ca7" }}>
      <Toolbar>
        <Link href="/">
          <Typography variant="h6">LOGO</Typography>
        </Link>

        <Box>
          <Link href="/login">
            <Button>Painel</Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
