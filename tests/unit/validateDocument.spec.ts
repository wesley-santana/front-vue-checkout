import { validateDocument } from "@/helpers";

describe('validateDocument', () => {
  it('should return true', () => {
    const m = validateDocument('78258513826');
    expect(m).toEqual(true);
  });
  it('should return false', () => {
    const m = validateDocument('78258513222');
    expect(m).toEqual(false);
  });
  it('should return false for empty value', () => {
    const m = validateDocument('');
    expect(m).toEqual(false);
  });
});