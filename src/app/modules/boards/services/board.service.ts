import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { enviroment } from '@enviroments/enviroment'
import { checkToken } from '@interceptors/token.interceptor'
import { Board } from '../model/board'

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private readonly apiUrl = enviroment.API_URL

  constructor(
    private readonly httpClient: HttpClient
  ) {}

  getUserBoards() {
    return this.httpClient.get<Board[]>(`${this.apiUrl}/me/boards`, {
      context: checkToken()
    })
  }

  getBoardDetail(id: string) {
    return this.httpClient.get<Board>(`${this.apiUrl}/boards/${id}`, {
      context: checkToken()
    })
  }
}
