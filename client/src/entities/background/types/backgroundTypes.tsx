export interface BackgroundState {
    backgroundImage: string | null;
    backgroundColor: string;
    brightness: number;
    contrast: number;
    status?: "idle" | "loading" | "succeeded" | "failed";
  }
  
  