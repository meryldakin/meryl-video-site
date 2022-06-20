import { Flex, Link, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Flex direction={"column"} alignItems="start">
      <Text fontFamily={"Zen Old Mincho"} fontSize="14px">
        Meryl was a PA (personal assistant) to Eric Roberts, brother of
        Julia Roberts, during the 2-week filming of {" "}
        <Link color="twitter.600" textDecoration="underline" href="https://www.imdb.com/name/nm8703366/" isExternal>
          Jake's Road
        </Link>{" "} in 2013.
      </Text>
    </Flex>
  );
};

export default About;
