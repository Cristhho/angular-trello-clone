import { User } from '@models/user'
import { Color } from '@types'

export interface BoardCard {
  id: number;
  title: string;
  position: number;
  list?: BoardColumn;
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
