import './Archiving.css';
import Github from './Github.js';
import Notion from './Notion.js';

function Archiving() {
    return (
        <div className="archiving" id='Archiving'>
            <div id='content'>
                <div className='project_title' id='content_title'>
                    <h3 style={{ color: 'white' }}>ARCHIVING</h3>
                </div>
                <div className='archiving_content_div'>
                    <div className='archiving_content' >
                        <Github />
                    </div>
                    <div className='archiving_content' >
                        <Notion />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Archiving;