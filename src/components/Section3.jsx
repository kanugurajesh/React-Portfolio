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
                <li key={`blue-${index}`} style={{ backgroundColor: 'blue', width: '30px', height: '30px',opacity:(index+1)*0.2}}></li>
            <br />
            </>
            ))}

            {[...Array(blackBoxes)].map((_, index) => (
            <>
                <li key={`black-${index}`} style={{ backgroundColor: '#ccc', width: '30px', height: '30px' }}></li>
                <br />
            </>
            ))}
        </ul>
      </div>
    );
  }
  
  function Section3() {
    return (
      <section id="section3">
        <div>
            <h1><span>Ø2.</span> &lt;my skills &gt;</h1>
            <SkillTest language={"python"} ProficiencyRating={4} />
            <SkillTest language={"javascript"} ProficiencyRating={3} />
            <SkillTest language={"react"} ProficiencyRating={4} />
            <SkillTest language={"html"} ProficiencyRating={4} />
            <SkillTest language={"css"} ProficiencyRating={4} />
            <SkillTest language={"Azure"} ProficiencyRating={3} />
            <h3>&lt;/my skills &gt;</h3>
        </div>
      </section>
    );
  }
  
  export default Section3;
  