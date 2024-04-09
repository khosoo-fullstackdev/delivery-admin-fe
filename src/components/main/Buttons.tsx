/* eslint-disable max-lines */
import * as React from "react";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { ButtonBase, Stack } from "@mui/material";

export {
  SquareButton,
  FooterButton1,
  FooterButton2,
  FooterButton3,
  FooterButton4,
  FooterButton5,
  FooterButton6,
  MenuButton,
};

const SquareButton = () => {
  return <Button>Hello world</Button>;
};

const FooterButton1 = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push("/")}
      sx={{
        textDecorationLine: "underline",
        textTransform: "none",
        fontWeight: "590",
        fontSize: "16px",
        fontStyle: "normal",
        color: "white",
      }}
    >
      Нүүр
    </Button>
  );
};

const FooterButton2 = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push("/contact")}
      sx={{
        textDecorationLine: "underline",
        textTransform: "none",
        fontWeight: "590",
        fontSize: "16px",
        fontStyle: "normal",
        color: "white",
      }}
    >
      Холбоо барих
    </Button>
  );
};

const FooterButton3 = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push("/menu")}
      sx={{
        textDecorationLine: "underline",
        textTransform: "none",
        fontWeight: "590",
        fontSize: "16px",
        fontStyle: "normal",
        color: "white",
      }}
    >
      Хоолны цэс
    </Button>
  );
};

const FooterButton4 = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push("/terms")}
      sx={{
        textDecorationLine: "underline",
        textTransform: "none",
        fontWeight: "590",
        fontSize: "16px",
        fontStyle: "normal",
        color: "white",
      }}
    >
      Үйлчилгээний нөхцөл
    </Button>
  );
};

const FooterButton5 = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push("/delivery")}
      sx={{
        textDecorationLine: "underline",
        textTransform: "none",
        fontWeight: "590",
        fontSize: "16px",
        fontStyle: "normal",
        color: "white",
      }}
    >
      Хүргэлтийн бүс
    </Button>
  );
};

const FooterButton6 = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push("/privacy")}
      sx={{
        textDecorationLine: "underline",
        textTransform: "none",
        fontWeight: "590",
        fontSize: "16px",
        fontStyle: "normal",
        color: "white",
      }}
    >
      Нууцлалын бодлого
    </Button>
  );
};

const MenuButton = () => {
  return (
    <Button
      sx={{
        padding: "8px 16px",
        textTransform: "none",
        borderRadius: "8px",
        border: "1px solid",
        background: "#18BA51",
        color: "white",
        width: "249px",
        height: "27px",
        fontSize: "18px",
        fontWeight: "500",
        lineHeight: "150%",
        letterSpacing: "-0.396px",
      }}
    ></Button>
  );
};

export const BasketButton = ({
  clickFunc,
  onClose,
}: {
  clickFunc: () => void;
  onClose: (_e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}) => {
  return (
    <ButtonBase
      onClick={() => {
        clickFunc();
        onClose;
      }}
    >
      <Stack
        width={"384px"}
        height={"48px"}
        border={"1px solid #D6D8DB"}
        borderRadius={"4px"}
        padding={"8px 16px"}
        justifyContent={"center"}
        alignItems={"center"}
        color={"#FFF"}
        sx={{
          backgroundColor: "#18BA51",
          fontWeight: 400,
          fontSize: "16px",
        }}
      >
        Сагслах
      </Stack>
    </ButtonBase>
  );
};

export const MenuPageButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  return (
    <ButtonBase onClick={onClick}>
      <Stack
        width={"280px"}
        border={"1px solid #D6D8DB"}
        borderRadius={"8px"}
        padding={"8px 16px"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          backgroundColor: "#FFF",
          fontWeight: 500,
          "&:hover": {
            borderColor: "#FFF",
            color: "#FFF",
            backgroundColor: "#18BA51",
          },
        }}
      >
        {text}
      </Stack>
    </ButtonBase>
  );
};
