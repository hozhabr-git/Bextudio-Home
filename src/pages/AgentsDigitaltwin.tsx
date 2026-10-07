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
import '../styles/AgentsDigitaltwin.css';

// Migrated layout; all elements, copy and CSS are local editable source.
export default function AgentsDigitaltwin() {
  return (
    <div id={"page-main"}>
      <ResponsiveRoot data-design-root={""} className={"bex-NhLe3 bex-bohpio"} style={{"minHeight": "100vh", "width": "auto"} as CSSProperties} breakpoints={[{"hash": "bohpio"}]}>
        <div className={"bex-1f97r5q"} data-design-name={"Content"}>
          <div className={"bex-1py498d"} data-design-name={"Heading and supporting text"}>
            <div className={"bex-13ad58x"} data-design-name={"Heading"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
              <h2 dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-open-type-features": "'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on", "--bex-font-size": "var(--font-size-48)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "120%", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="e876fe0fab85e8d5" fallback={"Brand Digital Twin"}>

                <span style={{"display": "inline-block"} as CSSProperties}>
                  {"Brand"}
                </span>
                {" "}
                <span style={{"display": "inline-block"} as CSSProperties}>
                  {"Digital"}
                </span>
                {" "}
                <span style={{"display": "inline-block"} as CSSProperties}>
                  {"Twin"}
                </span>
              
</EditableCopy>
</h2>
            </div>
            <div className={"bex-kp278v"} data-design-name={"Supporting text"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
              <h4 dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-open-type-features": "'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on", "--bex-font-size": "var(--font-size-24)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "0.02em", "--bex-line-height": "140%", "--bex-text-alignment": "center", "--bex-text-color": "rgb(61, 61, 61)"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="3bcae38dc37cf404" fallback={"An AI brand strategy agent that turns founder identity, business context, and audience understanding into a complete brand-as-city strategy."}>

                {"An AI brand strategy agent that turns founder identity, business context, and audience understanding into a complete brand-as-city strategy."}
              
</EditableCopy>
</h4>
            </div>
          </div>
          <div className={"bex-130sqc9"} data-border={"true"} data-design-name={"instruction"} style={{} as CSSProperties}>
            <div className={"bex-1j420cf"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
              <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.01em", "--bex-line-height": "1.6em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-3167a983-02df-49ea-b905-4140603624da, rgb(37, 30, 54))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="ad79b3ca7e0ff7d5" fallback={"Choose a brand, write your campaign brief, and generate a campaign concept aligned with that brand’s identity."}>

                {"Choose a brand, write your campaign brief, and generate a campaign concept aligned with that brand’s identity."}
              
</EditableCopy>
</p>
            </div>
            <svg className={"bex-gqfLR bex-14bojn4"} role={"presentation"} viewBox={"0 0 24 24"}>
              <use href={"#1684851898"}>
              </use>
            </svg>
          </div>
        </div>
        <div className={"bex-1krzd6i"} data-design-name={"Header section"}>
          <div className={"bex-4cefdg"} data-design-name={"Hero"}>
            <div className={"bex-bi9i0n"} data-design-name={"Container"} style={{} as CSSProperties}>
              <div className={"bex-1866v4l"} data-design-name={"Api Content Frame"}>
                <div className={"bex-1epv9s2-container"}>
                  <DigitalTwin />
                </div>
              </div>
            </div>
          </div>
          <div className={"bex-1w19him-container"}>
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
        <section className={"bex-148gydo"} data-design-name={"Sections / About"} id={"about"}>
          <div className={"bex-llosvk"} data-design-name={"Container"}>
            <div className={"bex-1adpvfg"} data-design-name={"Texts"}>
              <div className={"bex-xt9772"} data-design-name={"Content A"} id={"about-a"}>
                <div className={"bex-3wahrb"} data-design-name={"Text A"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-bf5ff424-04d7-4913-a034-02ab08d24e7b, var(--color-text))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="8ec9146498d1c19c" fallback={"Build the brand from founder truth"}>

                    {"Build the brand from founder truth"}
                  
</EditableCopy>
</p>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-a8162a5b-c0e1-42c8-973e-81280a63ffef, var(--color-text-secondary))"} as CSSProperties} className={"bex-text"}>
                    <br className={"bex-text trailing-break"} />
                  </p>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-a8162a5b-c0e1-42c8-973e-81280a63ffef, var(--color-text-secondary))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="cc2cb1a73181999c" fallback={"Analyze founder Soul Prints, business reflections, interviews, and strategic materials to uncover the deeper values, tensions, motivations, and operating instincts behind the brand."}>

                    {"Analyze founder Soul Prints, business reflections, interviews, and strategic materials to uncover the deeper values, tensions, motivations, and operating instincts behind the brand."}
                  
</EditableCopy>
</p>
                </div>
              </div>
              <div className={"bex-1nx8uq"} data-design-name={"Content B"} id={"about-b"}>
                <div className={"bex-1rqrbj5"} data-design-name={"Text A"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-bf5ff424-04d7-4913-a034-02ab08d24e7b, var(--color-text))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="4c886d2b0ad4f3a2" fallback={"Translate strategy into a city model"}>

                    {"Translate strategy into a city model"}
                  
</EditableCopy>
</p>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-a8162a5b-c0e1-42c8-973e-81280a63ffef, var(--color-text-secondary))"} as CSSProperties} className={"bex-text"}>
                    <br className={"bex-text trailing-break"} />
                  </p>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-a8162a5b-c0e1-42c8-973e-81280a63ffef, var(--color-text-secondary))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="8dd13f81c8db721a" fallback={"Move from founder logic to brand purpose, cultural frameworks, audience citizens, pain and tension maps, rituals, roles, rules, touchpoints, and strategic resources."}>

                    {"Move from founder logic to brand purpose, cultural frameworks, audience citizens, pain and tension maps, rituals, roles, rules, touchpoints, and strategic resources."}
                  
