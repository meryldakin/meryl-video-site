import {
  Box,
  Container,
  Flex,
  HStack,
  useMediaQuery,
  VStack,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

import VideoContainer, { Video } from "./VideoContainer";

type Props = {
  selectedVideo: Video | null;
  setSelectedVideo: Dispatch<SetStateAction<null | Video>>;
  videos: Video[];
};

const VideoGrid: React.FC<Props> = ({
  selectedVideo,
  setSelectedVideo,
  videos,
}) => {
  return (
    <Container maxWidth={["1300px"]}>
      <Flex mt={2} flexWrap="wrap" justifyContent={"center"}>
        {videos.map((video) => (
          <VideoContainer
            video={video}
            setSelectedVideo={setSelectedVideo}
            selectedVideo={selectedVideo}
          />
        ))}
      </Flex>
    </Container>
  );
};

export default VideoGrid;
