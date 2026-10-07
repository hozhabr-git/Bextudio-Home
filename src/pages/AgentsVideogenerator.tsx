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
import '../styles/AgentsVideogenerator.css';

// Migrated layout; all elements, copy and CSS are local editable source.
export default function AgentsVideogenerator() {
  return (
    <div id={"page-main"}>
      <ResponsiveRoot data-design-root={""} className={"bex-V0rEN bex-3qqy03"} style={{"minHeight": "100vh", "width": "auto"} as CSSProperties} breakpoints={[{"hash": "3qqy03"}]}>
        <div className={"bex-1ysjzc9"} data-design-name={"Content"}>
          <div className={"bex-1ac1j5t"} data-design-name={"Heading and supporting text"}>
            <div className={"bex-k6vihb"} data-design-name={"Heading"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
              <h2 dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-open-type-features": "'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on", "--bex-font-size": "var(--font-size-48)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "120%", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="97e113863f71edc4" fallback={"Video Generator"}>

                <span style={{"display": "inline-block"} as CSSProperties}>
                  {"Video"}
                </span>
                {" "}
                <span style={{"display": "inline-block"} as CSSProperties}>
                  {"Generator"}
                </span>
              
</EditableCopy>
</h2>
            </div>
            <div className={"bex-5lpj8r"} data-design-name={"Supporting text"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
              <h4 dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-open-type-features": "'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on", "--bex-font-size": "var(--font-size-24)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "0.02em", "--bex-line-height": "140%", "--bex-text-alignment": "center", "--bex-text-color": "rgb(61, 61, 61)"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="4fa2a45e241cda3e" fallback={"An AI cinematic production agent that transforms brand narratives, campaign concepts, and visual references into cohesive video scene systems."}>

                {"An AI cinematic production agent that transforms brand narratives, campaign concepts, and visual references into cohesive video scene systems."}
              
</EditableCopy>
</h4>
            </div>
          </div>
          <div className={"bex-1b4yvod"} data-border={"true"} data-design-name={"instruction"} style={{} as CSSProperties}>
            <div className={"bex-1ub9a9z"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
              <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.01em", "--bex-line-height": "1.6em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-3167a983-02df-49ea-b905-4140603624da, rgb(37, 30, 54))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="bba8e00e858d32ed" fallback={"Choose a brand, write your prompt, and generate a video tailored to that brand’s visual language"}>

                {"Choose a brand, write your prompt, and generate a video tailored to that brand’s visual language"}
              
</EditableCopy>
</p>
            </div>
            <svg className={"bex-gqfLR bex-2jlvdd"} role={"presentation"} viewBox={"0 0 24 24"}>
              <use href={"#1684851898"}>
              </use>
            </svg>
          </div>
        </div>
        <div className={"bex-1i28pq9"} data-design-name={"Header section"}>
          <div className={"bex-6o6bpa"} data-design-name={"Hero"}>
            <div className={"bex-45576g"} data-design-name={"Container"} style={{} as CSSProperties}>
              <div className={"bex-ij909k"} data-design-name={"Api Content Frame"}>
                <div className={"bex-lpyf7h-container"}>
                  <VideoGenerator />
                </div>
              </div>
            </div>
          </div>
          <div className={"bex-130inb0-container"}>
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
        <section className={"bex-149gdku"} data-design-name={"Sections / About"} id={"about"}>
          <div className={"bex-1w2z1p7"} data-design-name={"Container"}>
            <div className={"bex-l8nn6q"} data-design-name={"Texts"}>
              <div className={"bex-13uiwke"} data-design-name={"Content A"} id={"about-a"}>
                <div className={"bex-1a6rqys"} data-design-name={"Text A"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-bf5ff424-04d7-4913-a034-02ab08d24e7b, var(--color-text))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="7d558d3e3957b4fe" fallback={"Turn concepts into cinematic storytelling systems "}>

                    {"Turn concepts into cinematic storytelling systems "}
                  
</EditableCopy>
</p>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-a8162a5b-c0e1-42c8-973e-81280a63ffef, var(--color-text-secondary))"} as CSSProperties} className={"bex-text"}>
                    <br className={"bex-text trailing-break"} />
                  </p>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-a8162a5b-c0e1-42c8-973e-81280a63ffef, var(--color-text-secondary))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="fddc4d192afa314f" fallback={"Convert campaign ideas, narratives, and scripts into structured scene flows with visual continuity, shot sequencing, camera movement, pacing, atmosphere, and emotional direction."}>

                    {"Convert campaign ideas, narratives, and scripts into structured scene flows with visual continuity, shot sequencing, camera movement, pacing, atmosphere, and emotional direction."}
                  
</EditableCopy>
</p>
                </div>
              </div>
              <div className={"bex-10m54t4"} data-design-name={"Content B"} id={"about-b"}>
                <div className={"bex-1t9iis3"} data-design-name={"Text A"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-bf5ff424-04d7-4913-a034-02ab08d24e7b, var(--color-text))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="9d233cad2ceb6687" fallback={"Improve consistency across video production"}>

                    {"Improve consistency across video production"}
                  
</EditableCopy>
</p>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-bf5ff424-04d7-4913-a034-02ab08d24e7b, var(--color-text))"} as CSSProperties} className={"bex-text"}>
                    <br className={"bex-text trailing-break"} />
                  </p>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-a8162a5b-c0e1-42c8-973e-81280a63ffef, var(--color-text-secondary))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="b0a39988c0f1a5c7" fallback={"Create unified visual logic between scenes, environments, characters, transitions, and narrative rhythm to avoid fragmented storytelling."}>

                    {"Create unified visual logic between scenes, environments, characters, transitions, and narrative rhythm to avoid fragmented storytelling."}
                  
