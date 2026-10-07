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
import '../styles/Services.css';

// Migrated layout; all elements, copy and CSS are local editable source.
export default function Services() {
  return (
    <div id={"page-main"}>
      <ResponsiveRoot data-design-root={""} className={"bex-Csr1a bex-S0Cy7 bex-4cSs5 bex-15ttnxd"} style={{"minHeight": "100vh", "width": "auto"} as CSSProperties} breakpoints={[{"hash": "15ttnxd", "mediaQuery": "(min-width: 1440px)"}, {"hash": "1jr5nh5", "mediaQuery": "(min-width: 810px) and (max-width: 1439.98px)"}, {"hash": "72q6ng", "mediaQuery": "(max-width: 809.98px)"}]}>
        <div className={"bex-4h0fu8"} data-design-name={"_Background mask"}>
          <div className={"bex-w11nh0"} data-design-name={"Heading and supporting text"}>
            <div className={"ssr-variant hidden-72q6ng"}>
              <div className={"bex-1en5ujq"} data-design-name={"Heading"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                <p dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-size": "var(--font-size-48)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "64px", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="4ee56bd114b7ffe3" fallback={"Transform Your Business with Our Expert Services"}>

                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"Transform"}
                  </span>
                  {" "}
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"Your"}
                  </span>
                  {" "}
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"Business"}
                  </span>
                  {" "}
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"with"}
                  </span>
                  {" "}
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"Our"}
                  </span>
                  {" "}
                  <span style={{"display": "inline-block"} as CSSProperties}>
                  </span>
                  <span style={{"--bex-text-color": "var(--token-408aabc3-b850-41a7-bc9c-e62d49c2c34d, var(--color-brand))"} as CSSProperties} className={"bex-text"}>
                    <span style={{"display": "inline-block"} as CSSProperties}>
                      {"Expert"}
                    </span>
                    {" "}
                    <span style={{"display": "inline-block"} as CSSProperties}>
                      {"Services"}
                    </span>
                  </span>
                
</EditableCopy>
</p>
              </div>
            </div>
            <div className={"ssr-variant hidden-15ttnxd hidden-1jr5nh5"}>
              <div className={"bex-1en5ujq"} data-design-name={"Heading"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                <h1 className={"bex-text bex-styles-preset-1j22crc"} data-styles-preset={"Y0Jqtdn0U"} dir={"auto"}>
<EditableCopy id="2d6a47f20eab8cc7" fallback={"Transform Your Business with Our Expert Services"}>

                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"Transform"}
                  </span>
                  {" "}
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"Your"}
                  </span>
                  {" "}
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"Business"}
                  </span>
                  {" "}
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"with"}
                  </span>
                  {" "}
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"Our"}
                  </span>
                  {" "}
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"Expert"}
                  </span>
                  {" "}
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"Services"}
                  </span>
                
