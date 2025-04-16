import './Project.css';
import '../css_files/title.css';
import CrowdZeroProject from './CrowdZeroProject';


function Project() {
    return (

    <div className='project'>
        <div className='project_content' id='content'>
            <div className='project_title' id='content_title'>
                <h3>Project</h3>
            </div>
            <div className='project_content_div' id='content_div'>
                <CrowdZeroProject/>
            </div>
        </div>
    </div>


    )
}


export default Project;
