import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserHttpServiceService {

  constructor(private http: HttpClient) { }

  public async login(data:any){
    try {
      const httpRequest = await this.http.post('http://localhost:3000/api/login', data).toPromise();
      
      if(httpRequest){
        return {ok: true, data: httpRequest};
      } else{
        return {ok: false, data: null};
      }
    } catch (e) {
      return e;
      // return {ok: false, data: null};
      
    }
  }
  public async getUsers(data: any){
    try {
      const httpRequest = await this.http.post('http://localhost:3000/api/users', data).toPromise();
      
      if(httpRequest){
        return {ok: true, data: httpRequest};
      } else{
        return {ok: false, data: null};
      }
    } catch (e) {
      return e;
      // return {ok: false, data: null};
      
    }
  }
}
