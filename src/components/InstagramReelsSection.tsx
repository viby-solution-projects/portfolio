import { useEffect } from "react";
import Reveal from "./Reveal";

export default function InstagramReelsSection() {
  useEffect(() => {
    const scriptUrl = "https://widgets.sociablekit.com/instagram-reels/widget.js";
    const existingScript = document.querySelector(`script[src="${scriptUrl}"]`);
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement("script");
    script.src = scriptUrl;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="instagram-reels-section" id="reels">
      <div className="instagram-reels-container">
        <Reveal>
          <div
            className="sk-ww-instagram-reels"
            data-embed-id="25713135"
          ></div>
        </Reveal>
      </div>
    </section>
  );
}

