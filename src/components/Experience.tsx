import React from "react";

const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
  console.log(e.target.value);
};

function Experience() {
  return (
    <div>
      <h2>Experience:</h2>
      Company Name:
      <input type="text" />
      Job Title:
      <input type="text" />
      Start Date:
      <input type="text" />
      End Date:
      <input type="text" />
      Description:
      <textarea name="" id="" onChange={(e) => handleDescriptionChange(e)} />
    </div>
  );
}

export default Experience;
