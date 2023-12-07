import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentralStoresComponent } from './central-stores.component';

describe('CentralStoresComponent', () => {
  let component: CentralStoresComponent;
  let fixture: ComponentFixture<CentralStoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentralStoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CentralStoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
