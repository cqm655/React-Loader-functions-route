import { Suspense } from "react";
import { useLoaderData, json, defer, Await } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
}
export default EventsPage;

async function loadEvents() {
  //we cant use react hooks, only limitation
  //other browser functions we can use, setlocalstorage... etc etc
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    //return {isError: true, message: 'Could not fetch events.}
    // throw new Error();
    // throw { message: "Could not fetch data" };
    // throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
    //   status: 500,
    // });
    return json({ message: "Could not fetch events" }, { status: 500 });
  } else {
    // const resData = await response.json();
    // return resData.events;
    // loader always wait for a method, and we can return the fetch`d data and use it in EventsPage in these case. We must use ~.events to get array of data from backend~
    // const res = new Response(); //its a response constructor, that browser can read
    const responseData = await response.json();
    return responseData.events;
  }
}

export function loader() {
  //to use defer we must have a promise
  return defer({
    events: loadEvents(),
  });
}
