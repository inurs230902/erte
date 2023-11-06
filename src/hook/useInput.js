import { useCallback, useEffect, useRef, useState } from 'react';

const useInput = ({
  initValue,
  maxLength = 0,
  minLength,
  autoFix = true,
  blockLineBreak = false,
  validation,
  setInputValue,
}) => {
  const [value, setValue] = useState(initValue || '');
  const isValid = useRef(false);

  const sliceWithLength = useCallback(
    (text) => (maxLength ? text.substring(0, maxLength) : text),
    [maxLength]
  );
  const removeLineBreaks = (text) => text.replaceAll('\n', '');

  const applyConditions = useCallback(
    (text) => (autoFix, blockLineBreak) => {
      switch (true) {
        case autoFix && blockLineBreak:
          return removeLineBreaks(sliceWithLength(text));
        case autoFix:
          return sliceWithLength(text);
        case blockLineBreak:
          return removeLineBreaks(text);
        default:
          return text;
      }
    },
    [sliceWithLength]
  );

  const handleString = useCallback(
    (receivedValue) => {
      const returnValue = applyConditions(receivedValue)(autoFix, blockLineBreak);

      isValid.current = !!validation
        ? validation.test(returnValue)
        : returnValue === receivedValue && returnValue.length >= minLength;

      setValue(returnValue);
    },
    [applyConditions, autoFix, blockLineBreak, minLength, validation]
  );

  const onChangeInput = useCallback(
    ({ target }) => {
      const value = target.value || '';
      handleString(value);
    },
    [handleString]
  );

  const resetValue = () => {
    setValue('');
    isValid.current = false;
  };

  useEffect(() => {
    setInputValue && setInputValue(value);
  }, [value, setInputValue]);

  useEffect(() => {
    if (initValue === value) isValid.current = false;
  }, [initValue, value]);

  return {
    value,
    onChangeInput,
    isValid,
    resetValue,
  };
};
export default useInput;
