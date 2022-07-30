import { MyMultPipe } from './my-mult.pipe';

describe('MyMultPipe', () => {
  it('Mult Pipe Valid',()=>
  {
    let pipe=new MyMultPipe;
    let iret=pipe.transform(1,2,3);
    expect(iret).toBe(6);
  })
});
