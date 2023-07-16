import { deleteLink, updateLink } from "../stores/userData";
import { useDispatch, useSelector } from "react-redux";

function AddLink() {
  const { links: myLinks } = useSelector((state: any) => state.userData);
  const dispatch = useDispatch();
  const handleWebsiteNameChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    id: number
  ) => {
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
        websiteName: "GitHub",
        link: "",
      })
    );
  };

  const renderLink = () => {
    const content = [];

    for (let i = 0; i < myLinks.length; i++) {
      content.push(
        <li className="flex">
          <select className="rounded p-2 mr-3 mb-3" onChange={(e) => handleWebsiteNameChange(e, i)} value={myLinks[i].websiteName}>
            <option value="GitHub">GitHub</option>
            <option value="GitLab">GitLab</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Website">Website</option>
            <option value="Medium">Medium</option>
          </select>
      
          <input
            className="rounded p-2 mr-2"
            onChange={(e) => handleLinkChange(e, i)}
            value={myLinks[i].link}
          />
          <button
            className="bg-indigo-300 rounded text-white mb-3 p-3"
            onClick={() => deleteWebsiteLink(i)}
          >
            x
          </button>
        </li>
      );
    }
    return content;
  };

  return (
    <div className="h-full overflow-auto">
      <div className="text-4xl mb-3">Link:</div>
      <ul className="list-none">{renderLink()}</ul>
      <button
        className="bg-indigo-300 rounded text-white p-3 mt-5 w-full"
        onClick={() => addNewLink()}
      >
        Add New Link
      </button>
    </div>
  );
}

export default AddLink;
