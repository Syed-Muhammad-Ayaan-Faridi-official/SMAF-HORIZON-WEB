import React from 'react'
import { ArrowRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import SSK from '../../assets/images/Teachers/SirShahzaibKhan.png'
import HMZ from '../../assets/images/Teachers/CSBYHMZ.png'
import missNawal from '../../assets/images/Teachers/MissNawalKhurram.png'
import sirAdeel from '../../assets/images/Teachers/SirAdeelPaperwala.png'
import sirAli from '../../assets/images/Teachers/SirAliRaza.png'
import sirAwais from '../../assets/images/Teachers/SirAwaisSyed.png'
import sirAyaz from '../../assets/images/Teachers/SirAyazRao.png'
import sirBilal from '../../assets/images/Teachers/SirBilalBashir.png'
import sirCyrus from '../../assets/images/Teachers/SirCyrus.png'
import sirFahadAli from '../../assets/images/Teachers/SirFahadAli.png'
import sirFahadMunaf from '../../assets/images/Teachers/SirfahadMunaf.png'
import sirHamza from '../../assets/images/Teachers/SirHamzaAli.png'
import sirMaaz from '../../assets/images/Teachers/SirMaazAhmed.png'
import sirKamran from '../../assets/images/Teachers/SirKamranShakir.png'
import sirHassan from '../../assets/images/Teachers/SirHassanYousuf.png'
import sirHarisJ from '../../assets/images/Teachers/SirHarisJabbar.png'
import sirMahad from '../../assets/images/Teachers/SirMahadAmer.png'
import sirMoiz from '../../assets/images/Teachers/SirMoizKali.png'
import sirMurad from '../../assets/images/Teachers/SirMuradSesodia.png'
import sirRizwan from '../../assets/images/Teachers/SirRizwanHaider.png'
import sirSohail from '../../assets/images/Teachers/SirSohailAhmed.png'
import sirSuhail from '../../assets/images/Teachers/SirSuhailAziz.png'
import sirUmair from '../../assets/images/Teachers/SirUmairAhmed.png'
import sirUmer from '../../assets/images/Teachers/SirUmerSoni.png'
import sirWaqas from '../../assets/images/Teachers/SirWaqasAshraf.png'
import missLaiba from '../../assets/images/Teachers/MissLaiba.png'
import sirGhazi from '../../assets/images/Teachers/SirGhazi.png'
import SWK from '../../assets/images/Teachers/SirWaqasKhan.png'


const teacherData = [
  {
  name: 'Sir Waqas Khan',
  image: SWK,
  subject: 'O/A Levels Mathematics'
  },
  {
  name: 'Sir Murad Sesodia',
  image: sirMurad,
  subject: 'O/A Levels Mathematics'
  },
  {
  name: 'Sir Ayaz Rao',
  image: sirAyaz,
  subject: 'O/A Levels Maths & AddMaths'
  },
  {
  name: 'Sir Mahad Amer',
  image: sirMahad,
  subject: 'O/A Levels Physics'
  },
  {
  name: 'Sir Fahad Ali',
  image: sirFahadAli,
  subject: 'O/A Levels  Physics'
  },
  {
  name: 'Sir Cyrus Ishaq',
  image: sirCyrus,
  subject: 'O/A Levels Physics'
  },
  {
  name: 'Sir Ghazi Hassan',
  image: sirGhazi,
  subject: 'O/A Levels Chemistry'
  },
  {
  name: 'Sir Kamran Shakir',
  image: sirKamran,
  subject: 'O/A Levels Chemistry'
  },
  {
  name: 'Sir Suhail Aziz',
  image: sirSuhail,
  subject: 'O/A Levels Chemistry'
  },
  {
  name: 'Sir Awais Syed',
  image: sirAwais,
  subject: 'O/A Levels Chemistry/Biology'
  },
  {
  name: 'Sir Umer Soni',
  image: sirUmer,
  subject: 'O Levels Biology'
  },
  {
  name: 'Sir Haris Jabbar',
  image: sirHarisJ,
  subject: 'O/A Levels Biology'
  },
  {
  name: 'Sir CS BY HAMZA',
  image: HMZ,
  subject: 'O/A Levels Computer Science'
  },
  {
  name: 'Sir Maaz Ahmed',
  image: sirMaaz,
  subject: 'O/A Levels Computer Science'
  },
  {
  name: 'Sir Shahzaib Khan',
  image: SSK,
  subject: 'O Levels English Second Language'
  },
  {
  name: 'Sir Ali Raza',
  image: sirAli,
  subject: 'O/A Levels Accounting'
  },
  {
  name: 'Sir Adeel Paperwala',
  image: sirAdeel,
  subject: 'O/A Levels Accounting'
  },
  {
  name: 'Sir Sohail Ahmed',
  image: sirSohail,
  subject: 'O/A Levels Business Studies'
  },
  {
  name: 'Sir Bilal Basheer',
  image: sirBilal,
  subject: 'O/A Levels Economics'
  },
  {
  name: 'Sir Fahad Munaf',
  image: sirFahadMunaf,
  subject: 'O/A Levels Economics'
  },
  {
  name: 'Sir Hamza Ali',
  image: sirHamza,
  subject: 'O Levels Pakistan Studies'
  },
  {
  name: 'Sir Waqas Ashraf',
  image: sirWaqas,
  subject: 'O Levels Pakistan Studies'
  },
  {
  name: 'Sir Hassan Yousuf',
  image: sirHassan,
  subject: 'O Levels Pakistan Studies'
  },
  {
  name: 'Sir Rizwan Haider',
  image: sirRizwan,
  subject: 'O Levels Urdu Syllabus-B'
  },
  {
  name: 'Sir Moiz Kali',
  image: sirMoiz,
  subject: 'O Levels Urdu Syllabus-B'
  },
  {
  name: 'Sir Umair Ahmed',
  image: sirUmair,
  subject: 'O Levels Islamiyat'
  },
  {
  name: 'Miss Nawal Khurram',
  image: missNawal,
  subject: 'O Levels English Second Language'
  },
  {
  name: 'Miss Laiba',
  image: missLaiba,
  subject: 'A Levels Psychology'
  },
]
const TeachersCard = () => {
  return (
    <div className='w-full h-full bg-[#152331] flex flex-col max-md:px-5 md:px-9 gap-5 max-sm:pt-10 pt-20 pb-10 '>
      <div className='w-full flex flex-col max-sm:items-center gap-2'>
        <h1 className='w-fit text-lg lg:text-xl 2xl:text-3xl font-bold text-[#FBCE40] relative px-8 py-2 sm:py-3 rounded-full bg-linear-to-br from-[#000000]/70 via-[#011a33]/10 to-[#152331] border border-white/10 shadow-[#6c5300] shadow-md 2xl:px-12 2xl:py-5'>Our Expert Faculty</h1>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl md:w-[75%]  max-sm:text-center text-white font-bold'>Meet 25+ Expert <span className='text-yellow-200'>Teachers</span></h1>
        <h3 className='text-lg text-gray-500 max-sm:text-center'>Learn from experienced O/A Level teachers dedicated to helping students excel through engaging lessons, personalized guidance, and proven teaching strategies.</h3>
      </div>
      <div className='no-scrollbar flex flex-row overflow-auto gap-3'>
        {teacherData.map((teacher,index)=>(
          <div 
          key={index} 
          className='relative min-w-75 max-w-80 max-sm:w-70 h-110 rounded-3xl object-cover bg-emerald-900'>
            <img src={teacher.image} alt="" className='object-top h-full w-full rounded-2xl' />
            <div className='w-full h-full absolute bottom-0 left-0 rounded-2xl z-10 bg-linear-to-t from-[#000000]/70 via-white/10 to-transparent flex flex-col justify-end px-2 py-2'>
              <h1 className='text-2xl text-[#ffa800] font-bold'>{teacher.name}</h1>
              <h1 className='text-sm text-[#ffa800] font-semibold'>{teacher.subject}</h1>
            </div>
          </div>
        ))}
      </div>
      <div className='w-full flex flex-col gap-3'>
        <h1 className='w-full text-xl flex items-center text-gray-500'>Scroll to view more <ArrowRight size={22}/></h1>
        <NavLink to={"/faculty"}>
        <button className='text-gray-900 w-fit border border-[#ffa800] bg-linear-to-t from-yellow-300 to-[#ffa800] px-4 py-2 rounded-md font-semibold cursor-pointer hover:scale-95 flex items-center gap-1 transition duration-300 2xl:text-2xl 2xl:py-4'>View Faculty<ArrowRight size={18} strokeWidth={3} /></button>
        </NavLink>
      </div>
    </div>
  )
}

export default TeachersCard