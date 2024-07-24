import { Link } from "react-router-dom";
import { useState } from "react";
function About() {
  const javaSkills = [
    "variable",
    "user input",
    "Math class",
    "random",
    "if statement",
    "switches",
    "logical operator",
    "(do)while loop",
    "for(each) loop)",
    "nested loop",
    "arrays",
    "2D arrays",
    "methods",
    "overloaded methods",
    "printf",
    "object",
    "constructors",
    "class",
    "inheritance",
    "abstraction",
    "encapsulation",
    "interface",
    "polymorphism",
  ];

  const fullStackSkills = [
    {
      skill: "Vanilla JavaScript(ES6)",
      detail:
        "variables, arithmetic operators, math, random, if statement, ternary operator, switches, logical operator, while loop, for loop, functions, arrays, spread operator, callbacks, forEach loop, map, filter, arrow function, objects, nested objects, arrays of objects, setTimeout, async/await, try catch, DOM manipulation, promise, JSON file, fetch API",
    },
    {
      skill: "HTML5",
      detail:
        "attributes, heading, paragrpah, styles, formating, quotation, images, tables, lists, div, iframe, head, layout, responsive, symbols, form, video, audio, etc...  ",
    },
    {
      skill: "CSS",
      detail:
        "colors, backgrounds, borders, margin, padding, height/width, text, font, link, list, display, position, z-index, float, align, etc...",
    },
    {
      skill: "React.js",
      detail:
        "card component, styles, props, conditional rendering, events, useState, useEffect, useParam, onChange event Handler, JSX, Router, axios  ",
    },
    { skill: "Mongo DB", detail: "MongoDB Atlas, MongoDB compass" },
    { skill: "Express.js", detail: "help building server fast" },
    { skill: "MERN Stack", detail: "full-stack web development" },
  ];

  const vtcDes = [
    "Education Centres administration",
    "team leading",
    "project management",
    "event organization",
    "student disciplinary committee",
    "estate management",
    "college support",
  ];

  const [studyContent, setStudyContent] = useState(
    "Before coming to Canada, I decided to step into the Information Technology industry. Because I was a newbie to IT industry, I did some research on what to learn and which college or university I should apply. At last, I applied the Post-degree Diploma of Information, Communication Technology of Douglas College in Vancouver. This is a one-year program. I chose Douglas college because it is a renowned college with high education quality recognized by the British Columbia Quality Assurance program."
  );
  return (
    <>
      <h1>About</h1>
      <div>
        <div>
          <h3>Life in Canada(since July 2023)</h3>
          <p>
            I came to Canada in July 2023 to purse my higher education in IT
            industry.
          </p>
          <p>
            <h4>Study</h4>
            {studyContent}
          </p>
          <p>
            In the first semester, I start learning my first programming courses
            in my life. I immediately fell in love with programming. I learnt{" "}
            <Link to="/skills" target="_blank">
              C#
            </Link>{" "}
            and{" "}
            <Link to="skills" target="_blank">
              web development
            </Link>{" "}
            (HTML, CSS and JavaScript) in this semester. In the course of web
            development, I worked in a group of three students, which one of the
            teammates is a senior front-end developer working remotely for a
            Singaporean company. We worked together and built a webpage for a
            coffee shop using HTML5, CSS and JavaScript. During the semester, I
            learn various programming skills and knowledge from the developer
            teammate.
          </p>
          <p>
            After the first semester, I was still unsure what pathway should I
            go for. I decided to give myself one more semester to explore my
            interest and ability. In the second semester, I registered two
            programming courses, including{" "}
            <Link to="/skills" target="_blank">
              Java programming
            </Link>{" "}
            and{" "}
            <Link to="/skills" target="_blank">
              Full-stack web development
            </Link>
            . In the Java programing, I learnt the basics of Java, including but
            not limited to the following:
            <ul>
              {javaSkills.map((javaSkill, index) => (
                <li key={index}>{javaSkill}</li>
              ))}
            </ul>
            <br />I found the most intriguing field of coding to me is
            Full-stack web development. In the first semester, I was imaginging
            that Full-stack web development was the most demanding and toughest
            coding to learning of to work with. After learning the Full-stack
            web development, I found that coding for backend and frontend at the
            same time resemble the work of a engineer of an architect. Building
            a full-stack web app provide a strong feeling of satisfaction. I
            have learnt the following skills of full-stack web development, and
            will make myself competitve by keeping myself up-to-date to the
            emerging technology:
            <ul>
              {fullStackSkills.map((fullStackSkill, index) => (
                <li key={index}>
                  {fullStackSkill.skill}
                  {/* {fullStackSkill.map((skill, index) => (
                  <li>{skill.detail}</li>
                ))} */}
                </li>
              ))}
            </ul>
            This profile webpage is also created by the technologies above.
          </p>
        </div>
        <hr></hr>
        <div>
          <h3>Life in Hong Kong(before July 2023)</h3>I graduated from The
          Chinese University of Hong Kong(CUHK)
          <sup>*</sup>in 2019. My major was Biology. During my study, I focus on
          phytology(Botany). I worked as a intern in The Shiu-Ying Hu Herbarium
          <sup>*</sup>for two year from Oct 2017 to July 2019. I worked in the
          herbarium for up to 18 hours every week.
          <br />
          <h4>Junior Research Assistant</h4>
          After graduation, I continue working in Shiu-Ying Hu Herbarium as a
          Junior Research Assistant. The herbarium is a team of scientists of
          Phyto-Taxonomy in Hong Kong. There are two goals of herbrium, to
          preserve and keep track of the local plants population by collecting
          live plant specimens. Another objective is to promote environmental
          education by learning how to identify local plant species. During the
          time I was working in the herbarium, I was responsible to the
          following:
          <ul>
            <li> Student training and leading </li>
            <li> Educational event organizers</li>
            <li> VR project development</li>
            <li> Website content maintenance</li>
            <li> Plant portrait photography </li>
            <li> Plant specimens production </li>
            <li> Field work</li>
            <li> Local plants identification</li>
          </ul>
          <h4>Field Officer</h4>
          After working for one year, I chose to pursue a new position in the
          Agriculture, Fishery and Conservations Department of HKSAR government.
          I worked as a field officer in the department. I have been rotated to
          two different position during the time in the department. The first
          position is a Phytosanitory Inspector in Plant and Pesticide
          Regulatory Section. I was responsible in the following:
          <ul>
            <li>Plants and plant product health and sanitory inspection</li>
            <li>Plant import licensing</li>
            <li>Plant export phytosanitory certificate</li>
            <li>Plant import control and enforcement operation</li>
            <li>Driving for operations</li>
          </ul>
          After one year, I was transferred to another section, the Avian
          Influenza Surveillance Section. I became a Animal Health Inspector. My
          duties include the following:
          <ul>
            <li>
              Monitoring the animal exhibit of all the animal exhibition
              premises including in Hong Kong:
              <ul>
                <li>Hong Kong Ocean Park</li>
                <li>Tai Tong Organic EcoPark</li>
                <li>Noah Ark</li>
                <li>30 more rock pigeons and doves keeping premises</li>
              </ul>
            </li>
            <li>Enforcement on illegal avian keeping activities </li>
            <li>Inspection reports preparation</li>
            <li>
              Support to other animal health related operation such as swine flu
              control
            </li>
            <li>
              License renewal process:
              <ul>
                <li>
                  Document preparation for Senior Veterinary Officer and
                  Department Director
                </li>
                <li>Renewal inspection</li>
              </ul>
            </li>
          </ul>
          <h4>Officer(Executive)</h4>
          After another year as a front-line Field Officer, I planned to pursue
          my career to become a officer who take up more managerial
          responsibilities. I applied the position of Officer(executive) in the
          Vocational Training Council(VTC) of Hong Kong. I was succesfully
          out-competed other candidates and become the Officer(executive) of two
          Pro-Act Education Centres(Clock and Watch & Mechanical Engineering) in
          one of the institution under VTC umbrella, the Youth College(Kowloon
          Bay). I was responsible for the following duties:
          <ul>
            {vtcDes.map((des, i) => (
              <li key={i}>{des}</li>
            ))}
          </ul>
          The life working for two education centre was extremely tough and
          demanding. I learnt how to manage my time better and how to
          communicate with different parties in the college. There were many
          responsibilities that I have never experienced before. After this
          intensive half year working, I resigned and start the new journey in
          my life, coming to Vancouver for further study.
        </div>
      </div>
    </>
  );
}
export default About;
