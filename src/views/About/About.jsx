import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  javaSkills,
  vtcDes,
  fullStackSkills,
  studyContent,
  herbariumWork,
  fo2Work,
  fo2pm,
  fo2Work2,
} from "../../content";

function About() {
  useEffect(() => {
    scrollTo(0, 0);
  }, []);
  
  return (
    <>
      <h1 className="font-bold text-3xl my-4 text-center">About</h1>
      <div className="container mb-4">
        <div className="bg-orange-100 p-4 rounded-lg mb-4">
          <h3 className="font-bold text-xl my-4">
            Life in Canada(since July 2023)
          </h3>
          <p>
            I came to Canada in July 2023 to purse my higher education in IT
            industry.
          </p>
          <p>
            <h4 className="font-bold text-lg my-4">Study</h4>
            {studyContent}
          </p>

          <p className=" text-md my-4">
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
          <p className=" text-md my-4">
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
            <ul className=" text-md my-4">
              {javaSkills.map((javaSkill, index) => (
                <li key={index}>
                  {index + 1}. {javaSkill}
                </li>
              ))}
            </ul>
            <p className=" text-md my-4">
              I found the most intriguing field of coding to me is Full-stack
              web development. In the first semester, I was imaginging that
              Full-stack web development was the most demanding and toughest
              coding to learning of to work with. After learning the Full-stack
              web development, I found that coding for backend and frontend at
              the same time resemble the work of a engineer of an architect.
              Building a full-stack web app provide a strong feeling of
              satisfaction. I have learnt the following skills of full-stack web
              development, and will make myself competitve by keeping myself
              up-to-date to the emerging technology:
            </p>
            <ul>
              {fullStackSkills.map((fullStackSkill, index) => (
                <li key={index}>
                  {index + 1}. {fullStackSkill.skill}
                </li>
              ))}
            </ul>
            <br></br>
            This profile webpage is also created by the technologies above.
          </p>
        </div>
        <div className="bg-blue-100 p-4 rounded-lg">
          <h3 className="font-bold text-xl my-4">
            Life in Hong Kong(before July 2023)
          </h3>
          <p className=" text-md my-4">
            I graduated from The Chinese University of Hong Kong(CUHK)
            <sup>*</sup>in 2019. My major was Biology. During my study, I focus
            on phytology(Botany). I worked as a intern in The Shiu-Ying Hu
            Herbarium
            <sup>*</sup>for two year from Oct 2017 to July 2019. I worked in the
            herbarium for up to 18 hours every week.
            <br />
            <h4 className="font-bold text-lg my-4">
              Junior Research Assistant
            </h4>
            <p className=" text-md my-4">
              After graduation, I continue working in Shiu-Ying Hu Herbarium as
              a Junior Research Assistant. The herbarium is a team of scientists
              of Phyto-Taxonomy in Hong Kong. There are two goals of herbrium,
              to preserve and keep track of the local plants population by
              collecting live plant specimens. Another objective is to promote
              environmental education by learning how to identify local plant
              species. During the time I was working in the herbarium, I was
              responsible to the following:
              <ul className=" text-md my-4">
                {herbariumWork.map((hw, i) => (
                  <li key={i}>
                    {i + 1}. {hw}
                  </li>
                ))}
              </ul>
            </p>
          </p>
          <h4 className="font-bold text-lg my-4">Field Officer</h4>
          After working for one year, I chose to pursue a new position in the
          Agriculture, Fishery and Conservations Department of HKSAR government.
          I worked as a field officer in the department. I have been rotated to
          two different position during the time in the department. The first
          position is a Phytosanitory Inspector in Plant and Pesticide
          Regulatory Section. I was responsible in the following:
          <ul className=" text-md my-4">
            {fo2Work.map((fow, i) => (
              <li key={i}>
                {i + 1}. {fow}
              </li>
            ))}
          </ul>
          After one year, I was transferred to another section, the Avian
          Influenza Surveillance Section. I became a Animal Health Inspector. My
          duties include the following:
          <ul className=" text-md my-4">
            {fo2Work2.map((fw2, i) => (
              <li key={i}>
                {i + 1}. {fw2}
              </li>
            ))}
          </ul>
          <h4 className="font-bold text-lg my-4">Officer(Executive)</h4>
          After another year as a front-line Field Officer, I planned to pursue
          my career to become a officer who take up more managerial
          responsibilities. I applied the position of Officer(executive) in the
          Vocational Training Council(VTC) of Hong Kong. I was succesfully
          out-competed other candidates and become the Officer(executive) of two
          Pro-Act Education Centres(Clock and Watch & Mechanical Engineering) in
          one of the institution under VTC umbrella, the Youth College(Kowloon
          Bay). I was responsible for the following duties:
          <ul className=" text-md my-4">
            {vtcDes.map((des, i) => (
              <li key={i}>
                {i + 1}. {des}
              </li>
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
