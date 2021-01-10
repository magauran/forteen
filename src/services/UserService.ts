import { store } from '@/store'
import { usersDatabase } from '@/main'

export class UserData {
  firstName: string;
  secondName: string;
  balance: number;

  constructor (firstName: string, secondName: string, balance: number) {
    this.firstName = firstName
    this.secondName = secondName
    this.balance = balance
  }
}

class UserService {
  save (user: UserData) {
    const id = store.state?.user?.data?.userID
    if (id) {
      usersDatabase.child(id).set(user)
    } else {
      alert('Ошибка регистрации')
    }
  }

  async fetch () {
    const id = store.state?.user?.data?.userID
    if (id) {
      const value = await usersDatabase.child(id).once('value')
      return value.val() as UserData
    } else {
      return null
    }
  }
}

export const userService = new UserService()
