import React from "react";
import { TERipple } from "tw-elements-react";

export default function Search() {
  return React.createElement(
    "div",
    { className: "mb-3 md:w-96 mx-auto" },
    React.createElement(
      "div",
      { className: "relative mb-4 flex w-full flex-wrap items-stretch" },
      React.createElement("input", {
        type: "search",
        className:
          "relative m-0 -mr-0.5 block w-[calc(100% - 2.5rem)] flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-2 text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary",
        placeholder: "Search",
        "aria-label": "Search",
        "aria-describedby": "button-addon3",
        style: { height: "2.5rem" }, // Set height to match button height
      }),
      /* <!--Search button--> */
      React.createElement(
        TERipple,
        null,
        React.createElement(
          "button",
          {
            className:
              "relative z-[2] rounded-r bg-blue-400 border-2 border-blue-500 px-6 py-2 text-xs font-medium uppercase text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0",
            type: "button",
            id: "button-addon3",
            style: { height: "2.5rem", marginTop: "-1px" }, // Set height and adjust marginTop to align with input field
          },
          "Search"
        )
      )
    )
  );
}
