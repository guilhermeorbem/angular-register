import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDatailComponent } from './register-datail.component';

describe('RegisterDatailComponent', () => {
  let component: RegisterDatailComponent;
  let fixture: ComponentFixture<RegisterDatailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterDatailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
