import { VStack, Text } from "@chakra-ui/react";
import { ReactElement } from "react";

type Props = {
  title: string;
  description: string;
  video: ReactElement;
};
const VideoContainer: React.FC<Props> = ({ title, description, video }) => {
  return (
    <VStack borderColor="white" borderWidth="3px" borderRadius="8px" p={3}>
      <VStack>
        <Text>{title}</Text>
        <Text fontSize={"12px"}>{description}</Text>
      </VStack>
      {video}
    </VStack>
  );
};

export default VideoContainer;
