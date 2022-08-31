import { useEffect } from "react";
import Menu from "../components/Menu";
import data from "../assets/DailyMenu.json";
import {
  Accordion,
  Box,
  Image,
  Text,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import Schedule from "../components/Schedule";
import dinner from "../assets/dinner.png";
import TodaysMenu from "../components/TodaysMenu";

export default function RestauranPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Flex direction="column" align="center">
      <Box
        bg={useColorModeValue("#0050e0", "#f3f3f3")}
        w={{ sm: "90%", md: "90%", lg: "80%", "2xl": "60%", "3xl": "50%" }}
        rounded="0.75rem"
        px={"1rem"}
        py={"1rem"}
      >
        <TodaysMenu />
      </Box>
      <Box
        textAlign={"center"}
        w={{ sm: "90%", md: "90%", lg: "80%", "2xl": "60%", "3xl": "50%" }}
      >
        <Accordion allowToggle mt="1rem">
          <Schedule />
        </Accordion>
        <Box align="center">
          <Text
            mt="2rem"
            mb="1rem"
            w="100%"
            display="flex"
            direction="row"
            justifyContent="start"
            fontWeight="bold"
            fontFamily="Syne"
            fontSize={{ sm: 20, md: 24, lg: 26 }}
          >
            Όλες οι μέρες
          </Text>
        </Box>
        <Accordion allowToggle>
          {data.map((data) => {
            return <Menu data={data} key={data.day} />;
          })}
        </Accordion>
      </Box>
    </Flex>
  );
}
