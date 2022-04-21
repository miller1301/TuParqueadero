import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
    providedIn: 'root'
})
export class FirestoreService{

    constructor(private firestore: AngularFirestore){}


    
    async create(path,datop){
        try{
        return await this.firestore.collection(path).add(datop);
        }catch(error){
            console.log('error en create', error)
        }
    }
    async getAll(path){
        try{
        return await this.firestore.collection(path).snapshotChanges();
        }catch(error){
            console.log('error en getAll', error)
        }
    }

    async getbyid(path, id){
        try{
        return await this.firestore.collection(path).doc(id).get();
        }catch(error){
            console.log('error en getbyid', error)
        }
    }
    async delete(path, id){
        try{
        return await this.firestore.collection(path).doc(id).delete();
        }catch(error){
            console.log('error en getAll', error)
        }
    }
    async update(path, id, datop){
        try{
        return await this.firestore.collection(path).doc(id).set(datop);
        }catch(error){
            console.log('error en getAll', error)
        }
    }

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

    updateDoc(path:string, id: string, data: any){
        return this.firestore.collection(path).doc(id).update(data)
    }


    getCollection<Tipo>(path:string){
        const colleccion = this.firestore.collection<Tipo>(path);
        return colleccion.valueChanges();
    }
}
