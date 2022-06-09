import { VStack, Text, Box } from "@chakra-ui/react";
import { useState } from "react";

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
  "#90EE90"
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
  "Press Start 2P",
  "Righteous",
  "Sacramento",
  "Shadows Into Light",
  "Special Elite",
];

type Props = {
  title: string;
  description: string;
  video: string;
};
const VideoContainer: React.FC<Props> = ({ title, description, video }) => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <VStack p={3}>
      <Box
        borderRadius="8px"
        width="560px"
        height="315px"
        backgroundColor={random(colors)}
        onMouseEnter={() => setShowVideo(true)}
        onMouseLeave={() => setShowVideo(false)}
      >
        {showVideo ? (
          <iframe
            width="560"
            height="315"
            src={video}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <VStack
            alignItems="center"
            justifyContent="center"
            width="100%"
            height="100%"
            p={3}
          >
            <Text fontFamily={random(fonts)} fontSize={"26px"} color="black">
              {title}
            </Text>
            <Text fontFamily={random(fonts)} fontSize={"16px"} color="black">
              {description}
            </Text>
          </VStack>
        )}
      </Box>
    </VStack>
  );
};

export default VideoContainer;
