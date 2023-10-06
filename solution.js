function returnLongestWord(stringOfWords) {
  const arrayOfWords = stringOfWords.toLowerCase().split('').filter(item =>/[a-z ]/.test(item)).join('').split(' ').filter(item => item.length)
  let longestWord = ''
  arrayOfWords.forEach(item => {
    if(item.length > longestWord.length) {
      longestWord = item
    } else if (item.length === longestWord.length && item.replace(/[aeiou]/g, '##') > longestWord.replace(/[aeiou]/g, '##')) {
      longestWord = item
    }
  })
  return longestWord
}
