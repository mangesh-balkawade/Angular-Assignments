import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

 

  it('count capital valid',()=>
  {
    let obj=new AppComponent();
    let iret=obj.countCapital("MangeshBal");
    expect(iret).toBe(2);
  })

  it('chk Password Valid',()=>
  {
    let obj=new AppComponent();
    let bret=obj.chkPassword("MAngesh@123");
    expect(bret).toEqual(true);
  })

  it('chk Password InValid1',()=>
  {
    let obj=new AppComponent();
    let bret=obj.chkPassword("Mngesh@123");
    expect(bret).toEqual(false);
  })

  it('chk Password InValid2',()=>
  {
    let obj=new AppComponent();
    let bret=obj.chkPassword("MAsh@123");
    expect(bret).toEqual(false);
  })

  it('chk Password InValid3',()=>
  {
    let obj=new AppComponent();
    let bret=obj.chkPassword("MAngesh@1");
    expect(bret).toEqual(false);
  })

  it('chk Password InValid4',()=>
  {
    let obj=new AppComponent();
    let bret=obj.chkPassword("MAngesh123");
    expect(bret).toEqual(false);
  })

  it('Array Sum Valid',()=>
  {
    let obj=new AppComponent();
    let iret=obj.arrayAddition([1,2,3,4,5]);
    expect(iret).toBe(15)
  })

});
