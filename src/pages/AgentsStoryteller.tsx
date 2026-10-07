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
import '../styles/AgentsStoryteller.css';

// Migrated layout; all elements, copy and CSS are local editable source.
export default function AgentsStoryteller() {
  return (
    <div id={"page-main"}>
      <ResponsiveRoot data-design-root={""} className={"bex-WK0r1 bex-15isjsj"} style={{"minHeight": "100vh", "width": "auto"} as CSSProperties} breakpoints={[{"hash": "15isjsj"}]}>
        <div className={"bex-ytnz3u"} data-design-name={"Content"}>
          <div className={"bex-16d5jlr"} data-design-name={"Heading and supporting text"}>
            <div className={"bex-175lwbh"} data-design-name={"Heading"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
              <h2 dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-open-type-features": "'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on", "--bex-font-size": "var(--font-size-48)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "120%", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="4ac912683f4e7fc4" fallback={"Story Teller"}>

                <span style={{"display": "inline-block"} as CSSProperties}>
                  {"Story"}
                </span>
                {" "}
                <span style={{"display": "inline-block"} as CSSProperties}>
                  {"Teller"}
                </span>
              
</EditableCopy>
</h2>
            </div>
            <div className={"bex-d0jo6l"} data-design-name={"Supporting text"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
              <h4 dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-open-type-features": "'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on", "--bex-font-size": "var(--font-size-24)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "0.02em", "--bex-line-height": "140%", "--bex-text-alignment": "center", "--bex-text-color": "rgb(61, 61, 61)"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="1a9a2f2a44e20610" fallback={"An AI-powered fictional character with a story align with brand values. This character lives in social media to run active and effective campaigns."}>

                {"An AI-powered fictional character with a story align with brand values. This character lives in social media to run active and effective campaigns."}
              
</EditableCopy>
</h4>
            </div>
          </div>
          <div className={"bex-1yboqgt"} data-border={"true"} data-design-name={"instruction"} style={{} as CSSProperties}>
            <div className={"bex-sw9e2c"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
              <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.01em", "--bex-line-height": "1.6em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-3167a983-02df-49ea-b905-4140603624da, rgb(37, 30, 54))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="4e098e73efd498ac" fallback={" Select a brand, define your fictional character, and generate a social media storyteller aligned with the brand’s identity and values."}>

                {" Select a brand, define your fictional character, and generate a social media storyteller aligned with the brand’s identity and values."}
              
</EditableCopy>
</p>
            </div>
            <svg className={"bex-gqfLR bex-13w04gj"} role={"presentation"} viewBox={"0 0 24 24"}>
              <use href={"#1684851898"}>
              </use>
            </svg>
          </div>
        </div>
        <div className={"bex-hf8b3"} data-design-name={"Header section"}>
          <div className={"bex-yzg1gt"} data-design-name={"Hero"}>
            <div className={"bex-pvndil"} data-design-name={"Container"} style={{} as CSSProperties}>
              <div className={"bex-lqjg37"} data-design-name={"Api Content Frame"}>
                <div className={"bex-1yvtufv-container"}>
                  <Storyteller />
                </div>
              </div>
            </div>
          </div>
          <div className={"bex-tinijq-container"}>
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
        <section className={"bex-1900dkk"} data-design-name={"Sections / About"} id={"about"}>
          <div className={"bex-rkhhc"} data-design-name={"Container"}>
            <div className={"bex-1s3oym5"} data-design-name={"Texts"}>
              <div className={"bex-1lf0vsv"} data-design-name={"Content A"} id={"about-a"}>
                <div className={"bex-144i9c1"} data-design-name={"Text A"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-bf5ff424-04d7-4913-a034-02ab08d24e7b, var(--color-text))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="8eab98793af7ae74" fallback={"Define how the brand should speak"}>

                    {"Define how the brand should speak"}
                  
</EditableCopy>
</p>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-a8162a5b-c0e1-42c8-973e-81280a63ffef, var(--color-text-secondary))"} as CSSProperties} className={"bex-text"}>
                    <br className={"bex-text trailing-break"} />
                  </p>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-a8162a5b-c0e1-42c8-973e-81280a63ffef, var(--color-text-secondary))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="9f2bb079945acbac" fallback={"Analyze brand language, persuasion style, vocabulary behavior, sentence structure, emotional tone, narrative behavior, and consistency across communication touchpoints."}>

                    {"Analyze brand language, persuasion style, vocabulary behavior, sentence structure, emotional tone, narrative behavior, and consistency across communication touchpoints."}
                  
</EditableCopy>
</p>
                </div>
              </div>
              <div className={"bex-13g7x3z"} data-design-name={"Content B"} id={"about-b"}>
                <div className={"bex-1mijep2"} data-design-name={"Text A"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-bf5ff424-04d7-4913-a034-02ab08d24e7b, var(--color-text))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="bb50ac3b8c14f723" fallback={"Turn style into a reusable system"}>

                    {"Turn style into a reusable system"}
                  
</EditableCopy>
</p>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-a8162a5b-c0e1-42c8-973e-81280a63ffef, var(--color-text-secondary))"} as CSSProperties} className={"bex-text"}>
                    <br className={"bex-text trailing-break"} />
                  </p>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-a8162a5b-c0e1-42c8-973e-81280a63ffef, var(--color-text-secondary))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="0074349500f1cee7" fallback={"Extract the logic behind a writing style and convert it into usable guidance for rewriting, improving, comparing, or reproducing texts with greater precision."}>

                    {"Extract the logic behind a writing style and convert it into usable guidance for rewriting, improving, comparing, or reproducing texts with greater precision."}
                  
