// https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript

function countSmileys(arr) {
  return arr.filter(smiley => '/[:;][-~]?[:D]/'.test(smiley)).length;
}