import { MarvellousChkPipe } from './marvellous-chk.pipe';

describe('MarvellousChkPipe', () => {
  it(' Valid CheckPipe for Prime ',()=>
  {
     let pipe=new MarvellousChkPipe();
     let str=pipe.transform(3,'Prime')
    expect(str).toEqual("It is Prime Number")
  })

  it(' InValid CheckPipe for Prime ',()=>
  {
     let pipe=new MarvellousChkPipe();
     let str=pipe.transform(10,'Prime')
    expect(str).toEqual("It is not Prime number")
  })

  it('  CheckPipe for Even Valid',()=>
  {
     let pipe=new MarvellousChkPipe();
     let str=pipe.transform(10,'Even')
    expect(str).toEqual("No is Even")
  })

  it(' CheckPipe for Even Invalid',()=>
  {
     let pipe=new MarvellousChkPipe();
     let str=pipe.transform(11,'Even')
    expect(str).toEqual("No is Not Even")
  })

  it('  CheckPipe for odd valid',()=>
  {
     let pipe=new MarvellousChkPipe();
     let str=pipe.transform(11,'Odd')
    expect(str).toEqual("No is Odd")
  })

  it('  CheckPipe for Odd invalid',()=>
  {
     let pipe=new MarvellousChkPipe();
     let str=pipe.transform(12,'Odd')
    expect(str).toEqual("No is Not Odd")
  })

  it('  CheckPipe for Perfect Invalid',()=>
  {
     let pipe=new MarvellousChkPipe();
     let str=pipe.transform(6,'Perfect')
    expect(str).toEqual("It is Perfect number")
  })

  it('  CheckPipe for Perfect Invalid',()=>
  {
     let pipe=new MarvellousChkPipe();
     let str=pipe.transform(11,'Perfect')
    expect(str).toEqual("It is not a Perfect Number")
  })

  it(' Invalid Case ',()=>
  {
     let pipe=new MarvellousChkPipe();
     let str=pipe.transform(11,'abc')
    expect(str).toEqual("The input given is wrong")
  })
  
});
