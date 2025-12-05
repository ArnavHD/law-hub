import React from 'react';

const BannerImg = () => {
    return (
      <div className="rounded-3xl bg-[url(https://i.ibb.co/8nzQXfdJ/banner-img-1.png)] md:h-[550px]  flex items-center bg-no-repeat bg-cover">
        <div className="flex flex-col justify-around w-[67%] mx-auto align-middle space-y-4">
          <div>
            <h1 className="text-white text-5xl font-bold text-center">
              It Avoids Subjective Claims or Exaggeration That Might Raise Red
              Flags Legally
            </h1>
          </div>
          <div>
            <p className=" text-sm text-white text-center">
              Our platform connects you with verified, experienced doctors
              across various specialties — all at your convenience. Whether it's
              a routine checkup or urgent consultation, book appointments in
              minutes and receive quality care you can trust.
            </p>
          </div>
        </div>
      </div>
    );
};

export default BannerImg;