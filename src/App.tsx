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
          <Text fontFamily={"Fredoka One"}>Meryl's Movies</Text>
          <ColorModeSwitcher justifySelf="flex-end" />
        </HStack>
        <VStack spacing={8} mt={2}>
          <HStack>
            <VideoContainer
              title="Nancy Drew: The Secret of the Old Clock: Chapter 2"
              description="A Nancy Drew book rescued from a stoop comes alive during quarantine"
              video="https://www.youtube.com/embed/KCq7qrHzQTY"
            />
            <VideoContainer
              title="Things I Have Lost"
              description="Excerpts from an essay by Kaycie Hall"
              video="https://www.youtube.com/embed/miPxh26NHmc"
            />
          </HStack>
          <HStack>
            <VideoContainer
              title="Inside Quarantine 2020"
              description="Shock. Denial. Anger. Bargaining. Depression. Madness. Denial."
              video="https://www.youtube.com/embed/F7UZl_nfBso"
            />
            <VideoContainer
              title="Sk8 Lunch"
              description="A promo video for an elite club."
              video="https://www.youtube.com/embed/10nN8IXQeC0"
            />
          </HStack>
          <HStack>
            <VideoContainer
              title="Makeup tutorial"
              description="Glam it up"
              video="https://www.youtube.com/embed/8CC91V0avDI"
            />
            <VideoContainer
              title="Crawfish Boil"
              description="What's it like?"
              video="https://www.youtube.com/embed/Ki7xysY4uz4"
            />
          </HStack>
          <HStack>
            <VideoContainer
              title="Tasty"
              description="Remember when Tasty videos were a thing?"
              video="https://www.youtube.com/embed/Ki7xysY4uz4"
            />
          </HStack>
          <HStack>
            <VideoContainer
              title="Batman: Episode 1"
              description="Could there be an imposter among us?"
              video="https://www.youtube.com/embed/jEP4DDwOPGM"
            />
            <VideoContainer
              title="Batman: Episode 2"
              description="Batman visits an old friend"
              video="https://www.youtube.com/embed/yjoHXnqguxo"
            />
          </HStack>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);
