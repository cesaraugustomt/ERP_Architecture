import { Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Typography variant="h2" color="primary">
        Construindo ERP
      </Typography>
      <Typography variant="h3" color="secondary" sx={{ mb: 1 }}>
        thoti IA corp
      </Typography>
      <Link href="/login">login</Link>
    </div>
  );
}
