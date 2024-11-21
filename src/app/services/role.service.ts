import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  role: 'admin' | 'user' = 'user'

  constructor() { }
}
