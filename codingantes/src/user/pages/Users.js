import React from "react";
import gambar from "../../images/CHEFBOX_-_Gerry_Ajie_Pratama.jpg";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Gerry Pratama",
      image: gambar,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
