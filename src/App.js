
import football from './svg/football.svg'
import basketball from './svg/basketball.svg'
import basketball2 from './svg/basketball2.svg'
import styled from 'styled-components'
import { useState } from 'react';

function App() {
  const [active, setActive] = useState(1);
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
              <div className="basis-[38%]">
              </div>
              <div className="basis-[62%]">
                <div className='pt-6 overflow-hidden font-normal text-[90px] text-[#E7E7E7]'>ATHLETS</div>
                <div className='flex gap-2 items-center'>
                  <div className=''>
                    <div className='font-normal text-lg'>01</div>
                    <div className='rounded-lg border-b-4 border-solid border-[#603EBE]'></div>
                  </div>
                  <div className='text-[#C2C2C2] font-normal text-3xl'>
                    CONNECTION
                  </div>
                </div>
                <div className='pt-8 pb-14 text-lg font-normal md:w-[85%]'>
                  Connect with coaches directly, you can ping coaches to view profile.
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#F5F4F9]">
            <div className="flex">
              <div className="basis-[38%]"></div>
              <div className="basis-[62%] py-14">
                <div className='flex gap-2 items-center'>
                  <div className=''>
                    <div className='font-normal text-lg'>02</div>
                    <div className='rounded-lg border-b-4 border-solid border-[#603EBE]'></div>
                  </div>
                  <div className='text-[#C2C2C2] font-normal text-3xl'>
                    CONNECTION
                  </div>
                </div>
                <div className='pt-8 text-lg font-normal md:w-[85%]'>
                  Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#5E3DB3]">
            <div className="flex">
              <div className="basis-[38%]"></div>
              <div className="basis-[62%] py-14">
                <div className='flex gap-2 items-center'>
                  <div className=''>
                    <div className='font-normal text-lg'>03</div>
                    <div className='rounded-lg border-b-4 border-solid border-[#FFFFFF]'></div>
                  </div>
                  <div className='text-[#C2C2C2] font-normal text-3xl'>
                    GROWTH
                  </div>
                </div>
                <div className='pt-8 text-lg font-normal md:w-[85%]'>
                  Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=''>
          <ImgBasketball>
            <img
              className=''
              src={basketball}
              alt='basketball'
            />
          </ImgBasketball>
          <div className="bg-[#FFF]">
            <div className="flex sm:pl-7 min-[1025px]:pl-24">
              <div className="basis-[62%]">
                <div className='max-[768px]:pt-6 pt-28 overflow-hidden font-normal text-[90px] text-[#E7E7E7]'>PLAYERS</div>
                <div className='flex gap-2 items-center'>
                  <div className=''>
                    <div className='font-normal text-lg'>01</div>
                    <div className='rounded-lg border-b-4 border-solid border-[#603EBE]'></div>
                  </div>
                  <div className='text-[#C2C2C2] font-normal text-3xl'>
                    CONNECTION
                  </div>
                </div>
                <div className='pt-8 pb-14 text-lg font-normal md:w-[85%]'>
                  Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.
                </div>
              </div>
              <div className=" basis-[38%]">
              </div>
            </div>
          </div>
          <div className="bg-[#F5F4F9] ">
            <div className='flex sm:pl-7 min-[1025px]:pl-24'>
              <div className="basis-[62%] py-14">
                <div className='flex gap-2 items-center'>
                  <div className=''>
                    <div className='font-normal text-lg'>02</div>
                    <div className='rounded-lg border-b-4 border-solid border-[#603EBE]'></div>
                  </div>
                  <div className='text-[#C2C2C2] font-normal text-3xl'>
                    CONNECTION
                  </div>
                </div>
                <div className='pt-8 text-lg font-normal md:w-[85%]'>
                  Work with other student athletes to  increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.
                </div>
              </div>
              <div className="basis-[38%]"></div>
            </div>
          </div>
          <div className="bg-[#090C35]">
            <div className="flex sm:pl-7 min-[1025px]:pl-24">
              <div className="basis-[62%] py-14">
                <div className='flex gap-2 items-center'>
                  <div className=''>
                    <div className='font-normal text-lg text-[#8765DD]'>03</div>
                    <div className='rounded-lg border-b-4 border-solid border-[#FFFFFF]'></div>
                  </div>
                  <div className='text-[#C2C2C2] font-normal text-3xl'>
                    GROWTH
                  </div>
                </div>
                <div className='pt-8 text-lg font-normal text-[#FFF] md:w-[85%]'>
                  Save your time, recruit proper athlets for your team.
                </div>
              </div>
              <div className="basis-[38%]"></div>
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
                src={basketball2}
                alt='basketball2'
              />
            </div>
          </div>
          <section class="carousel">
            <ol class="carousel__viewport">
              <li id="carousel__slide1" class="carousel__slide">
                <div class="carousel__snapper">
                  awdawdwad
                </div>
              </li>
              <li id="carousel__slide2" class="carousel__slide">
                <div class="carousel__snapper"></div>
              </li>
              <li id="carousel__slide3"

                class="carousel__slide">
                <div class="carousel__snapper"></div>
              </li>
              <li id="carousel__slide4"

                class="carousel__slide">
                <div class="carousel__snapper"></div>
              </li>
            </ol>
            <aside class="carousel__navigation">
              <ol class="carousel__navigation-list">
                <li class="carousel__navigation-item">
                  <a 
                    onClick={(e)=>{console.log(e)}}
                    style={{backgroundColor: active === '1' ? '#5C3CAF': '#D8D8D8'}} 
                    href="#carousel__slide1"
                    class="carousel__navigation-button">
                      Go to slide 1
                  </a>
                </li>
                <li class="carousel__navigation-item">
                <a 
                    onClick={(e)=>{console.log(e)}}
                    style={{backgroundColor: active === '2' ? '#5C3CAF': '#D8D8D8'}} 
                    href="#carousel__slide2"
                    class="carousel__navigation-button">
                      Go to slide 2
                  </a>
                </li>
                <li class="carousel__navigation-item">
                  <a style={{backgroundColor: active === '1' ? '#5C3CAF': '#D8D8D8'}} href="#carousel__slide3"
                    class="carousel__navigation-button">Go to slide 3</a>
                </li>
                <li class="carousel__navigation-item">
                  <a style={{backgroundColor: active === '1' ? '#5C3CAF': '#D8D8D8'}} href="#carousel__slide4"
                    class="carousel__navigation-button">Go to slide 4</a>
                </li>
              </ol>
            </aside>
          </section>
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
    left:-200px;
  }

  @media (max-width: 1024px) {
    width:498px !important;
    height:850px !important;
    position:absolute !important;
    left:-200px !important;
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
  left:75px;
`
const ImgBasketball = styled.div`
  @media (max-width: 1024px) {
    img {
      right: -170px !important;
      bottom: 50px !important;
    }
  }

  @media (max-width: 768px) {
    img {
      right: -270px !important;
      bottom: 130px !important;
    }
  }

  @media (max-width: 640px) {
    img {
      right: 50px !important;
      bottom: 50px !important;
      width: 778px;
      height: 850px;
    }
  }

  img {
    position: absolute;
    margin-left: -200px;
    width: 778px;
    height: 850px;
    right: 50px;
    bottom: 50px;
  }

  width:100%;
  height:843px;
  overflow: hidden;
  position: absolute;
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
