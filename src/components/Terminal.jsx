import React from 'react';
import styled from 'styled-components';
import { Mail, FileText, Github, Linkedin, Instagram } from 'lucide-react';

const Card = () => {
    const handleEmailClick = () => {
        window.open('mailto:sk2078@msstate.edu', '_blank');
    };

    const handleResumeClick = () => {
      window.open('/portfolio-website/Soyab_Karki_Resume_Junior_CS.pdf', '_blank');
    };    
    
    const handleSocialClick = (url) => {
        window.open(url, '_blank');
    };
    
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
                </div>

                {/* Contact Section */}
                <div className="section">
                    <div className="command-prompt">$ contact --email</div>
                    <div className="contact-button" onClick={handleEmailClick}>
                        <Mail size={16} />
                        sk2078@msstate.edu
                    </div>
                </div>
                <div className="section">
                    <div className="command-prompt">$ cat resume.pdf</div>
                    <div className="contact-button" onClick={handleResumeClick}>
                        <FileText size={16} />
                        Download Resume
                    </div>
                </div>
                
                {/* Socials Section */}
                <div className="section">
                    <div className="command-prompt">$ ls ./social-links</div>
                    <div className="social-container">
                        <div className="social-card" onClick={() => handleSocialClick('https://github.com/SoyabKarki')}>
                            <div className="social-icon">
                                <Github size={24} />
                            </div>
                            <div className="social-name">GitHub</div>
                            <div className="social-handle">@SoyabKarki</div>
                        </div>
                        <div className="social-card" onClick={() => handleSocialClick('https://www.linkedin.com/in/soyab-karki/')}>
                            <div className="social-icon">
                                <Linkedin size={24} />
                            </div>
                            <div className="social-name">LinkedIn</div>
                            <div className="social-handle">Soyab Karki</div>
                        </div>
                        <div className="social-card" onClick={() => handleSocialClick('https://www.instagram.com/soyab_e_a_n/')}>
                            <div className="social-icon">
                                <Instagram size={24} />
                            </div>
                            <div className="social-name">Instagram</div>
                            <div className="social-handle">@soyab_e_a_n</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .card {
   width: 1000px;
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

  .contact-button {
    background-color: #1a4d2e;
    color: white;
    padding: 10px 20px;
    border-radius: 8px;
    font-size: 1rem;
    border: 1px solid #00ca4e;
    display: inline-flex;
    gap: 8px;
    cursor: pointer;
    transition: background-color 0.2s;
  }

  .contact-button:hover {
    background-color: #2a5d3e;
  }

  .social-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
    margin-top: 10px;
  }

  .social-card {
    background-color: #1a1a1a;
    border: 1px solid #333;
    border-radius: 8px;
    padding: 15px;
    text-align: center;
    transition: border-color 0.2s;
  }

  .social-card:hover {
    border-color: #00ca4e;
    cursor: pointer;
  }

  .social-icon {
    font-size: 1.5rem;
    margin-bottom: 8px;
  }

  .social-name {
    font-weight: bold;
    margin-bottom: 5px;
  }

  .social-handle {
    font-size: 0.9rem;
    color: #ccc;
  }
`;

export default Card;
