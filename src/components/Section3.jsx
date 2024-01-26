import '../css/section3.css'

  function SkillTest({ language, ProficiencyRating }) {
    const blueBoxes = ProficiencyRating;
    const blackBoxes = 5 - ProficiencyRating;

    return (
      <div className="language">
        <h2>{language}</h2>
        <ul>
          {[...Array(blueBoxes)].map((_, index) => (
            <li key={`${language}-blue-${index}`} style={{ backgroundColor: 'blue', opacity: (index + 1) * 0.2 }}></li>
          ))}

          {[...Array(blackBoxes)].map((_, index) => (
            <li key={`${language}-black-${index}`} style={{ backgroundColor: '#ccc' }}></li>
          ))}
        </ul>
      </div>
    );
  }


  function Section3() {
    return (
      <section id="section3">
            <h1><span>Ø2.</span> &lt;my skills &gt;</h1>
        <div>
            <SkillTest language={"Python"} ProficiencyRating={5} />
            <SkillTest language={"Frontend"} ProficiencyRating={5} />
            <SkillTest language={"React"} ProficiencyRating={5} />
            <SkillTest language={"Typescript"} ProficiencyRating={5} />
            <SkillTest language={"Next Js"} ProficiencyRating={5} />
            <SkillTest language={"Django"} ProficiencyRating={4} />
            <SkillTest language={"Flask"} ProficiencyRating={4} />
            <SkillTest language={"Version Control"} ProficiencyRating={4} />
            <SkillTest language={"Azure"} ProficiencyRating={3} />
            <SkillTest language={"Google Cloud"} ProficiencyRating={3} />
        </div>
            <h3>&lt;/my skills &gt;</h3>
      </section>
    );
  }
  
  export default Section3;
  