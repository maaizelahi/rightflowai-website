import { ApiResponse, ApiError, ApiErrorDetail } from '@/lib/types/api';
import { validateJSONResponse, safeJSONParse } from './json';

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
      throw new ApiError('Invalid response format', 'INVALID_RESPONSE', 400);
    }

    const text = await response.text();
    const data = safeJSONParse<ApiResponse<T>>(text);

    if (!data) {
      throw new ApiError('Invalid JSON response', 'INVALID_JSON', 400);
    }

    if (!response.ok) {
      throw new ApiError(
        data.error || 'An unexpected error occurred',
        data.code || 'API_ERROR',
        response.status,
        data.details
      );
    }

    return {
      success: true,
      data: data.data,
      ...(data.code && { code: data.code }),
      ...(data.details && { details: data.details })
    };
  } catch (error) {
    if (error instanceof ApiError) {
      return {
        success: false,
        error: error.message,
        code: error.code,
        details: error.details
      };
    }

    console.error('API Request Error:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'An unexpected error occurred',
      code: 'UNKNOWN_ERROR'
    };
  }
}