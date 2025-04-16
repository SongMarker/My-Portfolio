import './Skills.css'
import '../css_files/title.css'
import frontend_img from '../img/front2.png';
import backend_img from '../img/back.png'
import coding_img from '../img/coding.png'
import devOps_img from '../img/devOps.png'


function Skills() {
    return (
        <div className='skills' id='Skills'>
            <div className='skills_content' id='content'>
                <div className="skills_title" id='content_title'>
                    <h3>Skills</h3>
                </div>
                <div className='skills_icons_div'>
                    <div className='coding' id='coding_skills'>
                        <div id='skills_icon' >
                            <img src={coding_img} alt='코딩아이콘'></img>
                            Language
                        </div>
                        <ul className='skills_list'>
                            <li class="skills_list_value" style={{backgroundColor: '#30a26e', color:'#ffffff'}}>Java</li>
                            <li class="skills_list_value" style={{backgroundColor: '#efd81d', color:'#000000'}}>JavaScript</li>
                         </ul>
                    </div>
                    <div className='frontend' id='coding_skills'>
                        <div id='skills_icon' >
                            <img src={frontend_img} alt='프론트아이콘'></img>
                            Frontend
                        </div>
                        <ul className='skills_list'>
                            <li class="skills_list_value" style={{backgroundColor: '#2468ee', color:'#ffffff'}}>React</li>
                        </ul>
                    </div>
                    <div className='backend' id='coding_skills'>
                        <div id='skills_icon' >
                            <img src={backend_img} alt='백엔드아이콘'></img>
                            Backend
                        </div>
                        <ul className='skills_list'>
                          <li class="skills_list_value" style={{backgroundColor: '#f79b26', color:'#000000'}}>Spring Boot</li>
                        </ul>
                    </div>
                    <div className='devOps' id='coding_skills'>
                        <div id='skills_icon' >
                            <img src={devOps_img} alt='devOps아이콘'></img>
                            DevOps
                        </div>
                        <ul className='skills_list'>
                        <li class="skills_list_value" style={{backgroundColor: '#38bdf8', color:'#ffffff'}}>GCP</li>
                        <li class="skills_list_value" style={{backgroundColor: '#228B22', color:'#ffffff'}}>NginX</li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Skills;