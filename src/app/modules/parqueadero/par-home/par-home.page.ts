import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-par-home',
  templateUrl: './par-home.page.html',
  styleUrls: ['./par-home.page.scss'],
})
export class ParHomePage implements OnInit {

  listaParqueadero = [];
  idUser;
  infoUser;
  data;
  UidG;
  dataUser;
  constructor(
    private log: AuthService,
    // * Llamando al servicio que se utilizara para el manejo de los datos del usuario de la sesion actual
    private firestore: FirestoreService,
    
    private activaredRouter: ActivatedRoute,
  ) { }

  ngOnInit() {

    const data = new Date
    this.data = data.toLocaleDateString()

    this.idUser = this.activaredRouter.snapshot.paramMap.get('id');
    const path = 'Parqueaderos'
    this.firestore.getDoc(path, this.idUser).subscribe(res => this.infoUser = res)

    this.log.getUid().then( res => {
      this.UidG = res

      this.firestore.getDoc('Parqueaderos', this.UidG ).subscribe(res => {
        this.dataUser = res
      })
    })
  }

}
