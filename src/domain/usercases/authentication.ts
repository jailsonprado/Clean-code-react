import { AccountModel } from '../models/account-model'

type AuthenticationParams = {
  email: string
  passwword: string
}

export interface Authentication {
  auth (params: AuthenticationParams): Promise<AccountModel>
}
