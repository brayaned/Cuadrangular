import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarPartidoComponent } from './agregar-partido.component';

describe('AgregarPartidoComponent', () => {
  let component: AgregarPartidoComponent;
  let fixture: ComponentFixture<AgregarPartidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarPartidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarPartidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
