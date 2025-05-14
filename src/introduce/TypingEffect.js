import React, { useState, useEffect } from 'react';

const TypingEffect = ({ texts, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (isComplete || textIndex >= texts.length) return;

    const currentText = texts[textIndex];
    if (charIndex < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentText[charIndex]);
        setCharIndex(charIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      if (textIndex < texts.length - 1) {
        setDisplayedText((prev) => prev + '<br />'); // 줄바꿈 추가
        setCharIndex(0);
        setTextIndex(textIndex + 1);
      } else {
        setIsComplete(true); // 타이핑 완료
      }
    }
  }, [charIndex, textIndex, texts, speed, isComplete]);

  return (
    <h1>
      <span dangerouslySetInnerHTML={{ __html: displayedText }} />
      {!isComplete && <span className="cursor">|</span>} {/* 완료 시 커서 제거 */}
    </h1>
  );
};

export default TypingEffect;