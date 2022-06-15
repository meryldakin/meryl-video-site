import { Flex } from "@chakra-ui/react";
import Comic from "./Comic";
import { comics } from "./data";

const Comics = () => {
  return (
    <Flex justifyContent="center" flexWrap={"wrap"}>
      {comics.map((comic) => (
        <Comic comic={comic} key={comic.id} />
      ))}
    </Flex>
  );
};

export default Comics;
