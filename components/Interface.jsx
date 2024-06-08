/** @format */
'use client';
import { motion } from 'framer-motion';
import { useAtom } from 'jotai';
import { currentProjectAtom, projects } from './Projects';
import {
  FaLinkedin,
  FaGithub,
  FaTelegram,
  FaTwitter,
  FaWhatsapp,
  FaEnvelope,
  FaEthereum,
  FaBitcoin,
  FaDonate,
} from 'react-icons/fa';
import { SiEthereum, SiHashnode, SiLinktree } from 'react-icons/si';
const Section = (props) => {
  const { children, mobileTop } = props;

  return (
    <motion.section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl mx-auto
  flex flex-col items-start
  ${mobileTop ? 'justify-start md:justify-center' : 'justify-center'}
  `}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 1,
          delay: 0.6,
        },
      }}>
      {children}
    </motion.section>
  );
};

export const Interface = (props) => {
  const { setSection } = props;
  return (
    <div className='flex flex-col items-center w-screen'>
      <AboutSection setSection={setSection} />
      <SkillsSection />
      <ProjectsSection />
    </div>
  );
};

const AboutSection = (props) => {
  const { setSection } = props;
  return (
    <Section mobileTop>
      <h1 className='text-4xl md:text-6xl font-extrabold leading-snug mt-8 md:mt-0'>
        👋 ٱلسَّلَامُ عَلَيْكُمْ
        <br />
        <br />
        <span className='px-1 italic text-4xl bg-white font-serif flex gap-1 items-center rounded-md mx-auto text-center w-max'>
          <SiEthereum />
          moayaan.eth
          <SiEthereum />
        </span>
      </h1>
      <motion.p
        className='text-lg text-gray-700 mt-4 font-semibold'
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 1.5,
        }}>
        Hello everyone, I am Mohammad Ayaan Siddiqui,
        <br />a SELF-TAUGHT Full Stack Blockchain Developer,
        <br />
        <div className='flex items-center'>
          Crypto Enthusiast and Decentralization MAXI
          <FaEthereum />
          <FaBitcoin />
        </div>
      </motion.p>
      <motion.div
        className='flex space-x-4 mt-4'
        initial={{
          opacity: 100,
          zIndex: 999,
          y: 25,
        }}
        whileInView={{
          opacity: 100,
          zIndex: 999,
          y: 0,
        }}
        transition={{
          duration: 1,
          delay: 2,
        }}>
        <a
          href='https://www.linkedin.com/in/ayaaneth'
          target='_blank'
          rel='noopener noreferrer'>
          <FaLinkedin size='2em' />
        </a>
        <a
          href='https://github.com/moayaan1911'
          target='_blank'
          rel='noopener noreferrer'>
          <FaGithub size='2em' />
        </a>
        <a
          href='https://t.me/usdisshitcoin'
          target='_blank'
          rel='noopener noreferrer'>
          <FaTelegram size='2em' />
        </a>
        <a
          href='https://twitter.com/web3guideindia'
          target='_blank'
          rel='noopener noreferrer'>
          <FaTwitter size='2em' />
        </a>
        <a
          href='https://wa.me/+917388290798'
          target='_blank'
          rel='noopener noreferrer'>
          <FaWhatsapp size='2em' />
        </a>
        <a
          href='mailto:ayaangames@gmail.com'
          target='_blank'
          rel='noopener noreferrer'>
          <FaEnvelope size='2em' />
        </a>
        <a
          href='https://moayaan.hashnode.dev'
          target='_blank'
          rel='noopener noreferrer'>
          <SiHashnode size='2em' />
        </a>
        <a
          href='https://linktr.ee/ayaaneth'
          target='_blank'
          rel='noopener noreferrer'>
          <SiLinktree size='2em' />
        </a>
        <a
          href='https://donate.unrwa.org/gaza/~my-donation'
          target='_blank'
          rel='noopener noreferrer'>
          <FaDonate
            size={'2em'}
            color='green'
          />
        </a>
      </motion.div>
    </Section>
  );
};

const mergedSkills = [
  {
    title: 'Next.js',
    level: 90,
  },
  {
    title: 'Solidity',
    level: 70,
  },
  {
    title: 'Hardhat/Foundry',
    level: 80,
  },
  {
    title: 'web3.js/ethers.js',
    level: 80,
  },
  {
    title: 'MERN',
    level: 80,
  },
  {
    title: 'Typescript/Javascript',
    level: 80,
  },
  {
    title: 'Git/Github',
    level: 80,
  },
  {
    title: 'Docker',
    level: 50,
  },

  {
    title: 'Rust / Solana',
    level: 60,
  },
];

const experiences = [
  {
    period: 'December 2021 - March 2022',
    company: 'EmergentX',
    role: 'Research Intern',
  },
  {
    period: 'July 2022 - August 2022',
    company: 'Loop Technologies',
    role: 'Smart Contract Trainee',
  },
  {
    period: 'December 2022 - March 2024',
    company: 'D Frame Foundation',
    role: 'Full Stack Blockchain Developer',
  },
  {
    period: 'April 2024 - current',
    company: 'Cypherock',
    role: 'Full Stack web3 Developer',
  },
];
const SkillsSection = () => {
  return (
    <Section>
      <motion.div
        className='w-full'
        whileInView={'visible'}>
        <h2 className='text-3xl md:text-5xl font-bold text-white mt-[35rem]'>
          Skills
        </h2>
        <div className='mt-2 space-y-4'>
          {mergedSkills.map((skill, index) => (
            <div
              className='w-full md:w-64'
              key={index}>
              <motion.h3
                className='text-lg md:text-xl font-bold text-gray-100'
                initial={{ opacity: 0 }}
                variants={{
                  visible: {
                    opacity: 1,
                    transition: {
                      duration: 1,
                      delay: 1 + index * 0.2,
                    },
                  },
                }}>
                {skill.title}
              </motion.h3>
              <div className='h-2 w-full bg-gray-200 rounded-full mt-2'>
                <motion.div
                  className='h-full bg-indigo-500 rounded-full'
                  style={{ width: `${skill.level}%` }}
                  initial={{ scaleX: 0, originX: 0 }}
                  variants={{
                    visible: {
                      scaleX: 1,
                      transition: {
                        duration: 1,
                        delay: 1 + index * 0.2,
                      },
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className='mt-20'>
          <h2 className='text-3xl md:text-5xl font-bold text-white'>
            Work Experience
          </h2>
          <div className='mt-8 space-y-4'>
            {experiences.map((experience, index) => (
              <motion.div
                className='bg-white bg-opacity-10 p-6 rounded-lg shadow-md'
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 + index * 0.2 }}>
                <h3 className='text-xl font-bold text-white'>
                  {experience.company}
                </h3>
                <p className='text-md text-gray-300 italic'>
                  {experience.period}
                </p>
                <p className='text-md text-white bg-blue-200 rounded-md p-1 w-max'>
                  {experience.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

const ProjectsSection = () => {
  const [currentProject, setCurrentProject] = useAtom(currentProjectAtom);

  const nextProject = () => {
    setCurrentProject((currentProject + 1) % projects.length);
  };

  const previousProject = () => {
    setCurrentProject((currentProject - 1 + projects.length) % projects.length);
  };

  return (
    <Section>
      <div className='flex w-full h-full gap-8 items-center justify-center pt-[82rem]'>
        <button
          className='hover:text-indigo-600 transition-colors'
          onClick={previousProject}>
          ← Previous
        </button>
        <h2 className='text-3xl md:text-5xl font-bold'>Projects</h2>
        <button
          className='hover:text-indigo-600 transition-colors'
          onClick={nextProject}>
          Next →
        </button>
      </div>
    </Section>
  );
};
