// 커스텀 훅 (반복되는 함수) 범용적으로 사용하도록 만들기
import { useState, useCallback } from 'react';

export default (initialValue = null) => {
  const [value, setValue] = useState(initialValue);
  const handler = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return [value, handler];
};