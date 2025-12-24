import { describe, it, expect } from "vitest"
import { AnagramGrouper } from "../src/anagram"

describe("AnagramGrouper", () => {
  const grouper = new AnagramGrouper()

  it("should groups valid anagrams correctly", () => {
    const input = ["kita", "atik", "tika"]
    const result = grouper.group(input)

    expect(result).toEqual([["kita", "atik", "tika"]])
  })

  it("should separates non-anagrams into different groups", () => {
    const input = ["aku", "kia", "makan"]
    const result = grouper.group(input)

    expect(result).toEqual([["makan"], ["aku"], ["kia"]])
  })

  it("should groups mixed anagrams and non-anagrams correctly", () => {
    const input = ["kita", "atik", "tika", "aku", "kua", "kia", "makan"]
    const result = grouper.group(input)

    expect(result).toEqual([
      ["kita", "atik", "tika"],
      ["aku", "kua"],
      ["makan"],
      ["kia"],
    ])
  })

  it("should returns empty array for empty input", () => {
    expect(grouper.group([])).toEqual([])
  })

  it("should handles single-word input", () => {
    expect(grouper.group(["sendiri"])).toEqual([["sendiri"]])
  })

  it("should ignores non-alphabet characters when grouping", () => {
    const input = ["a-ku", "kua"]
    const result = grouper.group(input)

    expect(result).toEqual([["a-ku", "kua"]])
  })

  it("should orders groups by array size first, then word length", () => {
    const input = ["aaa", "bb", "abc", "bca", "cab"]
    const result = grouper.group(input)

    expect(result).toEqual([
      ["abc", "bca", "cab"], // 3 words
      ["aaa"],
      ["bb"],
    ])
  })
})
