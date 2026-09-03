import { Fragment } from "react";
import Reveal from "./Reveal";

const STEPS = [
  { num: "01", title: "Discover", desc: "We understand your business, users, and goals." },
  { num: "02", title: "Design", desc: "We plan the experience and visual direction." },
  { num: "03", title: "Build", desc: "Our developers turn ideas into reliable software." },
  { num: "04", title: "Launch", desc: "We deploy, optimise, and prepare for real users." },
];

export default function Process() {
  return (
    <div className="process">
      <div className="section process-inner">
        <div className="section-heading">
          <p className="section-label">[ 05 — PROCESS ]</p>
          <h2>How we work</h2>
        </div>
        <div className="process-track">
          {STEPS.map((step, i) => (
            <Fragment key={step.num}>
              {i > 0 && <i aria-hidden="true">→</i>}
              <Reveal as="article" delay={(i % 2) as 0 | 1}>
                <b>{step.num}</b>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </Reveal>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
