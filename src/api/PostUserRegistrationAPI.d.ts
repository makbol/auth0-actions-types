import { ApiCache } from './types'

export interface PostUserRegistrationAPI {
  /**
   * Store and retrieve data that persists across executions.
   */
  cache: ApiCache
}
