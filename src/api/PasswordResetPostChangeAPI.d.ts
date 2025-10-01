import { ApiCache } from './types'

export interface PasswordResetPostChangeAPI {
  /**
   * Store and retrieve data that persists across executions.
   */
  cache: ApiCache
}
