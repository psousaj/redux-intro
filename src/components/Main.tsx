import reduSvg from "/public/assets/img/REDU_VETORIZADO_animated.svg";
import reduAnimatedSvg from "/public/assets/img/REDU.svg";
import logoSvg from "/public/assets/img/animated_final.svg";
import logoAnimatedSvg from "/public/assets/img/redux_x_branco.svg";
import nameSvg from "/public/assets/img/name.svg";

type Props = {
  logoRef: React.RefObject<HTMLImageElement>;
  logoAnimatedRef: React.RefObject<HTMLImageElement>;
  reduRef: React.RefObject<HTMLImageElement>;
  reduAnimatedRef: React.RefObject<HTMLImageElement>;
  nameRef: React.RefObject<HTMLImageElement>;
  beforeRef: React.RefObject<HTMLDivElement>;
};

export function Main({
  logoRef,
  logoAnimatedRef,
  reduRef,
  reduAnimatedRef,
  nameRef,
  beforeRef,
}: Props) {
  return (
    <main className="flex">
      <div className="wrapper flex">
        <div className="redux flex">
          <img
            id="redu_vetor"
            src={reduSvg}
            width="500px"
            height="300px"
            alt="Redu"
            ref={reduAnimatedRef}
          />
          <img
            id="redu"
            src={reduAnimatedSvg}
            width="500px"
            height="300px"
            alt="Redu"
            ref={reduRef}
          />
          <img id="name" src="/assets/img/name.svg" alt="Name" ref={nameRef} />
        </div>
        <div className="animation flex">
          <img
            id="svg1"
            src={logoSvg}
            alt="X"
            width="300px"
            height="300px"
            ref={logoAnimatedRef}
          />
          <img
            id="svg2"
            src={logoAnimatedSvg}
            alt="X_logo"
            width="300px"
            height="300px"
            ref={logoRef}
          />
        </div>
      </div>
      <div className="wrapper_before" ref={beforeRef}></div>
    </main>
  );
}
