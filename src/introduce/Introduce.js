import './Introduce.css';
import TypingEffect from './TypingEffect';

function Introduce() {
  return (
    <div className="top_Introduce" id='Home'>
        <div className="main_content">
            <TypingEffect 
               texts={['- 송인석 -', '풀 스택 개발자 포트폴리오']}
               speed={135} // 타이핑 속도 (밀리초)
            />
            <h2>
                "안녕하세요"
                <br></br>
                "꾸준하게 노력하는 개발자"
                <br></br>
                "송인석입니다."
                <br></br>
                풀스택 개발자로서, <br></br>
                효율적이고 사용자 중심의 솔루션을 만들며, 
                <br></br>
                새로운 기술에 도전하는 것을 즐깁니다.
                <br />
                제 프로젝트를 통해 저의 열정을 만나보세요!
            </h2>
        </div>
    </div>
 
  );
}

export default Introduce;
