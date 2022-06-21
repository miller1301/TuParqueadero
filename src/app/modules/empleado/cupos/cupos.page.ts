import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';


@Component({
  selector: 'app-cupos',
  // incluye html
  templateUrl: './cupos.page.html',
  // llama estilos del css
  styleUrls: ['./cupos.page.scss'],
})
export class CuposPage implements OnInit {

  constructor(private log:AuthService,private firebase:FirestoreService) { }

  numero:number = 0;


  /***Funcion Sumar y Restar */
  sumar(){
    this.numero +=1;
  }

  restar(){
    this.numero -=1;
  }
/**fin  */


  //espera un numero como respuesta
  accionOperacion( valor:number ){
    this.numero +=valor;
  }

  cupos:any[]=[]

  
  parqueaderosactivos:any[]=[]

  ngOnInit(){
    this.firebase.getDocs("reservas").subscribe((res:any)=>{
    this.parqueaderosactivos=res
     
    this.cupos=this.parqueaderosactivos.filter((cupo)=>{
      if(cupo.estado==="Activo"){
        return true
      }
      
    })
    console.log(this.cupos.length)
    })
    

      
    
  }



  


  // Iniciar sesion-Cerrar sesion
  logout(){
    console.log("logout")
    this.log.logout()
  }

}
