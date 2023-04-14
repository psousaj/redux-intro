export const Main: React.FC<{
  logoRef: React.RefObject<HTMLImageElement>;
  logoAnimatedRef: React.RefObject<HTMLImageElement>;
  reduRef: React.RefObject<HTMLImageElement>;
  reduAnimatedRef: React.RefObject<HTMLImageElement>;
  nameRef: React.RefObject<HTMLImageElement>;
  beforeRef: React.RefObject<HTMLDivElement>;
}> = ({
  logoRef,
  logoAnimatedRef,
  reduRef,
  reduAnimatedRef,
  nameRef,
  beforeRef,
}) => {
  // ...

  return (
    <main className="flex">
      <div className="wrapper flex">
        <div className="redux flex">
          <img
            id="redu_vetor"
            src="/public/assets/img/REDU_VETORIZADO_animated.svg"
            width="500px"
            height="300px"
            alt="Redu"
            ref={reduAnimatedRef}
          />
          <img
            id="redu"
            src="/public/assets/img/REDU.svg"
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
            src="/public/assets/img/animated_final.svg"
            alt="X"
            width="300px"
            height="300px"
            ref={logoAnimatedRef}
          />
          <img
            id="svg2"
            src="/public/assets/img/redux_x_branco.svg"
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
};
