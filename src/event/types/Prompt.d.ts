export interface EventPrompt {
  /**
   * The prompt ID
   */
  id: string

  /**
   * Fields and hidden fields data
   */
  fields: string | undefined

  /**
   * Shared variables data
   */
  vars: string | undefined
}
