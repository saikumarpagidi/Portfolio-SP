import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
   {
    job: "Java Full Stack Trainee",
    company: "C-DAC",
    date: "2024 - Present",
    responsibilities: [
      "Designed and developed a feature-rich LMS enabling admins to create structured courses (modules, topics, resources) and assign them to students, with integrated quizzes for progress assessment.",
    ],
  },
  // {
  //   job: "Java Full Stack Trainee",
  //   company: "C-DAC",
  //   date: "2024 - Present",
  //   responsibilities: [
  //     "Designed and developed a feature-rich LMS enabling admins to create structured courses (modules, topics, resources) and assign them to students, with integrated quizzes for progress assessment.",
  //   ],
  // },
  
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;