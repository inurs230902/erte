import React, { useRef, useState, useEffect } from 'react';
import useInput from '../../hook/useInput';
import * as S from './Register.style';

const Register = () => {
  const inputRef = useRef();
  const [isShow, setIsShow] = useState();

  const { value: 생년월일, onChangeInput } = useInput({ initValue: '', maxLength: 6 });
  const { value: 성별, onChangeInput: onChangeInput2 } = useInput({
    maxLength: 1,
  });

  const handleFirstInput = (e) => {
    onChangeInput(e);
    if (e.target.value.length === 6) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    setIsShow(!!성별);
  }, [성별]);

  return (
    <S.Wrapper>
      Register
      <label>
        <input value={생년월일} onChange={handleFirstInput} />
        <div>-</div>
        <S.LastInput>
          <input ref={inputRef} value={성별} onChange={onChangeInput2} />
          {isShow && <div>*****</div>}
        </S.LastInput>
      </label>
    </S.Wrapper>
  );
};

export default Register;
