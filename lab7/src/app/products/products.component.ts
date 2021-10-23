import { Component, OnInit } from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  docData,
  setDoc,
  deleteDoc 
} from '@angular/fire/firestore';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  constructor(private db: Firestore) {
    const dataCollection = collection(db, 'products');
    this.products = collectionData(dataCollection);
    // Read document data
    const documentData = doc(db, '/products/0zNDNs9LQI3mbqV1sn1b');
    docData(documentData).subscribe((data) => console.log(data));
   }

  ngOnInit(): void {
  }
  addNewMovie() {
    setDoc(doc(collection(this.db, 'products')), {
      name: 'trouthers',
      quantity:1,
      price: 24,
      category: 'clothes',
      description:" comfortable wide leg with two colors"
    });
  }

  updateMovie() {
    setDoc(doc(this.db, 'products' , '0zNDNs9LQI3mbqV1sn1b'), {
      quantity: 5,
    }, { merge : true });
  }

  deleteMovie(){
    deleteDoc(doc(this.db , 'products' , 'TPRvFt9AnMAkCP3k0a3J'));
  }
}
