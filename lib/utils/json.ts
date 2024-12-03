export function isValidJSON(str: string): boolean {
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
}

export function safeJSONParse<T>(data: string): T | null {
  try {
    return JSON.parse(data);
  } catch {
    return null;
  }
}

export function validateJSONResponse(response: Response): boolean {
  const contentType = response.headers.get('content-type');
  return Boolean(contentType && contentType.includes('application/json'));
}