import { MainVideo } from "./MainVideo";
import { SplitScreenGraphic } from "./SplitScreenGraphic";
import video from "../../public/videos/gant-pt-pf_25-womens-noGFX_01.mp4";

import AnimationProvider from "./AnimationProvider";
import { LowerThird } from "./LowerThird";

import model_1 from "../../public/images/model-1.jpg";
import model_2 from "../../public/images/model-2.jpg";

export const GantSplitScreen = () => {
  return (
    <AnimationProvider>
      <MainVideo videoSrc={video} />
      <LowerThird
        name="Drake Bishop"
        title="Sales associate Regent street"
        leftSide={true}
        delay={10}
        transitionFrames={30}
        duration={100}
      />
      <SplitScreenGraphic DELAY={60} DURATION={200} image={model_1} />
      <SplitScreenGraphic DELAY={350} DURATION={120} image={model_2} />
    </AnimationProvider>
  );
};
