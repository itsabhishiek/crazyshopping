import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingproductsComponent } from './trendingproducts.component';

describe('TrendingproductsComponent', () => {
  let component: TrendingproductsComponent;
  let fixture: ComponentFixture<TrendingproductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrendingproductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
