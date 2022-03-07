import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ValidacionCuentaParqueaderoPage } from './validacion-cuenta-parqueadero.page';

describe('ValidacionCuentaParqueaderoPage', () => {
  let component: ValidacionCuentaParqueaderoPage;
  let fixture: ComponentFixture<ValidacionCuentaParqueaderoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidacionCuentaParqueaderoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ValidacionCuentaParqueaderoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
