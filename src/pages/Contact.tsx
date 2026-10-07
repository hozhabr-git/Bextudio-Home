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
import '../styles/Contact.css';

// Migrated layout; all elements, copy and CSS are local editable source.
export default function Contact() {
  return (
    <div id={"page-main"}>
      <ResponsiveRoot data-design-root={""} className={"bex-NJ04U bex-dpXo0 bex-11d7awu"} style={{"minHeight": "100vh", "width": "auto"} as CSSProperties} breakpoints={[{"hash": "11d7awu", "mediaQuery": "(min-width: 1440px)"}, {"hash": "l5dxw7", "mediaQuery": "(min-width: 810px) and (max-width: 1439.98px)"}, {"hash": "1886ltc", "mediaQuery": "(max-width: 809.98px)"}]}>
        <section className={"bex-115x7ls"} data-design-name={"Hero"}>
          <div className={"bex-1n2r1hb"} data-border={"true"} data-design-name={"Padding"} style={{} as CSSProperties}>
            <div className={"bex-y5h70q"} data-design-name={"Content"}>
              <div className={"bex-1vk5wxq"} data-design-name={"Head Content"}>
                <div className={"ssr-variant hidden-1886ltc"}>
                  <div className={"bex-6ghcyl"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                    <h1 dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-open-type-features": "'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on", "--bex-font-size": "var(--font-size-48)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.2px", "--bex-line-height": "56px", "--bex-text-alignment": "center", "--bex-text-color": "var(--token-c5672fec-6041-4722-ae92-3b99e465b08f, rgb(29, 29, 29))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="25418a66c0f8aeef" fallback={"Get in touch with us"}>

                      {"Get in touch with us"}
                    
</EditableCopy>
</h1>
                  </div>
                </div>
                <div className={"ssr-variant hidden-11d7awu hidden-l5dxw7"}>
                  <div className={"bex-6ghcyl"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                    <h1 dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-open-type-features": "'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on", "--bex-font-size": "var(--font-size-32)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.2px", "--bex-line-height": "56px", "--bex-text-alignment": "center", "--bex-text-color": "var(--token-c5672fec-6041-4722-ae92-3b99e465b08f, rgb(29, 29, 29))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="5c3da32e5aa5aa67" fallback={"Get in touch with us"}>

                      {"Get in touch with us"}
                    
</EditableCopy>
</h1>
                  </div>
                </div>
                <div className={"ssr-variant hidden-1886ltc"}>
                  <div className={"bex-11rcjux"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                    <p dir={"auto"} style={{"--bex-font-open-type-features": "'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on", "--bex-font-size": "var(--font-size-18)", "--bex-letter-spacing": "-0.1px", "--bex-line-height": "28px", "--bex-text-alignment": "center", "--bex-text-color": "var(--token-0f5f6cf6-0de9-4599-9347-86ab90991a34, rgba(10, 10, 10, 0.7))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="c1202b8d10c3a860" fallback={"We’re here to help with any questions or support you need. Reach out to our team and we’ll get back to you asap."}>

                      {"We’re here to help with any questions or support you need. Reach out to our team and we’ll get back to you asap."}
                    
</EditableCopy>
</p>
                  </div>
                </div>
                <div className={"ssr-variant hidden-11d7awu hidden-l5dxw7"}>
                  <div className={"bex-11rcjux"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                    <p dir={"auto"} style={{"--bex-font-open-type-features": "'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on", "--bex-letter-spacing": "-0.1px", "--bex-line-height": "28px", "--bex-text-alignment": "center", "--bex-text-color": "var(--token-0f5f6cf6-0de9-4599-9347-86ab90991a34, rgba(10, 10, 10, 0.7))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="d482d9ba892682ec" fallback={"We’re here to help with any questions or support you need. Reach out to our team and we’ll get back to you asap."}>

                      {"We’re here to help with any questions or support you need. Reach out to our team and we’ll get back to you asap."}
                    
</EditableCopy>
</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={"bex-1wfnjys"} data-design-name={"Contact Section"}>
          <div className={"bex-jls58z"} data-design-name={"Padding"}>
            <div className={"bex-17jqspa"}>
              <ContactForm className={"bex-eve8vh"}>
                <div className={"bex-qncqqr"}>
                  <label className={"bex-oi4vp9"}>
                    <div className={"bex-187wpca"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                      <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-open-type-features": "'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "0px", "--bex-line-height": "20px", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-c5672fec-6041-4722-ae92-3b99e465b08f, rgb(29, 29, 29))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="e9a575ceeacb541b" fallback={"Name"}>

                        {"Name"}
                      
</EditableCopy>
</p>
                    </div>
                    <div className={"bex-form-text-input bex-form-input-wrapper bex-l5oz3r bex-form-text-input-type"}>
                      <input type={"text"} required autoComplete="name" name={"Name"} placeholder={"Full name"} className={"bex-form-input bex-form-input-empty"} defaultValue={""} />
                    </div>
                  </label>
                  <label className={"bex-14c1o6f"}>
                    <div className={"bex-1pkiwg6"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                      <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-open-type-features": "'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "0px", "--bex-line-height": "20px", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-c5672fec-6041-4722-ae92-3b99e465b08f, rgb(29, 29, 29))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="4b7d7f0909724003" fallback={"Email"}>

                        {"Email"}
                      
</EditableCopy>
</p>
                    </div>
                    <div className={"bex-form-text-input bex-form-input-wrapper bex-s3rpb6"}>
                      <input type={"email"} required autoComplete="email" name={"Email"} placeholder={"you@company.com"} className={"bex-form-input bex-form-input-empty"} defaultValue={""} />
                    </div>
                  </label>
                </div>
                <label className={"bex-onx2dc"}>
                  <div className={"bex-jpibp"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                    <p dir={"auto"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-open-type-features": "'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "0px", "--bex-line-height": "20px", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-c5672fec-6041-4722-ae92-3b99e465b08f, rgb(29, 29, 29))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="12cbdca44c35620e" fallback={"How can we help?"}>

                      {"How can we help?"}
                    
</EditableCopy>
</p>
                  </div>
                  <div className={"bex-form-text-input bex-form-input-wrapper bex-1l3nya0 bex-form-textarea-input-type"}>
                    <textarea name={"Text"} placeholder={"Your company needs"} className={"bex-form-input"}>
                    </textarea>
                  </div>
                </label>
                <div className={"ssr-variant hidden-1886ltc"}>
                  <div className={"bex-3vjbnx"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                    <p dir={"auto"} style={{"--bex-font-open-type-features": "'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on", "--bex-letter-spacing": "-0.1px", "--bex-line-height": "24px", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-0f5f6cf6-0de9-4599-9347-86ab90991a34, rgba(10, 10, 10, 0.7))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="6904efb3996df0b8" fallback={"By submitting this, I confirm that I have read and understood the Privacy Policy."}>

                      {"By submitting this, I confirm that I have read and understood the "}
                      <a className={"bex-text bex-styles-preset-f2vlpo"} data-styles-preset={"fPtZz_AC4"} href={"/"}>
                        {"Privacy Policy"}
                      </a>
                      {"."}
                    
</EditableCopy>
</p>
                  </div>
                </div>
                <div className={"ssr-variant hidden-11d7awu hidden-l5dxw7"}>
                  <div className={"bex-3vjbnx"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                    <p dir={"auto"} style={{"--bex-font-open-type-features": "'blwf' on, 'cv09' on, 'cv03' on, 'cv04' on, 'cv11' on", "--bex-font-size": "var(--font-size-14)", "--bex-letter-spacing": "-0.1px", "--bex-line-height": "24px", "--bex-text-alignment": "left", "--bex-text-color": "var(--token-0f5f6cf6-0de9-4599-9347-86ab90991a34, rgba(10, 10, 10, 0.7))"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="ac921a3adc207fbc" fallback={"By submitting this, I confirm that I have read and understood the Privacy Policy."}>

                      {"By submitting this, I confirm that I have read and understood the "}
                      <a className={"bex-text bex-styles-preset-f2vlpo"} data-styles-preset={"fPtZz_AC4"} href={"/"}>
                        {"Privacy Policy"}
                      </a>
                      {"."}
                    
</EditableCopy>
</p>
                  </div>
                </div>
                <div className={"ssr-variant"}>
                  <div className={"bex-9p0jg7-container"}>
                    <button className={"bex-pm01Y bex-1byxdn5 bex-v-1byxdn5"} data-design-name={"Default"} data-reset={"button"} style={{"backgroundColor": "var(--token-408aabc3-b850-41a7-bc9c-e62d49c2c34d, var(--color-brand))", "height": "100%", "width": "100%", "borderBottomLeftRadius": "10px", "borderBottomRightRadius": "10px", "borderTopLeftRadius": "10px", "borderTopRightRadius": "10px", "opacity": "1"} as CSSProperties}>
                      <div className={"bex-jo6pw3"} data-component-type={"RichTextContainer"} style={{"--extracted-r6o4lv": "var(--token-83b4a008-ed2c-49ae-bec9-469d3b79d38e, var(--color-surface))", "--bex-link-text-color": "rgb(0, 153, 255)", "--bex-link-text-decoration": "underline", "transform": "none"} as CSSProperties}>
                        <p dir={"auto"} className={"bex-text"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-text-color": "var(--extracted-r6o4lv, var(--token-83b4a008-ed2c-49ae-bec9-469d3b79d38e, var(--color-surface)))"} as CSSProperties}>
<EditableCopy id="165082ea25874106" fallback={"Submit"}>

                          {"Submit"}
                        
</EditableCopy>
</p>
                      </div>
                    </button>
                  </div>
                </div>
              </ContactForm>
            </div>
          </div>
        </section>
        <Navigation />
        <div className={"bex-1hyt0mh-container"}>
          <div className={"ssr-variant hidden-1886ltc hidden-l5dxw7"}>
            <div className={"bex-W9zZe bex-5byvjv bex-v-5byvjv"} data-border={"true"} data-design-name={"Desktop"} style={{"--border-bottom-width": "0px", "--border-color": "var(--color-border)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "1px", "backgroundColor": "var(--color-surface)", "width": "100%"} as CSSProperties}>
              <div className={"bex-9sf971"} data-design-name={"Container"}>
                <div className={"bex-6xeyyw"} data-design-name={"Content"}>
                  <div className={"bex-vm7ack"} data-design-name={"helio-logo-5-min 1"}>
                    <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"} as CSSProperties}>
                      <img decoding={"async"} width={"3794"} height={"1230"} sizes={"(min-width: 1440px) max(112px, 133px), (min-width: 810px) and (max-width: 1439.98px) max(112px, 120px), (max-width: 809.98px) 112px"} srcSet={"/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 512w,/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 1024w,/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 2048w,/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 3794w"} src={"/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png"} alt={""} style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "contain"} as CSSProperties} />
                    </div>
                  </div>
                  <div className={"bex-761pzj"} data-design-name={"Footer text"} data-component-type={"RichTextContainer"} style={{"--extracted-r6o4lv": "var(--token-92ae7d48-8270-48b4-b8f0-dcff02886975, var(--color-text))", "--bex-paragraph-spacing": "16px", "transform": "none"} as CSSProperties}>
                    <p dir={"auto"} className={"bex-text"} style={{"--bex-line-height": "24px", "--bex-text-alignment": "right", "--bex-text-color": "var(--extracted-r6o4lv, var(--token-92ae7d48-8270-48b4-b8f0-dcff02886975, var(--color-text)))"} as CSSProperties}>
<EditableCopy id="4a3a57f3eda3804f" fallback={"© 2026 Bextudio"}>

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
          <div className={"ssr-variant hidden-11d7awu hidden-l5dxw7"}>
            <div className={"bex-W9zZe bex-5byvjv bex-v-9z0910"} data-border={"true"} data-design-name={"Mobile"} style={{"--border-bottom-width": "0px", "--border-color": "var(--color-border)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "1px", "backgroundColor": "var(--color-surface)", "width": "100%"} as CSSProperties}>
              <div className={"bex-9sf971"} data-design-name={"Container"}>
                <div className={"bex-6xeyyw"} data-design-name={"Content"}>
                  <div className={"bex-vm7ack"} data-design-name={"helio-logo-5-min 1"}>
                    <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"} as CSSProperties}>
                      <img decoding={"async"} width={"3794"} height={"1230"} sizes={"(min-width: 1440px) max(112px, 133px), (min-width: 810px) and (max-width: 1439.98px) max(112px, 120px), (max-width: 809.98px) 112px"} srcSet={"/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 512w,/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 1024w,/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 2048w,/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 3794w"} src={"/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png"} alt={""} style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "contain"} as CSSProperties} />
                    </div>
                  </div>
                  <div className={"bex-761pzj"} data-design-name={"Footer text"} data-component-type={"RichTextContainer"} style={{"--extracted-r6o4lv": "var(--token-92ae7d48-8270-48b4-b8f0-dcff02886975, var(--color-text))", "--bex-paragraph-spacing": "16px", "transform": "none"} as CSSProperties}>
                    <p dir={"auto"} className={"bex-text"} style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "22px", "--bex-text-alignment": "center", "--bex-text-color": "var(--extracted-r6o4lv, var(--token-92ae7d48-8270-48b4-b8f0-dcff02886975, var(--color-text)))"} as CSSProperties}>
<EditableCopy id="378621c793aa1c0d" fallback={"© 2026 Bextudio"}>

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
          <div className={"ssr-variant hidden-1886ltc hidden-11d7awu"}>
            <div className={"bex-W9zZe bex-5byvjv bex-v-1ita5wf"} data-border={"true"} data-design-name={"Tablet"} style={{"--border-bottom-width": "0px", "--border-color": "var(--color-border)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "1px", "backgroundColor": "var(--color-surface)", "width": "100%"} as CSSProperties}>
              <div className={"bex-9sf971"} data-design-name={"Container"}>
                <div className={"bex-6xeyyw"} data-design-name={"Content"}>
                  <div className={"bex-vm7ack"} data-design-name={"helio-logo-5-min 1"}>
                    <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"} as CSSProperties}>
                      <img decoding={"async"} width={"3794"} height={"1230"} sizes={"(min-width: 1440px) max(112px, 133px), (min-width: 810px) and (max-width: 1439.98px) max(112px, 120px), (max-width: 809.98px) 112px"} srcSet={"/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 512w,/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 1024w,/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 2048w,/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 3794w"} src={"/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png"} alt={""} style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "contain"} as CSSProperties} />
                    </div>
                  </div>
                  <div className={"bex-761pzj"} data-design-name={"Footer text"} data-component-type={"RichTextContainer"} style={{"--extracted-r6o4lv": "var(--token-92ae7d48-8270-48b4-b8f0-dcff02886975, var(--color-text))", "--bex-paragraph-spacing": "16px", "transform": "none"} as CSSProperties}>
                    <p dir={"auto"} className={"bex-text"} style={{"--bex-font-size": "var(--font-size-15)", "--bex-line-height": "22px", "--bex-text-alignment": "right", "--bex-text-color": "var(--extracted-r6o4lv, var(--token-92ae7d48-8270-48b4-b8f0-dcff02886975, var(--color-text)))"} as CSSProperties}>
<EditableCopy id="1726892586f59396" fallback={"© 2026 Bextudio"}>

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
