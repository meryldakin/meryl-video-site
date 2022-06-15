import { Flex, Link, Image } from "@chakra-ui/react";
import figs from "./assets/i-hate-figs.png";
import doing from "./assets/what-was-i-doing.png";
import insecure from "./assets/insecure-app.png";

const Comics = () => {
  return (
    <Flex justifyContent="space-around">
      <Link
        isExternal
        href="https://medium.com/@meryldakin/nine-ways-of-looking-at-a-fig-tree-7ede7bce9d66"
      >
        <Image src={figs} width="200px" />
      </Link>

      <Link href="https://medium.com/@meryldakin/what-was-i-supposed-to-be-doing-again-d0577a6f2c25">
        <Image src={doing} width="200px" />
      </Link>

      <Link href="https://medium.com/@meryldakin/unsecure-insecure-c4d45c849939">
        <Image src={insecure} width="200px" />
      </Link>
    </Flex>
  );
};

export default Comics;
