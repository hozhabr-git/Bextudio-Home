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
import '../styles/AgentsAvatar.css';

// Migrated layout; all elements, copy and CSS are local editable source.
export default function AgentsAvatar() {
  return (
    <div id={"page-main"}>
      <ResponsiveRoot data-design-root={""} className={"bex-mfm81 bex-1xo4qog"} style={{"minHeight": "100vh", "width": "auto"} as CSSProperties} breakpoints={[{"hash": "1xo4qog"}]}>
        <div className={"bex-3dpukl"} data-design-name={"Content"}>
          <div className={"bex-9sle4q"} data-design-name={"Heading and supporting text"}>
            <div className={"bex-13uhldv"} data-design-name={"Heading"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
              <h2 dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-open-type-features": "'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on", "--bex-font-size": "var(--font-size-48)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "120%", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="da9b0c9e19c27f96" fallback={"Avatar"}>

                <span style={{"display": "inline-block"} as CSSProperties}>
                  {"Avatar"}
                </span>
              
</EditableCopy>
</h2>
            </div>
            <div className={"bex-1wa0mv0"} data-design-name={"Supporting text"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
              <h4 dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-open-type-features": "'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on", "--bex-font-size": "var(--font-size-24)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "0.02em", "--bex-line-height": "140%", "--bex-text-alignment": "center", "--bex-text-color": "rgb(61, 61, 61)"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="50e99821ca82ec77" fallback={"An AI-powered brand avatar agent that turns brand identity into a human-like, interactive, and channel-ready communication presence."}>

                {"An AI-powered brand avatar agent that turns brand identity into a human-like, interactive, and channel-ready communication presence."}
              
</EditableCopy>
</h4>
            </div>
          </div>
        </div>
        <section className={"bex-10f3pj2"} data-design-name={"Sections / About"} id={"about"}>
          <div className={"bex-rt1982"} data-design-name={"Container"}>
            <div className={"bex-1hbvbr0"} data-design-name={"Texts"}>
              <div className={"bex-ayz755"} data-design-name={"Content A"} id={"about-a"}>
                <div className={"bex-11u1fs2"} data-design-name={"Text A"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-bf5ff424-04d7-4913-a034-02ab08d24e7b, var(--color-text))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="045b9c58d94c5331" fallback={"Turn brand identity into a living character"}>

                    {"Turn brand identity into a living character"}
                  
</EditableCopy>
</p>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-a8162a5b-c0e1-42c8-973e-81280a63ffef, var(--color-text-secondary))"} as CSSProperties} className={"bex-text"}>
                    <br className={"bex-text trailing-break"} />
                  </p>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-a8162a5b-c0e1-42c8-973e-81280a63ffef, var(--color-text-secondary))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="578248c5d01ab578" fallback={"Convert a brand’s values, tone, audience profile, visual language, communication goals, and service needs into a structured AI avatar with a clear personality, role, behavior, and communication logic."}>

                    {"Convert a brand’s values, tone, audience profile, visual language, communication goals, and service needs into a structured AI avatar with a clear personality, role, behavior, and communication logic."}
                  
</EditableCopy>
</p>
                </div>
              </div>
              <div className={"bex-1nk503w"} data-design-name={"Content B"} id={"about-b"}>
                <div className={"bex-1341oqa"} data-design-name={"Text A"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-bf5ff424-04d7-4913-a034-02ab08d24e7b, var(--color-text))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="a6db0ad7ce9207f4" fallback={"Build stronger connections with people"}>

                    {"Build stronger connections with people"}
                  
</EditableCopy>
</p>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-a8162a5b-c0e1-42c8-973e-81280a63ffef, var(--color-text-secondary))"} as CSSProperties} className={"bex-text"}>
                    <br className={"bex-text trailing-break"} />
                  </p>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-a8162a5b-c0e1-42c8-973e-81280a63ffef, var(--color-text-secondary))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="247d49e4d5c62d59" fallback={"Create a recognizable digital representative that helps audiences understand the brand, trust its messages, interact with its services, and experience the brand in a more personal and human-centered way."}>

                    {"Create a recognizable digital representative that helps audiences understand the brand, trust its messages, interact with its services, and experience the brand in a more personal and human-centered way."}
                  
