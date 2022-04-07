import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
    providedIn: 'root'
})
export class FirestoreService{

    constructor(private firestore: AngularFirestore){}

    createDoc(data: any, path: string, id:string) {
        const collection = this.firestore.collection(path);
        return collection.doc(id).set(data)
    }


    getDoc<Tipo>(path: string, id: string){
        const colleccion = this.firestore.collection<Tipo>(path)
        return colleccion.doc(id).valueChanges()
    }

    deleteDoc(path:string, id:string){
        const colleccion = this.firestore.collection(path);
        return colleccion.doc(id).delete();
    }

    updateDoc(data: any, path:string, id:string){
        const colleccion = this.firestore.collection(path);
        return colleccion.doc(id).update(data);
    }

    getCollection<Tipo>(path:string){
        const colleccion = this.firestore.collection<Tipo>(path);
        return colleccion.valueChanges();

}
}
