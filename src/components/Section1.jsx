import React,{useState} from "react";

function Section1({windowsize}) {
  const [show,setshow] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  console.log(process.env.API_KEY)
  console.log("i am a person")
  const handleSubmit = (e) => {
    e.preventDefault();
    setshow(!show);
  }

  const shower = (e) => {
    e.preventDefault();
    setshow(!show);
  }

  return (
    <section id="section1">
      <div id="section1-div">
        <img src="https://ik.imagekit.io/hbzknb1hm/rajesh1.jpeg?updatedAt=1687880887870" alt="" id="section1-img"/>
      </div>
      
      {windowsize &&
        <h1>Hi,I'm <span>Rajesh <br /> Full-Stack <br /> Web Developer</span> </h1>
      }

      {!windowsize &&
        <h1>Hi,I'm <span>Rajesh <br /> Full-Stack Web Developer</span> </h1>
      }

      <p>I'm a full-stack web developer and python developer , I love to bring your creativity and ideas to fully functional and scalable web applications.</p>
      <div id="icons">
        <ul>
          <li><a href="https://twitter.com/exploringengin1" target="_blank"><img src="https://ik.imagekit.io/hbzknb1hm/icons8-twitter.gif?updatedAt=1688106018779" alt=""/></a></li>
          <li><a href="https://github.com/rajesh604" target="_blank"><img src="https://ik.imagekit.io/hbzknb1hm/icons8-github.gif?updatedAt=1687962773756" alt="" /></a></li>
          <li><a href="https://www.linkedin.com/in/rajesh-coder-aba8a3254/" target="_blank"><img src="https://ik.imagekit.io/hbzknb1hm/icons8-linkedin-circled.gif?updatedAt=1688106080968" alt="" /></a></li>
          <li><a href="https://www.youtube.com/@Rajeshcoder" target="_blank"><img src="https://ik.imagekit.io/hbzknb1hm/icons8-youtube_1_.gif?updatedAt=1688106213427" alt="" /></a></li>
        </ul>
      </div>
      <a href="" id="button" onClick={shower}>Contact me</a>
      {show && (
        <div id="width">
          <form onSubmit={handleSubmit}>
            <div>
              <div id="close" onClick={()=>{
                setshow(!show)
              }}>❌</div>
              <div id="name">
                <input type="text" className="input-field" placeholder="First Name" required/>
                <input type="text" className="input-field" placeholder="Last Name" required/>
              </div>
              <input type="text" placeholder="Enter Your Gmail" required/>
              <textarea name="" id="" placeholder="Enter Your Message" required></textarea>
              <button type="submit">Submit</button>
            </div>
        </form>
        </div>
      )}
    </section>
  )
}

export default Section1;
