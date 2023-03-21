import BrowserOnly from "@docusaurus/BrowserOnly";
import React, { useEffect } from "react";

export default function Home(): JSX.Element {
  return <BrowserOnly>{() => <NavToDocs />}</BrowserOnly>;
}

const NavToDocs: React.FC = () => {
  useEffect(() => {
    window.location.href = "./docs/intro";
  }, [window]);
  return null;
};
