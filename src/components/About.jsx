import Section from "./Common/Section"
const About = () => {


  return (
      <div className="card md:w-2/3 mx-auto pt-6  mt-8 font-sans bg-base-100 shadow-xl dark:text-white dark:bg-slate-800">
      <Section title="About Me" subTitle="Get To Know " />
        <div className="card-body">
          <p className=" font-light dark:text-gray-100 text-lg md:px-36">Welcome to my portfolio! I am Arjuman Jesmin, a MERN stack developer passionate about creating dynamic web applications. I recently completed an intensive web development course at Programming Hero, where I sharpened my skills in the MERN stack. With a strong foundation in JavaScript, I excel at crafting interactive and responsive user interfaces. I also hold a degree in Social Science from National University. By combining my education with hands-on experience in MongoDB, Express.js, React, and Node.js, I deliver robust and scalable solutions. I stay updated with the latest industry trends to ensure cutting-edge projects.</p>

        </div>
      </div>

  );
};

export default About;

