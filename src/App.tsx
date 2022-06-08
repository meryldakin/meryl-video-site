import * as React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  HStack,
} from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { Logo } from "./Logo";
import VideoContainer from "./VideoContainer";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid p={3}>
        <HStack p={3} justifyContent={"space-between"}>
          <Text fontFamily={"Fascinate Inline"}>Meryl's Movies</Text>
          <ColorModeSwitcher justifySelf="flex-end" />
        </HStack>
        <VStack spacing={8} mt={2}>
          <HStack>
            <VideoContainer
              title="Nancy Drew: The Secret of the Old Clock: Chapter 2"
              description="A Nancy Drew book rescued from a stoop comes alive during quarantine"
              video={
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/KCq7qrHzQTY"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              }
            />
            <VideoContainer
              title="Things I Have Lost"
              description="Excerpts from an essay by Kaycie Hall"
              video={
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/miPxh26NHmc"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              }
            />
          </HStack>
          <HStack>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/F7UZl_nfBso"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/10nN8IXQeC0"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </HStack>
          <HStack>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/8CC91V0avDI"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Ki7xysY4uz4"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </HStack>
          <HStack>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/famPdZvt6bg"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </HStack>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);
