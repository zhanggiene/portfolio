import React, { useContext } from "react";
import { Switch, Route, __RouterContext } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { PageOne, PageTwo, PageThree, PageFour, Navbah } from "./components";

const App = () => {
  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: "translate(100%, 0)" },
    enter: { opacity: 1, transform: "translate(0%, 0)" },
    leave: { opacity: 0, transform: "translate(-50%, 0)" }
  });

  return (
    <>
      <Navbah />
      <main className="container-fluid">
        {transitions.map(({ item, props, key }) => (
          <animated.div key={key} style={props}>
            <Switch location={item}>
              <Route exact path="/" component={PageOne} />
              <Route exact path="/two" component={PageTwo} />
              <Route exact path="/three" component={PageThree} />
              <Route exact path="/four" component={PageFour} />
            </Switch>
          </animated.div>
        ))}
      </main>
    </>
  );
};

export default App;
