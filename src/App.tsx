import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateData,
  updateLink,
  deleteLink,
  userDataType,
} from "./stores/userData";

import { MyDocument } from "./components/MyDocument";

function App() {
  const { links: myLinks } = useSelector((state: any) => state.userData);
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
    console.log(myLinks[id].link);
    dispatch(
      updateLink({
        id: id,
        websiteName: e.target.value,
        link: myLinks[id].link,
      })
    );
  };

  const handleLinkChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    console.log(myLinks[id].websiteName);
    dispatch(
      updateLink({
        id: id,
        websiteName: myLinks[id].websiteName,
        link: e.target.value,
      })
    );
  };

  const deleteWebsiteLink = (id: number) => {
    dispatch(deleteLink(id));
  };

  const addNewLink = () => {
    dispatch(
      updateLink({
        id: myLinks.length,
        websiteName: "",
        link: "",
      })
    );
  };

  const renderLink = () => {
    const content: any = [];

    for (let i = 0; i < myLinks.length; i++) {
      content.push(
        <li>
          <input
            onChange={(e) => handleWebsiteNameChange(e, i)}
            value={myLinks[i].websiteName}
          />
          <input
            onChange={(e) => handleLinkChange(e, i)}
            value={myLinks[i].link}
          />
          <button onClick={() => deleteWebsiteLink(i)}>x</button>
        </li>
      );
    }
    return content;
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
      {renderLink()}
      <button onClick={() => addNewLink()}>Add New Link</button>
      <MyDocument />
    </div>
  );
}

export default App;
