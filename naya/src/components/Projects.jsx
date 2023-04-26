import React from 'react';
import choco from '../Images/choc.png';
import pdx from '../Images/flypdx.png';

const Projects = () => {
  return (
    <div>
      <h1>My Projects</h1>
      <div
        className='card p-2 m-5 mx-auto rounded-5'
        style={{ maxWidth: '900px' }}
      >
        <div className='row g-0'>
          <h5 className='card-title pt-3 fw-bold text-center'>
            FLYPDX Flight Time Site Scraper
          </h5>
          <div className='col-md-4 p-1'>
            <img src={pdx} className='img-fluid w-100' alt='fly PDX logo' />
          </div>

          <div className='col-md-8'>
            <div className='card-body'>
              <p className='card-text mt-1'>
                This project is written in Python. The inspiration for this
                project came from my current job at PDX Burgerville. I usually
                work at 4:00am, when we first open the restaurant and one of the
                tasks of the opening manager is to gather the departure times at
                concourse D for the entire day. Each time is manually copied and
                pasted into a word document and then is printed and posted at
                the front for all employees to see. It is important to do this
                task because it helps get a feel for how busy the day will be.
                As simple as this task is, I thought it would be interesting to
                try making a program to automate this task and give the opening
                manager a little bit extra time to do other tasks.
              </p>

              <a
                className='btn btn-dark'
                href='https://github.com/nayamairena/PDXDepartues'
                role='button'
              >
                Click To GitHub Repo
              </a>
            </div>
          </div>
        </div>
      </div>

      <div
        className='card p-2 m-5 mx-auto rounded-5'
        style={{ maxWidth: '900px' }}
      >
        <div className='row g-0'>
          <h5 className='card-title pt-3 fw-bold text-center'>
            CS300 Project: Chocoholics Anonymous
          </h5>
          <div className='col-md-4 p-1'>
            <img src={choco} className='img-fluid w-100' alt='chocolate bar' />
          </div>

          <div className='col-md-8'>
            <div className='card-body'>
              <p className='card-text mt-1'>
                Group project from CS300: Software Engineering. The project is
                written in Python and utilizes SQLite for the databases. This
                program emulated a terminal where providers who work for
                Chocoholics Anonymous provide services to members. The terminal
                functionalities keep track of accounts, services, and reports.
                All information is stored into databases and are accessible by
                the providers using the terminal interface.
              </p>

              <a
                className='btn btn-dark'
                href='https://github.com/DebuggerDan/cs300g4projectfall21'
                role='button'
              >
                Click To GitHub Repo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
