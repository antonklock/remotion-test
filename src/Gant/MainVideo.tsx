"use client";
import { Easing, interpolate, OffthreadVideo, useCurrentFrame } from "remotion";
import { useAnimationContext } from "../../hooks/useAnimationContext";

interface MainVideoProps {
  videoSrc: string;
}

export const MainVideo = ({ videoSrc }: MainVideoProps) => {
  const frame = useCurrentFrame();
  const { activeSplitScreen } = useAnimationContext();

  const startFrame = activeSplitScreen.isAnimatedIn
    ? activeSplitScreen?.startFrame_IN
    : activeSplitScreen?.startFrame_OUT;
  const endFrame = activeSplitScreen.isAnimatedIn
    ? activeSplitScreen?.endFrame_IN
    : activeSplitScreen?.endFrame_OUT;
  const positionTarget = activeSplitScreen?.isAnimatedIn
    ? [-450, 0]
    : [0, -450];

  const position = interpolate(frame, [startFrame, endFrame], positionTarget, {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.inOut(Easing.cubic),
  });

  return (
    <div className="w-full h-full">
      <OffthreadVideo
        style={{
          width: "100%",
          height: "auto",
          transform: `translateX(${activeSplitScreen.isActive ? position : 0}px)`,
        }}
        src={videoSrc}
      />
    </div>
  );
};
