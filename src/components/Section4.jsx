import '../css/section4.css'
import React from 'react'
import { v4 as uuidv4 } from 'uuid';

function Box({github,link,tech}){
    const randomkey = uuidv4();
    return (
        <div className="project-box">
                    <div className="project-header">
                        <div className="project-header-1">
                            <img src="https://ik.imagekit.io/hbzknb1hm/icons8-file.gif?updatedAt=1687962773667" alt="" />
                        </div>
                        <div className="project-header-2">
                            <a href={github}><img src="https://ik.imagekit.io/hbzknb1hm/icons8-github.gif?updatedAt=1687962773756" alt="" /></a>
                            <a href={link}><img src="https://ik.imagekit.io/hbzknb1hm/icons8-link.gif?updatedAt=1687962773580" alt="" /></a>
                        </div>
                    </div>
                    <h3>Restaurant Menu</h3>
                    <p>A demonstration of restaurant menu using react and api</p>
                    <div className="project-footer">
                        {tech.map((number) => {
                            const randomkey = uuidv4();
                            return <div key={randomkey}>{number}</div>;
                        })}
                    </div>
            </div>   
    )
}

function Section4() {
    return (
        <div id="section4">
            <h1><span>Ø3.</span> &lt;my portfolio&gt;</h1>
            <p>A small gallery of recent projects chosen by me.I've done all of them alone and these projects are only part of my projects</p>
            <div id="grid">
                <Box github="https://github.com/rajesh604/restaurant-app" link="https://restaurant-app-c7wi.vercel.app/" tech={["Javascript","Html","Css","React","meal api","hosting"]}/>
            </div>
        </div>
    )
}

export default Section4;