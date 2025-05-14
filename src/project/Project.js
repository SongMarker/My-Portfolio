import './Project.css';
import '../css_files/title.css';
import CrowdZeroProject from './CrowdZeroProject';
import ShoppingMallProject from './ShoppingMallProject'


function Project() {
    return (

    <div className='project' id='Project'>
        <div className='project_content'id='content'>
            <div className='project_title' id='content_title'>
                <h3>Project</h3>
            </div>
            <div className='project_content_div'>
                <div className='projects_content' >
                    <CrowdZeroProject/>
                </div>
                <div className='projects_content' >
                    <ShoppingMallProject/>
                </div>
            </div>
        </div>
    </div>


    )
}


export default Project;
