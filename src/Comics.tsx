import { Flex } from "@chakra-ui/react";
import Comic from "./Comic";
import { comics } from "./data";

const Comics = () => {
  return (
    <Flex justifyContent="center" flexWrap={"wrap"}>
      {comics.map((comic) => (
        <Comic comic={comic} />
      ))}
    </Flex>
  );
};

export default Comics;
