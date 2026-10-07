import { EditableCopy } from '../content/SiteContent';
import type { CSSProperties } from 'react';
import { ResponsiveRoot } from '../components/ResponsiveRoot';
import { Navigation } from '../components/Navigation';
import { ContactForm, NewsletterForm } from '../components/Forms';
import HeroVideo from '../components/HeroVideo';
import ImageGenerator from '../agents/ImageGenerator';
import VideoGenerator from '../agents/VideoGenerator';
import CampaignMaker from '../agents/CampaignMaker';
import Storyteller from '../agents/Storyteller';
import DigitalTwin from '../agents/DigitalTwin';
import '../styles/AgentsImagegenerator.css';

// Migrated layout; all elements, copy and CSS are local editable source.
export default function AgentsImagegenerator() {
  return (
    <div id={"page-main"}>
      <ResponsiveRoot data-design-root={""} className={"bex-lV84o bex-1veiylo"} style={{"minHeight": "100vh", "width": "auto"} as CSSProperties} breakpoints={[{"hash": "1veiylo", "mediaQuery": "(min-width: 1440px)"}, {"hash": "1thm8ml", "mediaQuery": "(min-width: 810px) and (max-width: 1439.98px)"}, {"hash": "1obgu3m", "mediaQuery": "(max-width: 809.98px)"}]}>
        <div className={"bex-8kuaa1"} data-design-name={"Content"}>
          <div className={"bex-18nenlc"} data-design-name={"Heading and supporting text"}>
            <div className={"bex-1gf68e1"} data-design-name={"Heading"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
              <h2 dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-open-type-features": "'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on", "--bex-font-size": "var(--font-size-48)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "120%", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="0719ae146e250eeb" fallback={"Image Generator"}>

                <span style={{"display": "inline-block"} as CSSProperties}>
                  {"Image"}
                </span>
                {" "}
                <span style={{"display": "inline-block"} as CSSProperties}>
                  {"Generator"}
                </span>
              
</EditableCopy>
</h2>
            </div>
            <div className={"bex-p91pcj"} data-design-name={"Supporting text"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
              <h4 dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-open-type-features": "'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on", "--bex-font-size": "var(--font-size-24)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "0.02em", "--bex-line-height": "140%", "--bex-text-alignment": "center", "--bex-text-color": "rgb(61, 61, 61)"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="04fca79204db11c6" fallback={"An AI visual production agent that transforms brand requirements, creative directions, and reference inputs into structured, accurate, and production ready image systems."}>

                {"An AI visual production agent that transforms brand requirements, creative directions, and reference inputs into structured, accurate, and production ready image systems."}
              
</EditableCopy>
</h4>
            </div>
          </div>
          <div className={"bex-11v1een"} data-border={"true"} data-design-name={"instruction"} style={{} as CSSProperties}>
            <div className={"bex-1kzl58l"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
              <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.01em", "--bex-line-height": "1.6em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-3167a983-02df-49ea-b905-4140603624da, rgb(37, 30, 54))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="5f43693dc74e139b" fallback={"Choose a brand, write your prompt, and generate an image tailored to that brand’s visual language"}>

                {"Choose a brand, write your prompt, and generate an image tailored to that brand’s visual language"}
              
</EditableCopy>
</p>
            </div>
            <svg className={"bex-gqfLR bex-ylh1p1"} role={"presentation"} viewBox={"0 0 24 24"}>
              <use href={"#1684851898"}>
              </use>
            </svg>
          </div>
        </div>
        <div className={"bex-tun7xk"} data-design-name={"Header section"}>
          <div className={"bex-1d4to0y"} data-design-name={"Header section"}>
            <div className={"bex-4qk7dj"} data-design-name={"Hero"}>
              <div className={"bex-1gc9cpv"} data-design-name={"Container"} style={{} as CSSProperties}>
                <div className={"bex-1qzosuf"} data-design-name={"Api Content Frame"}>
                  <div className={"bex-fga3d9-container"}>
                    <ImageGenerator />
                  </div>
                </div>
              </div>
            </div>
            <div className={"bex-19ilyf0-container"}>
              <div style={{"width": "100%", "position": "absolute", "left": "0", "right": "0", "bottom": "32px", "display": "flex", "justifyContent": "center", "alignItems": "center", "pointerEvents": "none", "zIndex": "20"} as CSSProperties}>
                <div style={{"display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "10px", "opacity": "0.72"} as CSSProperties}>
                  <div style={{"color": "rgb(17, 17, 17)", "fontSize": "9px", "fontWeight": "500", "letterSpacing": "0.22em", "lineHeight": "1", "textTransform": "uppercase", "fontFamily": "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", "userSelect": "none"} as CSSProperties}>
                    {"SCROLL"}
                  </div>
                  <div style={{"width": "100%", "height": "44px", "borderRadius": "999px", "overflow": "hidden", "position": "relative", "background": "linear-gradient(to bottom, transparent, rgb(17, 17, 17)22 18%, rgb(17, 17, 17)35 50%, rgb(17, 17, 17)22 82%, transparent)"} as CSSProperties}>
                    <div style={{"width": "4px", "height": "4px", "borderRadius": "50%", "background": "rgb(17, 17, 17)", "position": "absolute", "top": "0", "left": "50%", "boxShadow": "0 0 18px rgb(17, 17, 17)45", "transform": "translateX(-50%)"} as CSSProperties}>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"bex-oges81-container"}>
            <div style={{"width": "100%", "position": "absolute", "left": "0", "right": "0", "bottom": "32px", "display": "flex", "justifyContent": "center", "alignItems": "center", "pointerEvents": "none", "zIndex": "20"} as CSSProperties}>
              <div style={{"display": "flex", "flexDirection": "column", "alignItems": "center", "gap": "10px", "opacity": "0.72"} as CSSProperties}>
                <div style={{"color": "rgb(17, 17, 17)", "fontSize": "9px", "fontWeight": "500", "letterSpacing": "0.22em", "lineHeight": "1", "textTransform": "uppercase", "fontFamily": "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", "userSelect": "none"} as CSSProperties}>
                  {"SCROLL"}
                </div>
                <div style={{"width": "100%", "height": "44px", "borderRadius": "999px", "overflow": "hidden", "position": "relative", "background": "linear-gradient(to bottom, transparent, rgb(17, 17, 17)22 18%, rgb(17, 17, 17)35 50%, rgb(17, 17, 17)22 82%, transparent)"} as CSSProperties}>
                  <div style={{"width": "4px", "height": "4px", "borderRadius": "50%", "background": "rgb(17, 17, 17)", "position": "absolute", "top": "0", "left": "50%", "boxShadow": "0 0 18px rgb(17, 17, 17)45", "transform": "translateX(-50%)"} as CSSProperties}>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className={"bex-73x3al"} data-design-name={"Sections / About"} id={"about"}>
          <div className={"bex-1u2cl3o"} data-design-name={"Container"}>
            <div className={"bex-zayy6c"} data-design-name={"Texts"}>
              <div className={"bex-spwlxz"} data-design-name={"Content A"} id={"about-a"}>
                <div className={"ssr-variant hidden-1obgu3m hidden-1thm8ml"}>
                  <div className={"bex-o3wj7c"} data-design-name={"Text A"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
                    <p dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-bf5ff424-04d7-4913-a034-02ab08d24e7b, var(--color-text))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="ab253760680f926a" fallback={"Turn ideas into scalable visual systems "}>

                      {"Turn ideas into scalable visual systems "}
                    
</EditableCopy>
</p>
                    <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-a8162a5b-c0e1-42c8-973e-81280a63ffef, var(--color-text-secondary))"} as CSSProperties} className={"bex-text"}>
                      <br className={"bex-text trailing-break"} />
                    </p>
                    <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-a8162a5b-c0e1-42c8-973e-81280a63ffef, var(--color-text-secondary))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="fabc8468d932bc69" fallback={"Convert a simple visual request into a structured image direction with composition logic, style definition, lighting guidance, subject hierarchy, color behavior, camera perspective, and output consistency."}>

                      {"Convert a simple visual request into a structured image direction with composition logic, style definition, lighting guidance, subject hierarchy, color behavior, camera perspective, and output consistency."}
                    
</EditableCopy>
</p>
                  </div>
                </div>
                <div className={"ssr-variant hidden-1veiylo hidden-1thm8ml"}>
                  <div className={"bex-o3wj7c"} data-design-name={"Text A"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
                    <p dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-size": "var(--font-size-18)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-bf5ff424-04d7-4913-a034-02ab08d24e7b, var(--color-text))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="6bf15918164afbe4" fallback={"Turn ideas into scalable visual systems "}>

                      {"Turn ideas into scalable visual systems "}
                    
</EditableCopy>
</p>
                    <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-18)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-a8162a5b-c0e1-42c8-973e-81280a63ffef, var(--color-text-secondary))"} as CSSProperties} className={"bex-text"}>
                      <br className={"bex-text trailing-break"} />
                    </p>
                    <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-18)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-a8162a5b-c0e1-42c8-973e-81280a63ffef, var(--color-text-secondary))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="85591c60101fd25e" fallback={"Convert a simple visual request into a structured image direction with composition logic, style definition, lighting guidance, subject hierarchy, color behavior, camera perspective, and output consistency."}>

                      {"Convert a simple visual request into a structured image direction with composition logic, style definition, lighting guidance, subject hierarchy, color behavior, camera perspective, and output consistency."}
                    
