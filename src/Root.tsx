import "./index.css";
import { Composition } from "remotion";
import { GantSplitScreen } from "./Gant/GantSplitScreen";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <div>
      <Composition
        id="GantSplitScreen"
        component={GantSplitScreen}
        durationInFrames={520}
        fps={30}
        width={1920}
        height={1080}
      />
    </div>
  );
};
