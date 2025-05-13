import './Nav.css';
import { useState, useEffect } from 'react';

function Nav() {
    const [isScrolled, setIsScrolled] = useState(false);

    // 스크롤 이벤트로 네비게이션 바 배경 변경
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 부드러운 스크롤 함수 (네비게이션 바 높이 고려)
    const handleNavClick = (e, sectionId) => {
        e.preventDefault(); // 기본 앵커 점프 동작 막기
        const section = document.querySelector(sectionId); // 섹션 요소 찾기
        if (section) {
            const navHeight = 80; // 네비게이션 바 높이 (px, 실제 높이에 맞게 조정)
            const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: sectionPosition - navHeight, // 네비게이션 바 높이만큼 위로 조정
                behavior: 'smooth', // 부드러운 스크롤
            });
        }
    };

    return (
        <div className={`Header ${isScrolled ? 'scrolled' : 'transparent'}`}>
            <div className='Header_nav'>
                <h1 className='Header_logo'>Song's portfolio</h1>
                <nav className='Header_menu'>
                    <ul>
                        <li>
                            <a
                                href='#Home'
                                onClick={(e) => handleNavClick(e, '#Home')}
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href='#AboutMe'
                                onClick={(e) => handleNavClick(e, '#AboutMe')}
                            >
                                About Me
                            </a>
                        </li>
                        <li>
                            <a
                                href='#Skills'
                                onClick={(e) => handleNavClick(e, '#Skills')}
                            >
                                Skills
                            </a>
                        </li>
                        <li>
                            <a
                                href='#Project'
                                onClick={(e) => handleNavClick(e, '#Project')}
                            >
                                Project
                            </a>
                        </li>
                        <li>
                            <a
                                href='#Archiving'
                                onClick={(e) => handleNavClick(e, '#Archiving')}
                            >
                                Archiving
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Nav;