</EditableCopy>
</p>
                  </div>
                </div>
                <div className={"ssr-variant hidden-1obgu3m hidden-1veiylo"}>
                  <div className={"bex-o3wj7c"} data-design-name={"Text A"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
                    <p dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-size": "var(--font-size-20)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-bf5ff424-04d7-4913-a034-02ab08d24e7b, var(--color-text))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="630e9e74d891e214" fallback={"Turn ideas into scalable visual systems "}>

                      {"Turn ideas into scalable visual systems "}
                    
</EditableCopy>
</p>
                    <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-20)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-a8162a5b-c0e1-42c8-973e-81280a63ffef, var(--color-text-secondary))"} as CSSProperties} className={"bex-text"}>
                      <br className={"bex-text trailing-break"} />
                    </p>
                    <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-20)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-a8162a5b-c0e1-42c8-973e-81280a63ffef, var(--color-text-secondary))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="d7712a3045aff4a0" fallback={"Convert a simple visual request into a structured image direction with composition logic, style definition, lighting guidance, subject hierarchy, color behavior, camera perspective, and output consistency."}>

                      {"Convert a simple visual request into a structured image direction with composition logic, style definition, lighting guidance, subject hierarchy, color behavior, camera perspective, and output consistency."}
                    
</EditableCopy>
</p>
                  </div>
                </div>
              </div>
              <div className={"bex-i5rbim"} data-design-name={"Content B"} id={"about-b"}>
                <div className={"ssr-variant hidden-1obgu3m hidden-1thm8ml"}>
                  <div className={"bex-1ieqp7b"} data-design-name={"Text A"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
                    <p dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-bf5ff424-04d7-4913-a034-02ab08d24e7b, var(--color-text))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="eeb6d30e7cc32a39" fallback={"Accelerate production-ready visual creation"}>

                      {"Accelerate production-ready visual creation"}
                    
