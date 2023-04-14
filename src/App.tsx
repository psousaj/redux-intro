import "/public/assets/css/App.css";
import dynamics from "dynamics.js";
import { useEffect, useRef } from "react";
import { Main } from "./components/Main";

function App() {
  const logoRef = useRef<HTMLImageElement>(null);
  const logoAnimatedRef = useRef<HTMLImageElement>(null);
  const reduRef = useRef<HTMLImageElement>(null);
  const reduAnimatedRef = useRef<HTMLImageElement>(null);
  const nameRef = useRef<HTMLImageElement>(null);
  const beforeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const logo = logoRef.current;
    const logoAnimated = logoAnimatedRef.current;
    const redu = reduRef.current;
    const reduAnimated = reduAnimatedRef.current;
    const name = nameRef.current;
    const before = beforeRef.current;

    function show() {
      out(logo);
      out(redu);
      out(name);

      dynamics.setTimeout(outAnimate, 1600);
      dynamics.setTimeout(enter, 1700);
      dynamics.setTimeout(enterName, 2200);
    }

    function out(el: any) {
      el.style.opacity = "0";
    }

    function enter(el = [logo, redu]) {
      dynamics.animate(el, {
        opacity: 1,
      });
    }

    function enterName(el = name) {
      dynamics.animate(
        el,
        {
          opacity: 1,
        },
        {
          duration: 800,
        }
      );
    }

    function outAnimate(el = [logoAnimated, reduAnimated]) {
      dynamics.animate(el, {
        opacity: 0,
      });
    }

    show();
  }, []);

  return (
    <Main
      logoRef={logoRef}
      logoAnimatedRef={logoAnimatedRef}
      reduRef={reduRef}
      reduAnimatedRef={reduAnimatedRef}
      nameRef={nameRef}
      beforeRef={beforeRef}
    />
  );
}

export default App;