</EditableCopy>
</p>
                </div>
              </div>
              <div className={"bex-11t9lrn"} data-design-name={"Content C"} id={"about-c"}>
                <div className={"bex-13x1m34"} data-design-name={"Text A"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-bf5ff424-04d7-4913-a034-02ab08d24e7b, var(--color-text))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="9bba574055e30556" fallback={"Create a coherent Story of City"}>

                    {"Create a coherent Story of City"}
                  
</EditableCopy>
</p>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-a8162a5b-c0e1-42c8-973e-81280a63ffef, var(--color-text-secondary))"} as CSSProperties} className={"bex-text"}>
                    <br className={"bex-text trailing-break"} />
                  </p>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-a8162a5b-c0e1-42c8-973e-81280a63ffef, var(--color-text-secondary))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="6d4c860cd8f5fb72" fallback={"Turn the City Canvas into a human, emotionally believable brand narrative that explains what kind of world the brand creates and why people would want to belong to it."}>

                    {"Turn the City Canvas into a human, emotionally believable brand narrative that explains what kind of world the brand creates and why people would want to belong to it."}
                  
</EditableCopy>
</p>
                </div>
              </div>
            </div>
            <div className={"bex-15uz15m"} data-design-name={"Images"}>
              <div className={"bex-1ucw358-container"} draggable={"false"}>
                <video src={"/assets/137ee3a40a-JfwMPn69WCQw4fu8wb6rUxJjjzA.mp4"} loop preload={"none"} muted playsInline style={{"cursor": "auto", "width": "100%", "height": "100%", "borderRadius": "15px", "display": "block", "objectFit": "cover", "backgroundColor": "rgba(0, 0, 0, 0)", "objectPosition": "50% 50%"} as CSSProperties} data-native-video="">
                </video>
              </div>
            </div>
          </div>
        </section>
        <div className={"bex-gyphh6"} data-design-name={"Section"}>
          <div className={"bex-1eway6k"} data-design-name={"Content"}>
            <div className={"bex-vqyzb1"} data-design-name={"Heading and supporting text"}>
              <div className={"bex-1yhrdsq"} data-design-name={"Heading"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                <h2 dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-open-type-features": "'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on", "--bex-font-size": "var(--font-size-48)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "120%"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="24df8cbf0c855519" fallback={"Need a Custom AI Agent?"}>

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
              <div className={"bex-ug1cl2"} data-design-name={"Supporting text"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
                <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-open-type-features": "'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on", "--bex-font-size": "var(--font-size-24)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.6em", "--bex-text-alignment": "center", "--bex-text-color": "rgb(102, 102, 102)"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="de2b672f1dcaf212" fallback={"Our team can build a tailored solution specifically for your business requirements."}>

                  {"Our team can build a tailored solution specifically for your business requirements."}
                
</EditableCopy>
</p>
              </div>
            </div>
            <div className={"bex-16syexd-container"}>
              <a className={"bex-bBjUH bex-vcvr0j bex-v-vcvr0j bex-68pemw"} data-design-name={"Default"} data-reset={"button"} href={"/contact"} tabIndex={0} style={{"backgroundColor": "var(--token-1de575a6-6512-423f-865e-77b40528747b, var(--color-text))", "height": "100%", "width": "100%", "borderBottomLeftRadius": "8px", "borderBottomRightRadius": "8px", "borderTopLeftRadius": "8px", "borderTopRightRadius": "8px", "opacity": "1"} as CSSProperties}>
                <div className={"bex-1x9ljnz"} data-component-type={"RichTextContainer"} style={{"--extracted-r6o4lv": "var(--color-surface)", "--bex-link-text-color": "rgb(0, 153, 255)", "--bex-link-text-decoration": "underline", "transform": "none"} as CSSProperties}>
                  <p dir={"auto"} className={"bex-text"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-text-color": "var(--extracted-r6o4lv, var(--color-surface))"} as CSSProperties}>
<EditableCopy id="f1ab75ac8811c474" fallback={"Contact Us"}>

                    {"Contact Us"}
                  
</EditableCopy>
</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <Navigation />
        <div className={"bex-199l931-container"}>
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
<EditableCopy id="bd481bb8815ce28e" fallback={"© 2026 Bextudio"}>

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
        <div className={"bex-lln8tw-container"} data-code-component-plugin-id={"mcp001"}>
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
