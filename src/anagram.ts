export class AnagramGrouper {
  private readonly CHAR_CODE_A = 97
  private readonly ALPHABET_SIZE = 26

  /**
   * Main method to group anagrams from a list of words.
   * @param words - Array of strings to group
   * @returns Array of grouped anagrams
   *
   * Time Complexity:
   * - O(n * m) for generating keys (n = number of words, m = average word length)
   * - O(k^2) for bubble sorting the groups (k = number of groups)
   * Overall: O(n * m + k^2)
   */
  public group(words: string[]): string[][] {
    if (!words || words.length === 0) return []

    const groups: Record<string, string[]> = {}

    // 1. Generate key for each word and group them
    for (const word of words) {
      const key = this.generateFrequencyKey(word)
      if (!groups[key]) groups[key] = []
      groups[key].push(word)
    }

    // 2. Convert dictionary/object to array of groups
    const result: string[][] = Object.values(groups)

    // 3. Sort groups by custom rules using bubble sort
    this.bubbleSortGroups(result)

    return result
  }

  /**
   * Helper: Generates a frequency-based key for a word
   */
  private generateFrequencyKey(str: string): string {
    const counts: number[] = Array(this.ALPHABET_SIZE).fill(0)
    for (let i = 0; i < str.length; i++) {
      const code = str.charCodeAt(i) - this.CHAR_CODE_A
      if (code >= 0 && code < this.ALPHABET_SIZE) {
        if (!counts[code]) counts[code] = 0
        counts[code] = counts[code] + 1
      }
    }
    return counts.join("#")
  }

  /**
   * Bubble sort to order groups based on:
   * 1. Number of words in group (descending)
   * 2. Length of first word in group (descending)
   */
  private bubbleSortGroups(arr: string[][]): void {
    const n = arr.length
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        const groupA = arr[j]
        const groupB = arr[j + 1]
        if (groupA && groupB && this.shouldSwap(groupA, groupB)) {
          arr[j] = groupB
          arr[j + 1] = groupA
        }
      }
    }
  }

  /**
   * Comparator for bubble sort
   */
  private shouldSwap(groupA: string[], groupB: string[]): boolean {
    const [firstA = ""] = groupA
    const [firstB = ""] = groupB

    if (groupA.length < groupB.length) return true
    if (groupA.length === groupB.length && firstA.length < firstB.length) {
      return true
    }
    return false
  }
}
