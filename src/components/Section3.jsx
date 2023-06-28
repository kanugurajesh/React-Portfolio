import '../css/section3.css'

function SkillTest({ language, ProficiencyRating }) {
    const blueBoxes = ProficiencyRating;
    const blackBoxes = 5 - ProficiencyRating;
    return (
      <div className="language">
            <h2>{language}</h2>
            <ul>
            {[...Array(blueBoxes)].map((_, index) => (
            <>
                <li key={`blue-${index}`} style={{ backgroundColor: 'blue',opacity:(index+1)*0.2}}></li>
            </>
            ))}

            {[...Array(blackBoxes)].map((_, index) => (
            <>
                <li key={`black-${index}`} style={{ backgroundColor: '#ccc'}}></li>
            </>
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
            <SkillTest language={"python"} ProficiencyRating={5} />
            <SkillTest language={"javascript"} ProficiencyRating={3} />
            <SkillTest language={"react"} ProficiencyRating={4} />
            <SkillTest language={"html"} ProficiencyRating={4} />
            <SkillTest language={"css"} ProficiencyRating={4} />
            <SkillTest language={"Azure"} ProficiencyRating={3} />
        </div>
            <h3>&lt;/my skills &gt;</h3>
      </section>
    );
  }
  
  export default Section3;
  