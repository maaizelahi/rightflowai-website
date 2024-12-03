import { validateJSONResponse, safeJSONParse } from './json';

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  details?: Array<{ field: string; message: string }>;
}

export class ApiError extends Error {
  constructor(
    message: string,
    public status?: number,
    public details?: Array<{ field: string; message: string }>
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export async function apiRequest<T>(
  url: string,
  options: RequestInit = {}
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...(options.headers || {})
      }
    });

    if (!validateJSONResponse(response)) {
      throw new ApiError('Server returned an invalid response format');
    }

    const text = await response.text();
    const data = safeJSONParse<ApiResponse<T>>(text);

    if (!data) {
      throw new ApiError('Invalid JSON response from server');
    }

    if (!response.ok) {
      throw new ApiError(
        data.error || 'An unexpected error occurred',
        response.status,
        data.details
      );
    }

    return data;
  } catch (error) {
    if (error instanceof ApiError) {
      return {
        success: false,
        error: error.message,
        details: error.details
      };
    }

    console.error('API Request Error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred'
    };
  }
}