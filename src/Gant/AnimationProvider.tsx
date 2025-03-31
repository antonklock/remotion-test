import React, { createContext, useState, useCallback } from "react";

interface AnimationContextType {
  isSplitScreen: boolean;
  registerSplitScreen: (
    isActive: boolean,
    side: "left" | "right",
    startFrame: number,
    endFrame: number,
    isAnimatedIn: boolean,
  ) => void;
  unregisterSplitScreen: (id: string) => void;
  activeSplitScreen: {
    isActive: boolean;
    side: "left" | "right";
    startFrame_IN: number;
    endFrame_IN: number;
    startFrame_OUT: number;
    endFrame_OUT: number;
    isAnimatedIn: boolean;
  };
}

export const AnimationContext = createContext<AnimationContextType>({
  isSplitScreen: false,
  registerSplitScreen: () => {},
  unregisterSplitScreen: () => {},
  activeSplitScreen: {
    isActive: false,
    side: "left",
    startFrame_IN: 0,
    endFrame_IN: 1,
    startFrame_OUT: 0,
    endFrame_OUT: 1,
    isAnimatedIn: false,
  },
});

const AnimationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeSplitScreen, setActiveSplitScreen] = useState<{
    isActive: boolean;
    side: "left" | "right";
    startFrame_IN: number;
    endFrame_IN: number;
    startFrame_OUT: number;
    endFrame_OUT: number;
    isAnimatedIn: boolean;
  }>({
    isActive: false,
    side: "left",
    startFrame_IN: 0,
    endFrame_IN: 1,
    startFrame_OUT: 0,
    endFrame_OUT: 1,
    isAnimatedIn: false,
  });

  const registerSplitScreen = useCallback(
    (
      isActive: boolean,
      side: "left" | "right",
      startFrame: number,
      endFrame: number,
      isAnimatedIn: boolean,
    ) => {
      setActiveSplitScreen({
        isActive,
        side,
        startFrame_IN: startFrame,
        endFrame_IN: endFrame,
        startFrame_OUT: startFrame,
        endFrame_OUT: endFrame,
        isAnimatedIn: isAnimatedIn,
      });
    },
    [],
  );

  const unregisterSplitScreen = useCallback(() => {
    setActiveSplitScreen({
      isActive: false,
      side: "left",
      startFrame_IN: 0,
      endFrame_IN: 1,
      startFrame_OUT: 0,
      endFrame_OUT: 1,
      isAnimatedIn: false,
    });
  }, []);

  // isSplitScreen is true if ANY component is active
  const isSplitScreen = activeSplitScreen.isActive;

  return (
    <AnimationContext.Provider
      value={{
        isSplitScreen,
        registerSplitScreen,
        unregisterSplitScreen,
        activeSplitScreen,
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
};

export default AnimationProvider;
