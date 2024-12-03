# JSON Parsing Error Guide

## Understanding JSON Parsing Errors

### Common "Unexpected Token" Errors

1. **Unexpected Token '<'**
   ```javascript
   // Error: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
   // This usually means you're receiving HTML instead of JSON
   ```

2. **Unexpected Token '}'**
   ```javascript
   // Invalid JSON
   {
     "name": "John",
     "age": 30,
   }  // Trailing comma causes error
   ```

3. **Unexpected Token ':'**
   ```javascript
   // Invalid JSON
   {
     name: "John"  // Missing quotes around property name
   }
   ```

## Common Causes & Solutions

### 1. Server Response Issues

#### Problem
```javascript
// Server returning HTML error page instead of JSON
fetch('/api/data')
  .then(response => response.json())  // Fails because response is HTML
```

#### Solution
```javascript
fetch('/api/data')
  .then(response => {
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Invalid response type');
    }
    return response.json();
  })
```

### 2. Malformed JSON Structure

#### Problem
```javascript
// Invalid JSON structure
{
  name: 'John',  // Invalid quotes
  'age': 30,     // Mixed quote styles
  "city": 'NY'   // Mixed quote styles
}
```

#### Solution
```javascript
{
  "name": "John",
  "age": 30,
  "city": "NY"
}
```

### 3. Data Validation Issues

#### Problem
```javascript
// Sending invalid data structure
const data = {
  user: undefined,  // undefined is not valid JSON
  date: new Date()  // Date object is not valid JSON
};
fetch('/api/data', {
  body: JSON.stringify(data)
})
```

#### Solution
```javascript
// Properly format data before sending
const data = {
  user: null,  // Use null instead of undefined
  date: new Date().toISOString()  // Convert Date to string
};
fetch('/api/data', {
  body: JSON.stringify(data)
})
```

## Best Practices

### 1. Client-Side Validation

```typescript
function validateJSONData<T>(data: unknown): T {
  try {
    if (typeof data === 'string') {
      return JSON.parse(data);
    }
    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    throw new Error(`Invalid JSON data: ${error.message}`);
  }
}
```

### 2. API Response Handling

```typescript
async function fetchJSON<T>(url: string): Promise<T> {
  const response = await fetch(url);
  
  // Validate content type
  const contentType = response.headers.get('content-type');
  if (!contentType?.includes('application/json')) {
    throw new Error(`Expected JSON response but got ${contentType}`);
  }

  // Check status
  if (!response.ok) {
    const error = await response.json().catch(() => null);
    throw new Error(error?.message || `HTTP error! status: ${response.status}`);
  }

  // Parse response
  return response.json();
}
```

### 3. Error Prevention Checklist

- ✓ Set proper Content-Type headers
- ✓ Validate data before stringification
- ✓ Handle undefined and special object types
- ✓ Use consistent quote style (prefer double quotes)
- ✓ Remove trailing commas
- ✓ Validate JSON structure before sending
- ✓ Implement proper error handling
- ✓ Use TypeScript for better type safety

## Testing JSON Validity

```typescript
function isValidJSON(str: string): boolean {
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
}

// Usage example
const testData = '{"name": "John", "age": 30}';
console.log(isValidJSON(testData)); // true
```

## Common JSON Patterns

### 1. API Response Structure

```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "John Doe"
  },
  "meta": {
    "timestamp": "2024-04-15T12:00:00Z"
  }
}
```

### 2. Error Response Structure

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": [
      {
        "field": "email",
        "message": "Invalid email format"
      }
    ]
  }
}
```

Remember: Always validate both incoming and outgoing JSON data to prevent parsing errors and ensure data integrity.