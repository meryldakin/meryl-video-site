import { VStack, Text, Box, useMediaQuery } from "@chakra-ui/react";
import { Dispatch, SetStateAction, useState } from "react";

const random = (items: string | any[]) =>
  items[Math.floor(Math.random() * items.length)];

const colors = [
  "#7FFFD4",
  "#FFE4C4",
  "#FF7F50",
  "#6495ED",
  "#8FBC8F",
  "#483D8B",
  "#00BFFF",
  "#CD5C5C",
  "#E6E6FA",
  "#DB7093",
  "#B0E0E6",
  "#D8BFDB",
  "#EEE8AA",
  "#66CDAA",
  "#E0FFFF",
  "#FFFACD",
  "#FFF0F5",
  "#B0C4DE",
  "#FFE4E1",
  "#90EE90",
];

const fonts = [
  "Abril Fatface",
  "Alfa Slab One",
  "Bangers",
  "Bebas Neue",
  "Blaka",
  "Caveat",
  "Cinzel",
  "Dancing Script",
  "Great Vibes",
  "Indie Flower",
  "Fredoka One",
  "Josefin Sans",
  "Marcellus",
  "Lobster",
  "Oswald",
  "Pacifico",
  "Permanent Marker",
  "Righteous",
  "Sacramento",
  "Shadows Into Light",
  "Special Elite",
];

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
  const firstColor = random(colors);
  const secondColor = random(colors);
  const shouldShowVideo = isLargerThan480 ? showVideo : selectedVideo === video;

  return (
    <VStack p={3}>
      <Box
        borderRadius="8px"
        boxShadow="lg"
        width={["250px", "560px"]}
        height={["255px", "315px"]}
        borderWidth={4}
        borderStyle="groove"
        borderColor={secondColor}
        // bgGradient={`conic(from 90deg, ${firstColor}, ${secondColor}, ${firstColor})`}
        backgroundColor={random(colors)}
        onMouseEnter={() => isLargerThan480 && setShowVideo(true)}
        onMouseLeave={() => isLargerThan480 && setShowVideo(false)}
        onClick={() => flipVideo(video)}
      >
        {shouldShowVideo ? (
          <Box borderRadius={8} width="100%" height="100%">
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
          <VStack
            alignItems="center"
            justifyContent="center"
            width="100%"
            height="100%"
            p={3}
          >
            <Text
              fontFamily={random(fonts)}
              fontSize={["18px", "26px"]}
              color="black"
            >
              {video?.title}
            </Text>
            <Text
              fontFamily={random(fonts)}
              fontSize={["14px", "16px"]}
              color="black"
            >
              {video?.description}
            </Text>
          </VStack>
        )}
      </Box>
    </VStack>
  );
};

export default VideoContainer;
