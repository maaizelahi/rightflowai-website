import { RateLimiterMemory } from 'rate-limiter-flexible';
import { rateLimiterOpts } from '@/lib/config/rate-limiter';

// Initialize rate limiter singleton
export const rateLimiter = new RateLimiterMemory(rateLimiterOpts);