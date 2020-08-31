import React, { useState, useEffect } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { SearchOutlined } from "@material-ui/icons";
import "./Sidebar.css";
import "./SidebarChats";
import SidebarChats from "./SidebarChats";
import db from "./firebase";
import { useStateValue } from "./StateProvider";

function Sidebar() {
  const [rooms, setRooms] = useState([]);
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });

    return () => {
      unsubscribe();
    }
  }, []);

  return (
    <div className="sidebar">
      <div>
        <div className="sidebar__header">
          <Avatar src={user?.photoURL} />
          <div className="sidebar__headerRight">
            <IconButton>
              <DonutLargeIcon />
            </IconButton>
            <IconButton>
              <ChatIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>

        <div className="sidebar__search">
          <SearchOutlined />
          <input placeholder="Search" type="text" />
        </div>

        <div className="sidebar__chats">
          <SidebarChats addNewChat />
          {rooms.map((room) => (
            <SidebarChats key={room.id} id={room.id} name={room.data.name} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
