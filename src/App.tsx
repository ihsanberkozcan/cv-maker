import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateData, updateLinks, userDataType } from "./stores/userData";

import { MyDocument } from "./components/MyDocument";

function App() {
  const [websiteNames, setWebsiteNames] = useState<string[]>([""]);
  const [links, setLinks] = useState<string[]>([""]);
  const dispatch = useDispatch();
  const handlechange = (
    e: React.ChangeEvent<HTMLInputElement>,
    keyName: keyof userDataType
  ) => {
    dispatch(updateData({ key: keyName, value: e.target.value }));
  };

  const handleWebsiteNameChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const newWebsiteName = [...websiteNames];
    newWebsiteName[id] = e.target.value;
    setWebsiteNames(newWebsiteName);
    dispatch(
      updateLinks({ id: id, websiteName: e.target.value, link: links[id] })
    );
  };

  const handleLinkChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    const newLinks = [...links];
    newLinks[id] = e.target.value;
    setLinks(newLinks);
    dispatch(
      updateLinks({
        id: id,
        websiteName: websiteNames[id],
        link: e.target.value,
      })
    );
  };
  return (
    <div>
      name:
      <input onChange={(e) => handlechange(e, "name")} />
      title:
      <input onChange={(e) => handlechange(e, "title")} />
      email:
      <input onChange={(e) => handlechange(e, "email")} />
      skills:
      <input onChange={(e) => handlechange(e, "skills")} />
      link:
      <input onChange={(e) => handleWebsiteNameChange(e, 0)} />
      <input onChange={(e) => handleLinkChange(e, 0)} />
      <input onChange={(e) => handleWebsiteNameChange(e, 1)} />
      <input onChange={(e) => handleLinkChange(e, 1)} />
 
      <MyDocument />
    </div>
  );
}

export default App;
