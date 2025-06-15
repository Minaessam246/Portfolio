import React from 'react'

export default function About() {
  return (
    <>
    <div className='flex justify-center  items-center pt-28 '>
<div className="flex  w-[80%] m-5 flex-wrap justify-around">
<img src="/view-3d-man-using-laptop_23-2150709796.jpg" className='w-[500] h-[500]  object-cover' alt="" />
<div className="w-[600px] m-3">
<h1 className='font-semibold text-4xl my-5 text-white ' >About Me</h1>
<h3 className='font-light text-xl text-white' >
I am a front-end web developer with a passion for creating interactive and responsive web applications.
 I have experience working with Next.js, React, Tailwind, Material UI, Bootstrap, Typescript, JavaScript , Redux, Sass, Jquery, HTML, CSS, 
 and Git. I am a quick learner and I am always looking 
to expand my knowledge and skill set. I am a team player and I am excited to work with others to create amazing applications.
</h3>
<h2 className='font-semibold text-xl text-white'>Certifications</h2>
<div className='h-1 bg-primary w-40 '></div>
<ul className='list-disc ml-3 '>
  <li className='text-white'>Front-End Development Diploma – Route IT Training Center 
  <a
            href="https://drive.google.com/file/d/1oGatCOkw2v2Q0AZEOrhsM92PvCriTn40/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="underline m-3 hover:text-gray-500"
          >
               View Certificate
          </a>

</li>
  <li className='text-white'>Redux in JavaScript and React – Coursera <a
            href="https://drive.google.com/file/d/1OmU4QuRpypXr_74yVeEfY_7lTxP6cNtP/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="underline m-3 hover:text-gray-500"
          >
               View Certificate
          </a></li>
  <li className='text-white'> Getting Started with Git and Github –  Coursera</li>

 
</ul>
</div>
    </div></div>
    </>
    
  )
}