</EditableCopy>
</p>
                </div>
              </div>
              <div className={"bex-1fb88zl"} data-design-name={"Content C"} id={"about-c"}>
                <div className={"bex-1mw904v"} data-design-name={"Text A"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-bf5ff424-04d7-4913-a034-02ab08d24e7b, var(--color-text))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="ce67170ade39c77d" fallback={"Scale branded motion content faster"}>

                    {"Scale branded motion content faster"}
                  
</EditableCopy>
</p>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-a8162a5b-c0e1-42c8-973e-81280a63ffef, var(--color-text-secondary))"} as CSSProperties} className={"bex-text"}>
                    <br className={"bex-text trailing-break"} />
                  </p>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-a8162a5b-c0e1-42c8-973e-81280a63ffef, var(--color-text-secondary))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="e2e174a1de65b594" fallback={"Generate production-ready video structures that help teams align storyboard creation, editing logic, animation direction, and multi-platform content adaptation."}>

                    {"Generate production-ready video structures that help teams align storyboard creation, editing logic, animation direction, and multi-platform content adaptation."}
                  
</EditableCopy>
</p>
                </div>
              </div>
            </div>
            <div className={"bex-1lm9st"} data-design-name={"Images"}>
              <div className={"bex-1htannc-container"} draggable={"false"}>
                <video src={"/assets/42c99921f5-ennlX12MVY4fjUxfMnP1QTJFrA.mp4"} loop preload={"none"} muted playsInline style={{"cursor": "auto", "width": "100%", "height": "100%", "borderRadius": "15px", "display": "block", "objectFit": "cover", "backgroundColor": "rgba(0, 0, 0, 0)", "objectPosition": "50% 50%"} as CSSProperties} data-native-video="">
                </video>
              </div>
            </div>
          </div>
        </section>
        <div className={"bex-1z000jc"} data-design-name={"Section"}>
          <div className={"bex-1j80u6s"} data-design-name={"Content"}>
            <div className={"bex-ablhcl"} data-design-name={"Heading and supporting text"}>
              <div className={"bex-65y7p7"} data-design-name={"Heading"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                <h2 dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-open-type-features": "'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on", "--bex-font-size": "var(--font-size-48)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "120%", "--bex-text-color": "var(--color-text)"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="b1a076ed72080aa3" fallback={"Need a Custom AI Agent?"}>

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
              <div className={"bex-7hi8fr"} data-design-name={"Supporting text"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
                <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-open-type-features": "'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on", "--bex-font-size": "var(--font-size-24)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.6em", "--bex-text-alignment": "center", "--bex-text-color": "#666"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="e539860ae2a55654" fallback={"Our team can build a tailored solution specifically for your business requirements."}>

                  {"Our team can build a tailored solution specifically for your business requirements."}
                
</EditableCopy>
</p>
              </div>
            </div>
            <div className={"bex-120xsf2-container"}>
              <a className={"bex-bBjUH bex-vcvr0j bex-v-vcvr0j bex-68pemw"} data-design-name={"Default"} data-reset={"button"} href={"/contact"} tabIndex={0} style={{"backgroundColor": "var(--token-1de575a6-6512-423f-865e-77b40528747b, var(--color-text))", "height": "100%", "width": "100%", "borderBottomLeftRadius": "8px", "borderBottomRightRadius": "8px", "borderTopLeftRadius": "8px", "borderTopRightRadius": "8px", "opacity": "1"} as CSSProperties}>
                <div className={"bex-1x9ljnz"} data-component-type={"RichTextContainer"} style={{"--extracted-r6o4lv": "var(--color-surface)", "--bex-link-text-color": "rgb(0, 153, 255)", "--bex-link-text-decoration": "underline", "transform": "none"} as CSSProperties}>
                  <p dir={"auto"} className={"bex-text"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-text-color": "var(--extracted-r6o4lv, var(--color-surface))"} as CSSProperties}>
<EditableCopy id="1e23557001aa8bf0" fallback={"Contact Us"}>

                    {"Contact Us"}
                  
</EditableCopy>
</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <Navigation />
        <div className={"bex-1mp6nbl-container"}>
          <div className={"bex-W9zZe bex-5byvjv bex-v-5byvjv"} data-border={"true"} data-design-name={"Desktop"} style={{"--border-bottom-width": "0px", "--border-color": "var(--color-border)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "1px", "backgroundColor": "var(--color-surface)", "width": "100%"} as CSSProperties}>
            <div className={"bex-9sf971"} data-design-name={"Container"}>
              <div className={"bex-6xeyyw"} data-design-name={"Content"}>
                <div className={"bex-vm7ack"} data-design-name={"helio-logo-5-min 1"}>
                  <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"} as CSSProperties}>
                    <img decoding={"async"} loading={"lazy"} width={"3794"} height={"1230"} sizes={"133px"} srcSet={"/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 512w,/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 1024w,/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 2048w,/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 3794w"} src={"/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png"} alt={""} style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "contain"} as CSSProperties} />
                  </div>
                </div>
                <div className={"bex-761pzj"} data-design-name={"Footer text"} data-component-type={"RichTextContainer"} style={{"--extracted-r6o4lv": "var(--token-92ae7d48-8270-48b4-b8f0-dcff02886975, var(--color-text))", "--bex-paragraph-spacing": "16px", "transform": "none"} as CSSProperties}>
                  <p dir={"auto"} className={"bex-text"} style={{"--bex-line-height": "24px", "--bex-text-alignment": "right", "--bex-text-color": "var(--extracted-r6o4lv, var(--token-92ae7d48-8270-48b4-b8f0-dcff02886975, var(--color-text)))"} as CSSProperties}>
<EditableCopy id="10fa4a48e1a7f7ad" fallback={"© 2026 Bextudio"}>

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
        <div className={"bex-ljh0b6-container"} data-code-component-plugin-id={"mcp001"}>
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
      </div>
    </div>
  );
}
