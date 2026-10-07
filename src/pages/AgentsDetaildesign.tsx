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
import '../styles/AgentsDetaildesign.css';

// Migrated layout; all elements, copy and CSS are local editable source.
export default function AgentsDetaildesign() {
  return (
    <div id={"page-main"}>
      <ResponsiveRoot data-design-root={""} className={"bex-9t7wK bex-uguhjs"} style={{"minHeight": "100vh", "width": "auto"} as CSSProperties} breakpoints={[{"hash": "uguhjs"}]}>
        <div className={"bex-1denc1t"} data-design-name={"Content"}>
          <div className={"bex-chy2zn"} data-design-name={"Heading and supporting text"}>
            <div className={"bex-w8zdnf"} data-design-name={"Heading"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
              <h2 dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-open-type-features": "'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on", "--bex-font-size": "var(--font-size-48)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "120%", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="692506c8576f968e" fallback={"Detail Design"}>

                <span style={{"display": "inline-block"} as CSSProperties}>
                  {"Detail"}
                </span>
                {" "}
                <span style={{"display": "inline-block"} as CSSProperties}>
                  {"Design"}
                </span>
              
</EditableCopy>
</h2>
            </div>
            <div className={"bex-1fcujnm"} data-design-name={"Supporting text"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
              <h4 dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-open-type-features": "'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on", "--bex-font-size": "var(--font-size-24)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "0.02em", "--bex-line-height": "140%", "--bex-text-alignment": "center", "--bex-text-color": "rgb(61, 61, 61)"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="4730175b8b0f9e70" fallback={"An AI technical design agent that turns a single product reference image into structured design outputs for visualization, development, and early-stage manufacturing alignment."}>

                {"An AI technical design agent that turns a single product reference image into structured design outputs for visualization, development, and early-stage manufacturing alignment."}
              
</EditableCopy>
</h4>
            </div>
          </div>
        </div>
        <section className={"bex-7cca8u"} data-design-name={"Sections / About"} id={"about"}>
          <div className={"bex-10gmnxi"} data-design-name={"Container"}>
            <div className={"bex-1849xkz"} data-design-name={"Texts"}>
              <div className={"bex-19mmy48"} data-design-name={"Content A"} id={"about-a"}>
                <div className={"bex-vavlkk"} data-design-name={"Text A"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-bf5ff424-04d7-4913-a034-02ab08d24e7b, var(--color-text))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="5f41515ece76e3dc" fallback={"Turn images into technical design outputs"}>

                    {"Turn images into technical design outputs"}
                  
</EditableCopy>
</p>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-a8162a5b-c0e1-42c8-973e-81280a63ffef, var(--color-text-secondary))"} as CSSProperties} className={"bex-text"}>
                    <br className={"bex-text trailing-break"} />
                  </p>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-a8162a5b-c0e1-42c8-973e-81280a63ffef, var(--color-text-secondary))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="947c41d65ca6df78" fallback={"Upload a single product reference image and generate structured outputs including product identification, dimension logic, material suggestions, manufacturing notes, orthographic views, exploded views, section drawings, and 3D model assets."}>

                    {"Upload a single product reference image and generate structured outputs including product identification, dimension logic, material suggestions, manufacturing notes, orthographic views, exploded views, section drawings, and 3D model assets."}
                  
</EditableCopy>
</p>
                </div>
              </div>
              <div className={"bex-1rc9cyx"} data-design-name={"Content B"} id={"about-b"}>
                <div className={"bex-1w65zp4"} data-design-name={"Text A"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-bf5ff424-04d7-4913-a034-02ab08d24e7b, var(--color-text))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="7ed2e3a814241a78" fallback={"Speed up early design development"}>

                    {"Speed up early design development"}
                  
</EditableCopy>
</p>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-bf5ff424-04d7-4913-a034-02ab08d24e7b, var(--color-text))"} as CSSProperties} className={"bex-text"}>
                    <br className={"bex-text trailing-break"} />
                  </p>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-a8162a5b-c0e1-42c8-973e-81280a63ffef, var(--color-text-secondary))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="10ef0d267f371455" fallback={"Reduce the manual effort required to translate mood board images, concept visuals, or product references into draft able, reviewable, and presentation-ready technical directions."}>

                    {"Reduce the manual effort required to translate mood board images, concept visuals, or product references into draft able, reviewable, and presentation-ready technical directions."}
                  
