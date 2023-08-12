import '../css/section4.css'
import React from 'react'
import { v4 as uuidv4 } from 'uuid';

function Box({name,github,link,tech,description}){
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
                    <h3>{name}</h3>
                    <p>{description}</p>
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
        <section id="section4">
            <h1><span>Ø3.</span> &lt;my portfolio&gt;</h1>
            <p>A small gallery of recent projects chosen by me.I've done all of them alone and these projects are only part of my projects</p>
            <div id="grid">
                <Box name={"Gmate"} github="" link="https://hackathon-1.azurewebsites.net/" tech={["Javascript","Html","Css","React","cohere ai","azure","flask","node","express"]} description="I have a multipurpose bot which can chat with you and send messeges using gmail,sms,whatsapp"/>
                <Box name={"Restaurant App"} github="https://github.com/rajesh604/django_fullstack_project" link="http://rajeshkanugu.pythonanywhere.com/" tech={["django","Html","Css","Javascript","meal api","pythonanywhere"]} description="I have build a restaurant app"/>
                <Box name={"Image Upload"} link="https://improved-funicular.vercel.app/" tech={["Javascript","Html","Css","React","firebase","hosting","mongodb atlas","supabase"]} description="I have build a image upload app"/>
                <Box name={"Space Exploration"} github="https://github.com/rajesh604/space-tourism" link="https://space-tourism-l7gb.vercel.app/" tech={["Javascript","Html","Css"]} description="I have build a space exploration app"/>
                <Box name={"Company Portfolio"} github="https://github.com/rajesh604/rajesh_web_design" link="https://rajesh-web-design.vercel.app/" tech={["Javascript","Html","Css","React Js"]} description="A small company portfolio"/>
                <Box name={"Tennis Game"} github="https://github.com/rajesh604/tennis_using_react" link="https://tennis-using-react-nmpk.vercel.app/" tech={["Javascript","Html","Css","React"]} description="I have build a tennis game"/>
                <Box name={"Portfolio 1"} github="" link="https://salmon-river-0d2437110.3.azurestaticapps.net/" tech={["Javascript","Html","Css","Azure","React Js","Nodemailer","Express","Node Js"]} description="I have build a portfolio"/>
                <Box name={"News Blog"} github="https://github.com/rajesh604/django_blog" link="http://rajeshgowd.pythonanywhere.com/" tech={["Javascript","Html","Css","django","NewsApi","pythonanywhere","Bootstrap"]} description="A Blog Where Users Can see news and write posts only when the superuser allows them"/>
                <Box name={"Portfolio Dashboard"} github="" link="https://dashboard-xpsi.vercel.app/" tech={["Javascript","Html","Css","Azure","React Js","mui","ant design"]} description="I have build a portfolio dashboard"/>
                <Box name={"Portfolio 2"} github="https://github.com/rajesh604/rajesh604.github.io" link="https://rajesh604.github.io" tech={["Javascript","Html","Css","Github Static Pages"]} description="I have build a portfolio"/>
                <Box name={"Restaurant Menu"} github="https://github.com/rajesh604/restaurant-app" link="https://restaurant-app-c7wi.vercel.app/" tech={["Javascript","Html","Css","React","meal api","hosting"]} description="I have build a restaurant menu"/>
                <Box name={"Excel Upload"} github={"https://github.com/rajesh604/flsk_xl_upload"} link={"https://hasura.azurewebsites.net"} description="A normal flask aplication to upload and view your excel file" tech={["Flask","Azure","Html","Css","Javascript"]}/>
            </div>
            <h2>&lt;/my portfolio&gt;</h2>
        </section>
    )
}

export default Section4;