</EditableCopy>
</p>
                    <p dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-bf5ff424-04d7-4913-a034-02ab08d24e7b, var(--color-text))"} as CSSProperties} className={"bex-text"}>
                      <br className={"bex-text trailing-break"} />
                    </p>
                    <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-a8162a5b-c0e1-42c8-973e-81280a63ffef, var(--color-text-secondary))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="6d69c9b84b8b92f1" fallback={"Reduce the time required for concept generation, campaign visualization, product rendering, and branded image production without losing visual coherence."}>

                      {"Reduce the time required for concept generation, campaign visualization, product rendering, and branded image production without losing visual coherence."}
                    
</EditableCopy>
</p>
                  </div>
                </div>
                <div className={"ssr-variant hidden-1veiylo hidden-1thm8ml"}>
                  <div className={"bex-1ieqp7b"} data-design-name={"Text A"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
                    <p dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-size": "var(--font-size-18)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-bf5ff424-04d7-4913-a034-02ab08d24e7b, var(--color-text))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="3e662e304596fb61" fallback={"Accelerate production-ready visual creation"}>

                      {"Accelerate production-ready visual creation"}
                    
</EditableCopy>
</p>
                    <p dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-size": "var(--font-size-18)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-bf5ff424-04d7-4913-a034-02ab08d24e7b, var(--color-text))"} as CSSProperties} className={"bex-text"}>
                      <br className={"bex-text trailing-break"} />
                    </p>
                    <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-18)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-a8162a5b-c0e1-42c8-973e-81280a63ffef, var(--color-text-secondary))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="3a034a6c6b09d5f7" fallback={"Reduce the time required for concept generation, campaign visualization, product rendering, and branded image production without losing visual coherence."}>

                      {"Reduce the time required for concept generation, campaign visualization, product rendering, and branded image production without losing visual coherence."}
                    
