export interface ApiTransaction {
  /**
   * Store or update shared data across custom Actions for the duration of a transaction.
   * Transaction metadata allows you to share data between multiple Actions within the same authentication flow. Data stored using this method is available in the event.transaction.metadata object in the current and subsequent Actions and persists throughout the entire transaction lifecycle.
   *
   * They are subject to Transaction Metadata Limits. To learn more, read Actions Limitations .
   *
   * NOTE: Transaction metadata is only available during the current authentication transaction and is not persisted beyond the completion of the authentication flow. This feature is only currently available on post-login Actions.
   * @param name The key of the metadata property to be set.
   * @param value The value of the metadata property. Set to null removes the property.
   */
  setMetadata(name: string, value: string | number | boolean | null): void
}
