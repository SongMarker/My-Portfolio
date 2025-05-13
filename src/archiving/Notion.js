// Notion.js
import './Archivings.css';
import notion_img from '../img/notion.png';

function Notion() {
    // div 클릭 시 Notion URL로 이동
    const handleClick = () => {
        window.open(
            'https://www.notion.so/Portfolio-Website-15f399fb98f4800eac54da0da17461bd?pvs=4',
            '_blank',
            'noopener,noreferrer'
        );
    };

    return (
        <div
            className='archivings_div'
            onClick={handleClick}
            role="link"
            tabIndex="0"
            aria-label="SongMarker의 Notion 포트폴리오로 이동"
            onKeyDown={(e) => e.key === 'Enter' && handleClick()} // Enter 키로 클릭 가능
        >
            <img className='archiving_img' src={notion_img} alt='SongMarker의 Notion 포트폴리오로 이동' />
            {/* <a> 대신 span으로 텍스트 표시 */}
            <span className='archiving_link'>SongMarker의 Notion 포트폴리오</span>
        </div>
    );
}

export default Notion;