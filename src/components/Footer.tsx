import * as React from "react";

import { GithubIcon } from "./GithubIcon";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="links">
        <a
          href="https://github.com/osycon/grullo-aster"
          rel="noreferrer noopener"
          target="_blank"
        >
          <GithubIcon size="24" />
        </a>
      </div>
      <div className="copyright">Made by Fred Hawk 2019</div>
    </footer>
  );
}
