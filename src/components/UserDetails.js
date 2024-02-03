import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import EventContext from "../context/EventContext";

function UserDetails() {
  const { userUpdate } = useContext(EventContext);
  const { state } = useLocation();

  const userId = state?.userId;

  const user = userUpdate.find((user) => user.id === userId);

  return (
    <div>
      <h2 className="font-serif font-bold text-slate-950 ">User Details</h2>
      <div className="bg-cyan-500 rounded flex flex-col justify-center">
        <p className="font-serif font-thin">First Name: {user.firstName}</p>
        <p className="font-serif font-thin">Last Name: {user.lastName}</p>
        <p className="font-serif font-thin">Email: {user.email}</p>
        <p className="font-serif font-thin">Selection: {user.selects}</p>
        <p className="font-serif font-thin">Confirmed: {user.confirmed}</p>
        <p className="font-serif font-thin">Gender: {user.gender}</p>
      </div>

      <Link to="/bookings">
        <button className="rounded bg-stone-300 my-1 text-xl">
          <GoArrowLeft />
        </button>
      </Link>
    </div>
  );
}

export default UserDetails;
