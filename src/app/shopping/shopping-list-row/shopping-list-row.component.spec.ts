import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListRowComponent } from './shopping-list-row.component';

describe('ShoppingListRowComponent', () => {
  let component: ShoppingListRowComponent;
  let fixture: ComponentFixture<ShoppingListRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingListRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingListRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
