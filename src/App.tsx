import {
  ChakraProvider,
  Box,
  Text,
  VStack,
  Grid,
  theme,
  HStack,
  useMediaQuery,
  Button,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import VideoContainer, { Video } from "./VideoContainer";
import { videos } from "./data";

import VideoGrid from "./VideoGrid";
import { FaBackspace, FaBackward } from "react-icons/fa";

export const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  console.log("selected video", selectedVideo);
  const [isLargerThan480] = useMediaQuery("(min-width: 480px)");
  const showGrid = isLargerThan480 || (!isLargerThan480 && !selectedVideo);
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid p={3}>
          <HStack p={3} justifyContent={"space-between"}>
            <Text fontFamily={"Fredoka One"}>Meryl's Movies</Text>
            <ColorModeSwitcher justifySelf="flex-end" />
          </HStack>
          {showGrid ? (
            <VideoGrid
              videos={videos}
              selectedVideo={selectedVideo}
              setSelectedVideo={
                setSelectedVideo as Dispatch<SetStateAction<Video | null>>
              }
            />
          ) : (
            <>
              <Button
                onClick={() => setSelectedVideo(null)}
                mt={"50px"}
                mb={"50px"}
                variant="outline"
                color={'orange'}
                leftIcon={<FaBackward/>}
              >
                Back to all videos
              </Button>
              <VideoContainer
                video={selectedVideo}
                selectedVideo={selectedVideo}
                setSelectedVideo={
                  setSelectedVideo as Dispatch<SetStateAction<Video | null>>
                }
              />
            </>
          )}
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