</EditableCopy>
</h1>
              </div>
            </div>
            <div className={"ssr-variant hidden-72q6ng"}>
              <div className={"bex-3e5gsm"} data-design-name={"Supporting text"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
                <p dir={"auto"} style={{"--bex-font-size": "var(--font-size-24)", "--bex-line-height": "30px", "--bex-text-alignment": "center", "--bex-text-color": "rgb(46, 46, 46)"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="5b15d7b5ae19ad31" fallback={"A suite of AI-powered products designed to define, systemize, and scale your brand. Use them independently or combine them into a fully integrated ecosystem."}>

                  {"A suite of AI-powered products designed to define, systemize, and scale your brand. Use them independently or combine them into a fully integrated ecosystem."}
                
</EditableCopy>
</p>
              </div>
            </div>
            <div className={"ssr-variant hidden-15ttnxd hidden-1jr5nh5"}>
              <div className={"bex-3e5gsm"} data-design-name={"Supporting text"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
                <p className={"bex-text bex-styles-preset-1cjpyf0"} data-styles-preset={"Wqx7ooCSL"} dir={"auto"}>
<EditableCopy id="75fc032020b11832" fallback={"A suite of AI-powered products designed to define, systemize, and scale your brand. Use them independently or combine them into a fully integrated ecosystem."}>

                  {"A suite of AI-powered products designed to define, systemize, and scale your brand. Use them independently or combine them into a fully integrated ecosystem."}
                
</EditableCopy>
</p>
              </div>
            </div>
          </div>
        </div>
        <section className={"bex-y5tsgl"} data-design-name={"Our Mission"}>
          <div className={"bex-sx9q1r"} data-design-name={"Container"}>
            <div className={"bex-tmv43h"}>
              <div className={"bex-1vlccp4"} data-design-name={"Content"}>
                <div className={"bex-a6lt3d"} data-design-name={"Icon and text"}>
                  <div className={"bex-18kcj1j"} data-design-name={"Heading and supporting text"}>
                    <div className={"bex-uh1aql"} data-design-name={"Heading"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                      <p dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-size": "var(--font-size-30)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-line-height": "38px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="87eaa10c26ec46ea" fallback={"Brand Integrator Brain"}>

                        <span style={{"display": "inline-block"} as CSSProperties}>
                          {"Brand"}
                        </span>
                        {" "}
                        <span style={{"display": "inline-block"} as CSSProperties}>
                          {"Integrator"}
                        </span>
                        {" "}
                        <span style={{"display": "inline-block"} as CSSProperties}>
                          {"Brain"}
                        </span>
                      
</EditableCopy>
</p>
                    </div>
                    <div className={"bex-cy3lkg"} data-design-name={"Supporting text"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
                      <p dir={"auto"} style={{"--bex-font-size": "var(--font-size-18)", "--bex-line-height": "28px", "--bex-text-color": "rgb(87, 82, 77)"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="3007f5c417d3edbb" fallback={"An AI-powered Process Center which create integrity by codifying the Brand City Canvas and turn into brand’s digital twin with 91% accuracy in decision making and action."}>

                        {"An AI-powered Process Center which create integrity by codifying the Brand City Canvas and turn into brand’s digital twin with 91% accuracy in decision making and action."}
                      
</EditableCopy>
</p>
                    </div>
                  </div>
                </div>
                <div className={"bex-njm9j8"} data-design-name={"Actions"}>
                  <div className={"ssr-variant"}>
                    <div className={"bex-7wdsyl-container"}>
                      <a className={"bex-a02pR bex-RWpbV bex-1asvrba bex-v-1dc1sp3 bex-t1696f"} data-design-name={"Secondary Btn/small"} data-border={"true"} href={"https://app.bextudio.com/"} rel="noopener noreferrer" target={"_blank"} style={{"--border-bottom-width": "1px", "--border-color": "var(--color-text)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", "backgroundColor": "var(--token-b34c88fe-2cf9-4543-b1c4-32c3ba3320d5, var(--color-surface))", "height": "100%", "borderBottomLeftRadius": "8px", "borderBottomRightRadius": "8px", "borderTopLeftRadius": "8px", "borderTopRightRadius": "8px", "boxShadow": "0px 1px 2px 0px rgba(16, 24, 40, 0.05)"} as CSSProperties}>
                        <div className={"bex-ynq978"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"--bex-paragraph-spacing": "18px", "--extracted-r6o4lv": "var(--token-a47037b2-9d22-41c5-ae53-29fb6b3324cc, var(--color-text))", "transform": "none"} as CSSProperties}>
                          <p className={"bex-text bex-styles-preset-8o4h7c"} data-styles-preset={"vR1hT9pJZ"} dir={"auto"} style={{"--bex-text-color": "var(--extracted-r6o4lv, var(--token-a47037b2-9d22-41c5-ae53-29fb6b3324cc, var(--color-text)))"} as CSSProperties}>
<EditableCopy id="f3c279351e756929" fallback={"Learn More"}>

                            {"Learn More"}
                          
</EditableCopy>
</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"bex-2lotbm"} data-design-name={"On Pause"}>
                <div className={"bex-czxq3m"} data-design-name={"Video"}>
                  <div className={"bex-1e8conu-container"} draggable={"false"}>
                    <video src={"/assets/fcf10b4032-nDypnK4aBX4okKZ7qIMs0auUx00.mp4"} loop preload={"none"} muted playsInline style={{"cursor": "auto", "width": "100%", "height": "100%", "borderRadius": "15px", "display": "block", "objectFit": "cover", "backgroundColor": "rgba(0, 0, 0, 0)", "objectPosition": "50% 50%"} as CSSProperties} data-native-video="">
                    </video>
                  </div>
                </div>
                <div className={"bex-60pciq"} data-design-name={"Play / Pause"}>
                  <div className={"ssr-variant"}>
                    <div className={"bex-v6avxz-container"}>
                      <button aria-label={"pause"} className={"bex-UbWSf bex-1wksz24 bex-v-1wksz24"} data-design-name={"Pause"} data-highlight={"true"} data-reset={"button"} tabIndex={0} style={{"filter": "none", "WebkitFilter": "none"} as CSSProperties}>
                        <div className={"bex-trMCN bex-jf968s"} style={{"--1cdvxrt": "var(--token-2182004d-b7c5-41d6-b1e7-0bd2cf9ec645, rgb(237, 237, 237))", "--10helqv": "var(--token-7d6415cf-31e8-4887-84e7-05f45529140f, rgb(13, 13, 13))", "--16f49u0": "var(--token-2182004d-b7c5-41d6-b1e7-0bd2cf9ec645, rgb(237, 237, 237))", "--t86yl5": "var(--token-7d6415cf-31e8-4887-84e7-05f45529140f, rgb(13, 13, 13))"} as CSSProperties}>
                        </div>
                        <div className={"bex-VKB2p bex-1h5j59g"} style={{"--mwwlcj": "var(--token-7d6415cf-31e8-4887-84e7-05f45529140f, rgb(13, 13, 13))", "--1t5zfki": "var(--token-2182004d-b7c5-41d6-b1e7-0bd2cf9ec645, rgb(237, 237, 237))", "transform": "translate(-50%, -50%)"} as CSSProperties}>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"bex-1owlfzb"}>
              <div className={"bex-10766vc"} data-design-name={"Content"}>
                <div className={"bex-tx77lz"} data-design-name={"Icon and text"}>
                  <div className={"bex-6dco1"} data-design-name={"Heading and supporting text"}>
                    <div className={"bex-uwsjeu"} data-design-name={"Heading"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                      <p dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-size": "var(--font-size-30)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-line-height": "38px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="f953c4ea3ad0cd9a" fallback={"Brand Digital Twin"}>

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
</p>
                    </div>
                    <div className={"bex-isci3"} data-design-name={"Supporting text"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
                      <p dir={"auto"} style={{"--bex-font-size": "var(--font-size-18)", "--bex-line-height": "28px", "--bex-text-color": "rgb(87, 82, 77)"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="e2592f64e3ad0899" fallback={"An AI interviewer agent to make a personal profile analysis by deep conversations with brand founders to reach communions around brand values and goals."}>

                        {"An AI interviewer agent to make a personal profile analysis by deep conversations with brand founders to reach communions around brand values and goals."}
                      
</EditableCopy>
</p>
                    </div>
                  </div>
                </div>
                <div className={"bex-gf88h3"} data-design-name={"Actions"}>
                  <div className={"ssr-variant"}>
                    <div className={"bex-gowifv-container"}>
                      <a className={"bex-a02pR bex-RWpbV bex-1asvrba bex-v-1dc1sp3 bex-t1696f"} data-design-name={"Secondary Btn/small"} data-border={"true"} href={"/agents/digital-twin"} rel="noopener noreferrer" target={"_blank"} style={{"--border-bottom-width": "1px", "--border-color": "var(--color-text)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", "backgroundColor": "var(--token-b34c88fe-2cf9-4543-b1c4-32c3ba3320d5, var(--color-surface))", "height": "100%", "borderBottomLeftRadius": "8px", "borderBottomRightRadius": "8px", "borderTopLeftRadius": "8px", "borderTopRightRadius": "8px", "boxShadow": "0px 1px 2px 0px rgba(16, 24, 40, 0.05)"} as CSSProperties}>
                        <div className={"bex-ynq978"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"--bex-paragraph-spacing": "18px", "--extracted-r6o4lv": "var(--token-a47037b2-9d22-41c5-ae53-29fb6b3324cc, var(--color-text))", "transform": "none"} as CSSProperties}>
                          <p className={"bex-text bex-styles-preset-8o4h7c"} data-styles-preset={"vR1hT9pJZ"} dir={"auto"} style={{"--bex-text-color": "var(--extracted-r6o4lv, var(--token-a47037b2-9d22-41c5-ae53-29fb6b3324cc, var(--color-text)))"} as CSSProperties}>
<EditableCopy id="962e0d5d6747b76f" fallback={"See How It Works"}>

                            {"See How It Works"}
                          
</EditableCopy>
</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"bex-h996gl"} data-design-name={"On Pause"}>
                <div className={"bex-1rnut6t"} data-design-name={"Video"}>
                  <div className={"bex-17hanst-container"} draggable={"false"}>
                    <video src={"/assets/82a588f730-WEb03xkhWawim8ft9fAPpLYTbPk.mp4"} loop preload={"none"} muted playsInline style={{"cursor": "auto", "width": "100%", "height": "100%", "borderRadius": "15px", "display": "block", "objectFit": "cover", "backgroundColor": "rgba(0, 0, 0, 0)", "objectPosition": "50% 50%"} as CSSProperties} data-native-video="">
                    </video>
                  </div>
                </div>
                <div className={"bex-jhatwi"} data-design-name={"Play / Pause"}>
                  <div className={"ssr-variant"}>
                    <div className={"bex-1ryrmoy-container"}>
                      <button aria-label={"pause"} className={"bex-UbWSf bex-1wksz24 bex-v-1wksz24"} data-design-name={"Pause"} data-highlight={"true"} data-reset={"button"} tabIndex={0} style={{"filter": "none", "WebkitFilter": "none"} as CSSProperties}>
                        <div className={"bex-trMCN bex-jf968s"} style={{"--1cdvxrt": "var(--token-2182004d-b7c5-41d6-b1e7-0bd2cf9ec645, rgb(237, 237, 237))", "--10helqv": "var(--token-7d6415cf-31e8-4887-84e7-05f45529140f, rgb(13, 13, 13))", "--16f49u0": "var(--token-2182004d-b7c5-41d6-b1e7-0bd2cf9ec645, rgb(237, 237, 237))", "--t86yl5": "var(--token-7d6415cf-31e8-4887-84e7-05f45529140f, rgb(13, 13, 13))"} as CSSProperties}>
                        </div>
                        <div className={"bex-VKB2p bex-1h5j59g"} style={{"--mwwlcj": "var(--token-7d6415cf-31e8-4887-84e7-05f45529140f, rgb(13, 13, 13))", "--1t5zfki": "var(--token-2182004d-b7c5-41d6-b1e7-0bd2cf9ec645, rgb(237, 237, 237))", "transform": "translate(-50%, -50%)"} as CSSProperties}>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"bex-13r9qtr"}>
              <div className={"bex-9axbkg"} data-design-name={"Content"}>
                <div className={"bex-ssgtuo"} data-design-name={"Icon and text"}>
                  <div className={"bex-buaii9"} data-design-name={"Heading and supporting text"}>
                    <div className={"bex-ercygb"} data-design-name={"Heading"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                      <p dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-size": "var(--font-size-30)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-line-height": "38px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="7873dfaf4bb023b4" fallback={"Plug-in Agents"}>

                        <span style={{"display": "inline-block"} as CSSProperties}>
                          {"Plug-in"}
                        </span>
                        {" "}
                        <span style={{"display": "inline-block"} as CSSProperties}>
                          {"Agents"}
                        </span>
                      
</EditableCopy>
</p>
                    </div>
                    <div className={"bex-1957z37"} data-design-name={"Supporting text"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
                      <p dir={"auto"} style={{"--bex-font-size": "var(--font-size-18)", "--bex-line-height": "28px", "--bex-text-color": "rgb(87, 82, 77)"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="ace4d9292c039128" fallback={"Technology-based special tools, can automate business processes in variety of aspects, align with brand Identity."}>

                        {"Technology-based special tools, can automate business processes in variety of aspects, align with brand Identity."}
                      
</EditableCopy>
</p>
                    </div>
                  </div>
                </div>
                <div className={"bex-1xbzufs"} data-design-name={"Actions"}>
                  <div className={"ssr-variant"}>
                    <div className={"bex-u439h5-container"}>
                      <a className={"bex-a02pR bex-RWpbV bex-1asvrba bex-v-1dc1sp3 bex-t1696f"} data-design-name={"Secondary Btn/small"} data-border={"true"} href={"/"} rel="noopener noreferrer" target={"_blank"} style={{"--border-bottom-width": "1px", "--border-color": "var(--color-text)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", "backgroundColor": "var(--token-b34c88fe-2cf9-4543-b1c4-32c3ba3320d5, var(--color-surface))", "height": "100%", "borderBottomLeftRadius": "8px", "borderBottomRightRadius": "8px", "borderTopLeftRadius": "8px", "borderTopRightRadius": "8px", "boxShadow": "0px 1px 2px 0px rgba(16, 24, 40, 0.05)"} as CSSProperties}>
                        <div className={"bex-ynq978"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"--bex-paragraph-spacing": "18px", "--extracted-r6o4lv": "var(--token-a47037b2-9d22-41c5-ae53-29fb6b3324cc, var(--color-text))", "transform": "none"} as CSSProperties}>
                          <p className={"bex-text bex-styles-preset-8o4h7c"} data-styles-preset={"vR1hT9pJZ"} dir={"auto"} style={{"--bex-text-color": "var(--extracted-r6o4lv, var(--token-a47037b2-9d22-41c5-ae53-29fb6b3324cc, var(--color-text)))"} as CSSProperties}>
<EditableCopy id="32040ad7b7b04012" fallback={"See How It Works"}>

                            {"See How It Works"}
                          
</EditableCopy>
</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"bex-fch5xj"} data-design-name={"On Pause"}>
                <div className={"bex-16ye1ax"} data-design-name={"Video"}>
                  <div className={"bex-1qwbray-container"} draggable={"false"}>
                    <video src={"/assets/c997e92fee-fy2rInD7WRjOwfPmcTvmEoeS9k.mp4"} loop preload={"none"} muted playsInline style={{"cursor": "auto", "width": "100%", "height": "100%", "borderRadius": "15px", "display": "block", "objectFit": "cover", "backgroundColor": "rgba(0, 0, 0, 0)", "objectPosition": "50% 50%"} as CSSProperties} data-native-video="">
                    </video>
                  </div>
                </div>
                <div className={"bex-rtiw73"} data-design-name={"Play / Pause"}>
                  <div className={"ssr-variant"}>
                    <div className={"bex-1kcqq70-container"}>
                      <button aria-label={"pause"} className={"bex-UbWSf bex-1wksz24 bex-v-1wksz24"} data-design-name={"Pause"} data-highlight={"true"} data-reset={"button"} tabIndex={0} style={{"filter": "none", "WebkitFilter": "none"} as CSSProperties}>
                        <div className={"bex-trMCN bex-jf968s"} style={{"--1cdvxrt": "var(--token-2182004d-b7c5-41d6-b1e7-0bd2cf9ec645, rgb(237, 237, 237))", "--10helqv": "var(--token-7d6415cf-31e8-4887-84e7-05f45529140f, rgb(13, 13, 13))", "--16f49u0": "var(--token-2182004d-b7c5-41d6-b1e7-0bd2cf9ec645, rgb(237, 237, 237))", "--t86yl5": "var(--token-7d6415cf-31e8-4887-84e7-05f45529140f, rgb(13, 13, 13))"} as CSSProperties}>
                        </div>
                        <div className={"bex-VKB2p bex-1h5j59g"} style={{"--mwwlcj": "var(--token-7d6415cf-31e8-4887-84e7-05f45529140f, rgb(13, 13, 13))", "--1t5zfki": "var(--token-2182004d-b7c5-41d6-b1e7-0bd2cf9ec645, rgb(237, 237, 237))", "transform": "translate(-50%, -50%)"} as CSSProperties}>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"bex-ujwksl"}>
              <div className={"bex-1en1y77"} data-design-name={"Content"}>
                <div className={"bex-y3a37b"} data-design-name={"Icon and text"}>
                  <div className={"bex-1nxbwsi"} data-design-name={"Heading and supporting text"}>
                    <div className={"bex-1jkxp0a"} data-design-name={"Heading"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                      <p dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-size": "var(--font-size-30)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-line-height": "38px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="968102d0b4b8bd45" fallback={"Brand Canvas"}>

                        <span style={{"display": "inline-block"} as CSSProperties}>
                          {"Brand"}
                        </span>
                        {" "}
                        <span style={{"display": "inline-block"} as CSSProperties}>
                          {"Canvas"}
                        </span>
                      
</EditableCopy>
</p>
                    </div>
                    <div className={"bex-1mo6kp7"} data-design-name={"Supporting text"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
                      <p dir={"auto"} style={{"--bex-font-size": "var(--font-size-18)", "--bex-line-height": "28px", "--bex-text-color": "rgb(87, 82, 77)"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="08af52b19724c370" fallback={"A set of strategic guidelines for designers and executives which enlightens Brand Identity and Culture to integrate brand messages"}>

                        {"A set of strategic guidelines for designers and executives which enlightens Brand Identity and Culture to integrate brand messages"}
                      
</EditableCopy>
</p>
                    </div>
                  </div>
                </div>
                <div className={"bex-hzeayk"} data-design-name={"Actions"}>
                  <div className={"ssr-variant"}>
                    <div className={"bex-15ga848-container"}>
                      <a className={"bex-a02pR bex-RWpbV bex-1asvrba bex-v-1dc1sp3 bex-t1696f"} data-design-name={"Secondary Btn/small"} data-border={"true"} href={"https://app.bextudio.com/"} rel="noopener noreferrer" target={"_blank"} style={{"--border-bottom-width": "1px", "--border-color": "var(--color-text)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", "backgroundColor": "var(--token-b34c88fe-2cf9-4543-b1c4-32c3ba3320d5, var(--color-surface))", "height": "100%", "borderBottomLeftRadius": "8px", "borderBottomRightRadius": "8px", "borderTopLeftRadius": "8px", "borderTopRightRadius": "8px", "boxShadow": "0px 1px 2px 0px rgba(16, 24, 40, 0.05)"} as CSSProperties}>
                        <div className={"bex-ynq978"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"--bex-paragraph-spacing": "18px", "--extracted-r6o4lv": "var(--token-a47037b2-9d22-41c5-ae53-29fb6b3324cc, var(--color-text))", "transform": "none"} as CSSProperties}>
                          <p className={"bex-text bex-styles-preset-8o4h7c"} data-styles-preset={"vR1hT9pJZ"} dir={"auto"} style={{"--bex-text-color": "var(--extracted-r6o4lv, var(--token-a47037b2-9d22-41c5-ae53-29fb6b3324cc, var(--color-text)))"} as CSSProperties}>
<EditableCopy id="5d0a95ff6e675406" fallback={"Learn More"}>

                            {"Learn More"}
                          
</EditableCopy>
</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"bex-edfolx"} data-design-name={"On Pause"}>
                <div className={"bex-6bwb7d"} data-design-name={"Video"}>
                  <div className={"bex-1lte48i-container"} draggable={"false"}>
                    <video src={"/assets/d4e7106f37-XVN50xx6FUc3OEva3DqSOs0n1ac.mp4"} loop preload={"none"} muted playsInline style={{"cursor": "auto", "width": "100%", "height": "100%", "borderRadius": "15px", "display": "block", "objectFit": "cover", "backgroundColor": "rgba(0, 0, 0, 0)", "objectPosition": "50% 50%"} as CSSProperties} data-native-video="">
                    </video>
                  </div>
                </div>
                <div className={"bex-i4q8c2"} data-design-name={"Play / Pause"}>
                  <div className={"ssr-variant"}>
                    <div className={"bex-tsmjvg-container"}>
                      <button aria-label={"pause"} className={"bex-UbWSf bex-1wksz24 bex-v-1wksz24"} data-design-name={"Pause"} data-highlight={"true"} data-reset={"button"} tabIndex={0} style={{"filter": "none", "WebkitFilter": "none"} as CSSProperties}>
                        <div className={"bex-trMCN bex-jf968s"} style={{"--1cdvxrt": "var(--token-2182004d-b7c5-41d6-b1e7-0bd2cf9ec645, rgb(237, 237, 237))", "--10helqv": "var(--token-7d6415cf-31e8-4887-84e7-05f45529140f, rgb(13, 13, 13))", "--16f49u0": "var(--token-2182004d-b7c5-41d6-b1e7-0bd2cf9ec645, rgb(237, 237, 237))", "--t86yl5": "var(--token-7d6415cf-31e8-4887-84e7-05f45529140f, rgb(13, 13, 13))"} as CSSProperties}>
                        </div>
                        <div className={"bex-VKB2p bex-1h5j59g"} style={{"--mwwlcj": "var(--token-7d6415cf-31e8-4887-84e7-05f45529140f, rgb(13, 13, 13))", "--1t5zfki": "var(--token-2182004d-b7c5-41d6-b1e7-0bd2cf9ec645, rgb(237, 237, 237))", "transform": "translate(-50%, -50%)"} as CSSProperties}>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"bex-ksmzp"}>
              <div className={"bex-1qnue2w"} data-design-name={"Content"}>
                <div className={"bex-djzooa"} data-design-name={"Icon and text"}>
                  <div className={"bex-1ykdson"} data-design-name={"Heading and supporting text"}>
                    <div className={"bex-1r1sguq"} data-design-name={"Heading"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                      <p dir={"auto"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-size": "var(--font-size-30)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-line-height": "38px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="7cdbeedfd7490547" fallback={"Content Factory"}>

                        <span style={{"display": "inline-block"} as CSSProperties}>
                          {"Content"}
                        </span>
                        {" "}
                        <span style={{"display": "inline-block"} as CSSProperties}>
                          {"Factory"}
                        </span>
                      
</EditableCopy>
</p>
                    </div>
                    <div className={"bex-1k1dnec"} data-design-name={"Supporting text"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
                      <p dir={"auto"} style={{"--bex-font-size": "var(--font-size-18)", "--bex-line-height": "28px", "--bex-text-color": "rgb(87, 82, 77)"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="d9f7dd4a62ca80e4" fallback={"Combination of human experts and AI agents and tools which create variety of stories align with brand values according to marketing goals such as social media post and campaigns, videos and teasers, and etc.  it transforms scattered posts into structured series that retain attention and keep audiences coming back."}>

                        {"Combination of human experts and AI agents and tools which create variety of stories align with brand values according to marketing goals such as social media post and campaigns, videos and teasers, and etc.  it transforms scattered posts into structured series that retain attention and keep audiences coming back."}
                      
</EditableCopy>
</p>
                    </div>
                  </div>
                </div>
                <div className={"bex-1t9q7cy"} data-design-name={"Actions"}>
                  <div className={"ssr-variant"}>
                    <div className={"bex-gsmyms-container"}>
                      <a className={"bex-a02pR bex-RWpbV bex-1asvrba bex-v-1dc1sp3 bex-t1696f"} data-design-name={"Secondary Btn/small"} data-border={"true"} href={"/works"} rel="noopener noreferrer" target={"_blank"} style={{"--border-bottom-width": "1px", "--border-color": "var(--color-text)", "--border-left-width": "1px", "--border-right-width": "1px", "--border-style": "solid", "--border-top-width": "1px", "backgroundColor": "var(--token-b34c88fe-2cf9-4543-b1c4-32c3ba3320d5, var(--color-surface))", "height": "100%", "borderBottomLeftRadius": "8px", "borderBottomRightRadius": "8px", "borderTopLeftRadius": "8px", "borderTopRightRadius": "8px", "boxShadow": "0px 1px 2px 0px rgba(16, 24, 40, 0.05)"} as CSSProperties}>
                        <div className={"bex-ynq978"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"--bex-paragraph-spacing": "18px", "--extracted-r6o4lv": "var(--token-a47037b2-9d22-41c5-ae53-29fb6b3324cc, var(--color-text))", "transform": "none"} as CSSProperties}>
                          <p className={"bex-text bex-styles-preset-8o4h7c"} data-styles-preset={"vR1hT9pJZ"} dir={"auto"} style={{"--bex-text-color": "var(--extracted-r6o4lv, var(--token-a47037b2-9d22-41c5-ae53-29fb6b3324cc, var(--color-text)))"} as CSSProperties}>
<EditableCopy id="93ec843ec935b555" fallback={"View Our Works"}>

                            {"View Our Works"}
                          
</EditableCopy>
</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"bex-unqzqb"} data-design-name={"On Pause"}>
                <div className={"bex-1ck950b"} data-design-name={"Video"}>
                  <div className={"bex-1824ak0-container"} draggable={"false"}>
                    <video src={"/assets/d12bed6796-SeWe4rS22hCnoEZnL0wP0af487s.mp4"} loop preload={"none"} muted playsInline style={{"cursor": "auto", "width": "100%", "height": "100%", "borderRadius": "15px", "display": "block", "objectFit": "cover", "backgroundColor": "rgba(0, 0, 0, 0)", "objectPosition": "50% 50%"} as CSSProperties} data-native-video="">
                    </video>
                  </div>
                </div>
                <div className={"bex-keyujm"} data-design-name={"Play / Pause"}>
                  <div className={"ssr-variant"}>
                    <div className={"bex-1hnctr-container"}>
                      <button aria-label={"pause"} className={"bex-UbWSf bex-1wksz24 bex-v-1wksz24"} data-design-name={"Pause"} data-highlight={"true"} data-reset={"button"} tabIndex={0} style={{"filter": "none", "WebkitFilter": "none"} as CSSProperties}>
                        <div className={"bex-trMCN bex-jf968s"} style={{"--1cdvxrt": "var(--token-2182004d-b7c5-41d6-b1e7-0bd2cf9ec645, rgb(237, 237, 237))", "--10helqv": "var(--token-7d6415cf-31e8-4887-84e7-05f45529140f, rgb(13, 13, 13))", "--16f49u0": "var(--token-2182004d-b7c5-41d6-b1e7-0bd2cf9ec645, rgb(237, 237, 237))", "--t86yl5": "var(--token-7d6415cf-31e8-4887-84e7-05f45529140f, rgb(13, 13, 13))"} as CSSProperties}>
                        </div>
                        <div className={"bex-VKB2p bex-1h5j59g"} style={{"--mwwlcj": "var(--token-7d6415cf-31e8-4887-84e7-05f45529140f, rgb(13, 13, 13))", "--1t5zfki": "var(--token-2182004d-b7c5-41d6-b1e7-0bd2cf9ec645, rgb(237, 237, 237))", "transform": "translate(-50%, -50%)"} as CSSProperties}>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className={"ssr-variant hidden-72q6ng hidden-1jr5nh5"}>
          <div className={"bex-c69qit-container"}>
            <div className={"bex-W9zZe bex-5byvjv bex-v-5byvjv"} data-border={"true"} data-design-name={"Desktop"} style={{"--border-bottom-width": "0px", "--border-color": "var(--color-border)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "1px", "backgroundColor": "var(--color-surface)", "width": "100%"} as CSSProperties}>
              <div className={"bex-9sf971"} data-design-name={"Container"}>
                <div className={"bex-6xeyyw"} data-design-name={"Content"}>
                  <div className={"bex-vm7ack"} data-design-name={"helio-logo-5-min 1"}>
                    <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"} as CSSProperties}>
                      <img decoding={"async"} width={"3794"} height={"1230"} sizes={"(min-width: 1440px) max(133px, 112px), (max-width: 809.98px) 112px, (min-width: 810px) and (max-width: 1439.98px) max(120px, 112px)"} srcSet={"/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 512w,/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 1024w,/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 2048w,/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 3794w"} src={"/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png"} alt={""} style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "contain"} as CSSProperties} />
                    </div>
                  </div>
                  <div className={"bex-761pzj"} data-design-name={"Footer text"} data-component-type={"RichTextContainer"} style={{"--extracted-r6o4lv": "var(--token-92ae7d48-8270-48b4-b8f0-dcff02886975, var(--color-text))", "--bex-paragraph-spacing": "16px", "transform": "none"} as CSSProperties}>
                    <p dir={"auto"} className={"bex-text"} style={{"--bex-line-height": "24px", "--bex-text-alignment": "right", "--bex-text-color": "var(--extracted-r6o4lv, var(--token-92ae7d48-8270-48b4-b8f0-dcff02886975, var(--color-text)))"} as CSSProperties}>
<EditableCopy id="7657f2bfef6dd8a3" fallback={"© 2026 Bextudio"}>

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
        <div className={"ssr-variant hidden-15ttnxd hidden-1jr5nh5"}>
          <div className={"bex-c69qit-container"}>
            <div className={"bex-W9zZe bex-5byvjv bex-v-9z0910"} data-border={"true"} data-design-name={"Mobile"} style={{"--border-bottom-width": "0px", "--border-color": "var(--color-border)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "1px", "backgroundColor": "var(--color-surface)", "width": "100%"} as CSSProperties}>
              <div className={"bex-9sf971"} data-design-name={"Container"}>
                <div className={"bex-6xeyyw"} data-design-name={"Content"}>
                  <div className={"bex-vm7ack"} data-design-name={"helio-logo-5-min 1"}>
                    <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"} as CSSProperties}>
                      <img decoding={"async"} width={"3794"} height={"1230"} sizes={"(min-width: 1440px) max(133px, 112px), (max-width: 809.98px) 112px, (min-width: 810px) and (max-width: 1439.98px) max(120px, 112px)"} srcSet={"/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 512w,/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 1024w,/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 2048w,/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 3794w"} src={"/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png"} alt={""} style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "contain"} as CSSProperties} />
                    </div>
                  </div>
                  <div className={"bex-761pzj"} data-design-name={"Footer text"} data-component-type={"RichTextContainer"} style={{"--extracted-r6o4lv": "var(--token-92ae7d48-8270-48b4-b8f0-dcff02886975, var(--color-text))", "--bex-paragraph-spacing": "16px", "transform": "none"} as CSSProperties}>
                    <p dir={"auto"} className={"bex-text"} style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "22px", "--bex-text-alignment": "center", "--bex-text-color": "var(--extracted-r6o4lv, var(--token-92ae7d48-8270-48b4-b8f0-dcff02886975, var(--color-text)))"} as CSSProperties}>
<EditableCopy id="6289f727c03111f4" fallback={"© 2026 Bextudio"}>

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
        <div className={"ssr-variant hidden-15ttnxd hidden-72q6ng"}>
          <div className={"bex-c69qit-container"}>
            <div className={"bex-W9zZe bex-5byvjv bex-v-1ita5wf"} data-border={"true"} data-design-name={"Tablet"} style={{"--border-bottom-width": "0px", "--border-color": "var(--color-border)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "1px", "backgroundColor": "var(--color-surface)", "width": "100%"} as CSSProperties}>
              <div className={"bex-9sf971"} data-design-name={"Container"}>
                <div className={"bex-6xeyyw"} data-design-name={"Content"}>
                  <div className={"bex-vm7ack"} data-design-name={"helio-logo-5-min 1"}>
                    <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"} as CSSProperties}>
                      <img decoding={"async"} width={"3794"} height={"1230"} sizes={"(min-width: 1440px) max(133px, 112px), (max-width: 809.98px) 112px, (min-width: 810px) and (max-width: 1439.98px) max(120px, 112px)"} srcSet={"/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 512w,/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 1024w,/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 2048w,/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 3794w"} src={"/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png"} alt={""} style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "contain"} as CSSProperties} />
                    </div>
                  </div>
                  <div className={"bex-761pzj"} data-design-name={"Footer text"} data-component-type={"RichTextContainer"} style={{"--extracted-r6o4lv": "var(--token-92ae7d48-8270-48b4-b8f0-dcff02886975, var(--color-text))", "--bex-paragraph-spacing": "16px", "transform": "none"} as CSSProperties}>
                    <p dir={"auto"} className={"bex-text"} style={{"--bex-font-size": "var(--font-size-15)", "--bex-line-height": "22px", "--bex-text-alignment": "right", "--bex-text-color": "var(--extracted-r6o4lv, var(--token-92ae7d48-8270-48b4-b8f0-dcff02886975, var(--color-text)))"} as CSSProperties}>
<EditableCopy id="e71de223b55f8d8b" fallback={"© 2026 Bextudio"}>

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
        <Navigation />
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
