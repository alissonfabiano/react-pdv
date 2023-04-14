import stringSimilarity from 'string-similarity';

const CODES = [
  [/BL|BR/, 'B'],
  ['PH', 'F'],
  [/GL|GR|MG|NG|RG/, 'G'],
  ['Y', 'I'],
  [/GE|GI|RJ|MJ/, 'J'],
  [/CA|CO|CU|CK|Q/, 'K'],
  ['N', 'M'],
  [/AO|AUM|GM|MD|OM|ON/, 'M'],
  ['PR', 'P'],
  ['L', 'R'],
  [/CE|CI|CH|CS|RS|TS|X|Z/, 'S'],
  [/TR|TL/, 'T'],
  [/CT|RT|ST|PT/, 'T'],
  [/\b[UW]/, 'V'],
  ['RM', 'SM'],
  [/[MRS]+\b/, ''],
  [/[AEIOUH]/, ''],
];

/**
 * Remove os caracteres repetidos sequencialmente em uma string
 *
 * @param {String} str - String para tratar
 * @return {String}
 */
function squeeze(str: string): string {
  return (str || '').replace(/(.)(?=\1)/g, '');
}

/**
 * Remove os acentos existentes em uma string
 *
 * @param {String} strToReplace - Texo para remover os acentos
 * @return {String}
 */
function removeAcento(str: string): string {
  let i;
  let x;
  const ACENTOS =
    'ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž';
  const SEM_ACENTOS =
    'AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz';

  const newStr = str.split('');

  for (i = 0; i < newStr.length; i += 1) {
    x = ACENTOS.indexOf(newStr[i]);
    if (x !== -1) {
      newStr[i] = SEM_ACENTOS[x];
    }
  }

  return newStr.join('').replace(/[^a-z0-9\s]/gi, '');
}

/**
 * Codifica uma string
 *
 * @param {String} str - String para codificar
 * @return {String}
 */
function encode(str: string): string {
  let newStr = removeAcento(str.toUpperCase());
  for (let i = 0; i < CODES.length; i += 1) {
    newStr = newStr.split(CODES[i][0]).join(CODES[i][1] as string);
  }
  return squeeze(newStr);
}

/**
 * Busca sincrona da palavrá
 *
 * @param {String} str - String fonética
 * @param {Array} array - Dicionário de palavras
 * @return {Array}
 */
export function search(str: string, array: string[]): string[] {
  const results = [];
  for (let i = 0; i < array.length; i += 1) {
    const similarity = stringSimilarity.compareTwoStrings(
      encode(array[i]),
      encode(str),
    );

    if (encode(array[i]).includes(encode(str)) || similarity >= 0.7) {
      results.push({
        termo: array[i],
        index: i,
        similarity,
      });
    }
  }

  results.sort((a, b) => b.similarity - a.similarity);

  return results.map((item) => item.termo);
}
