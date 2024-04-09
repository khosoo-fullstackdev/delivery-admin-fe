/* eslint-disable max-lines */
import {
  Box,
  FormControl,
  InputBase,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import React, { Dispatch, SetStateAction } from "react";
import { LocationIcon } from "../../../public/Icons";

export const TextInput = ({
  text,
  value,
  placeHolderText,
  setFunction,
}: {
  text: string;
  value: string;
  placeHolderText: string;
  setFunction: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <Stack width="inherit" gap={"4px"}>
      <Typography color={"#000"} fontSize={"14px"} fontWeight={400}>
        {text}
      </Typography>
      <InputBase
        value={value}
        type="text"
        sx={{
          backgroundColor: "#F7F7F8",
          border: "1px solid #ECEDF0",
          height: "48px",
          padding: "8px 16px",
          borderRadius: "4px",
        }}
        placeholder={placeHolderText}
        onChange={(r) => {
          setFunction(r.target.value);
        }}
      />
    </Stack>
  );
};

export const PasswordInput = ({
  text,
  placeHolderText,
  setUserPassword,
  value,
}: {
  text: string;
  placeHolderText: string;
  value: string;
  setUserPassword: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <Stack gap={"4px"} width="inherit">
      <Typography color={"#000"} fontSize={"14px"} fontWeight={400}>
        {text}
      </Typography>
      <InputBase
        value={value}
        type="password"
        sx={{
          backgroundColor: "#F7F7F8",
          border: "1px solid #ECEDF0",
          height: "48px",
          padding: "8px 16px",
          borderRadius: "4px",
        }}
        placeholder={placeHolderText}
        onChange={(e) => {
          setUserPassword(`${e.target.value}`);
        }}
      />
    </Stack>
  );
};

export const AddresseInput = ({
  stat,
  text,
  data,
}: {
  stat: string;
  text: string;
  data: any[];
}) => {
  console.log("zipdata in input", data);

  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <Box
      sx={{
        minWidth: 120,
        backgroundColor: "#F7F7F8",
        borderRadius: "4px",
        border: "none",
      }}
    >
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          <Stack direction={"row"} alignItems={"center"} gap={"5px"}>
            <LocationIcon /> {text}
          </Stack>
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label={text}
          onChange={handleChange}
        >
          {data.map((item) => {
            if (item.stat === stat) {
              return item.sub_items.map(
                (
                  sub: {
                    mnname:
                      | string
                      | number
                      | boolean
                      | React.ReactElement<
                          any,
                          string | React.JSXElementConstructor<any>
                        >
                      | Iterable<React.ReactNode>
                      | React.ReactPortal
                      | Promise<React.AwaitedReactNode>
                      | null
                      | undefined;
                  },
                  subIndex: React.Key | null | undefined
                ) => (
                  <MenuItem key={subIndex} value={10}>
                    {sub.mnname}
                  </MenuItem>
                )
              );
            } else {
              if (item.sub_items.stat === stat) {
                return item.sub_items.sub_items.map(
                  (
                    sub: {
                      mnname:
                        | string
                        | number
                        | boolean
                        | React.ReactElement<
                            any,
                            string | React.JSXElementConstructor<any>
                          >
                        | Iterable<React.ReactNode>
                        | React.ReactPortal
                        | Promise<React.AwaitedReactNode>
                        | null
                        | undefined;
                    },
                    subIndex: React.Key | null | undefined
                  ) => (
                    <MenuItem key={subIndex} value={10}>
                      {sub.mnname}
                    </MenuItem>
                  )
                );
              }
            }
          })}
        </Select>
      </FormControl>
    </Box>
  );
};