</EditableCopy>
</p>
                  </div>
                </div>
                <div className={"ssr-variant hidden-1obgu3m hidden-1veiylo"}>
                  <div className={"bex-1ieqp7b"} data-design-name={"Text A"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
                    <p dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-size": "var(--font-size-20)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-bf5ff424-04d7-4913-a034-02ab08d24e7b, var(--color-text))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="433f2c47ba55047c" fallback={"Accelerate production-ready visual creation"}>

                      {"Accelerate production-ready visual creation"}
                    
</EditableCopy>
</p>
                    <p dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-size": "var(--font-size-20)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-bf5ff424-04d7-4913-a034-02ab08d24e7b, var(--color-text))"} as CSSProperties} className={"bex-text"}>
                      <br className={"bex-text trailing-break"} />
                    </p>
                    <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-20)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-a8162a5b-c0e1-42c8-973e-81280a63ffef, var(--color-text-secondary))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="4838d00a297c1601" fallback={"Reduce the time required for concept generation, campaign visualization, product rendering, and branded image production without losing visual coherence."}>

                      {"Reduce the time required for concept generation, campaign visualization, product rendering, and branded image production without losing visual coherence."}
                    
</EditableCopy>
</p>
                  </div>
                </div>
              </div>
              <div className={"bex-8xa7dz"} data-design-name={"Content C"} id={"about-c"}>
                <div className={"ssr-variant hidden-1obgu3m hidden-1thm8ml"}>
                  <div className={"bex-jgmpru"} data-design-name={"Text A"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
                    <p dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-bf5ff424-04d7-4913-a034-02ab08d24e7b, var(--color-text))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="33db6f9208dea633" fallback={"Turn ideas into scalable visual systems "}>

                      {"Turn ideas into scalable visual systems "}
                    
</EditableCopy>
</p>
                    <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-a8162a5b-c0e1-42c8-973e-81280a63ffef, var(--color-text-secondary))"} as CSSProperties} className={"bex-text"}>
                      <br className={"bex-text trailing-break"} />
                    </p>
                    <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-a8162a5b-c0e1-42c8-973e-81280a63ffef, var(--color-text-secondary))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="e4d8e59c2039fdc4" fallback={"Convert a simple visual request into a structured image direction with composition logic, style definition, lighting guidance, subject hierarchy, color behavior, camera perspective, and output consistency."}>

                      {"Convert a simple visual request into a structured image direction with composition logic, style definition, lighting guidance, subject hierarchy, color behavior, camera perspective, and output consistency."}
                    
</EditableCopy>
</p>
                  </div>
                </div>
                <div className={"ssr-variant hidden-1veiylo hidden-1thm8ml"}>
                  <div className={"bex-jgmpru"} data-design-name={"Text A"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
                    <p dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-size": "var(--font-size-18)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-bf5ff424-04d7-4913-a034-02ab08d24e7b, var(--color-text))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="2b96789c73d40c03" fallback={"Turn ideas into scalable visual systems "}>

                      {"Turn ideas into scalable visual systems "}
                    
</EditableCopy>
</p>
                    <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-18)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-a8162a5b-c0e1-42c8-973e-81280a63ffef, var(--color-text-secondary))"} as CSSProperties} className={"bex-text"}>
                      <br className={"bex-text trailing-break"} />
                    </p>
                    <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-18)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-a8162a5b-c0e1-42c8-973e-81280a63ffef, var(--color-text-secondary))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="5a4f0d5d7c34d204" fallback={"Convert a simple visual request into a structured image direction with composition logic, style definition, lighting guidance, subject hierarchy, color behavior, camera perspective, and output consistency."}>

                      {"Convert a simple visual request into a structured image direction with composition logic, style definition, lighting guidance, subject hierarchy, color behavior, camera perspective, and output consistency."}
                    
</EditableCopy>
</p>
                  </div>
                </div>
                <div className={"ssr-variant hidden-1obgu3m hidden-1veiylo"}>
                  <div className={"bex-jgmpru"} data-design-name={"Text A"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
                    <p dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-size": "var(--font-size-20)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-bf5ff424-04d7-4913-a034-02ab08d24e7b, var(--color-text))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="e7328f1261063183" fallback={"Turn ideas into scalable visual systems "}>

                      {"Turn ideas into scalable visual systems "}
                    
