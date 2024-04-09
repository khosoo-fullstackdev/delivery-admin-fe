import { Container, Stack, Typography, Box } from "@mui/material";
import {
  FacebookLogo,
  FooterLogo,
  InstaLogo,
  TwitterLogo,
} from "../../../public/Icons";
import {
  FooterButton1,
  FooterButton2,
  FooterButton3,
  FooterButton4,
  FooterButton5,
  FooterButton6,
} from "./Buttons";

const Footer = () => {
  return (
    <Stack
      bgcolor="#18BA51"
      justifyContent="center"
      alignItems="center"
      sx={{ backgroundImage: `URL('/Group552.png')` }}
    >
      <Container maxWidth="lg">
        <Stack
          width="inherit"
          height="545px"
          justifyContent="center"
          alignItems="center"
          gap="40px"
          margin="auto"
          position="relative"
        >
          <Stack direction={"row"} gap="8px" alignItems="center">
            <FooterLogo />
            <Typography
              color="white"
              fontSize="20px"
              fontWeight="700"
              fontStyle="normal"
              lineHeight="normal"
            >
              Food Delivery
            </Typography>
          </Stack>
          <Stack width="1200px" direction="row" justifyContent="space-between">
            <FooterButton1 />
            <FooterButton2 />
            <FooterButton3 />
            <FooterButton4 />
            <FooterButton5 />
            <FooterButton6 />
          </Stack>
          <Stack direction="row" gap="18px" padding="5px" alignItems="center">
            <FacebookLogo />
            <InstaLogo />
            <TwitterLogo />
          </Stack>
          <Box
            borderBottom="1px solid"
            width="inherit"
            borderColor="white"
          ></Box>
          <Stack alignItems="center" color="white">
            <Typography fontSize="16px" fontWeight="400">
              © 2024 Pinecone Foods LLC
            </Typography>
            <Typography fontSize="16px" fontWeight="400">
              Зохиогчийн эрх хуулиар хамгаалагдсан.
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
export default Footer;
