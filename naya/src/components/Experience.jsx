import React from 'react';
import BV from '../Images/bvlogo.png';
import REU from '../Images/reulogo.png';
import Presentation from '../Images/presentation.jpg';
import Induction from '../Images/inductionme.png';
import GB from '../Images/gameboy.png';
import tam from '../Images/tamsticker.png';

const Experience = () => {
  return (
    <div class='work'>
      <h1 class='text-light text-center m-5'>Previous Experience</h1>
      <div class='card p-2 m-5 mx-auto rounded-5' style={{ maxWidth: '900px' }}>
        <div class='row g-0'>
          <h5 class='card-title pt-3 fw-bold text-center'>
            Student Volunteer: The CAT - Computer Action Team
          </h5>
          <p class='fst-italic text-center'>
            Portland State University: September 2021 - Present
          </p>
          <div class='col-md-4 p-1'>
            <div class='carousel slide' data-bs-ride='carousel'>
              <div class='carousel-inner' id='cat'>
                <div class='carousel-item active'>
                  <img
                    src='Images/catimg.png'
                    class='img-fluid w-100'
                    alt='CAT logo'
                  />
                </div>
                <div class='carousel-item'>
                  <img
                    src={Induction}
                    class='img-fluid w-100'
                    alt='Me first day at the CAT'
                  />
                </div>
              </div>
            </div>
          </div>
          <div class='col-md-8'>
            <div class='card-body'>
              <p class='card-text mt-1'>
                The IT department that provides support for Maseeh College of
                Engineering and Computer Science at Portland State Univeristy.
              </p>
              <ul>
                <li>
                  Delivered IT support to fellow students, faculty, and staff
                  in-person and remotely. My assistance consisted of: managing
                  and accessing their MCECS accounts, guidance on connecting
                  remotely to our servers for their courses, and handling daily
                  support tickets.
                </li>
                <br />
                <li>
                  Learned about computer infrastructures such as Windows and
                  Linux. Excellent understanding on navigating the Intranet and
                  various tools provided.
                </li>
                <br />
                <li>
                  Promoted to the administration team based on my leadership and
                  communication skills. Immersed into the inner workings of the
                  CAT. Assisted in a wide range of tasks that helps keep the CAT
                  functioning smoothly and a positive environment for everyone.
                </li>
                <br />
                <li>
                  Involved in the graphic design team by managing social media
                  accounts, creating newsletters, and utilizing graphic design
                  programs for various events/projects. Designed the 2022
                  sticker for the CAT using Procreate.
                </li>
              </ul>

              <div class='accordion accordion-flush' id='accordionFlushExample'>
                <div class='accordion-item'>
                  <h2 class='accordion-header' id='flush-headingOne'>
                    <button
                      class='accordion-button collapsed'
                      type='button'
                      data-bs-toggle='collapse'
                      data-bs-target='#flush-collapseOne'
                      aria-expanded='false'
                      aria-controls='flush-collapseOne'
                    >
                      Click To View 2022 CAT Sticker Designs
                    </button>
                  </h2>
                  <div
                    id='flush-collapseOne'
                    class='accordion-collapse collapse'
                    aria-labelledby='flush-headingOne'
                    data-bs-parent='#accordionFlushExample'
                  >
                    <div class='accordion-body'>
                      <div class='row'>
                        <div class='col-sm-7'>
                          <img
                            id='sticker'
                            src={tam}
                            class='img-fluid'
                            alt='tamagotchi sticker for CAT'
                          />
                        </div>
                        <div class='col-sm-5 mt-3'>
                          <img
                            id='sticker'
                            src={GB}
                            class='img-fluid'
                            alt='Gameboy sticker for CAT'
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class='card p-2 m-5 mx-auto rounded-5' style={{ maxWidth: '900px' }}>
        <div class='row g-0'>
          <h5 class='card-title pt-3 fw-bold text-center'>
            NSF REU Intern: Computational Modeling Serving the City
          </h5>
          <h6 class='fst-italic text-center'>
            Portland State University: Summer 2018
          </h6>
          <div class='col-md-5 p-1'>
            <div class='carousel slide' data-bs-ride='carousel'>
              <div class='carousel-inner' id='reu'>
                <div class='carousel-item active'>
                  <img
                    src={REU}
                    class='img-fluid w-100'
                    id='reulogo'
                    alt='REU logo'
                  />
                </div>
                <div class='carousel-item'>
                  <img
                    src={Presentation}
                    class='img-fluid mt-5 w-100'
                    id='presentme'
                    alt='Me at Symposium'
                  />
                </div>
              </div>
            </div>
          </div>
          <div class='col-md-7'>
            <div class='card-body' id='reutext'>
              <p class='card-text mt-1'>
                10-week summer internship focused on utilizing computational
                modeling to serve the community. A research based opportunity to
                undergraduate students.
              </p>
              <ul>
                <li>
                  Explored the research process as an optimistic undergrad
                  student. Learned about computational modeling skills and how
                  to apply them to my research project based on analyzing data
                  from rivers.
                </li>
                <br />
                <li>
                  Utilized the programming language R to import large amounts of
                  data from USGS for statistical computing. Packages loaded into
                  R supplied functions to manipulate the data. The resulting
                  data was mapped using GIS software.
                </li>

                <br />
                <li>
                  Improvement in verbal communication in a professional
                  environment. Presented research findings at final symposium.
                  Published a report paper under the guidance of a professor.
                </li>
              </ul>

              <div class='text-center'>
                <a
                  class='btn btn-dark'
                  href='https://pdxscholar.library.pdx.edu/reu_reports/4/'
                  role='button'
                >
                  Click To See Report Paper
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class='card p-2 m-5 mx-auto rounded-5' style={{ maxWidth: '900px' }}>
        <div class='row g-0'>
          <h5 class='card-title pt-3 fw-bold text-center'>
            Shift Lead: Burgerville
          </h5>
          <h6 class='fst-italic text-center'>
            PDX Airport: April 2019 - Present
          </h6>
          <div class='col-md-5 text-center'>
            <img
              id='bvlogo'
              src={BV}
              class='img-fluid'
              alt='Burgerville logo'
            />
          </div>
          <div class='col-md-7'>
            <div class='card-body'>
              <p class='card-text mt-1'></p>
              <ul>
                <li>
                  Excellent verbal communication skills when assisting guests.
                  Takes on leadership roles and motivates teamwork amongst
                  coworkers.
                </li>
                <br />
                <li>
                  Sharp attention to detail in all aspects of the restaurant.
                  Persistent on maintaining all workstations organized for
                  successful workflow.
                </li>
                <br />
                <li>
                  Adept at all positions in the restaurant, enhancing
                  flexibility and multitasking skills.
                </li>
                <br />
                <li>
                  Continuously improving problem solving skills in a fast paced
                  environment.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;