</EditableCopy>
</p>
                </div>
              </div>
              <div className={"bex-1xtfqsz"} data-design-name={"Content C"} id={"about-c"}>
                <div className={"bex-1cgfc0u"} data-design-name={"Text A"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-bf5ff424-04d7-4913-a034-02ab08d24e7b, var(--color-text))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="9b9c04528b202cb2" fallback={"Connect design intent with production logic"}>

                    {"Connect design intent with production logic"}
                  
</EditableCopy>
</p>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-bf5ff424-04d7-4913-a034-02ab08d24e7b, var(--color-text))"} as CSSProperties} className={"bex-text"}>
                    <br className={"bex-text trailing-break"} />
                  </p>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-a8162a5b-c0e1-42c8-973e-81280a63ffef, var(--color-text-secondary))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="45f16ce854db4bb7" fallback={"Create a clearer link between the designer’s vision and the factory floor by organizing dimensions, materials, fabrication steps, assembly logic, and quality-control considerations into one workflow."}>

                    {"Create a clearer link between the designer’s vision and the factory floor by organizing dimensions, materials, fabrication steps, assembly logic, and quality-control considerations into one workflow."}
                  
</EditableCopy>
</p>
                </div>
              </div>
            </div>
            <div className={"bex-wcpuxj"} data-design-name={"Images"}>
              <div className={"bex-1r35flo-container"} draggable={"false"}>
                <video src={"/assets/4956ba6d24-huQN9hdYQXnZlaV5cv7AiAPNnuE.mp4"} loop preload={"none"} muted playsInline style={{"cursor": "auto", "width": "100%", "height": "100%", "borderRadius": "15px", "display": "block", "objectFit": "cover", "backgroundColor": "rgba(0, 0, 0, 0)", "objectPosition": "50% 50%"} as CSSProperties} data-native-video="">
                </video>
              </div>
            </div>
          </div>
        </section>
        <div className={"bex-jlyhf1"} data-design-name={"Section"}>
          <div className={"bex-105gsy"} data-design-name={"Content"}>
            <div className={"bex-1nt2kia"} data-design-name={"Heading and supporting text"}>
              <div className={"bex-113qor4"} data-design-name={"Heading"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                <h2 dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-open-type-features": "'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on", "--bex-font-size": "var(--font-size-48)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "120%"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="109b66832a70994b" fallback={"Need a Custom AI Agent?"}>

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
              <div className={"bex-dye29r"} data-design-name={"Supporting text"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
                <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-open-type-features": "'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on", "--bex-font-size": "var(--font-size-24)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.6em", "--bex-text-alignment": "center", "--bex-text-color": "rgb(102, 102, 102)"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="472ea208efc5c63f" fallback={"Our team can build a tailored solution specifically for your business requirements."}>

                  {"Our team can build a tailored solution specifically for your business requirements."}
                
</EditableCopy>
</p>
              </div>
            </div>
            <div className={"bex-zabf9h-container"}>
              <a className={"bex-bBjUH bex-vcvr0j bex-v-vcvr0j bex-68pemw"} data-design-name={"Default"} data-reset={"button"} href={"/contact"} tabIndex={0} style={{"backgroundColor": "var(--token-1de575a6-6512-423f-865e-77b40528747b, var(--color-text))", "height": "100%", "width": "100%", "borderBottomLeftRadius": "8px", "borderBottomRightRadius": "8px", "borderTopLeftRadius": "8px", "borderTopRightRadius": "8px", "opacity": "1"} as CSSProperties}>
                <div className={"bex-1x9ljnz"} data-component-type={"RichTextContainer"} style={{"--extracted-r6o4lv": "var(--color-surface)", "--bex-link-text-color": "rgb(0, 153, 255)", "--bex-link-text-decoration": "underline", "transform": "none"} as CSSProperties}>
                  <p dir={"auto"} className={"bex-text"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-text-color": "var(--extracted-r6o4lv, var(--color-surface))"} as CSSProperties}>
<EditableCopy id="3b11c2608e57f6e6" fallback={"Contact Us"}>

                    {"Contact Us"}
                  
</EditableCopy>
</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <Navigation />
        <div className={"bex-1apky9q-container"}>
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
<EditableCopy id="8d2bad8c1b439cc2" fallback={"© 2026 Bextudio"}>

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
        <div className={"bex-1i0jvu8-container"} data-code-component-plugin-id={"mcp001"}>
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
      </div>
    </div>
  );
}
