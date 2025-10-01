export interface ApiRules {
  /**
   * Check whether a specific Rule has been executed prior to this Action in the current transaction. This can be used to avoid running logic that has been duplicated from that Rule into this Action during migration to Actions.
   * @param ruleId The Rule ID to check.
   * @returns boolean Returns true when the Rule with the provided ID has been executed in this transaction and false when it has not
   */
  wasExecuted(ruleId: string): boolean
}
