import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
    providedIn: 'root'
})
export class FirestoreService{

    constructor(private firestore: AngularFirestore){}


    // Crear documentos en base de datos Firestore
    createDoc(data: any, path: string, id:string) {
        const collection = this.firestore.collection(path);
        return collection.doc(id).set(data)
    }


    // Obtener documentos en base de datos Firestore
    getDoc<Tipo>(path: string, id: string){
        const colleccion = this.firestore.collection<Tipo>(path)
        return colleccion.doc(id).valueChanges()
    }

    // Obtener todos los documentos de una colección
    getAllDocs(document: string){
        return this.firestore.collection(document).snapshotChanges();
    }

}

