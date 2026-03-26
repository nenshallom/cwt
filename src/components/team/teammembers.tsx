import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

const team = [
  {
    id: 1,
    image: '/ceo.jpg',
    name: 'Abdulrahman Sadiq',
    position: 'CEO & Founder'
  },
  {
    id: 2,
    image: '/cto.jpg',
    name: 'Ogala Mohammed',
    position: 'Software Developer & Co-Founder'
  },
  {
    id: 3,
    image: '/cfo.jpg',
    name: 'Abdulrahman Halima',
    position: 'CFO'
  },
  {
    id: 4,
    image: '/josh.jpg',
    name: 'Joshua Ogbole',
    position: 'Software Developer'
  },
  {
    id: 5,
    image: '/nox.jpg',
    name: 'Timothy Iliya',
    position: 'Frontend Developer'
  },
  {
    id: 5,
    image: '/ellie.jpg',
    name: 'Daniel Elijah',
    position: 'UI/UX Designer'
  },
]

interface TeamMateProps {
  image: string;
  name: string;
  position: string;
}

const TeamMate: React.FC<TeamMateProps> = ({image, name, position}) => (
  <Link href='' className='text-center group relative h-fit ease-in-out duration-200 tran_filter'>
    <Image width={500} height={500} src={image} alt='team' className='rounded-full w-[350px] h-[350px] mx-auto object-cover'/>
    <h4 className="text-[22px] font-syne my-5">{name}</h4>
    <p className="text-[15px] font-sora text-[#12182066] group-hover:text-[#92519c] ease-in-out duration-200">{position}</p>
    <div className=' absolute top-0 left-0 w-full h-full bottom-2'>
      <div className='h-[150px] w-[150px] bg-[#92519c] absolute bottom-20 right-10 lg:right-5 rounded-full ease-in-out invisible  duration-300 group-hover:visible group-hover:translate-x-10'></div>
    </div>
  </Link>
)

const Teammembers = () => {
  return (
    <div>
        <h3 className="text-center text-[26px] font-syne py-28">Our Team of administrators aimed at <span className="text-[#92519c]">pursuing excellence <br/> </span> and delivering the best of services.</h3>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 items-center gap-32'>
          {team.map((team, index) => (
            <TeamMate key={index} image={team.image} name={team.name} position={team.position}/>
          ))}
        </div>
    </div>
  )
}

export default Teammembers