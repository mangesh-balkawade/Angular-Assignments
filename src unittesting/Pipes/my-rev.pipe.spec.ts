import { MyRevPipe } from './my-rev.pipe';

describe('MyRevPipe', () => {
 
  it('Reverse Pipe Valid',()=>
  {
    let pipe=new MyRevPipe();
    let str=pipe.transform("Mangesh");
    expect(str).toEqual("hsegnaM")
  })

  
});
