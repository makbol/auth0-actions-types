export interface EventPrompt {
  /**
   * The prompt ID
   */
  id: string

  /**
   * Fields and hidden fields data
   */
  fields?: string

  /**
   * Shared variables data
   */
  vars?: string
}
