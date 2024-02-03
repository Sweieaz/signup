import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoEye, GoPencil, GoTrashcan, GoHome } from "react-icons/go";

import EventContext from "../context/EventContext";

function Events({ data }) {
  const { userUpdate, setUserUpdate } = useContext(EventContext);
  const navigate = useNavigate();

  const deleteEvent = (id) => {
    const updatedEventsList = userUpdate.filter((event) => event.id !== id);

    setUserUpdate(updatedEventsList);
  };

  const editEvent = (booking, id) => {
    navigate("/register", { state: { booking, isEdit: true } });
  };

  const viewEvent = (id) => {
    navigate(`/user/${id}`, { state: { userId: id } });
  };

  const renderedHeaders = data.map((column, index) => {
    return <th key={index}>{column.label}</th>;
  });

  const renderedBody = userUpdate.map((update) => {
    return (
      <tr key={update.id}>
        <td className="p-2 text-neutral-800">
          {update.firstName} {update.lastName}
        </td>

        <td className="p-2 text-neutral-800">{update.email}</td>
        <td className="p-2 text-neutral-800">{update.selects}</td>
        <td className="p-2 text-neutral-800">{update.confirmed}</td>
        <td className="p-2 text-neutral-800">{update.gender}</td>
        <td>
          <button
            className="rounded bg-stone-300 text-xl mx-1"
            onClick={() => editEvent(update)}
          >
            <GoPencil />
          </button>
        </td>
        <td>
          <button
            className="rounded bg-stone-300 text-xl"
            onClick={() => viewEvent(update.id)}
          >
            <GoEye />
          </button>
        </td>

        <td>
          <button
            className="rounded bg-stone-300 text-xl mx-1"
            onClick={() => deleteEvent(update.id)}
          >
            <GoTrashcan />
          </button>
        </td>
      </tr>
    );
  });

  return (
    <div>
      <h2 className="font-serif font-bold text-slate-950 ">Event Bookings</h2>
      <table className="table-fixed border-spacing-2 border-collapse">
        <thead className="bg-cyan-700 ">
          <tr className="border-b-2 text-slate-950 font-serif font-light">
            {renderedHeaders}
          </tr>
        </thead>
        <tbody className="bg-cyan-500 border-b-4 ">{renderedBody}</tbody>
      </table>

      <Link to="/register">
        <button className="rounded bg-stone-300 text-xl">
          <GoHome />
        </button>
      </Link>
    </div>
  );
}

export default Events;
