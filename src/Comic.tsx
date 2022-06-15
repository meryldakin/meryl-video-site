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
      width={["250px", "350px"]}
      height={["250px", "350px"]}
      borderRadius={"8px"}
      borderWidth={0.5}
      m={3}
    >
      <Link isExternal href={comic.url} _hover={{ decoration: "none" }}>
        <VStack
          spacing={3}
          justifyContent="center"
          alignContent={"center"}
          width="100%"
          height="100%"
        >
          <Text
            _focus={{ decoration: "none" }}
            fontFamily="Zen Old Mincho"
            fontSize={[16, 20]}
            mb={3}
            mt={3}
          >
            {comic.name}
          </Text>
          <Divider />

          <Image src={comic.image} width="70%" height="70%" />
        </VStack>
      </Link>
    </VStack>
  );
};

export default Comic;
