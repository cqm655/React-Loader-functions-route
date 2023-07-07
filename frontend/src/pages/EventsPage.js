import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  {
    id: "i1",
    title: "Title 1",
  },
  {
    id: "i2",
    title: "Title 2",
  },
  {
    id: "i3",
    title: "Title 3",
  },
  {
    id: "i4",
    title: "Title 4",
  },
  {
    id: "i5",
    title: "Title 5",
  },
];

export default function EventsPage() {
  return (
    <>
      <h1>Event Page!</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>{" "}
            {/**setting to={event.id}  auto redirects to /event/:eventId route*/}
          </li>
        ))}
      </ul>
    </>
  );
}