</EditableCopy>
</p>
                </div>
              </div>
              <div className={"bex-1imtlzn"} data-design-name={"Content C"} id={"about-c"}>
                <div className={"bex-1eavyn1"} data-design-name={"Text A"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-bf5ff424-04d7-4913-a034-02ab08d24e7b, var(--color-text))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="af6210f66ab76ec8" fallback={"Connect the avatar to key touchpoints"}>

                    {"Connect the avatar to key touchpoints"}
                  
</EditableCopy>
</p>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-bf5ff424-04d7-4913-a034-02ab08d24e7b, var(--color-text))"} as CSSProperties} className={"bex-text"}>
                    <br className={"bex-text trailing-break"} />
                  </p>
                  <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-28)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.4em", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-a8162a5b-c0e1-42c8-973e-81280a63ffef, var(--color-text-secondary))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="388ed1be8687ab38" fallback={"Define how the AI avatar appears across social media, website, mobile app, customer support, digital ads, video content, events, retail spaces, messaging platforms, and brand campaigns."}>

                    {"Define how the AI avatar appears across social media, website, mobile app, customer support, digital ads, video content, events, retail spaces, messaging platforms, and brand campaigns."}
                  
</EditableCopy>
</p>
                </div>
              </div>
            </div>
            <div className={"bex-1esmxb9"} data-design-name={"Images"}>
              <div className={"bex-713mqy-container"} draggable={"false"}>
                <video src={"/assets/2e76fbb23a-ekkcLlhSaEBCWUhQlV8wAhcWSE.mp4"} loop preload={"none"} muted playsInline style={{"cursor": "auto", "width": "100%", "height": "100%", "borderRadius": "15px", "display": "block", "objectFit": "cover", "backgroundColor": "rgba(0, 0, 0, 0)", "objectPosition": "50% 50%"} as CSSProperties} data-native-video="">
                </video>
              </div>
            </div>
          </div>
        </section>
        <div className={"bex-qh6880"} data-design-name={"Section"}>
          <div className={"bex-xfneqk"} data-design-name={"Content"}>
            <div className={"bex-1kshhkk"} data-design-name={"Heading and supporting text"}>
              <div className={"bex-c8cedn"} data-design-name={"Heading"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                <h2 dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-open-type-features": "'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on", "--bex-font-size": "var(--font-size-48)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "120%"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="5513263f1274b601" fallback={"Need a Custom AI Agent?"}>

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
              <div className={"bex-1iwv5fa"} data-design-name={"Supporting text"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
                <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-open-type-features": "'blwf' on, 'cv03' on, 'cv04' on, 'cv09' on, 'cv11' on", "--bex-font-size": "var(--font-size-24)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "1.6em", "--bex-text-alignment": "center", "--bex-text-color": "rgb(102, 102, 102)"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="0e63feb5581fefef" fallback={"Our team can build a tailored solution specifically for your business requirements."}>

                  {"Our team can build a tailored solution specifically for your business requirements."}
                
</EditableCopy>
</p>
              </div>
            </div>
            <div className={"bex-1ikgm2m-container"}>
              <a className={"bex-bBjUH bex-vcvr0j bex-v-vcvr0j bex-68pemw"} data-design-name={"Default"} data-reset={"button"} href={"/contact"} tabIndex={0} style={{"backgroundColor": "var(--token-1de575a6-6512-423f-865e-77b40528747b, var(--color-text))", "height": "100%", "width": "100%", "borderBottomLeftRadius": "8px", "borderBottomRightRadius": "8px", "borderTopLeftRadius": "8px", "borderTopRightRadius": "8px", "opacity": "1"} as CSSProperties}>
                <div className={"bex-1x9ljnz"} data-component-type={"RichTextContainer"} style={{"--extracted-r6o4lv": "var(--color-surface)", "--bex-link-text-color": "rgb(0, 153, 255)", "--bex-link-text-decoration": "underline", "transform": "none"} as CSSProperties}>
                  <p dir={"auto"} className={"bex-text"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-text-color": "var(--extracted-r6o4lv, var(--color-surface))"} as CSSProperties}>
<EditableCopy id="ab489584a2dc653b" fallback={"Contact Us"}>

                    {"Contact Us"}
                  
</EditableCopy>
</p>
                </div>
              </a>
            </div>
          </div>
        </div>
        <Navigation />
        <div className={"bex-do98hh-container"}>
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
<EditableCopy id="8f1fe600821c0ec0" fallback={"© 2026 Bextudio"}>

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
        <div className={"bex-1amgfdk-container"} data-code-component-plugin-id={"mcp001"}>
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
