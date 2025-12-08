import React from 'react';
import CountUp from "react-countup";

const OurService = () => {
    return (
      <div className="mb-24">
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-4xl font-bold">We Provide Best Law Services</h1>
          <p className="text-xl">
            Our platform connects you with verified, experienced Lawyers across
            various specialities — all at your convenience.{" "}
          </p>
        </div>
        <div className="flex justify-between gap-5">
          <div className="bg-[rgba(15,15,15,0.05)] p-11 flex flex-col rounded-2xl w-4/12">
            <img
              className="w-16 h-16 mb-4"
              src="https://i.ibb.co/Z6D1NdYh/success-doctor.png"
              alt=""
            />
            <h1 className="text-5xl font-bold mb-3">
              <CountUp
                start={0}
                end={199}
                duration={2.75}
                separator=" "
                suffix="+"
                redraw={true}
                enableScrollSpy={true}
                scrollSpyDelay={100}
              >
                {({ countUpRef, start }) => (
                  <div>
                    <span ref={countUpRef} />
                    <button onClick={start}>Start</button>
                  </div>
                )}
              </CountUp>
            </h1>
            <p className="text-xl">Total Lawyer</p>
          </div>
          <div className="bg-[rgba(15,15,15,0.05)] p-11 flex flex-col rounded-2xl  w-4/12">
            <img
              className="w-16 h-16 mb-4"
              src="https://i.ibb.co/PvTQCb7J/success-review.png"
              alt=""
            />
            <h1 className="text-5xl font-bold mb-3">
              <CountUp
                start={0}
                end={467}
                duration={2.75}
                separator=" "
                suffix="+"
                redraw={true}
                enableScrollSpy={true}
                scrollSpyDelay={100}
              >
                {({ countUpRef, start }) => (
                  <div>
                    <span ref={countUpRef} />
                    <button onClick={start}>Start</button>
                  </div>
                )}
              </CountUp>
            </h1>
            <p className="text-xl">Total Reviews</p>
          </div>
          <div className="bg-[rgba(15,15,15,0.05)] p-11 flex flex-col rounded-2xl  w-4/12">
            <img
              className="w-16 h-16 mb-4"
              src="https://i.ibb.co/tTzv2MS7/success-patients.png"
              alt=""
            />
            <h1 className="text-5xl font-bold mb-3">
              <CountUp
                start={0}
                end={1900}
                duration={2.75}
                decimal=","
                suffix="+"
                redraw={true}
                enableScrollSpy={true}
                scrollSpyDelay={100}
              >
                {({ countUpRef, start }) => (
                  <div>
                    <span ref={countUpRef} />
                    <button onClick={start}>Start</button>
                  </div>
                )}
              </CountUp>
            </h1>
            <p className="text-xl">Cases Initiated</p>
          </div>
          <div className="bg-[rgba(15,15,15,0.05)] p-11 flex flex-col rounded-2xl  w-4/12">
            <img
              className="w-16 h-16 mb-4"
              src="https://i.ibb.co/WWSQQz5S/success-staffs.png"
              alt=""
            />
            <h1 className="text-5xl font-bold mb-3">
              <CountUp
                start={0}
                end={300}
                duration={2.75}
                separator=" "
                suffix="+"
                redraw={true}
                enableScrollSpy={true}
                scrollSpyDelay={100}
              >
                {({ countUpRef, start }) => (
                  <div>
                    <span ref={countUpRef} />
                    <button onClick={start}>Start</button>
                  </div>
                )}
              </CountUp>
            </h1>
            <p className="text-xl">Total Stuffs</p>
          </div>
        </div>
      </div>
    );
};

export default OurService;