// Github.js
import './Archivings.css';
import github_img from '../img/github.png';

function GitHub() {
    // div 클릭 시 GitHub URL로 이동
    const handleClick = () => {
        window.open('https://github.com/SongMarker', '_blank', 'noopener,noreferrer');
    };

    return (
        <div
            className='archivings_div'
            onClick={handleClick}
            role="link"
            tabIndex="0"
            aria-label="SongMarker의 GitHub 프로필로 이동"
            onKeyDown={(e) => e.key === 'Enter' && handleClick()} // Enter 키로 클릭 가능
        >
            <img className='archiving_img' src={github_img} alt='SongMarker의 GitHub 프로필로 이동' />
            {/* <a> 대신 span으로 텍스트 표시 */}
            <span className='archiving_link'>SongMarker의 GitHub 프로필</span>
        </div>
    );
}

export default GitHub;