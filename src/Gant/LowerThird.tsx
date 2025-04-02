import { AbsoluteFill, interpolate, useCurrentFrame, Easing } from "remotion";

interface LowerThirdProps {
  name: string;
  title: string;
  leftSide: boolean;
  delay: number;
  duration: number;
  transitionFrames: number;
}

export const LowerThird = ({
  name,
  title,
  leftSide,
  delay,
  duration,
  transitionFrames,
}: LowerThirdProps) => {
  const frame = useCurrentFrame();

  const animatedIn = frame > delay + 30;
  const startFrame = animatedIn ? delay + duration : delay;
  const endFrame = animatedIn
    ? delay + duration + transitionFrames
    : delay + transitionFrames;

  const inPos = leftSide ? 0 : 844;
  const outPos = leftSide ? 844 : 0;

  const startPosition = animatedIn ? inPos : outPos;
  const endPosition = animatedIn ? outPos : inPos;

  const position = interpolate(
    frame,
    [startFrame, endFrame],
    [startPosition, endPosition],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.inOut(Easing.cubic),
    },
  );

  return (
    <AbsoluteFill
      style={{
        transform: `translateX(-${position}px) translateY(-50%)`,
      }}
      className={`flex items-center justify-center bg-white opacity-90 w-[844px] h-[176px] top-[821px] ${leftSide ? "left-[422px]" : "left-[1498px]"} ${leftSide ? "-translate-x-1/2" : "translate-x-1/2"} `}
    >
      <div
        className={`flex flex-col ${leftSide ? "items-end" : "items-start"} justify-center gap-2 w-full h-full px-13`}
      >
        <p
          className="text-[36px] tracking-wider font-bold"
          style={{ fontFamily: "GantModernV2-Bold" }}
        >
          {name}
        </p>
        <p
          className="text-[25px] tracking-widest"
          style={{ fontFamily: "GantModernV2-Light" }}
        >
          {title.toUpperCase()}
        </p>
      </div>
    </AbsoluteFill>
  );
};
