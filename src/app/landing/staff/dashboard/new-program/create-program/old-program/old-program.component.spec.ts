import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OldProgramComponent } from './old-program.component';

describe('OldProgramComponent', () => {
  let component: OldProgramComponent;
  let fixture: ComponentFixture<OldProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OldProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OldProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
