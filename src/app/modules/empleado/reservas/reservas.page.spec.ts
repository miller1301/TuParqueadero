import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ReservasPage } from './reservas.page';
import 'animate.css';



describe('ReservasPage', () => {
  let component: ReservasPage;
  let fixture: ComponentFixture<ReservasPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReservasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function beforeEach(arg0: (done: any) => any) {
  throw new Error('Function not implemented.');
}

function expect(component: ReservasPage) {
  throw new Error('Function not implemented.');
}


function jQuery(document: Document) {
  throw new Error('Function not implemented.');
}

