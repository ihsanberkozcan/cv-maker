import React from "react";
import { deleteLink, updateLink } from "../stores/userData";
import { useDispatch, useSelector } from "react-redux";

function AddLink() {
  const { links: myLinks } = useSelector((state: any) => state.userData);
  const dispatch = useDispatch();
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
      Link:
      {renderLink()}
      <button onClick={() => addNewLink()}>Add New Link</button>
    </div>
  );
}

export default AddLink;
