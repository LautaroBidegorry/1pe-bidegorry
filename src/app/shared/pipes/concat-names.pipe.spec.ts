import { ConcatNamesPipe } from './concat-names.pipe';

describe('UnirNombresPipe', () => {
  it('create an instance', () => {
    const pipe = new ConcatNamesPipe();
    expect(pipe).toBeTruthy();
  });
});