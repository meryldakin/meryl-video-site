import { VStack, Text, Box, useMediaQuery, Divider } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { Dispatch, SetStateAction, useState } from "react";

export type Video = {
  title: string;
  description: string;
  src: string;
  id: number;
};

type Props = {
  selectedVideo: Video | null;
  setSelectedVideo: Dispatch<SetStateAction<null | Video>>;
  video: Video | null;
};
const VideoContainer: React.FC<Props> = ({
  video,
  selectedVideo,
  setSelectedVideo,
}) => {
  const [isLargerThan480] = useMediaQuery("(min-width: 480px)");
  const [showVideo, setShowVideo] = useState(false);
  const flipVideo = (video: Video | null) => {
    setSelectedVideo(video);
  };

  const shouldShowVideo = isLargerThan480 ? showVideo : selectedVideo === video;

  return (
    <VStack p={3}>
      <Box
        borderRadius="8px"
        borderWidth={0.5}
        boxShadow="lg"
        width={["250px", "560px"]}
        height={["255px", "315px"]}
        onMouseEnter={() => isLargerThan480 && setShowVideo(true)}
        onMouseLeave={() => isLargerThan480 && setShowVideo(false)}
        onClick={() => !isLargerThan480 && flipVideo(video)}
      >
        {shouldShowVideo ? (
          <Box
            borderRadius={8}
            width={["250px", "560px"]}
            height={["255px", "315px"]}
          >
            <iframe
              width="100%"
              height="100%"
              src={video?.src}
              title={video?.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>
        ) : (
          <>
            <VStack
              alignItems="center"
              justifyContent="center"
              width="100%"
              height="100%"
              p={3}
              spacing={5}
            >
              <Text
                fontFamily={"Major Mono Display"}
                fontSize={["18px", "26px"]}
              >
                {video?.title}
              </Text>
              <Divider width={"50px"} variant="solid" />
              <Text
                fontFamily={"Zen Old Mincho"}
                fontWeight="bold"
                fontSize={["14px", "16px"]}
              >
                {video?.description}
              </Text>
            </VStack>
          </>
        )}
      </Box>
    </VStack>
  );
};

export default VideoContainer;
