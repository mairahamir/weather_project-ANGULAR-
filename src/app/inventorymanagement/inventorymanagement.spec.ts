import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Inventorymanagement } from './inventorymanagement';

describe('Inventorymanagement', () => {
  let component: Inventorymanagement;
  let fixture: ComponentFixture<Inventorymanagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Inventorymanagement],
    }).compileComponents();

    fixture = TestBed.createComponent(Inventorymanagement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
