import React from "react";
import { IoIosListBox } from "react-icons/io";
import { MdOutlineLabelImportant } from "react-icons/md";
import { TiTickOutline } from "react-icons/ti";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import { Link } from "react-router-dom";
function Sidebar() {
  const data = [
    {
      title: "All tasks",
      icon: <IoIosListBox />,
      link: "/",
    },
    {
      title: "Important tasks",
      icon: <MdOutlineLabelImportant />,
      link: "/importantTasks",
    },
    {
      title: "Completed tasks ",
      icon: <TiTickOutline />,
      link: "/compltedTasks",
    },
    {
      title: "Incompleted tasks",
      icon: <MdOutlineIncompleteCircle />,
      link: "/incompltTasks",
    },
  ];
  return (
    <>
      <div>
        <h2>The Task Manager</h2>
        <h4 className="mb-1 text-gray-400">rwien@gmail.com</h4>
        <hr />
      </div>
      <div>
        {data.map((items, i) => (
          <Link
            to={items.link}
            key={i}
            className="my-2 flex items-center text-xl hover:bg-gray-500 p-2 rounded transition-all duration-300"
          >
            <span>{items.icon}</span>&nbsp;&nbsp;{items.title}
          </Link>
        ))}
      </div>
      <div>
        <button className="bg-gray-500 w-full p-2 rounded">Log Out</button>
      </div>
    </>
  );
}

export default Sidebar;
