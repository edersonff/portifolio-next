import React from "react";
import ReactFullpage, { fullpageApi } from "@fullpage/react-fullpage";

export default function FullPage({
  children,
}: {
  children: (comp: {
    state: any;
    fullpageApi: fullpageApi;
  }) => React.ReactElement;
}) {
  return (
    <>
      <ReactFullpage
        scrollingSpeed={1000}
        normalScrollElements=".window"
        licenseKey="CA9DA262-9BD6447E-B1BF8C11-D1480312"
        credits={{
          enabled: false,
        }}
        render={({ state, fullpageApi }) => (
          <ReactFullpage.Wrapper>
            {children({ state, fullpageApi })}
          </ReactFullpage.Wrapper>
        )}
      />
    </>
  );
}
