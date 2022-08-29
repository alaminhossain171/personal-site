import React from "react";
function EducationInfo({ className, institute, time, subject }) {
  return (
    <div className={className}>
      <h6 className="">{institute}</h6>
      <p className="text-muted m-0 p-0">{subject}</p>
      <p className="text-muted m-0 p-0">{time}</p>
    </div>
  );
}
function Education() {
  return (
    <>
      <EducationInfo
        institute="Daffodil Internation University, Dhaka"
        subject="B.Sc in Computer Science and Engineering"
        time="Jan, 2017- Dec, 2020"
      />
      <EducationInfo
        className="my-3"
        institute="Nimgachi Degree College, Sirajganj"
        subject="Higher Secondary School Certificate"
        time="May, 2013- Apr, 2015"
      />
      <EducationInfo
        institute="Nimgachi M.L High School, Sirajganj"
        subject="Secondary School Certificate"
        time="Jan 2011- Dec, 2012"
      />
    </>
  );
}

export default Education;
