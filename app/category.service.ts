import { Injectable } from '@angular/core';
import { Category } from './category';
import { Headers, Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Config } from './app.constants';

const CATEGORY : Category[] = [
      {id: 1, name: 'Luke Skywalker', description: 'DFSDFDF',deleted_at:'',created_at:'',updated_at:''},
      {id: 2, name: 'Darth Vader', description: 'DFSDFDF',deleted_at:'',created_at:'',updated_at:''},
      {id: 3, name: 'Han Solo', description: 'DFSDFDF',deleted_at:'',created_at:'',updated_at:''},
    ];

@Injectable()
export class CategoryService{
  private actionUrl: string;
  constructor(private http : Http, private _config : Config){
    this.actionUrl = _config.ServerWithApiUrl + 'properties';
  }

  // getAll() : Category[] {
  //   return CATEGORY.map(p => this.clone(p));
  // }

  getAll(): Observable<Category[]>{
    // return this.http.get(this.actionUrl).map((res: Response) => res.json());
    let people$ = this.http
      .get(this.actionUrl, {headers: this.getHeaders()})
      .map(mapPersons);
      return people$;
  }
  
//    getTodos(): Promise<ITodo[]> {
//     return this.http.get('api/todos')
//             .toPromise()
//             .then(res => res.json().data)
//             .catch(this.handleError); 
// }
    // public GetAll = (): Observable<MyTypedItem[]> => {
    //     return this._http.get(this.actionUrl)
    //         .map((response: Response) => <MyTypedItem[]>response.json())
    //         .catch(this.handleError);
    // }
    
//     getUsers(): Promise<User[]> {
//     return this.http.get(this.usersUrl)
//         .toPromise()
//         .then(response => response.json())
//         .catch(this.handleError);
// }

  private getHeaders(){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    return headers;
  }
  
// to avoid breaking the rest of our app
// I extract the id from the person url

//   get(id: number) : Category {
//     return this.clone(CATEGORY.find(p => p.id === id));
//   }
//   save(category: Category){
//     let originalCategory = CATEGORY.find(p => p.id === category.id);
//     if (originalCategory) Object.assign(originalCategory, category);
//     // saved muahahaha
//   }

//   private clone(object: any){
//     // hack
//     return JSON.parse(JSON.stringify(object));
//   }
}
function extractId(categoyrata:any){
 let extractedId = categoyrata.url.replace('https://homebook.casa/public/v1/properties','').replace('/','');
 return parseInt(extractedId);
}
function mapPersons(response:Response): Category[]{
   // The response of the API has a results
   // property with the actual results
   return response.json().data.map(toCategory);
}

function toCategory(r:any): Category{
  let category = <Category>({
    id: r.id,
    name: r.attributes.title
  });
  console.log('Parsed person:', category);
  return category;
}