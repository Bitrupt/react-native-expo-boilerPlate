// contexts/StatusBarContext.tsx
// Centralized status bar controller so screens can opt into custom colors
import React, { createContext, useContext, useState } from 'react';
import { StatusBar } from 'expo-status-bar';

type StatusBarStyle = 'light' | 'dark' | 'auto';

type StatusBarContextValue = {
  backgroundColor: string;
  iconStyle: StatusBarStyle;
  setStatusBar: (backgroundColor: string, iconStyle?: StatusBarStyle) => void;
};

const StatusBarContext = createContext<StatusBarContextValue | undefined>(undefined);

export const StatusBarProvider: React.FC<{
  children: React.ReactNode;
  defaultColor?: string;
  defaultIconStyle?: StatusBarStyle;
}> = ({
  children,
  defaultColor = '#000000',
  defaultIconStyle = 'light',
}) => {
  const [backgroundColor, setBackgroundColor] = useState(defaultColor);
  const [iconStyle, setIconStyle] = useState<StatusBarStyle>(defaultIconStyle);

  const setStatusBar = (color: string, style: StatusBarStyle = iconStyle) => {
    setBackgroundColor(color);
    setIconStyle(style);
  };

  return (
    <StatusBarContext.Provider value={{ backgroundColor, iconStyle, setStatusBar }}>
      {children}
      <StatusBar style={iconStyle} translucent backgroundColor={backgroundColor} />
    </StatusBarContext.Provider>
  );
};

export const useStatusBar = () => {
  const ctx = useContext(StatusBarContext);
  if (!ctx) throw new Error('useStatusBar must be used within StatusBarProvider');
  return ctx;
};