</EditableCopy>
</p>
                    <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-20)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-a8162a5b-c0e1-42c8-973e-81280a63ffef, var(--color-text-secondary))"} as CSSProperties} className={"bex-text"}>
                      <br className={"bex-text trailing-break"} />
                    </p>
                    <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-20)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-a8162a5b-c0e1-42c8-973e-81280a63ffef, var(--color-text-secondary))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="b8b633474d8c9fdb" fallback={"Convert a simple visual request into a structured image direction with composition logic, style definition, lighting guidance, subject hierarchy, color behavior, camera perspective, and output consistency."}>

                      {"Convert a simple visual request into a structured image direction with composition logic, style definition, lighting guidance, subject hierarchy, color behavior, camera perspective, and output consistency."}
                    
</EditableCopy>
</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={"bex-1n0wpi6"} data-design-name={"Images"}>
              <div className={"bex-1bsdsav-container"} draggable={"false"}>
                <video src={"/assets/6ff96fa236-KN6dFGJr82VVuIOiLrkkfkhdGw.mp4"} loop preload={"none"} muted playsInline style={{"cursor": "auto", "width": "100%", "height": "100%", "borderRadius": "15px", "display": "block", "objectFit": "cover", "backgroundColor": "rgba(0, 0, 0, 0)", "objectPosition": "50% 50%"} as CSSProperties} data-native-video="">
                </video>
              </div>
            </div>
          </div>
        </section>
        <div className={"bex-moewk8"} data-design-name={"Section"}>
          <div className={"bex-59da7n"} data-design-name={"Content"}>
            <div className={"bex-1up4iae"} data-design-name={"Heading and supporting text"}>
              <div className={"bex-1pwb46k"} data-design-name={"Heading"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                <h2 dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-open-type-features": "'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on", "--bex-font-size": "var(--font-size-48)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "120%"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="b31eb45e64db6905" fallback={"Need a Custom AI Agent?"}>

                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"Need"}
                  </span>
                  {" "}
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"a"}
                  </span>
                  {" "}
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"Custom"}
                  </span>
                  {" "}
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"AI"}
                  </span>
                  {" "}
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"Agent?"}
                  </span>
                
