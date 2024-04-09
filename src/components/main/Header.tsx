import { Button, Stack } from "@mui/material";
import { LogoIcon, PersonIcon } from "../../../public/Icons";
import { Container } from "@mui/material";
import { useRouter } from "next/router";
import { TemporaryDrawer } from "../cards/BasketModal";
import Search from "./Search";
const Header = () => {
  const router = useRouter();
  return (
    <Stack
      justifyContent="center"
      sx={{ backgroundColor: "#FFF" }}
      position="fixed"
      zIndex="9999"
      width="100%"
    >
      <Container maxWidth="lg">
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          width="inherit"
          margin="auto"
        >
          <Stack direction="row" alignItems="center" gap={2}>
            <LogoIcon />
            <Button
              onClick={() => router.push("/")}
              sx={{
                padding: "8px 16px",
                fontSize: "14px",
                fontWeight: 700,
                color: "black",
              }}
            >
              НҮҮР
            </Button>
            <Button
              onClick={() => router.push("/menu")}
              sx={{
                padding: "8px 16px",
                fontSize: "14px",
                fontWeight: 700,
                color: "black",
              }}
            >
              ХООЛНЫ ЦЭС
            </Button>
            <Button
              onClick={() => router.push("/delivery")}
              sx={{
                padding: "8px 16px",
                fontSize: "14px",
                fontWeight: 700,
                color: "black",
              }}
            >
              ХҮРГЭЛТИЙН БҮС
            </Button>
          </Stack>
          <Stack direction="row" alignItems="center" gap={2}>
            <Search />
            <Stack direction="row" alignItems="center" gap={1} px={2} py={2}>
              <TemporaryDrawer />
              <Button
                sx={{
                  textTransform: "none",
                  fontWeight: 700,
                  color: "black",
                  fontSize: "14px",
                }}
              >
                Сагс
              </Button>
            </Stack>
            <Stack direction="row" alignItems="center" gap={1} py={2}>
              <PersonIcon />
              <Button
                onClick={() => router.push("/signin")}
                sx={{
                  textTransform: "none",
                  fontWeight: 700,
                  color: "black",
                  fontSize: "14px",
                }}
              >
                Нэвтрэх
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
export default Header;
