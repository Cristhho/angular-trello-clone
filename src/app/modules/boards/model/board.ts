import { User } from '@models/user'

export interface Board {
  id: string;
  title: string;
  backgroundColor: string;
  members: User[]
}
