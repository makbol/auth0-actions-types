import { ApiAccess, ApiAccessToken, ApiCache } from './types'

export interface CredentialExchangeAPI {
  /**
   * Control availability to the access token.
   */
  access: ApiAccess

  /**
   * Request changes to the access token being issued.
   */
  accessToken: Pick<ApiAccessToken, 'setCustomClaim'>

  /**
   * Store and retrieve data that persists across executions.
   */
  cache: ApiCache
}
