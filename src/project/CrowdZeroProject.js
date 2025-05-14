import './Projects.css';

function CrowdZeroProject() {
    return (
        <div>
            <h4 className="projects_title">혼잡제로 (CrowdZero)</h4>
            <div id='projects_period'>🗓 프로젝트 기간: 2025.1.2 ~ 2025.2.28</div>

            <div className='projects_text_content' id='jua-regular' >
                <hr />
                <div className='projects_introduce_text'>서울 도심 주요 집회 장소의 실시간 혼잡도와 교통 통제 정보를 제공하는<br/>Android 애플리케이션입니다.</div>
                <ul className='projects_list_content'>
                    <li>실시간 혼잡도 조회: 서울시 주요 집회 장소 5곳의 혼잡도와 날씨를 실시간으로 확인할 수 있습니다.</li>
                    <li>교통 통제 정보 제공: 서울 도심 내 교통 통제 구간 정보를 실시간으로 안내합니다.</li>
                    <li>집회 정보 제공: 서울경찰청의 오늘의 집회 정보를 크롤링하여 캘린더에서 일정과 상세 내용을 확인합니다.</li>
                    <li>깃허브 주소 : <a href="https://github.com/orgs/Team-CrowdZero/repositories" target="_blank" rel="noreferrer">Team-CrowdZero GitHub</a></li>   

                </ul>
            </div>
        </div>
    )
}

export default CrowdZeroProject;

