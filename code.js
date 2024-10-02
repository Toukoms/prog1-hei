export function factorial(n) {
  return n == 0 ? 1 : factorial(n - 1) * n;
}

/**
 *
 * @param {string} original
 * @param {Array<string>} wordsToRemove
 */
export function removeWords(original, wordsToRemove) {
  wordsToRemove.forEach((value) => {
    original.replace(value, "");
  });
  return original;
}

/**
 *
 * @param {Array<string>} places
 */
export function getMostPopularPlaces(places) {
  const placesPopularity = {};
  places.forEach((place) => {
    if (!(place in placesPopularity)) placesPopularity[place] = 1;
    else placesPopularity[place] += 1;
  });
  const sortedPopularPlaces = Object.entries(placesPopularity).sort(
    (a, b) => b[1] - a[1]
  );
  if (
    sortedPopularPlaces[0][1] === sortedPopularPlaces[1][1] ||
    (sortedPopularPlaces.length > 2 &&
      sortedPopularPlaces[1][1] === sortedPopularPlaces[2][1])
  )
    return -1;
  let first_popular = sortedPopularPlaces[0][0];
  let second_popular = sortedPopularPlaces[1][0];
  return first_popular + " " + second_popular;
}
