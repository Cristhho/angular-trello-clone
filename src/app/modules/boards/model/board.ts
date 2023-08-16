import { User } from '@models/user'
import { Color } from '@types'

export interface BoardCard {
  id: number;
  title: string;
  position: number;
  list?: BoardColumn;
}

export interface UpdateBoardCardDTO {
  title?: string;
  position?: number;
  listId?: number;
}

export interface BoardColumn {
  id: number;
  title: string;
  position: number;
  cards?: BoardCard[];
}

export interface Board {
  id: string;
  title: string;
  backgroundColor: Color;
  members: User[];
  lists: BoardColumn[];
  cards: BoardCard[];
}
