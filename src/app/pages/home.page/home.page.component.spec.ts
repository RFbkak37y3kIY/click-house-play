import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Home.PageComponent } from './home.page.component';

describe('Home.PageComponent', () => {
  let component: Home.PageComponent;
  let fixture: ComponentFixture<Home.PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Home.PageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Home.PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
