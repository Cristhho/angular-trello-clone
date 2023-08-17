import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

import { enviroment } from '@enviroments/enviroment'
import { checkToken } from '@interceptors/token.interceptor'
import { Board, BoardCard, CreateBoardDTO, UpdateBoardCardDTO } from '../model/board'

@Injectable({
  providedIn: 'root'
})
export class BoardService {
  private readonly apiUrl = enviroment.API_URL
  private readonly bufferSpace = 65535

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

  getPosition(cards: BoardCard[], position: number) {
    if (cards.length === 1) {
      return this.bufferSpace
    }
    if (cards.length > 1 && position === 0) {
      const onTop = cards[1].position
      return onTop / 2
    }
    const last = cards.length - 1
    if (cards.length > 1 && position === last) {
      const onBottom = cards[last-1].position
      return onBottom + this.bufferSpace
    }

    const prev = cards[position-1].position
    const next = cards[position+1].position
    return (prev + next) / 2
  }

  updateBoardCard(card: number, changes: UpdateBoardCardDTO) {
    return this.httpClient.put(`${this.apiUrl}/cards/${card}`, changes, {
      context: checkToken()
    })
  }

  createBoard(body: CreateBoardDTO) {
    return this.httpClient.post<Board>(`${this.apiUrl}/boards`, body, {
      context: checkToken()
    })
  }
}
