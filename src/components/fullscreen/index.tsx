import React, { useEffect } from "react";
import ReactFullpage, { fullpageApi } from "@fullpage/react-fullpage";
import { useHeroStore } from "@/store/hero";

export default function FullPage({
  children,
}: {
  children: (comp: {
    state: any;
    fullpageApi: fullpageApi;
  }) => React.ReactElement;
}) {
  const setHeroInView = useHeroStore((state) => state.setInView);
  return (
    <ReactFullpage
      scrollingSpeed={1000}
      normalScrollElements=".window"
      credits={{
        enabled: false,
      }}
      onLeave={(_origin, destination, _direction) => {
        const section = destination.index;

        if (section === 0) {
          setHeroInView(true);
        }
      }}
      afterLoad={(_origin, destination, _direction) => {
        const section = destination.index;

        if (section !== 0) {
          setHeroInView(false);
        }
      }}
      render={({ state, fullpageApi }) => (
        <ReactFullpage.Wrapper>
          {children({ state, fullpageApi })}
        </ReactFullpage.Wrapper>
      )}
    />
  );
}