</EditableCopy>
</h2>
              </div>
              <div className={"bex-118ygpk"} data-design-name={"Supporting text"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
                <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-open-type-features": "'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on", "--bex-font-size": "var(--font-size-24)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.6em", "--bex-text-alignment": "center", "--bex-text-color": "rgb(102, 102, 102)"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="1d1542178f6a48e4" fallback={"Our team can build a tailored solution specifically for your business requirements."}>

                  {"Our team can build a tailored solution specifically for your business requirements."}
                
</EditableCopy>
</p>
              </div>
            </div>
            <div className={"ssr-variant"}>
              <div className={"bex-wh4xma-container"}>
                <a className={"bex-bBjUH bex-vcvr0j bex-v-vcvr0j bex-68pemw"} data-design-name={"Default"} data-reset={"button"} href={"/contact"} tabIndex={0} style={{"backgroundColor": "var(--token-1de575a6-6512-423f-865e-77b40528747b, var(--color-text))", "height": "100%", "width": "100%", "borderBottomLeftRadius": "8px", "borderBottomRightRadius": "8px", "borderTopLeftRadius": "8px", "borderTopRightRadius": "8px", "opacity": "1"} as CSSProperties}>
                  <div className={"bex-1x9ljnz"} data-component-type={"RichTextContainer"} style={{"--extracted-r6o4lv": "var(--color-surface)", "--bex-link-text-color": "rgb(0, 153, 255)", "--bex-link-text-decoration": "underline", "transform": "none"} as CSSProperties}>
                    <p dir={"auto"} className={"bex-text"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-text-color": "var(--extracted-r6o4lv, var(--color-surface))"} as CSSProperties}>
<EditableCopy id="905a52c039f0e7ae" fallback={"Contact Us"}>

                      {"Contact Us"}
                    
</EditableCopy>
</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <Navigation />
        <div className={"ssr-variant hidden-1obgu3m hidden-1thm8ml"}>
          <div className={"bex-s0ja7d-container"}>
            <div className={"bex-W9zZe bex-5byvjv bex-v-5byvjv"} data-border={"true"} data-design-name={"Desktop"} style={{"--border-bottom-width": "0px", "--border-color": "var(--color-border)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "1px", "backgroundColor": "var(--color-surface)", "width": "100%"} as CSSProperties}>
              <div className={"bex-9sf971"} data-design-name={"Container"}>
                <div className={"bex-6xeyyw"} data-design-name={"Content"}>
                  <div className={"bex-vm7ack"} data-design-name={"helio-logo-5-min 1"}>
                    <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"} as CSSProperties}>
                      <img decoding={"async"} width={"3794"} height={"1230"} sizes={"(min-width: 1440px) max(112px, 133px), (min-width: 810px) and (max-width: 1439.98px) max(112px, 120px), (max-width: 809.98px) 120px"} srcSet={"/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 512w,/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 1024w,/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 2048w,/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 3794w"} src={"/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png"} alt={""} style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "contain"} as CSSProperties} />
                    </div>
                  </div>
                  <div className={"bex-761pzj"} data-design-name={"Footer text"} data-component-type={"RichTextContainer"} style={{"--extracted-r6o4lv": "var(--token-92ae7d48-8270-48b4-b8f0-dcff02886975, var(--color-text))", "--bex-paragraph-spacing": "16px", "transform": "none"} as CSSProperties}>
                    <p dir={"auto"} className={"bex-text"} style={{"--bex-line-height": "24px", "--bex-text-alignment": "right", "--bex-text-color": "var(--extracted-r6o4lv, var(--token-92ae7d48-8270-48b4-b8f0-dcff02886975, var(--color-text)))"} as CSSProperties}>
<EditableCopy id="399b51a766c72cdb" fallback={"© 2026 Bextudio"}>

                      {"© 2026 Bextudio"}
                    
</EditableCopy>
</p>
                  </div>
                </div>
              </div>
              <div className={"bex-1y50051"} data-design-name={"Container"}>
                <div className={"bex-fhrd1u"} data-design-name={"Content"}>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"ssr-variant hidden-1veiylo"}>
          <div className={"bex-s0ja7d-container"}>
            <div className={"bex-W9zZe bex-5byvjv bex-v-1ita5wf"} data-border={"true"} data-design-name={"Tablet"} style={{"--border-bottom-width": "0px", "--border-color": "var(--color-border)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "1px", "backgroundColor": "var(--color-surface)", "width": "100%"} as CSSProperties}>
              <div className={"bex-9sf971"} data-design-name={"Container"}>
                <div className={"bex-6xeyyw"} data-design-name={"Content"}>
                  <div className={"bex-vm7ack"} data-design-name={"helio-logo-5-min 1"}>
                    <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"} as CSSProperties}>
                      <img decoding={"async"} width={"3794"} height={"1230"} sizes={"(min-width: 1440px) max(112px, 133px), (min-width: 810px) and (max-width: 1439.98px) max(112px, 120px), (max-width: 809.98px) 120px"} srcSet={"/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 512w,/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 1024w,/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 2048w,/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 3794w"} src={"/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png"} alt={""} style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "contain"} as CSSProperties} />
                    </div>
                  </div>
                  <div className={"bex-761pzj"} data-design-name={"Footer text"} data-component-type={"RichTextContainer"} style={{"--extracted-r6o4lv": "var(--token-92ae7d48-8270-48b4-b8f0-dcff02886975, var(--color-text))", "--bex-paragraph-spacing": "16px", "transform": "none"} as CSSProperties}>
                    <p dir={"auto"} className={"bex-text"} style={{"--bex-font-size": "var(--font-size-15)", "--bex-line-height": "22px", "--bex-text-alignment": "right", "--bex-text-color": "var(--extracted-r6o4lv, var(--token-92ae7d48-8270-48b4-b8f0-dcff02886975, var(--color-text)))"} as CSSProperties}>
<EditableCopy id="44be5085fd16abeb" fallback={"© 2026 Bextudio"}>

                      {"© 2026 Bextudio"}
                    
</EditableCopy>
</p>
                  </div>
                </div>
              </div>
              <div className={"bex-1y50051"} data-design-name={"Container"}>
                <div className={"bex-fhrd1u"} data-design-name={"Content"}>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"bex-1u4u344-container"} data-code-component-plugin-id={"mcp001"}>
          <div className={"ssr-variant hidden-1obgu3m"}>
            <div style={{"width": "100%", "height": "0", "overflow": "visible", "position": "relative", "pointerEvents": "none"} as CSSProperties}>
              <nav className={"arf-nav"} aria-label={"Primary navigation"}>
                <a className={"arf-brand"} href={"/"}>
                  {"BEXTUDIO"}
                </a>
                <div className={"arf-actions"}>
                  <a className={"arf-dashboard"} href={"https://platform.bextudio.com/home"}>
                    {"Dashboard"}
                  </a>
                  <button className={"arf-menu-button"} type={"button"} aria-label={"Open menu"} aria-expanded={"false"}>
                    {"☰"}
                  </button>
                </div>
              </nav>
            </div>
          </div>
          <div className={"ssr-variant hidden-1veiylo hidden-1thm8ml"}>
            <div style={{"width": "100%", "height": "0", "overflow": "visible", "position": "relative", "pointerEvents": "none"} as CSSProperties}>
              <nav className={"arf-nav"} aria-label={"Primary navigation"} style={{"display": "none"} as CSSProperties}>
                <a className={"arf-brand"} href={"/"}>
                  {"BEXTUDIO"}
                </a>
                <div className={"arf-actions"}>
                  <a className={"arf-dashboard"} href={"https://platform.bextudio.com/home"}>
                    {"Dashboard"}
                  </a>
                  <button className={"arf-menu-button"} type={"button"} aria-label={"Open menu"} aria-expanded={"false"}>
                    {"☰"}
                  </button>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </ResponsiveRoot>
      <div id={"overlay"}>
      </div>
      <div id={"svg-templates"} style={{"position": "absolute", "overflow": "hidden", "bottom": "0", "left": "0", "width": "0", "height": "0", "zIndex": "0", "contain": "strict"} as CSSProperties} aria-hidden={"true"}>
        {"\n"}
        <svg id={"1684851898"} display={"block"} role={"presentation"} viewBox={"0 0 24 24"} xmlns={"http://www.w3.org/2000/svg"}>
          <path d={"M 0 0 L 4.5 4.5 L 9 0 Z"} fillOpacity={"var(--1m6trwb, 0)"} fill={"var(--21h8s6, var(--color-text))"} height={"4.5px"} id={"CQe0YQ6eN"} transform={"translate(9.75 16.5)"} width={"9px"}>
          </path>
          <path d={"M 0 0 L 4.5 4.5 L 9 0 Z"} fill={"transparent"} height={"4.5px"} id={"EeJHyqVVr"} strokeDasharray={""} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"var(--pgex8v, 1.5)"} stroke={"var(--21h8s6, var(--color-text))"} transform={"translate(9.75 16.5)"} width={"9px"}>
          </path>
          <path d={"M 0 0 C 4.971 0 9 4.029 9 9 L 9 13.5"} fill={"transparent"} height={"13.5px"} id={"RsD4vbeHK"} strokeDasharray={""} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"var(--pgex8v, 1.5)"} stroke={"var(--21h8s6, var(--color-text))"} transform={"translate(5.25 3)"} width={"9px"}>
          </path>
        </svg>
        {"\n"}
        <svg id={"1171430842"} display={"block"} role={"presentation"} viewBox={"0 0 24 24"} xmlns={"http://www.w3.org/2000/svg"}>
          <path d={"M 0 0 L 14.5 0"} fill={"transparent"} height={"1px"} id={"jMF44oNeb"} strokeDasharray={""} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"var(--1335ju, 1.5)"} stroke={"var(--18mrqx2, var(--color-text))"} transform={"translate(4.75 5.75)"} width={"14.5px"}>
          </path>
          <path d={"M 0 0 L 14.5 0"} fill={"transparent"} height={"1px"} id={"lwuMFFtBI"} strokeDasharray={""} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"var(--1335ju, 1.5)"} stroke={"var(--18mrqx2, var(--color-text))"} transform={"translate(4.75 18.25)"} width={"14.5px"}>
          </path>
          <path d={"M 0 0 L 14.5 0"} fill={"transparent"} height={"1px"} id={"KKxXbtl64"} strokeDasharray={""} strokeLinecap={"round"} strokeLinejoin={"round"} strokeWidth={"var(--1335ju, 1.5)"} stroke={"var(--18mrqx2, var(--color-text))"} transform={"translate(4.75 12)"} width={"14.5px"}>
          </path>
        </svg>
        {"\n"}
      </div>
    </div>
  );
}
