import { MainVideo } from "./MainVideo";
import { SplitScreenGraphic } from "./SplitScreenGraphic";
import video from "../../public/videos/gant-test.mp4";

import model_1 from "../../public/images/model-1.jpg";
import model_2 from "../../public/images/model-2.jpg";
import AnimationProvider from "./AnimationProvider";

export const GantSplitScreen = () => {
  return (
    <AnimationProvider>
      <MainVideo videoSrc={video} />
      <SplitScreenGraphic DELAY={60} DURATION={200} image={model_1} />
      <SplitScreenGraphic DELAY={350} DURATION={120} image={model_2} />
    </AnimationProvider>
  );
};
