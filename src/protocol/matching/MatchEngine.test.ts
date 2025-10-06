import { describe, it, expect } from 'vitest';
import { MatchEngine } from './MatchEngine.ts';

describe('MatchEngine', () => {
  it('matches senders to recipients', () => {
    const result = MatchEngine.match();
    expect(result).toBeDefined();
  });
});