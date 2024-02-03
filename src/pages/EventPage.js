import Events from "../components/Events";

function EventPage() {
  const data = [
    { label: "Name" },
    { label: "Email" },
    { label: "Event" },
    { label: "Status" },
    { label: "Gender" },
  ];

  return (
    <div>
      <Events data={data} />
    </div>
  );
}

export default EventPage;
