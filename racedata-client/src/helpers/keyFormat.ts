const capitalLetterFirst = (str: string): string => {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
};

type TransformedObjectType = Record<string, string | number | boolean>;
const camelizedCase = (params: TransformedObjectType): TransformedObjectType => {
  return Object.entries(params).reduce((result, [key,
    value]) => {
    const camelizedKey = key.split('_').map((keyPart, index) => {
      if (index !== 0) return capitalLetterFirst(keyPart);
      return keyPart;
    }).join('');

    return { ...result, [camelizedKey]: value };
  }, {});
};

const snakedCase = (params: TransformedObjectType): TransformedObjectType => {
  return Object.entries(params).reduce((result, [key,
    value]) => {
    const snakedKey = key.replace(/([A-Z])/g, '_$1').toLowerCase();

    return { ...result, [snakedKey]: value };
  }, {});
};

export { camelizedCase, snakedCase };
