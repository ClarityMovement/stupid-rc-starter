import withHandlers from 'recompose/withHandlers';

export const createEmbeddedFunction = (innerFunc, outerFunc) => (...innerArgs) => {
  const deducedMaxLength = Math.max(innerFunc.length, innerArgs.length);
  if (outerFunc.length <= deducedMaxLength) {
    innerFunc(...innerArgs);
    return outerFunc(...innerArgs);
  }
  const next = () => innerFunc(...innerArgs);
  const outerArgs = [...innerArgs];
  outerArgs.length = deducedMaxLength;
  return outerFunc(...outerArgs, next);
};

export const createEmbeddedHandler = (innerName, outerName) => (props) => {
  let innerHandler;
  if (typeof innerName === 'function') {
    innerHandler = innerName(props);
  } else if (typeof innerName === 'string') {
    innerHandler = props[innerName];
  }
  if (typeof innerHandler !== 'function') {
    throw new Error('innerName must be a handler or the name of it');
  }

  const outerHandler = props[outerName];

  if (!outerHandler) return innerHandler;

  return createEmbeddedFunction(innerHandler, outerHandler, props);
};

export const createEmbeddedName = (innerName, outerName) =>
  (typeof innerName === 'string' ? innerName : outerName);

export default (innerName, outerName) => {
  const name = createEmbeddedName(innerName, outerName);
  const handler = createEmbeddedHandler(innerName, outerName);

  return withHandlers({ [name]: handler });
};

