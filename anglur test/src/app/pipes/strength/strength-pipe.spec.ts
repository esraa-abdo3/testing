import { StrengthPipe } from './strength-pipe';
describe('strength pipe:', () => {
  let pipe = new StrengthPipe();
  it('transform function should return "9 (weak)"', () => {
    expect(pipe.transform(9)).toBe('9 (weak)');
  });
  it('transform function should return "10 (strong)"', () => {
    expect(pipe.transform(10)).toMatch(/strong/i)
  });
  it('transform function should return "19 (strong)"', () => {
    expect(pipe.transform(19)).toMatch(/strong/i)
  });
  it('transform function should return "20 (unbelievable)"', () => {
    expect(pipe.transform(20)).toMatch(/unbelievable/i)
  });
});