</EditableCopy>
</p>
                </div>
              </div>
              <div className={"bex-1tji13h"} data-design-name={"Content C"} id={"about-c"}>
                <div className={"bex-16er4uf"} data-design-name={"Text A"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-bf5ff424-04d7-4913-a034-02ab08d24e7b, var(--color-text))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="38cbcb49c8b0134c" fallback={"Improve communication without losing identity"}>

                    {"Improve communication without losing identity"}
                  
</EditableCopy>
</p>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-bf5ff424-04d7-4913-a034-02ab08d24e7b, var(--color-text))"} as CSSProperties} className={"bex-text"}>
                    <br className={"bex-text trailing-break"} />
                  </p>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-a8162a5b-c0e1-42c8-973e-81280a63ffef, var(--color-text-secondary))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="d052fcd889504842" fallback={"Rewrite and refine messages while preserving the intended meaning, strengthening distinctiveness, improving clarity, and keeping the brand’s voice consistent."}>

                    {"Rewrite and refine messages while preserving the intended meaning, strengthening distinctiveness, improving clarity, and keeping the brand’s voice consistent."}
                  
</EditableCopy>
</p>
                </div>
              </div>
            </div>
            <div className={"bex-z70hhd"} data-design-name={"Images"}>
              <div className={"bex-n3u69o-container"}>
                <div className={"bex-FHv6c bex-1pafset bex-v-1pafset"} data-design-name={"A"} style={{"height": "100%", "maxHeight": "100%", "width": "100%", "borderBottomLeftRadius": "16px", "borderBottomRightRadius": "16px", "borderTopLeftRadius": "16px", "borderTopRightRadius": "16px"} as CSSProperties}>
                  <div className={"bex-5rup4x"} data-design-name={"Image A"} style={{"borderBottomLeftRadius": "16px", "borderBottomRightRadius": "16px", "borderTopLeftRadius": "16px", "borderTopRightRadius": "16px"} as CSSProperties}>
                    <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"} as CSSProperties}>
                      <img decoding={"async"} loading={"lazy"} width={"890"} height={"1213"} sizes={"calc(max((min(100vw - 80px, 1200px) - 32px) / 2, 50px) - 32px)"} srcSet={"/assets/bb482fa008-Kw2w8MqnWpxtlB8WQH9uQ4DQoVk.png 751w,/assets/bb482fa008-Kw2w8MqnWpxtlB8WQH9uQ4DQoVk.png 890w"} src={"/assets/bb482fa008-Kw2w8MqnWpxtlB8WQH9uQ4DQoVk.png"} alt={"Concetrated triathlete grayscale"} style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover"} as CSSProperties} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className={"bex-vla8mi"} data-design-name={"Section"}>
          <div className={"bex-g01bb2"} data-design-name={"Content"}>
            <div className={"bex-wexug5"} data-design-name={"Heading and supporting text"}>
              <div className={"bex-2l90bl"} data-design-name={"Heading"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                <h2 dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-open-type-features": "'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on", "--bex-font-size": "var(--font-size-48)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "120%", "--bex-text-color": "var(--color-text)"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="4a5742e2c88e5ac5" fallback={"Need a Custom AI Agent?"}>

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
              <div className={"bex-2nc1kk"} data-design-name={"Supporting text"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
                <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-open-type-features": "'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on", "--bex-font-size": "var(--font-size-24)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.6em", "--bex-text-alignment": "center", "--bex-text-color": "rgb(102, 102, 102)"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="7e2a316bdc638fac" fallback={"Our team can build a tailored solution specifically for your business requirements."}>

                  {"Our team can build a tailored solution specifically for your business requirements."}
                
</EditableCopy>
</p>
              </div>
            </div>
            <div className={"bex-1mvu9qx-container"}>
              <a className={"bex-bBjUH bex-vcvr0j bex-v-vcvr0j bex-68pemw"} data-design-name={"Default"} data-reset={"button"} href={"/contact"} tabIndex={0} style={{"backgroundColor": "var(--token-1de575a6-6512-423f-865e-77b40528747b, var(--color-text))", "height": "100%", "width": "100%", "borderBottomLeftRadius": "8px", "borderBottomRightRadius": "8px", "borderTopLeftRadius": "8px", "borderTopRightRadius": "8px", "opacity": "1"} as CSSProperties}>
                <div className={"bex-1x9ljnz"} data-component-type={"RichTextContainer"} style={{"--extracted-r6o4lv": "var(--color-surface)", "--bex-link-text-color": "rgb(0, 153, 255)", "--bex-link-text-decoration": "underline", "transform": "none"} as CSSProperties}>
                  <p dir={"auto"} className={"bex-text"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-text-color": "var(--extracted-r6o4lv, var(--color-surface))"} as CSSProperties}>
<EditableCopy id="8595829be97385d5" fallback={"Contact Us"}>

                    {"Contact Us"}
                  
</EditableCopy>
</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <Navigation />
        <div className={"bex-7urb19-container"}>
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
<EditableCopy id="69c64816b50af612" fallback={"© 2026 Bextudio"}>

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
        <div className={"bex-eirk8a-container"} data-code-component-plugin-id={"mcp001"}>
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
