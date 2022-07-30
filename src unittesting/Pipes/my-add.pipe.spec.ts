import { MyAddPipe } from './my-add.pipe';
import { MyMultPipe } from './my-mult.pipe';

describe('MyAddPipe', () => {
 

  it('Add Pipe Valid',()=>
  {
    let pipe=new MyAddPipe();
    let iret=pipe.transform(1,2,3,4,5);
    expect(iret).toBe(15);
  })

  




});
