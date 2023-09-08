
import football from './svg/football.svg'
import basketball from './svg/basketball.svg'
import football2 from './svg/football2.svg'
import basketball2 from './svg/basketball2.svg'
import styled from 'styled-components'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <Layout>
        <div className=''>
          <ImgFootball
            src={football}
            alt='football'
          />
          <div className="bg-[#FFF]">
            <div className="flex">
              <div className="min-[767px]:basis-[38%] min-[1025px]:basis-[50%]">
              </div>
              <div className="min-[767px]:basis-[62%] min-[1025px]:basis-[50%]">
                <div className='pt-6 overflow-hidden font-normal text-[90px] text-[#E7E7E7]'>ATHLETS</div>
                <div className='flex gap-2 items-center'>
                  <div className=''>
                    <div className='font-normal text-lg'>01</div>
                    <div className='rounded-lg border-b-4 border-solid border-[#603EBE]'></div>
                  </div>
                  <div className='text-[#C2C2C2] font-normal text-4xl'>
                    CONNECTION
                  </div>
                </div>
                <div className='pt-8 pb-14 text-xl font-normal md:w-[85%]'>
                  Connect with coaches directly, you can ping coaches to view profile.
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F5F4F9]">
            <div className="flex">
              <div className="min-[767px]:basis-[38%] min-[1025px]:basis-[50%]"></div>
              <div className="min-[767px]:basis-[62%] min-[1025px]:basis-[50%] py-14">
                <div className='flex gap-2 items-center'>
                  <div className=''>
                    <div className='font-normal text-lg'>02</div>
                    <div className='rounded-lg border-b-4 border-solid border-[#603EBE]'></div>
                  </div>
                  <div className='text-[#C2C2C2] font-normal text-4xl'>
                    CONNECTION
                  </div>
                </div>
                <div className='pt-8 text-xl font-normal md:w-[85%]'>
                  Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#5E3DB3]">
            <div className="flex">
              <div className="min-[767px]:basis-[38%] min-[1025px]:basis-[50%]"></div>
              <div className="min-[767px]:basis-[62%] min-[1025px]:basis-[50%] py-14">
                <div className='flex gap-2 items-center'>
                  <div className=''>
                    <div className='font-normal text-lg'>03</div>
                    <div className='rounded-lg border-b-4 border-solid border-[#FFFFFF]'></div>
                  </div>
                  <div className='text-[#C2C2C2] font-normal text-4xl'>
                    GROWTH
                  </div>
                </div>
                <div className='pt-8 text-xl text-[#FFFFFF] font-normal md:w-[85%]'>
                  Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=''>
          <div className='overflow-hidden w-full h-[843px] absolute'>
            <ImgBasketball
              className=''
              src={basketball}
              alt='basketball'
            />
          </div>
          <div className="bg-[#FFF]">
            <div className="flex sm:pl-7 min-[1180px]:pl-7 min-[1279px]:pl-7 min-[1025px]:pl-64 min-[1439px]:pl-32">
              <div className="basis-[62%]">
                <div className='max-[768px]:pt-6 pt-28 overflow-hidden font-normal text-[90px] text-[#E7E7E7]'>PLAYERS</div>
                <div className='flex gap-2 items-center'>
                  <div className=''>
                    <div className='font-normal text-lg'>01</div>
                    <div className='rounded-lg border-b-4 border-solid border-[#603EBE]'></div>
                  </div>
                  <div className='text-[#C2C2C2] font-normal text-4xl'>
                    CONNECTION
                  </div>
                </div>
                <div className='pt-8 pb-14 text-xl font-normal md:w-[85%]'>
                  Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.
                </div>
              </div>
              <div className=" basis-[38%]">
              </div>
            </div>
          </div>
          <div className="bg-[#F5F4F9] ">
            <div className='flex sm:pl-7 min-[1180px]:pl-7 min-[1279px]:pl-7 min-[1025px]:pl-64 min-[1439px]:pl-32'>
              <div className="basis-[62%] py-14">
                <div className='flex gap-2 items-center'>
                  <div className=''>
                    <div className='font-normal text-lg'>02</div>
                    <div className='rounded-lg border-b-4 border-solid border-[#603EBE]'></div>
                  </div>
                  <div className='text-[#C2C2C2] font-normal text-4xl'>
                    COLLABORATION
                  </div>
                </div>
                <div className='pt-8 text-xl font-normal md:w-[85%]'>
                  Work with recruiter to increase your chances of findingtalented athlete.
                </div>
              </div>
              <div className="basis-[38%]"></div>
            </div>
          </div>
          <div className="bg-[#090C35]">
            <div className="flex sm:pl-7 min-[1180px]:pl-7 min-[1279px]:pl-7 min-[1025px]:pl-64 min-[1439px]:pl-32">
              <div className="basis-[62%] py-14">
                <div className='flex gap-2 items-center'>
                  <div className=''>
                    <div className='font-normal text-lg text-[#8765DD]'>03</div>
                    <div className='rounded-lg border-b-4 border-solid border-[#FFFFFF]'></div>
                  </div>
                  <div className='text-[#C2C2C2] font-normal text-4xl'>
                    GROWTH
                  </div>
                </div>
                <div className='pt-8 text-xl font-normal text-[#FFF] md:w-[85%]'>
                  Save your time, recruit proper athlets for your team.
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
      <Carousel>
        <div>
          <div>
            <div className='pt-2 pl-8 overflow-hidden font-normal text-[50px] text-[#E7E7E7]'>ATHLETS</div>
            <div className='h-[220px] flex justify-center'>
              <img
                className='absolute z-[100000]'
                src={football2}
                alt='football2'
              />
            </div>
          </div>
          <div className=' w-full overflow-hidden h-[340px]'>
            <Slider {...settings}>
              <div className="bg-[#F5F4F9]">
                <div className="py-16 px-4 h-[340px]">
                  <div className='flex gap-2 items-center'>
                    <div className=''>
                      <div className='font-normal text-lg'>01</div>
                      <div className='rounded-lg border-b-4 border-solid border-[#603EBE]'></div>
                    </div>
                    <div className='text-[#C2C2C2] font-normal text-[28px]'>
                      CONNECTION
                    </div>
                  </div>
                  <div className='pt-8 text-lg font-normal md:w-[85%]'>
                    Connect with coaches directly, you can ping coaches to view profile.
                  </div>
                </div>
              </div>
              <div className="bg-[#F5F4F9] h-[340px]">
                <div className="py-16 px-4">
                  <div className='flex gap-2 items-center'>
                    <div className=''>
                      <div className='font-normal text-lg'>02</div>
                      <div className='rounded-lg border-b-4 border-solid border-[#603EBE]'></div>
                    </div>
                    <div className='text-[#C2C2C2] font-normal text-[28px]'>
                      COLLABORATION
                    </div>
                  </div>
                  <div className='pt-8 text-lg font-normal md:w-[85%]'>
                    Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.
                  </div>
                </div>
              </div>
              <div className="bg-[#F5F4F9] h-[340px]">
                <div className="py-16 px-4">
                  <div className='flex gap-2 items-center'>
                    <div className=''>
                      <div className='font-normal text-lg'>03</div>
                      <div className='rounded-lg border-b-4 border-solid border-[#603EBE]'></div>
                    </div>
                    <div className='text-[#C2C2C2] font-normal text-[28px]'>
                      GROWTH
                    </div>
                  </div>
                  <div className='pt-8 text-lg font-normal md:w-[85%]'>
                    Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc 
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div>
          <div>
            <div className='pt-2 pl-8 overflow-hidden font-normal text-[50px] text-[#E7E7E7]'>PLAYERS</div>
            <div className='h-[220px] flex justify-center'>
              <img
                className='absolute z-[100000]'
                src={basketball2}
                alt='basketball2'
              />
            </div>
          </div>
          <div className=' w-full overflow-hidden h-[340px]'>
            <Slider {...settings}>
              <div className="bg-[#F5F4F9]">
                <div className="py-16 px-4 h-[340px]">
                  <div className='flex gap-2 items-center'>
                    <div className=''>
                      <div className='font-normal text-lg'>01</div>
                      <div className='rounded-lg border-b-4 border-solid border-[#603EBE]'></div>
                    </div>
                    <div className='text-[#C2C2C2] font-normal text-[28px]'>
                      COLLABORATION
                    </div>
                  </div>
                  <div className='pt-8 text-lg font-normal md:w-[85%]'>
                    Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.
                  </div>
                </div>
              </div>
              <div className="bg-[#F5F4F9] h-[340px]">
                <div className="py-16 px-4">
                  <div className='flex gap-2 items-center'>
                    <div className=''>
                      <div className='font-normal text-lg'>02</div>
                      <div className='rounded-lg border-b-4 border-solid border-[#603EBE]'></div>
                    </div>
                    <div className='text-[#C2C2C2] font-normal text-[28px]'>
                      COLLABORATION
                    </div>
                  </div>
                  <div className='pt-8 text-lg font-normal md:w-[85%]'>
                    Work with recruiter to increase your chances of findingtalented athlete.
                  </div>
                </div>
              </div>
              <div className="bg-[#F5F4F9] h-[340px]">
                <div className="py-16 px-4">
                  <div className='flex gap-2 items-center'>
                    <div className=''>
                      <div className='font-normal text-lg'>03</div>
                      <div className='rounded-lg border-b-4 border-solid border-[#603EBE]'></div>
                    </div>
                    <div className='text-[#C2C2C2] font-normal text-[28px]'>
                      GROWTH
                    </div>
                  </div>
                  <div className='pt-8 text-lg font-normal md:w-[85%]'>
                    Save your time, recruit proper athlets for your team.
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </Carousel>
    </>

  );
}

