import React from 'react';
import styled from 'styled-components';

const Card = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="tools">
          <div className="circle">
            <span className="red box" />
          </div>
          <div className="circle">
            <span className="yellow box" />
          </div>
          <div className="circle">
            <span className="green box" />
          </div>
        </div>
        <div className="card__content">
            {/* Who Am I Section */}
            <div className="section">
                <div className="command-prompt">$ whoami</div>
                <div className="name">Soyab Karki</div>
                <div className="title">Junior CS @ MSU</div>
                <div className="title">Starkville, MS</div>
            </div>
            {/* Skills Section */}
            <div className="section">
                <div className="command-prompt">$ skills --core</div>
                <div className="skills-container">
                    <span className="skill-tag">Python</span>
                    <span className="skill-tag">C/C++</span>
                    <span className="skill-tag">Javascript</span>
                    <span className="skill-tag">SQL</span>
                    <span className="skill-tag">AWS</span>  
                    <span className="skill-tag">Docker</span>                  
                </div>
                {/* <div className="command-prompt">$ skills --data</div>
                <div className="skills-container">
                    <span className="skill-tag">Pandas</span>
                    <span className="skill-tag">Scikit-learn</span>
                    <span className="skill-tag">PyTorch</span>
                    <span className="skill-tag">Matplotlib</span>
                    <span className="skill-tag">Tableau</span>
                    <span className="skill-tag">PostgreSQL</span>
                    <span className="skill-tag">Redis</span>
                </div>
                <div className="command-prompt">$ skills --web</div>
                <div className="skills-container">
                    <span className="skill-tag">HTML/CSS</span>
                    <span className="skill-tag">React.js</span>
                    <span className="skill-tag">Node.js</span>
                    <span className="skill-tag">FastAPI</span>
                </div>

                <div className="command-prompt">$ skills --infrastructure</div>
                <div className="skills-container">
                    <span className="skill-tag">Apache Airflow</span>
                    <span className="skill-tag">Apache Kafka</span>
                    <span className="skill-tag">Apache Spark</span>
                    <span className="skill-tag">AWS</span>
                    <span className="skill-tag">Grafana</span>
                    <span className="skill-tag">Kubernetes</span>
                </div>
                <div className="command-prompt">$ skills --tools</div>
                <div className="skills-container">
                    <span className="skill-tag">Git</span>
                    <span className="skill-tag">Github</span>
                    <span className="skill-tag">Docker</span>
                </div>

 */}
            </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
   width: 800px;
   min-height: 200px;
   max-width: 90vw;
   margin: 0 auto;
   background-color: #011522;
   border-radius: 8px;
   z-index: 1;
   border: 1px solid #333;
   display: flex;
   flex-direction: column;
  }

  .tools {
   display: flex;
   align-items: center;
   padding: 9px;
   border-bottom: 1px solid #333;
   flex-shrink: 0;
  }

  .circle {
   padding: 0 4px;
  }

  .box {
   display: inline-block;
   align-items: center;
   width: 10px;
   height: 10px;
   padding: 1px;
   border-radius: 50%;
  }

  .red {
   background-color: #ff605c;
  }

  .yellow {
   background-color: #ffbd44;
  }

  .green {
   background-color: #00ca4e;
  }
  
  .card__content {
    padding: 20px;
    font-family: 'Courier New', monospace;
    color: white;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  .section {
    margin-bottom: 10px;
    flex-shrink: 0;
  }

  .section:last-child {
    margin-bottom: 0;
  }

  .command-prompt {
    color: #00ca4e;
    font-weight: bold;
    margin-bottom: 10px;
    margin-top: 10px;
  }

  .name {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .title {
    font-size: 1.2rem;
    color: #ccc;
  }

  .title:last-child {
    margin-bottom: 20px;
  }


  .skills-container {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .skill-tag {
    background-color: #1a4d2e;
    color: white;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 0.9rem;
    border: 1px solid #00ca4e;
  }

`;

export default Card;
