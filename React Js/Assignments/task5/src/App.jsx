import { BrowserRouter, Route } from "react-router-dom";
import Form from "./components/Form";
import DisplayData from "./components/DisplayData";
import CourseDetails from "./components/CourseDetails";
import CourseProvider from "./context/CourseContext";

export default function App() {
  return (
    <BrowserRouter>
      <CourseProvider>
          <Route path="/form" component={Form} />
          <Route path="/courses" component={DisplayData} />
          <Route path="/courses/:name" component={CourseDetails} />
      </CourseProvider>
    </BrowserRouter>
  );
}
