import { describe, expect, it } from 'vitest';

describe('sanity', () => {
  it('confirms Vitest is wired up before real systems exist', () => {
    expect(1 + 1).toBe(2);
  });
});
