export interface AppApiError {
  status: number;
  message: string;
  details?: unknown;
  timestamp: Date;
}