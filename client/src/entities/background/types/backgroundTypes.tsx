export interface BackgroundState {
    backgroundImage: string | null;
    backgroundColor: string;
    brightness: number;
    contrast: number;
    animationType: string;
    animationColor: string;
    status?: "idle" | "loading" | "succeeded" | "failed";
  }
  
  