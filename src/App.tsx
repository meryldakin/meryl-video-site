import {
  ChakraProvider,
  Box,
  Text,
  Grid,
  theme,
  HStack,
  useMediaQuery,
  Button,
  Image,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import VideoContainer, { Video } from "./VideoContainer";
import { videos } from "./data";
import logo from "./logo.png";
import VideoGrid from "./VideoGrid";
import { FaBackward } from "react-icons/fa";
import Comics from "./Comics";
import About from "./About";
import { AnimatePresence, motion } from "framer-motion";

export const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const [isLargerThan480] = useMediaQuery("(min-width: 480px)");
  const showGrid = isLargerThan480 || (!isLargerThan480 && !selectedVideo);
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid p={3}>
          <HStack p={3} justifyContent={"space-between"}>
            <HStack>
              <Image src={logo} alt="logo" width={"50px"} />
              <Text fontFamily="Major Mono Display" fontSize="34px">
                Meryl Dakin
              </Text>
            </HStack>
            <ColorModeSwitcher justifySelf="flex-end" />
          </HStack>

          <Tabs variant="soft-rounded" size="sm" colorScheme={"gray"} mt={5}>
            <TabList>
              <Tab fontFamily="Major Mono Display">Video pRojects</Tab>
              <Tab fontFamily="Major Mono Display">coMics</Tab>
              <Tab fontFamily="Major Mono Display">AbouT</Tab>
            </TabList>
            <TabPanels mt={6}>
              <TabPanel>
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
                      color={"orange"}
                      leftIcon={<FaBackward />}
                    >
                      Back to all videos
                    </Button>
                    <VideoContainer
                      video={selectedVideo}
                      selectedVideo={selectedVideo}
                      setSelectedVideo={
                        setSelectedVideo as Dispatch<
                          SetStateAction<Video | null>
                        >
                      }
                    />
                  </>
                )}
              </TabPanel>
              <TabPanel>
                <Comics />
              </TabPanel>
              <TabPanel>
                <About />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};
