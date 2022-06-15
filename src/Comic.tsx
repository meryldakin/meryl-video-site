import { Text, Link, Image, VStack, Divider } from "@chakra-ui/react";
type ComicType = {
  url: string;
  image: any;
  name: string;
};

type Props = {
  comic: ComicType;
};

const Comic: React.FC<Props> = ({ comic }) => {
  return (
    <VStack
      _hover={{ boxShadow: "lg" }}
      width="350px"
      height={"350px"}
      borderRadius={"8px"}
      borderWidth={0.5}
      m={3}
    >
      <Link isExternal href={comic.url} _hover={{ decoration: "none" }}>
        <VStack spacing={3} justifyContent="center" alignContent={"center"}>
          <Text
            _focus={{ decoration: "none" }}
            decoration={"none"}
            fontFamily="Zen Old Mincho"
            mb={3}
            mt={3}
          >
            {comic.name}
          </Text>
          <Divider />

          <Image src={comic.image} width="75%" />
        </VStack>
      </Link>
    </VStack>
  );
};

export default Comic;
