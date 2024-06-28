import { CustomLengthFilterPipe, CustomReversePipe } from './custom-pipe.pipe';

describe('CustomLengthFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new CustomLengthFilterPipe();
    expect(pipe).toBeTruthy();
  });
});

describe('CustomReversePipe', () => {
  it('create an instance', () => {
    const pipe = new CustomLengthFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
