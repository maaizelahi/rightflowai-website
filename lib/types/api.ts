export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  details?: ApiErrorDetail[];
}

export interface ApiErrorDetail {
  field?: string;
  code: string;
  message: string;
}

export class ApiError extends Error {
  constructor(
    message: string,
    public code: string = 'UNKNOWN_ERROR',
    public status: number = 500,
    public details?: ApiErrorDetail[]
  ) {
    super(message);
    this.name = 'ApiError';
  }
}