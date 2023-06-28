import '../css/section4.css'

function Section4() {
    return (
        <div id="section4">
            <h1><span>Ø3.</span> &lt;my portfolio&gt;</h1>
            <p>A small gallery of recent projects chosen by me.I've done all of them alone and these projects are only part of my projects</p>
            <div id="grid">
                <div className="project-box">
                    <div className="project-header">
                        <div className="project-header-1">
                            <img src="https://ik.imagekit.io/hbzknb1hm/icons8-file.gif?updatedAt=1687962773667" alt="" />
                        </div>
                        <div className="project-header-2">
                            <a href=""><img src="https://ik.imagekit.io/hbzknb1hm/icons8-github.gif?updatedAt=1687962773756" alt="" /></a>
                            <a href=""><img src="https://ik.imagekit.io/hbzknb1hm/icons8-link.gif?updatedAt=1687962773580" alt="" /></a>
                        </div>
                    </div>
                    <h3>Restaurant Menu</h3>
                    <p>A demonstration of restaurant menu using react and api</p>
                    <div className="project-footer">
                        <div>Javascript</div>
                        <div>Html</div>
                        <div>Css</div>
                        <div>React</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section4;