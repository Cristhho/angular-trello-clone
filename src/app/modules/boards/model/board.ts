import { User } from '@models/user'
import { Color } from '@types'

export interface Board {
  id: string;
  title: string;
  backgroundColor: Color;
  members: User[]
}
