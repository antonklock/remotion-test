import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  Easing,
  random,
  Img,
} from "remotion";
import { useAnimationContext } from "../../hooks/useAnimationContext";
import { useEffect, useRef } from "react";

interface SplitScreenGraphicProps {
  DELAY: number;
  DURATION: number;
  image: string;
}

export const SplitScreenGraphic = (props: SplitScreenGraphicProps) => {
  const frame = useCurrentFrame();
  const { DELAY, DURATION, image } = props;
  const maskId = `mask-${DELAY}-${random(1).toString()}`;
  const componentId = useRef(`split-screen-${DELAY}-${random(1)}`);

  const { registerSplitScreen, unregisterSplitScreen } = useAnimationContext();

  useEffect(() => {
    const isActive = frame >= DELAY && frame < DELAY + DURATION + 30;

    if (frame > DELAY + 30) {
      registerSplitScreen(
        isActive,
        "left",
        DELAY + DURATION,
        DELAY + DURATION + 30,
        true,
      );
    } else if (frame > DELAY) {
      registerSplitScreen(isActive, "left", DELAY, DELAY + 30, false);
    }

    const componentIdCurrent = componentId.current;

    return () => {
      unregisterSplitScreen(componentIdCurrent);
    };
  }, [frame, DELAY, DURATION, registerSplitScreen, unregisterSplitScreen]);

  const position =
    frame < DELAY + DURATION
      ? interpolate(frame, [DELAY, DELAY + 30], [1920, 960], {
          extrapolateRight: "clamp",
          easing: Easing.inOut(Easing.cubic),
        })
      : interpolate(
          frame,
          [DELAY + DURATION, DELAY + DURATION + 30],
          [960, 1920],
          {
            extrapolateRight: "clamp",
            easing: Easing.inOut(Easing.cubic),
          },
        );

  return (
    <AbsoluteFill>
      <svg width="0" height="0">
        <defs>
          <mask id={maskId}>
            <rect
              x={position - 960}
              y="0"
              width="1920"
              height="1080"
              fill="white"
            />
          </mask>
        </defs>
      </svg>

      <AbsoluteFill
        style={{
          backgroundColor: "white",
          width: "1920px",
          height: "1080px",
          transform: `translateX(${960}px)`,
          maskImage: `url(#${maskId})`,
          WebkitMaskImage: `url(#${maskId})`, // For Safari support
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "50%",
            height: "100%",
          }}
        >
          <Img src={image} style={{ width: "70%", height: "auto" }} />
        </div>
      </AbsoluteFill>
    </AbsoluteFill>
  );
};
