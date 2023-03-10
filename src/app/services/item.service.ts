import { Injectable } from '@angular/core';

import { Item } from '../models/Item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  items : Item[] = [
    {
      id : 0,
      title : 'manzana',
      price : 10.5,
      quantity : 4,
      completed : false
    },
    {
      id : 1,
      title : 'pan',
      price : 3.5,
      quantity : 4,
      completed : true
    },
  ];

  constructor() { }

  getItems() {
    
    return this.items;
  }

  addItem(item : Item) {
    this.items.unshift(item);
  }
}


/**
para hacer peticiones http

Se deben transformar las funciones en funciones observables así:

//en el servicio importar HttpClientModule

import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';   //para poder usar Observable


inyectar esto al constructor 
cosntructor(private http : HttpClientModule) {}

getItems() : Observable<TipoDato> {
  return this.http.get<TipoDato>(this.url)
}

getItems() : Observable<TipoDato[]> {  //Tambien se pueden arreglos
  
}
httpOptions = {
  header : {
    'Content-Type' : 'application/json'
  }
};

addItem(item : Item) : Observable<Item>{
  return this.http.post<Item>(this.url, item, this.httpOptions)
}

toggleItem() : Obervable<Item>{
  return this.http.put<Item>(this.url + item.id, item, this.httpOptions);
}

deleteItem() : Obervable<Item>{
  return this.http.delete<Item>(this.url + item.id);
}

//Luego, donde se vaya a llamar el servicio de getItems se debe hacer así

this.itemService.getItems().subscribe(data => {
  this.items = data;
})

this.itemService.addItem(item).subscribe(i => {
  this.router.navigate(['/']);
})

this.itemService.deleteItem(item).subscribe();

se debe agregar e importar en app.module.ts
import { HttpClientModule } from '@angular/common/http';

...

imports : {
  ...
  HttpClientModule,
}

*/