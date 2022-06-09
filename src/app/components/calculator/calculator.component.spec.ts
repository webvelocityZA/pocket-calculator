import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CalculatorComponent} from './calculator.component';

describe('CalculatorComponent', () => {
  let component: CalculatorComponent;
  let fixture: ComponentFixture<CalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculatorComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have display in HTML', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#display').textContent).toContain('0');
  });

  it('should update the display when updateCal() is clicked', () => {
    const compiled = fixture.debugElement.nativeElement;
    const display = compiled.querySelector('#display');
    component.updateCal({target: {value: '1'}});
    fixture.detectChanges();
    expect(display.textContent).toContain('1');
  });

  it('should clear the display when clear() is clicked', () => {
    const compiled = fixture.debugElement.nativeElement;
    const display = compiled.querySelector('#display');
    component.updateCal({target: {value: '1'}});
    component.clear();
    fixture.detectChanges();
    expect(display.textContent).toContain('0');
  });


  it('should update the display when results() is clicked', () => {
    const compiled = fixture.debugElement.nativeElement;
    const display = compiled.querySelector('#display');
    component.updateCal({target: {value: '1'}});
    component.updateCal({target: {value: '+'}});
    component.updateCal({target: {value: '2'}});
    component.results();
    fixture.detectChanges();
    expect(display.textContent).toContain('3');
  });


  it('should not update the display when consecutive operators are clicked', () => {
    const compiled = fixture.debugElement.nativeElement;
    const display = compiled.querySelector('#display');
    component.updateCal({target: {value: '+'}});
    component.updateCal({target: {value: '+'}});
    fixture.detectChanges();
    expect(display.textContent).toContain('0');
  });


  it('should not update the display when displayed equation starts with an operator', () => {
    const compiled = fixture.debugElement.nativeElement;
    const display = compiled.querySelector('#display');
    component.updateCal({target: {value: '+'}});
    fixture.detectChanges();
    expect(display.textContent).toContain('0');
  });


  it('should update the display when squareRoot() is clicked', () => {
    const compiled = fixture.debugElement.nativeElement;
    const display = compiled.querySelector('#display');
    component.updateCal({target: {value: '16'}});
    component.squareRoot();
    fixture.detectChanges();
    expect(display.textContent).toContain('4');
  });

});
