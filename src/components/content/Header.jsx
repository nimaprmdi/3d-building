import React from "react";
import { SkillIconsInstagram } from "../../assets/icons/SkillIconsInstagram";
import { SkillIconsGithubDark } from "../../assets/icons/SkillIconsGithubDark";
import { EmojioneV1GlobeShowingAsiaAustralia } from "../../assets/icons/EmojioneV1GlobeShowingAsiaAustralia";

const Header = () => {
  return (
    <header className="w-full h-6 bg-gray-800 bg-opacity-70 flex items-center justify-between py-8 px-3 fixed z-50 top-0">
      <h1 className="text-2xl text-white">The Crypto Tower</h1>

      <div className="flex justify-between items-center gap-3">
        <a target="_blank" href="https://instagram.com/nimaprmi">
          <SkillIconsInstagram width={24} height={24} />
        </a>

        <a target="_blank" href="https://nimapm.com">
          <EmojioneV1GlobeShowingAsiaAustralia width={24} height={24} />
        </a>

        <a target="_blank" href="https://github.com/nimaprmdi">
          <SkillIconsGithubDark width={24} height={24} />
        </a>
      </div>
    </header>
  );
};

export default Header;
