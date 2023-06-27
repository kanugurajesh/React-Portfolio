function Section1({windowsize}) {
  return (
    <section id="section1">
      <div id="section1-div">
        <img src="https://ik.imagekit.io/hbzknb1hm/rajeshjpeg?updatedAt=1687835488940" alt="" id="section1-img"/>
      </div>
      {windowsize &&
        <h1>Hi,I'm <span>Rajesh <br /> Full-Stack <br /> Web Developer</span> </h1>
      }

      {!windowsize &&
        <h1>Hi,I'm <span>Rajesh <br /> Full-Stack Web Developer</span> </h1>
      }

      <p>I'm a full-stack web developer and a python developer,I love to bring your creativity and ideas to fully functional and scalable web applications.</p>
      <div id="icons">
        <ul>
          <li><a href="https://twitter.com/exploringengin1" target="_blank"><img src="https://ik.imagekit.io/hbzknb1hm/twitter.gif?updatedAt=1687833078219" alt=""/></a></li>
          <li><a href="https://github.com/rajesh604" target="_blank"><img src="https://ik.imagekit.io/hbzknb1hm/github.gif?updatedAt=1687833049000" alt="" /></a></li>
          <li><a href="https://www.linkedin.com/in/rajesh-coder-aba8a3254/" target="_blank"><img src="https://ik.imagekit.io/hbzknb1hm/linkedin.gif?updatedAt=1687833078300" alt="" /></a></li>
          <li><a href="" target="_blank"><img src="https://ik.imagekit.io/hbzknb1hm/telegram.gif?updatedAt=1687833078187" alt="" /></a></li>
        </ul>
      </div>
      <a href="" id="button">Contact me</a>
    </section>
  )
}

export default Section1;
