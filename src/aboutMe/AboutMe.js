import nameIcon from '../img/human.png'; // 파일이 src/img/에 있다고 가정
import phoneIcon from '../img/phone.png';
import calendarIcon from '../img/calendar.png';
import locationIcon from '../img/map.png'
import letterIcon from '../img/mail.png'
import schoolIcon from '../img/education.png'
import './AboutMe.css';

function AboutMe() {
    return(
    <div className="aboutMe">
        <div className='aboutMe_title'>
            <h3>ABOUT ME</h3>
        </div>
        <div className='aboutMe_detail'>
            <div className="name">
                <div className="name_img" id='icon'>
                    <img src={nameIcon} alt="이름 아이콘" />
                </div>
                <div>
                    <label>이름</label>
                    <div>송인석</div>
                </div>
            </div>
            <div className="birth_date">
                <div className="birth_date_img" id='icon'>
                    <img src={calendarIcon} alt="달력 아이콘" />
                </div>
                <div>
                    <label>생년월일</label>
                    <div>2001.02.18</div>
                </div>
            </div>
            <div>
                <div className="location_img" id='icon'>
                    <img src={locationIcon} alt='위치 아이콘'></img>
                </div>
                <div>
                    <label>주소</label>
                    <div>부천시</div>
                </div>
            </div>
            <div>
                <div className="phone_img" id='icon'>
                <img src={phoneIcon} alt='전화 아이콘'></img>
                </div>
                <div>
                    <label>전화번호</label>
                    <div>010-3906-4298</div>
                </div>
            </div>
            <div>
                <div className="email_img" id='icon'>
                <img src={letterIcon} alt='편지 아이콘'></img>
                </div>
                <div>
                    <label>이메일</label>
                    <div>thddlstjrchlrh@gmail.com</div>
                </div>
            </div>
            <div>
                <div className="education_img" id='icon'>
                <img src={schoolIcon} alt='학교 아이콘'></img>
                </div>
                <div>
                    <label>학력</label>
                    <div>성공회대학교</div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default AboutMe;