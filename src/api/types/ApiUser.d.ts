import { PostLoginAPI } from '../PostLoginAPI'

export type MetadataValue =
  | string
  | number
  | boolean
  | null
  | { [key: string]: MetadataValue }

export interface ApiUser {
  /**
   * Set application metadata for the user that is logging in. Data stored within app_metadata is not editable by the user.
   * @param name The name of metadata property.
   * @param value The value of the metadata property. This may be set to null to remove the metadata property.
   * @returns Returns a reference to the api object.
   */
  setAppMetadata(name: string, value: MetadataValue): PostLoginAPI
  /**
   * Set general metadata for the user that is logging in.
   * @param name The name of metadata property.
   * @param value The value of the metadata property. This may be set to null to remove the metadata property.
   * @returns Returns a reference to the api object.
   */
  setUserMetadata(name: string, value: MetadataValue): PostLoginAPI
}
