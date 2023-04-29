import Stack from "./Stack";
import {
  frameWorks,
  languages,
  library,
  StateManagement,
  tools,
  uiLibrary,
  versionControl,
  webBrowser,
} from "./techData";

function TechStack() {
  return (
    <div className="space-y-5 scroll-mt-20" id="skill">
      <h2 className="font-semibold text-xl">Tech Stack</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Stack title="Languages" data={languages} />
        <Stack title="State Management" data={StateManagement} />
        <Stack title="UI Library" data={uiLibrary} />
        <Stack title="Frontend Framework" data={frameWorks} />
        <Stack title="Frontend Library" data={library} />
        <Stack title="Web Browser" data={webBrowser} />
        <Stack title="Code Editor" data={tools} />
        <Stack title="Version Control & Deployment" data={versionControl} />
      </div>
    </div>
  );
}

export default TechStack;
