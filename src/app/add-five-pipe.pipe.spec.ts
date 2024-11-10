import { AddFivePipePipe } from './add-five-pipe.pipe';

describe('AddFivePipePipe', () => {
  it('create an instance', () => {
    const pipe = new AddFivePipePipe();
    expect(pipe).toBeTruthy();
  });
});
