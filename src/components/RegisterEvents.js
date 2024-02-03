import { v4 as uuid } from "uuid";
import { useState, useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import EventContext from "../context/EventContext";
import "./componentsStyles/Landings.css";

function RegisterEvents() {
  const { addUser, editUser } = useContext(EventContext);
  const { state } = useLocation();

  let booking = state?.booking;
  let isEdit = state?.isEdit || false;

  let initialData = {
    id: uuid(),
    firstName: "",
    lastName: "",
    email: "",
    selects: "",
    confirmed: "pending",
    gender: "",
  };

  const navigate = useNavigate();

  const [formData, setFormData] = useState(booking || initialData);

  const handleChange = (e) => {
    e.preventDefault();
    let value = e.target.value;
    if (e.target.type === "checkbox") {
      value =
        (e.target.checked && "confirm") || (!e.target.checked && "pending");
    }

    const name = e.target.id || e.target.name;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (booking) {
      editUser(formData);
    } else {
      addUser(formData);
    }
    setFormData(initialData);
    navigate("/bookings");
  };

  return (
    <div>
      <h1 className="font-serif font-bold text-slate-950">
        REGISTER FOR EVENT
      </h1>
      <form
        onSubmit={handleSubmit}
        className=" space-y-7 bg-cyan-500 rounded flex flex-col justify-center p-2 "
      >
        <div className="row">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Email:
            <input
              className="input  block w-full rounded-md  px-4 py-1.5 text-cyan-950 "
              type="email"
              onChange={handleChange}
              id="email"
              value={formData.email}
              required="required"
            />
          </label>
        </div>
        <div className="row">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Firstname:
            <input
              className="input  block w-full rounded-md  px-4 py-1.5 text-cyan-950"
              type="text"
              id="firstName"
              onChange={handleChange}
              value={formData.firstName}
              required="required"
            />
          </label>
        </div>
        <div className="row">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Lastname:
            <input
              className="input block w-full rounded-md  px-4 py-1.5 text-cyan-950"
              type="text"
              id="lastName"
              onChange={handleChange}
              value={formData.lastName}
              required="required"
            />
          </label>
        </div>
        <div className="row">
          <select
            onChange={handleChange}
            id="selects"
            value={formData.selects}
            className="rounded-md  px-4  py-1.5 text-cyan-950 block w-full"
          >
            <option></option>
            <option>Swimming</option>
            <option>Paintball</option>
            <option>Riding</option>
          </select>
        </div>
        <div className="row">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Confirm
          </label>
          <input
            defaultChecked={formData.confirmed === "confirm"}
            type="checkbox"
            onChange={handleChange}
            id="confirmed"

            // value={formData.selected}
          />
        </div>
        <div className="row">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Gender
          </label>
          <input
            type="radio"
            value="male"
            onChange={handleChange}
            name="gender"
            defaultChecked={formData.gender === "male"}
          />
          male
          <input
            type="radio"
            value="female"
            onChange={handleChange}
            name="gender"
            defaultChecked={formData.gender === "female"}
          />
          female
        </div>
        <div className="row">
          {/* <button type="submit">Submit</button> */}
          <button
            className="rounded bg-stone-300  font-serif font-thin"
            type="submit"
          >
            {isEdit ? "Update" : "Submit"}
          </button>
        </div>
      </form>
      <Link to="/bookings" state={formData}>
        <button className="rounded bg-stone-300 my-1 font-serif font-thin">
          All Events
        </button>
      </Link>
    </div>
  );
}

export default RegisterEvents;
