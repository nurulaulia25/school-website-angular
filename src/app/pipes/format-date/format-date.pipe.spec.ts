import { FormatDatePipe } from './format-date.pipe';

describe('DatFormatPipe', () => {
  it('create an instance', () => {
    const pipe = new FormatDatePipe();
    expect(pipe).toBeTruthy();
  });
});