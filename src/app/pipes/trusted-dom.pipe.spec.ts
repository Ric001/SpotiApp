import { TrustedDomPipe } from './trusted-dom.pipe';

describe('TrustedDomPipe', () => {
  it('create an instance', () => {
    const pipe = new TrustedDomPipe();
    expect(pipe).toBeTruthy();
  });
});