const Layout = styled.div`
  @media screen and (max-width:640px) {
    display:none !important;
  }
  @media (max-width:640px) {
    display:none !important;
  }
`
const ImgFootball = styled.img`
  @media (max-width: 768px) {
    width:498px;
    height:850px;
    position:absolute;
    left:-165px;
  }

  @media (max-width: 1024px) {
    width:498px !important;
    height:850px !important;
    position:absolute !important;
    left:-165px !important;
  }

  @media (max-width: 1440px) {
    width:578px;
    height:850px;
    position:absolute;
    top:35px;
    left:10px;
  }

  width:578px;
  height:850px;
  position:absolute;
  top:35px;
  left:175px;
`
const ImgBasketball = styled.img`
  @media (max-width: 1440px) {
    right: 15px !important;
    bottom: 50px !important;
  }

  @media (max-width: 1024px) {
    right: -170px !important;
    bottom: 50px !important;
  }

  @media (max-width: 820px) {
    right: -280px !important;
    bottom: 36px !important;
  }

  @media (max-width: 768px) {
    width: 691px !important;
    right: -255px !important;
    bottom: 120px !important;
  }

  @media (max-width: 640px) {
    right: 50px !important;
    bottom: 50px !important;
    width: 778px;
    height: 850px;
  }

  position: absolute;
  margin-left: -200px;
  width: 778px;
  height: 850px;
  right: 130px;
  bottom: 50px;
  z-index: 100000;
`
const Carousel = styled.div`
  @media screen and (min-width:641px) {
    display:none !important;
  }
  @media (min-width:641px) {
    display:none !important;
  }
`

export default App;
