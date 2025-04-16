import nameIcon from '../img/human.png'; // 파일이 src/img/에 있다고 가정
import phoneIcon from '../img/phone.png';
import calendarIcon from '../img/calendar.png';
import locationIcon from '../img/map.png';
import letterIcon from '../img/mail.png';
import schoolIcon from '../img/education.png';
import './AboutMe.css';
import '../css_files/title.css';

function AboutMe() {
    return(
    <div className="aboutMe" id='About Me'>
        <div className='aboutMe_content' id='content'>
            <div className='aboutMe_title' id='content_title'>
                <h3>ABOUT ME</h3>
            </div>
            <div className='aboutMe_detail'>
                <div className="name" >
                    <div className="name_img" id='aboutMe_icon'>
                        <img src={nameIcon} alt="이름 아이콘" />
                    </div>
                    <div id='aboutMe_text_content'>
                        <label>이름</label>
                        <div>송인석</div>
                    </div>
                </div>
                <div className="birth_date">
                    <div className="birth_date_img" id='aboutMe_icon'>
                        <img src={calendarIcon} alt="달력 아이콘" />
                    </div>
                    <div id='aboutMe_text_content'>
                        <label>생년월일</label>
                        <div>2001.02.18</div>
                    </div>
                </div>
                <div>
                    <div className="location_img" id='aboutMe_icon'>
                        <img src={locationIcon} alt='위치 아이콘'></img>
                    </div>
                    <div id='aboutMe_text_content'>
                        <label>주소</label>
                        <div>부천시</div>
                    </div>
                </div>
                <div>
                    <div className="phone_img" id='aboutMe_icon'>
                    <img src={phoneIcon} alt='전화 아이콘'></img>
                    </div>
                    <div id='aboutMe_text_content'>
                        <label>전화번호</label>
                        <div>010-3906-4298</div>
                    </div>
                </div>
                <div>
                    <div className="email_img" id='aboutMe_icon'>
                    <img src={letterIcon} alt='편지 아이콘'></img>
                    </div>
                    <div id='aboutMe_text_content'>
                        <label>이메일</label>
                        <div>thddlstjrchlrh@gmail.com</div>
                    </div>
                </div>
                <div>
                    <div className="education_img" id='aboutMe_icon'>
                    <img src={schoolIcon} alt='학교 아이콘'></img>
                    </div>
                    <div id='aboutMe_text_content'>
                        <label>학력</label>
                        <div id='aboutMe_text_content'>성공회대학교</div>
                        <div id='am_text_content'>(소프트웨어공학전공)</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default AboutMe;