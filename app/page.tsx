import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

import Sidebar from "../components/Sidebar";
import CreativeUsers from "@/components/CreativeUsers";

export default function Home() {
  return (
    <section className="flex items-start gap-4">
      <div className="flex flex-col w-[25%] pt-4 px-4 text-left">
        <Sidebar />
      </div>

      <div className="flex flex-col w-[75%] text-left">
        <CreativeUsers />
      </div>
    </section>
  );
}
