import { useContext } from "react";
import { AnimationContext } from "../src/Gant/AnimationProvider";

export function useAnimationContext() {
  const context = useContext(AnimationContext);

  if (!context) {
    throw new Error(
      "useAnimationContext must be used within a AnimationProvider",
    );
  }

  return context;
}
