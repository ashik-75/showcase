import Stack from "./Stack";
import {
  frameWorks,
  frontendFrameworks,
  languages,
  StateManagement,
  tools,
  ui,
  versionControl,
  webBrowser,
} from "./techData";

function TechStack() {
  return (
    <div className="space-y-5 scroll-mt-20" id="skill">
      <h2 className="font-semibold text-xl">Tech Stack</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Stack title="Languages" data={languages} />
        <Stack title="Javascript UI" data={ui} />
        <Stack title="State Management" data={StateManagement} />
        <Stack title="Frameworks (Full Stack)" data={frameWorks} />
        <Stack title="Frontend Frameworks" data={frontendFrameworks} />
        <Stack title="Web Browser" data={webBrowser} />
        <Stack title="Version Control" data={versionControl} />
        <Stack title="Tools" data={tools} />
      </div>
    </div>
  );
}

export default TechStack;
