'use client';
import Image from 'next/image';
import styled from 'styled-components';

export default function Home() {
  const handleImage = () => {
    console.log('이미지 업로드 창 열기');
  };
  return (
    <div
      className='flex flex-col items-center w-100'
      style={{ maxWidth: '480' }}
    >
      <FontH2></FontH2>
      <FontH1>소개팅 때 나는 어떤 인상일까?</FontH1>
      <Image src='/images/king.jpg' alt='king' width={300} height={300} />
      <button
        className='w-32 h-12 text-yellow-300 bg-red-600'
        style={{ marginTop: '20px' }}
        onClick={handleImage}
      >
        주상 전하 납시오
      </button>
    </div>
  );
}

const FontH1 = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
`;
const FontH2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
`;
