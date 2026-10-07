import { EditableCopy, useSite } from '../content/SiteContent';
import { languages, useLocale } from '../i18n/Locale';
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
import '../styles/Works.css';

function ProjectTitle({id,fallback}:{id:string;fallback:string}) {
  const {site}=useSite();const {locale,t}=useLocale();
  const text=t(site.edits[id]??fallback);
  const mixed=locale==='fa'||locale==='ar';
  return <span data-translated style={{display:'contents'}}>{mixed?text.split(/([A-Za-z][A-Za-z0-9]*(?:[ -][A-Za-z0-9]+)*)/g).map((part,index)=>index%2?<bdi dir="ltr" key={index}>{part}</bdi>:part):text}</span>;
}

// Migrated layout; all elements, copy and CSS are local editable source.
export default function Works() {
  const {locale}=useLocale();const direction=languages[locale].dir;
  return (
    <div id={"page-main"}>
      <ResponsiveRoot data-design-root={""} className={"bex-w9pgV bex-VfUW4 bex-49NYu bex-S0Cy7 bex-YBR0o bex-4cSs5 bex-mtK6d bex-omMOy bex-171s0a9"} style={{"minHeight": "100vh", "width": "auto"} as CSSProperties} breakpoints={[{"hash": "171s0a9", "mediaQuery": "(min-width: 1440px)"}, {"hash": "n155sx", "mediaQuery": "(min-width: 810px) and (max-width: 1439.98px)"}, {"hash": "1axow96", "mediaQuery": "(max-width: 809.98px)"}]}>
        <div className={"bex-1cdpa2j-container"}>
          <div>
          </div>
        </div>
        <main className={"bex-1qgswcz"} data-design-name={"Main"}>
          <div className={"bex-j6sbu4"} data-design-name={"_Background mask"}>
            <div className={"bex-yo4gc4"} data-design-name={"Heading and supporting text"}>
              <div className={"bex-bdv6s8"} data-design-name={"Heading and subheading"}>
                <div className={"ssr-variant hidden-1axow96 hidden-n155sx"}>
                  <div className={"bex-18ii1c7"} data-design-name={"Heading"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                    <h1 className={"bex-text bex-styles-preset-ywj2m3"} data-styles-preset={"y7aa33D9z"} dir={direction}>
<EditableCopy id="6552133589b6bf15" fallback={"Explore our companion brands stories"}>

                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"Explore"}
                      </span>
                      {" "}
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"our"}
                      </span>
                      {" "}
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"companion"}
                      </span>
                      {" "}
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"brands"}
                      </span>
                      {" "}
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"stories"}
                      </span>
                    
</EditableCopy>
</h1>
                  </div>
                </div>
                <div className={"ssr-variant hidden-n155sx hidden-171s0a9"}>
                  <div className={"bex-18ii1c7"} data-design-name={"Heading"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                    <h1 className={"bex-text bex-styles-preset-1j22crc"} data-styles-preset={"Y0Jqtdn0U"} dir={direction}>
<EditableCopy id="d19f6a1da9e2aab8" fallback={"Explore our companion brands stories"}>

                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"Explore"}
                      </span>
                      {" "}
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"our"}
                      </span>
                      {" "}
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"companion"}
                      </span>
                      {" "}
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"brands"}
                      </span>
                      {" "}
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"stories"}
                      </span>
                    
</EditableCopy>
</h1>
                  </div>
                </div>
                <div className={"ssr-variant hidden-1axow96 hidden-171s0a9"}>
                  <div className={"bex-18ii1c7"} data-design-name={"Heading"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                    <h1 className={"bex-text bex-styles-preset-15bb2vf"} data-styles-preset={"kBA_PnjsF"} dir={direction}>
<EditableCopy id="1a6d14a423b7462e" fallback={"Explore our companion brands stories"}>

                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"Explore"}
                      </span>
                      {" "}
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"our"}
                      </span>
                      {" "}
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"companion"}
                      </span>
                      {" "}
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"brands"}
                      </span>
                      {" "}
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"stories"}
                      </span>
                    
</EditableCopy>
</h1>
                  </div>
                </div>
              </div>
              <div className={"ssr-variant hidden-1axow96 hidden-n155sx"}>
                <div className={"bex-tzlrjs"} data-design-name={"Supporting text"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
                  <h4 className={"bex-text bex-styles-preset-s2fmgu"} data-styles-preset={"EqUtatztD"} dir={direction} style={{"--bex-text-alignment": "center", "--bex-text-color": "var(--token-994370d7-1fbd-4803-9ca4-7279be049b2d, var(--color-text-secondary))"} as CSSProperties}>
<EditableCopy id="6f434d4846d5a3ee" fallback={"Case studies in turning vision into structured, high-performing outputs across design, content, and experience."}>

                    {"Case studies in turning vision into structured, high-performing outputs across design, content, and experience."}
                  
</EditableCopy>
</h4>
                </div>
              </div>
              <div className={"ssr-variant hidden-171s0a9"}>
                <div className={"bex-tzlrjs"} data-design-name={"Supporting text"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
                  <p className={"bex-text bex-styles-preset-1cjpyf0"} data-styles-preset={"Wqx7ooCSL"} dir={direction} style={{"--bex-text-alignment": "center", "--bex-text-color": "var(--token-994370d7-1fbd-4803-9ca4-7279be049b2d, var(--color-text-secondary))"} as CSSProperties}>
<EditableCopy id="e76efff70c151e07" fallback={"Case studies in turning vision into structured, high-performing outputs across design, content, and experience."}>

                    {"Case studies in turning vision into structured, high-performing outputs across design, content, and experience."}
                  
</EditableCopy>
</p>
                </div>
              </div>
            </div>
          </div>
          <section className={"bex-1egh4hd"} data-design-name={"Our Work"} id={"our-work"}>
            <div className={"bex-11g0ihz"} data-design-name={"Container"}>
              <div className={"bex-jgpvfa-container hidden-171s0a9"} data-code-component-plugin-id={"mcp001"}>
                <div className={"bextudio-responsive-works"} style={{"width": "100%"} as CSSProperties}>
                  <article className={"bextudio-responsive-works-card"} style={{"background": "var(--color-surface-soft)", "borderRadius": "8px"} as CSSProperties}>
                    <div className={"bextudio-responsive-works-copy"}>
                      <h3 className={"bextudio-responsive-works-title"} style={{"color": "rgb(10, 10, 10)"} as CSSProperties}>
<ProjectTitle id="ed6d6ae085f1c475" fallback={"Binghatti; when every object reflects the brand"}/>
</h3>
                      <p className={"bextudio-responsive-works-description"} style={{"color": "rgb(74, 74, 74)"} as CSSProperties}>
<EditableCopy id="83de0b7a2a9b2b20" fallback={"Architect who works with top brands to develop major residential projects in UAE. Our plug-in agents help them achieve unlimited ideas more rapidly."}>

                        {"Architect who works with top brands to develop major residential projects in UAE. Our plug-in agents help them achieve unlimited ideas more rapidly."}
                      
</EditableCopy>
</p>
                    </div>
                    <img className={"bextudio-responsive-works-media"} src={"/assets/f3d3ca57a7-5eUjvkTXmCSYIXXhUldSH4njBcs.jpg"} alt={"Binghatti digital brand project"} loading={"lazy"} />
                  </article>
                  <article className={"bextudio-responsive-works-card"} style={{"background": "var(--color-surface-soft)", "borderRadius": "8px"} as CSSProperties}>
                    <div className={"bextudio-responsive-works-copy"}>
                      <h3 className={"bextudio-responsive-works-title"} style={{"color": "rgb(10, 10, 10)"} as CSSProperties}>
<ProjectTitle id="d153db1d72c12599" fallback={"Mansory; a respected signature in everything"}/>
</h3>
                      <p className={"bextudio-responsive-works-description"} style={{"color": "rgb(74, 74, 74)"} as CSSProperties}>
<EditableCopy id="aadd9363209249df" fallback={"Well reputed world class automobile manufacturer and tuner. With an integrator brain, they can have well-integrated outputs for every touchpoint across all channels."}>

                        {"Well reputed world class automobile manufacturer and tuner. With an integrator brain, they can have well-integrated outputs for every touchpoint across all channels."}
                      
</EditableCopy>
</p>
                    </div>
                    <img className={"bextudio-responsive-works-media"} src={"/assets/a16091819b-W27XU7BAUAvP05GueQ2K9lznEcc.jpg"} alt={"Mansory brand project"} loading={"lazy"} />
                  </article>
                  <article className={"bextudio-responsive-works-card"} style={{"background": "var(--color-surface-soft)", "borderRadius": "8px"} as CSSProperties}>
                    <div className={"bextudio-responsive-works-copy"}>
                      <h3 className={"bextudio-responsive-works-title"} style={{"color": "rgb(10, 10, 10)"} as CSSProperties}>
<ProjectTitle id="5286b9193fbd0ae5" fallback={"Technogym; branded dreams in form of videos"}/>
</h3>
                      <p className={"bextudio-responsive-works-description"} style={{"color": "rgb(74, 74, 74)"} as CSSProperties}>
<EditableCopy id="193283c2713cd405" fallback={"Sports equipment provider works with F1, Olympics and top sports. Every dream can be visualized with a proper image or video generator agent."}>

                        {"Sports equipment provider works with F1, Olympics and top sports. Every dream can be visualized with a proper image or video generator agent."}
                      
</EditableCopy>
</p>
                    </div>
                    <img className={"bextudio-responsive-works-media"} src={"/assets/47a9a1b7c1-V6v2O1UCrt3xhnY9VZ5pYmUGCPE.jpg"} alt={"Technogym sports campaign"} loading={"lazy"} />
                  </article>
                  <article className={"bextudio-responsive-works-card"} style={{"background": "var(--color-surface-soft)", "borderRadius": "8px"} as CSSProperties}>
                    <div className={"bextudio-responsive-works-copy"}>
                      <h3 className={"bextudio-responsive-works-title"} style={{"color": "rgb(10, 10, 10)"} as CSSProperties}>
<ProjectTitle id="424f0f5c68bed806" fallback={"Coffino; coffee mix, with integrity"}/>
</h3>
                      <p className={"bextudio-responsive-works-description"} style={{"color": "rgb(74, 74, 74)"} as CSSProperties}>
<EditableCopy id="53e7d2d53a6c93d3" fallback={"Professional instant coffee brand, a new comer to UAE market. Visual messages are now aligned with brand intended values and goals."}>

                        {"Professional instant coffee brand, a new comer to UAE market. Visual messages are now aligned with brand intended values and goals."}
                      
</EditableCopy>
</p>
                    </div>
                    <img className={"bextudio-responsive-works-media"} src={"/assets/19afd3c83e-7YmvUNuvy01TTzXuJUgnurko0.jpg"} alt={"Coffino campaign project"} loading={"lazy"} />
                  </article>
                  <article className={"bextudio-responsive-works-card"} style={{"background": "var(--color-surface-soft)", "borderRadius": "8px"} as CSSProperties}>
                    <div className={"bextudio-responsive-works-copy"}>
                      <h3 className={"bextudio-responsive-works-title"} style={{"color": "rgb(10, 10, 10)"} as CSSProperties}>
<ProjectTitle id="e96df9af6243a306" fallback={"IOPn; To Declare a whole new integrated chain"}/>
</h3>
                      <p className={"bextudio-responsive-works-description"} style={{"color": "rgb(74, 74, 74)"} as CSSProperties}>
<EditableCopy id="026993cb5de0a1e5" fallback={"A new blockchain platform working with Nvidia to set a new system for digital governance. Our agents translate complex messages into comprehensible language."}>

                        {"A new blockchain platform working with Nvidia to set a new system for digital governance. Our agents translate complex messages into comprehensible language."}
                      
</EditableCopy>
</p>
                    </div>
                    <img className={"bextudio-responsive-works-media"} src={"/assets/fac325cbc6-x8cldv9T8pFqfWMdyAzxEOIZg.jpg"} alt={"IOPn digital governance project"} loading={"lazy"} />
                  </article>
                  <article className={"bextudio-responsive-works-card"} style={{"background": "var(--color-surface-soft)", "borderRadius": "8px"} as CSSProperties}>
                    <div className={"bextudio-responsive-works-copy"}>
                      <h3 className={"bextudio-responsive-works-title"} style={{"color": "rgb(10, 10, 10)"} as CSSProperties}>
<ProjectTitle id="2b9f320085076bd2" fallback={"Royal Joy; To Declare a whole new integrated chain"}/>
</h3>
                      <p className={"bextudio-responsive-works-description"} style={{"color": "rgb(74, 74, 74)"} as CSSProperties}>
<EditableCopy id="8adaa81d4e00253d" fallback={"A new business making tarts and sweets. Training an architect agent unlocks spatial designs and ideas aligned with the brand."}>

                        {"A new business making tarts and sweets. Training an architect agent unlocks spatial designs and ideas aligned with the brand."}
                      
</EditableCopy>
</p>
                    </div>
                    <img className={"bextudio-responsive-works-media"} src={"/assets/2099ef8de7-UnH6ISaO2TlxQk0Bi2uIfhwO8I.jpg"} alt={"Royal Joy bakery environment"} loading={"lazy"} />
                  </article>
                </div>
              </div>
              <div className={"bex-2tu67m hidden-n155sx hidden-1axow96"} data-design-name={"Case studies"}>
                <div className={"bex-141yyta"} data-design-name={"Sticky Container 1"} id={"sticky-container-1"}>
                  <div className={"bex-1afj5lv-container"} style={{"willChange": "transform", "opacity": "1", "transform": "none"} as CSSProperties}>
                    <div className={"bex-Mcawr bex-2ubemi bex-v-2ubemi"} data-design-name={"Light"} style={{"backgroundColor": "var(--color-surface-soft)", "width": "100%", "borderBottomLeftRadius": "10px", "borderBottomRightRadius": "10px", "borderTopLeftRadius": "10px", "borderTopRightRadius": "10px", "boxShadow": "none"} as CSSProperties}>
                      <div className={"bex-15jvgjs"} data-design-name={"Wrapper"}>
                        <div className={"bex-tkazzr"} data-design-name={"Content"}>
                          <div className={"bex-7lixjj"} data-design-name={"Top"}>
                            <div className={"bex-6h7ksn"} data-component-type={"RichTextContainer"} style={{"--extracted-1eung3n": "var(--token-293955a5-6f9a-470e-8eb8-8f52a27509f0, rgb(16, 16, 20))", "--bex-link-text-color": "rgb(0, 153, 255)", "--bex-link-text-decoration": "underline", "transform": "none"} as CSSProperties}>
                              <h4 dir={direction} className={"bex-text"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-40)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-1px", "--bex-line-height": "110%", "--bex-text-alignment": "start", "--bex-text-color": "var(--extracted-1eung3n, var(--token-293955a5-6f9a-470e-8eb8-8f52a27509f0, rgb(16, 16, 20)))"} as CSSProperties}>
<ProjectTitle id="7ae9b6754bf78bad" fallback={"Binghatti; when every object reflects the brand"}/>
</h4>
                            </div>
                            <div className={"bex-u4cgwz"} data-component-type={"RichTextContainer"} style={{"--extracted-r6o4lv": "var(--token-30e48027-3b22-4ff1-a546-6bd64e851575, rgb(61, 61, 71))", "--bex-link-text-color": "rgb(0, 153, 255)", "--bex-link-text-decoration": "underline", "transform": "none"} as CSSProperties}>
                              <p dir={direction} className={"bex-text"} style={{"--bex-font-size": "var(--font-size-24)", "--bex-letter-spacing": "-0.1px", "--bex-line-height": "150%", "--bex-text-color": "var(--extracted-r6o4lv, var(--token-30e48027-3b22-4ff1-a546-6bd64e851575, rgb(61, 61, 71)))"} as CSSProperties}>
<EditableCopy id="68d51020a96fccfa" fallback={"Architect who works with top brands to develop major residential projects in UAE. Our plug-in agents help them to achieve unlimited ideas more rapidly."}>

                                {"Architect who works with top brands to develop major residential projects in UAE. Our plug-in agents help them to achieve unlimited ideas more rapidly."}
                              
</EditableCopy>
</p>
                            </div>
                          </div>
                          <div className={"bex-1kvx9i2"} data-design-name={"Blockquote (desktop/mobile)"}>
                            <div className={"bex-t7k8wg"} data-design-name={"Quote"}>
                              <div className={"bex-1kaii0j"} data-component-type={"RichTextContainer"} style={{"--extracted-r6o4lv": "var(--token-30e48027-3b22-4ff1-a546-6bd64e851575, rgb(61, 61, 71))", "--bex-link-text-color": "rgb(0, 153, 255)", "--bex-link-text-decoration": "underline", "transform": "none"} as CSSProperties}>
                                <p dir={direction} className={"bex-text"} style={{"--bex-font-size": "var(--font-size-18)", "--bex-letter-spacing": "-0.1px", "--bex-line-height": "150%", "--bex-text-color": "var(--extracted-r6o4lv, var(--token-30e48027-3b22-4ff1-a546-6bd64e851575, rgb(61, 61, 71)))"} as CSSProperties}>
<EditableCopy id="3e060b06eba8bc9a" fallback={"When every object reflects the brand, architecture becomes an immersive expression of identity. We partnered with a leading UAE architecture firm to ensure every detail across their high-end residential projects aligned with brand essence.\n\nBy integrating our plug-in agents, we expanded their creative process, enabling faster ideation, real-time exploration, and broader design possibilities. This didn’t replace expertise; it amplified it. Designers iterated more freely while maintaining consistency across all touchpoints.\n\nThe result was a cohesive architectural language where every element supports the brand vision, executed faster, smarter, and with deeper alignment.\n\n"}>

                                  {"When every object reflects the brand, architecture becomes an immersive expression of identity. We partnered with a leading UAE architecture firm to ensure every detail across their high-end residential projects aligned with brand essence.\n\nBy integrating our plug-in agents, we expanded their creative process, enabling faster ideation, real-time exploration, and broader design possibilities. This didn’t replace expertise; it amplified it. Designers iterated more freely while maintaining consistency across all touchpoints.\n\nThe result was a cohesive architectural language where every element supports the brand vision, executed faster, smarter, and with deeper alignment.\n\n"}
                                
</EditableCopy>
</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={"bex-1i0vmh9"} style={{"borderBottomLeftRadius": "15px", "borderBottomRightRadius": "15px", "borderTopLeftRadius": "15px", "borderTopRightRadius": "15px", "boxShadow": "0px 0.6021873017743928px 1.5656869846134214px -1px rgba(0, 0, 0, 0.15), 0px 2.288533303243457px 5.950186588432988px -2px rgba(0, 0, 0, 0.14), 0px 10px 26px -3px rgba(0, 0, 0, 0.1)"} as CSSProperties}>
                          <div className={"bex-ux89y1-container"} draggable={"false"} style={{"filter": "blur(0px)", "WebkitFilter": "blur(0px)"} as CSSProperties}>
                            <video src={"/assets/abfa0d36ca-wFdkfN3FDN2bgvRzqmrsABYkJA.mp4"} loop preload={"none"} muted playsInline style={{"cursor": "auto", "width": "100%", "height": "100%", "borderRadius": "15px", "display": "block", "objectFit": "cover", "backgroundColor": "rgba(0, 0, 0, 0)", "objectPosition": "50% 50%"} as CSSProperties} data-native-video="">
                            </video>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"bex-1fprqzu"} data-design-name={"Sticky Container 2"} id={"sticky-container-2"}>
                  <div className={"bex-1axdl5w-container"} style={{"willChange": "transform", "opacity": "1", "transform": "none"} as CSSProperties}>
                    <div className={"bex-Mcawr bex-2ubemi bex-v-zg0ghb"} data-design-name={"Dark"} style={{"backgroundColor": "var(--color-surface-secondary)", "width": "100%", "borderBottomLeftRadius": "10px", "borderBottomRightRadius": "10px", "borderTopLeftRadius": "10px", "borderTopRightRadius": "10px", "boxShadow": "none"} as CSSProperties}>
                      <div className={"bex-15jvgjs"} data-design-name={"Wrapper"}>
                        <div className={"bex-tkazzr"} data-design-name={"Content"}>
                          <div className={"bex-7lixjj"} data-design-name={"Top"}>
                            <div className={"bex-6h7ksn"} data-component-type={"RichTextContainer"} style={{"--extracted-1eung3n": "var(--token-293955a5-6f9a-470e-8eb8-8f52a27509f0, rgb(16, 16, 20))", "--bex-link-text-color": "rgb(0, 153, 255)", "--bex-link-text-decoration": "underline", "transform": "none"} as CSSProperties}>
                              <h4 dir={direction} className={"bex-text"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-40)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-1px", "--bex-line-height": "110%", "--bex-text-alignment": "start", "--bex-text-color": "var(--extracted-1eung3n, var(--token-293955a5-6f9a-470e-8eb8-8f52a27509f0, rgb(16, 16, 20)))"} as CSSProperties}>
<ProjectTitle id="cba12acf006b8cec" fallback={"Mansory; a respected signature in everything"}/>
</h4>
                            </div>
                            <div className={"bex-u4cgwz"} data-component-type={"RichTextContainer"} style={{"--extracted-r6o4lv": "var(--token-30e48027-3b22-4ff1-a546-6bd64e851575, rgb(61, 61, 71))", "--bex-link-text-color": "rgb(0, 153, 255)", "--bex-link-text-decoration": "underline", "transform": "none"} as CSSProperties}>
                              <p dir={direction} className={"bex-text"} style={{"--bex-font-size": "var(--font-size-24)", "--bex-letter-spacing": "-0.1px", "--bex-line-height": "150%", "--bex-text-color": "var(--extracted-r6o4lv, var(--token-30e48027-3b22-4ff1-a546-6bd64e851575, rgb(61, 61, 71)))"} as CSSProperties}>
<EditableCopy id="fae68842328b63ad" fallback={"Well reputed world class automobile manufacturer and tuner. With an integrator brain, they can have well-integrated outputs for every touchpoint across all channels."}>

                                {"Well reputed world class automobile manufacturer and tuner. With an integrator brain, they can have well-integrated outputs for every touchpoint across all channels."}
                              
</EditableCopy>
</p>
                            </div>
                          </div>
                          <div className={"bex-1kvx9i2"} data-design-name={"Blockquote (desktop/mobile)"}>
                            <div className={"bex-t7k8wg"} data-design-name={"Quote"}>
                              <div className={"bex-1kaii0j"} data-component-type={"RichTextContainer"} style={{"--extracted-r6o4lv": "var(--token-30e48027-3b22-4ff1-a546-6bd64e851575, rgb(61, 61, 71))", "--bex-link-text-color": "rgb(0, 153, 255)", "--bex-link-text-decoration": "underline", "transform": "none"} as CSSProperties}>
                                <p dir={direction} className={"bex-text"} style={{"--bex-font-size": "var(--font-size-18)", "--bex-letter-spacing": "-0.1px", "--bex-line-height": "150%", "--bex-text-color": "var(--extracted-r6o4lv, var(--token-30e48027-3b22-4ff1-a546-6bd64e851575, rgb(61, 61, 71)))"} as CSSProperties}>
<EditableCopy id="98e2679dde9412c0" fallback={"A respected signature in everything means consistent excellence across every touchpoint. We partnered with a world-class automobile manufacturer and tuner to ensure every interaction, from design to customer experience, reflected a unified identity.\n\nUsing an integrator-driven approach powered by our plug-in agents, we connected ideas and outputs across departments into one cohesive system. This enabled faster execution while maintaining strict brand integrity.\n\nThe result was a seamless, intentional brand presence, proving that true distinction comes not just from outstanding parts, but from harmony across the whole."}>

                                  {"A respected signature in everything means consistent excellence across every touchpoint. We partnered with a world-class automobile manufacturer and tuner to ensure every interaction, from design to customer experience, reflected a unified identity.\n\nUsing an integrator-driven approach powered by our plug-in agents, we connected ideas and outputs across departments into one cohesive system. This enabled faster execution while maintaining strict brand integrity.\n\nThe result was a seamless, intentional brand presence, proving that true distinction comes not just from outstanding parts, but from harmony across the whole."}
                                
</EditableCopy>
</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={"bex-1i0vmh9"} style={{"borderBottomLeftRadius": "15px", "borderBottomRightRadius": "15px", "borderTopLeftRadius": "15px", "borderTopRightRadius": "15px", "boxShadow": "0px 0.6021873017743928px 1.5656869846134214px -1px rgba(0, 0, 0, 0.15), 0px 2.288533303243457px 5.950186588432988px -2px rgba(0, 0, 0, 0.14), 0px 10px 26px -3px rgba(0, 0, 0, 0.1)"} as CSSProperties}>
                          <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0", "backgroundRepeat": "repeat", "backgroundPosition": "left top", "backgroundSize": "64px auto", "backgroundImage": "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22126%22 height=%22126%22><path id=%22a%22 d=%22M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z%22 fill=%22rgb(136, 136, 136, 0.2)%22 fill-rule=%22evenodd%22/></svg>')"} as CSSProperties}>
                          </div>
                          <div className={"bex-ux89y1-container"} draggable={"false"} style={{"filter": "blur(0px)", "WebkitFilter": "blur(0px)"} as CSSProperties}>
                            <video src={"/assets/e61ffb2e62-E29BdIZqJfvbhzA4gV3pNbOA4.mp4"} loop preload={"none"} muted playsInline style={{"cursor": "auto", "width": "100%", "height": "100%", "borderRadius": "15px", "display": "block", "objectFit": "cover", "backgroundColor": "rgba(0, 0, 0, 0)", "objectPosition": "50% 50%"} as CSSProperties} data-native-video="">
                            </video>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"bex-qcu4c6"} data-design-name={"Sticky Container 3"} id={"sticky-container-3"}>
                  <div className={"bex-1glwdx5-container"} style={{"willChange": "transform", "opacity": "1", "transform": "none"} as CSSProperties}>
                    <div className={"bex-Mcawr bex-2ubemi bex-v-2ubemi"} data-design-name={"Light"} style={{"backgroundColor": "var(--color-surface-soft)", "width": "100%", "borderBottomLeftRadius": "10px", "borderBottomRightRadius": "10px", "borderTopLeftRadius": "10px", "borderTopRightRadius": "10px", "boxShadow": "none"} as CSSProperties}>
                      <div className={"bex-15jvgjs"} data-design-name={"Wrapper"}>
                        <div className={"bex-tkazzr"} data-design-name={"Content"}>
                          <div className={"bex-7lixjj"} data-design-name={"Top"}>
                            <div className={"bex-6h7ksn"} data-component-type={"RichTextContainer"} style={{"--extracted-1eung3n": "var(--token-293955a5-6f9a-470e-8eb8-8f52a27509f0, rgb(16, 16, 20))", "--bex-link-text-color": "rgb(0, 153, 255)", "--bex-link-text-decoration": "underline", "transform": "none"} as CSSProperties}>
                              <h4 dir={direction} className={"bex-text"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-40)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-1px", "--bex-line-height": "110%", "--bex-text-alignment": "start", "--bex-text-color": "var(--extracted-1eung3n, var(--token-293955a5-6f9a-470e-8eb8-8f52a27509f0, rgb(16, 16, 20)))"} as CSSProperties}>
<ProjectTitle id="182732cd1623a338" fallback={"Technogym; branded dreams in form of videos"}/>
</h4>
                            </div>
                            <div className={"bex-u4cgwz"} data-component-type={"RichTextContainer"} style={{"--extracted-r6o4lv": "var(--token-30e48027-3b22-4ff1-a546-6bd64e851575, rgb(61, 61, 71))", "--bex-link-text-color": "rgb(0, 153, 255)", "--bex-link-text-decoration": "underline", "transform": "none"} as CSSProperties}>
                              <p dir={direction} className={"bex-text"} style={{"--bex-font-size": "var(--font-size-24)", "--bex-letter-spacing": "-0.1px", "--bex-line-height": "150%", "--bex-text-color": "var(--extracted-r6o4lv, var(--token-30e48027-3b22-4ff1-a546-6bd64e851575, rgb(61, 61, 71)))"} as CSSProperties}>
<EditableCopy id="fd6b4c6dfd6b8122" fallback={"Sports equipment provider works with F1, Olympics and top sports. Every dream can be visualized with a proper Image or video generator agent."}>

                                {"Sports equipment provider works with F1, Olympics and top sports. Every dream can be visualized with a proper Image or video generator agent."}
                              
</EditableCopy>
</p>
                            </div>
                          </div>
                          <div className={"bex-1kvx9i2"} data-design-name={"Blockquote (desktop/mobile)"}>
                            <div className={"bex-t7k8wg"} data-design-name={"Quote"}>
                              <div className={"bex-1kaii0j"} data-component-type={"RichTextContainer"} style={{"--extracted-r6o4lv": "var(--token-30e48027-3b22-4ff1-a546-6bd64e851575, rgb(61, 61, 71))", "--bex-link-text-color": "rgb(0, 153, 255)", "--bex-link-text-decoration": "underline", "transform": "none"} as CSSProperties}>
                                <p dir={direction} className={"bex-text"} style={{"--bex-font-size": "var(--font-size-18)", "--bex-letter-spacing": "-0.1px", "--bex-line-height": "150%", "--bex-text-color": "var(--extracted-r6o4lv, var(--token-30e48027-3b22-4ff1-a546-6bd64e851575, rgb(61, 61, 71)))"} as CSSProperties}>
<EditableCopy id="997b5c6c9c0cb121" fallback={"Branded dreams in video begin where imagination meets performance. We partnered with a top sports equipment provider working with elite platforms like Formula 1 and the Olympic Games to turn ambition into compelling visual narratives.\n\nUsing advanced image and video generator agents, the team could rapidly create high-fidelity visuals, visualizing products, ideas, and future scenarios in real time. This enabled richer storytelling, from technical excellence to emotional drive.\n\nThe result went beyond content creation: it turned vision into vivid experiences, strengthening connections with athletes and global audiences alike."}>

                                  {"Branded dreams in video begin where imagination meets performance. We partnered with a top sports equipment provider working with elite platforms like Formula 1 and the Olympic Games to turn ambition into compelling visual narratives.\n\nUsing advanced image and video generator agents, the team could rapidly create high-fidelity visuals, visualizing products, ideas, and future scenarios in real time. This enabled richer storytelling, from technical excellence to emotional drive.\n\nThe result went beyond content creation: it turned vision into vivid experiences, strengthening connections with athletes and global audiences alike."}
                                
</EditableCopy>
</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={"bex-1i0vmh9"} style={{"borderBottomLeftRadius": "15px", "borderBottomRightRadius": "15px", "borderTopLeftRadius": "15px", "borderTopRightRadius": "15px", "boxShadow": "0px 0.6021873017743928px 1.5656869846134214px -1px rgba(0, 0, 0, 0.15), 0px 2.288533303243457px 5.950186588432988px -2px rgba(0, 0, 0, 0.14), 0px 10px 26px -3px rgba(0, 0, 0, 0.1)"} as CSSProperties}>
                          <div className={"bex-ux89y1-container"} draggable={"false"} style={{"filter": "blur(0px)", "WebkitFilter": "blur(0px)"} as CSSProperties}>
                            <video src={"/assets/0c05fa6998-BBYMJJCLo8x6k6yC9pdzAgco.mp4"} loop preload={"none"} muted playsInline style={{"cursor": "auto", "width": "100%", "height": "100%", "borderRadius": "15px", "display": "block", "objectFit": "cover", "backgroundColor": "rgba(0, 0, 0, 0)", "objectPosition": "50% 50%"} as CSSProperties} data-native-video="">
                            </video>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"bex-hdeeqe"} data-design-name={"Sticky Container 4"} id={"sticky-container-3-1"}>
                  <div className={"bex-jyvam8-container"} style={{"opacity": "1", "transform": "none"} as CSSProperties}>
                    <div className={"bex-Mcawr bex-2ubemi bex-v-zg0ghb"} data-design-name={"Dark"} style={{"backgroundColor": "var(--color-surface-secondary)", "width": "100%", "borderBottomLeftRadius": "10px", "borderBottomRightRadius": "10px", "borderTopLeftRadius": "10px", "borderTopRightRadius": "10px", "boxShadow": "none"} as CSSProperties}>
                      <div className={"bex-15jvgjs"} data-design-name={"Wrapper"}>
                        <div className={"bex-tkazzr"} data-design-name={"Content"}>
                          <div className={"bex-7lixjj"} data-design-name={"Top"}>
                            <div className={"bex-6h7ksn"} data-component-type={"RichTextContainer"} style={{"--extracted-1eung3n": "var(--token-293955a5-6f9a-470e-8eb8-8f52a27509f0, rgb(16, 16, 20))", "--bex-link-text-color": "rgb(0, 153, 255)", "--bex-link-text-decoration": "underline", "transform": "none"} as CSSProperties}>
                              <h4 dir={direction} className={"bex-text"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-40)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-1px", "--bex-line-height": "110%", "--bex-text-alignment": "start", "--bex-text-color": "var(--extracted-1eung3n, var(--token-293955a5-6f9a-470e-8eb8-8f52a27509f0, rgb(16, 16, 20)))"} as CSSProperties}>
<ProjectTitle id="fcf55c5efb33cf29" fallback={"Coffino; coffee mix, with integrity"}/>
</h4>
                            </div>
                            <div className={"bex-u4cgwz"} data-component-type={"RichTextContainer"} style={{"--extracted-r6o4lv": "var(--token-30e48027-3b22-4ff1-a546-6bd64e851575, rgb(61, 61, 71))", "--bex-link-text-color": "rgb(0, 153, 255)", "--bex-link-text-decoration": "underline", "transform": "none"} as CSSProperties}>
                              <p dir={direction} className={"bex-text"} style={{"--bex-font-size": "var(--font-size-24)", "--bex-letter-spacing": "-0.1px", "--bex-line-height": "150%", "--bex-text-color": "var(--extracted-r6o4lv, var(--token-30e48027-3b22-4ff1-a546-6bd64e851575, rgb(61, 61, 71)))"} as CSSProperties}>
<EditableCopy id="476736e42291153a" fallback={"Professional instant coffee brand, a new comer to UAE market. Visual messages are now aligned with brand intended values and goals."}>

                                {"Professional instant coffee brand, a new comer to UAE market. Visual messages are now aligned with brand intended values and goals."}
                              
</EditableCopy>
</p>
                            </div>
                          </div>
                          <div className={"bex-1kvx9i2"} data-design-name={"Blockquote (desktop/mobile)"}>
                            <div className={"bex-t7k8wg"} data-design-name={"Quote"}>
                              <div className={"bex-1kaii0j"} data-component-type={"RichTextContainer"} style={{"--extracted-r6o4lv": "var(--token-30e48027-3b22-4ff1-a546-6bd64e851575, rgb(61, 61, 71))", "--bex-link-text-color": "rgb(0, 153, 255)", "--bex-link-text-decoration": "underline", "transform": "none"} as CSSProperties}>
                                <p dir={direction} className={"bex-text"} style={{"--bex-font-size": "var(--font-size-18)", "--bex-letter-spacing": "-0.1px", "--bex-line-height": "150%", "--bex-text-color": "var(--extracted-r6o4lv, var(--token-30e48027-3b22-4ff1-a546-6bd64e851575, rgb(61, 61, 71)))"} as CSSProperties}>
<EditableCopy id="af71ca3160187ac1" fallback={"Coffee mix, with integrity, is more than a promise, It’s a market strategy. We partnered with a professional instant coffee brand entering the UAE, helping them build credibility alongside visibility from day one.\n\nBy aligning all visual communications with their core values, our plug-in agents created a cohesive system across packaging, campaigns, and digital touchpoints. This enabled fast content creation while preserving consistency and trust.\n\nThe result was a confident market entry: a clear identity, strong recognition, and a unified brand presence that resonates from first impression to lasting loyalty."}>

                                  {"Coffee mix, with integrity, is more than a promise, It’s a market strategy. We partnered with a professional instant coffee brand entering the UAE, helping them build credibility alongside visibility from day one.\n\nBy aligning all visual communications with their core values, our plug-in agents created a cohesive system across packaging, campaigns, and digital touchpoints. This enabled fast content creation while preserving consistency and trust.\n\nThe result was a confident market entry: a clear identity, strong recognition, and a unified brand presence that resonates from first impression to lasting loyalty."}
                                
</EditableCopy>
</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={"bex-1i0vmh9"} style={{"borderBottomLeftRadius": "15px", "borderBottomRightRadius": "15px", "borderTopLeftRadius": "15px", "borderTopRightRadius": "15px", "boxShadow": "0px 0.6021873017743928px 1.5656869846134214px -1px rgba(0, 0, 0, 0.15), 0px 2.288533303243457px 5.950186588432988px -2px rgba(0, 0, 0, 0.14), 0px 10px 26px -3px rgba(0, 0, 0, 0.1)"} as CSSProperties}>
                          <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0", "backgroundRepeat": "repeat", "backgroundPosition": "left top", "backgroundSize": "64px auto", "backgroundImage": "url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22126%22 height=%22126%22><path id=%22a%22 d=%22M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z%22 fill=%22rgb(136, 136, 136, 0.2)%22 fill-rule=%22evenodd%22/></svg>')"} as CSSProperties}>
                          </div>
                          <div className={"bex-ux89y1-container"} draggable={"false"} style={{"filter": "blur(0px)", "WebkitFilter": "blur(0px)"} as CSSProperties}>
                            <video src={"/assets/f26aad334f-1lrJPW0izaCCtDVu45IDkuOphY.mp4"} loop preload={"none"} muted playsInline style={{"cursor": "auto", "width": "100%", "height": "100%", "borderRadius": "15px", "display": "block", "objectFit": "cover", "backgroundColor": "rgba(0, 0, 0, 0)", "objectPosition": "50% 50%"} as CSSProperties} data-native-video="">
                            </video>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"bex-7mpltw"} data-design-name={"Sticky Container 5"} id={"sticky-container-3-2"}>
                  <div className={"bex-1h1y1lk-container"} style={{"opacity": "1", "transform": "none"} as CSSProperties}>
                    <div className={"bex-Mcawr bex-2ubemi bex-v-2ubemi"} data-design-name={"Light"} style={{"backgroundColor": "var(--color-surface-soft)", "width": "100%", "borderBottomLeftRadius": "10px", "borderBottomRightRadius": "10px", "borderTopLeftRadius": "10px", "borderTopRightRadius": "10px", "boxShadow": "none"} as CSSProperties}>
                      <div className={"bex-15jvgjs"} data-design-name={"Wrapper"}>
                        <div className={"bex-tkazzr"} data-design-name={"Content"}>
                          <div className={"bex-7lixjj"} data-design-name={"Top"}>
                            <div className={"bex-6h7ksn"} data-component-type={"RichTextContainer"} style={{"--extracted-1eung3n": "var(--token-293955a5-6f9a-470e-8eb8-8f52a27509f0, rgb(16, 16, 20))", "--bex-link-text-color": "rgb(0, 153, 255)", "--bex-link-text-decoration": "underline", "transform": "none"} as CSSProperties}>
                              <h4 dir={direction} className={"bex-text"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-40)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-1px", "--bex-line-height": "110%", "--bex-text-alignment": "start", "--bex-text-color": "var(--extracted-1eung3n, var(--token-293955a5-6f9a-470e-8eb8-8f52a27509f0, rgb(16, 16, 20)))"} as CSSProperties}>
<ProjectTitle id="2414dbd9a3a8c45d" fallback={"IOPn; To Declare a whole new integrated chain"}/>
</h4>
                            </div>
                            <div className={"bex-u4cgwz"} data-component-type={"RichTextContainer"} style={{"--extracted-r6o4lv": "var(--token-30e48027-3b22-4ff1-a546-6bd64e851575, rgb(61, 61, 71))", "--bex-link-text-color": "rgb(0, 153, 255)", "--bex-link-text-decoration": "underline", "transform": "none"} as CSSProperties}>
                              <p dir={direction} className={"bex-text"} style={{"--bex-font-size": "var(--font-size-24)", "--bex-letter-spacing": "-0.1px", "--bex-line-height": "150%", "--bex-text-color": "var(--extracted-r6o4lv, var(--token-30e48027-3b22-4ff1-a546-6bd64e851575, rgb(61, 61, 71)))"} as CSSProperties}>
<EditableCopy id="1140ab31759f4263" fallback={"A new block chain platform, works with Nvidia to set a new system for digital governance. Training the integrator brain and scenario writer agent, to translate complex messages into comprehensible language."}>

                                {"A new block chain platform, works with Nvidia to set a new system for digital governance. Training the integrator brain and scenario writer agent, to translate complex messages into comprehensible language."}
                              
</EditableCopy>
</p>
                            </div>
                          </div>
                          <div className={"bex-1kvx9i2"} data-design-name={"Blockquote (desktop/mobile)"}>
                            <div className={"bex-t7k8wg"} data-design-name={"Quote"}>
                              <div className={"bex-1kaii0j"} data-component-type={"RichTextContainer"} style={{"--extracted-r6o4lv": "var(--token-30e48027-3b22-4ff1-a546-6bd64e851575, rgb(61, 61, 71))", "--bex-link-text-color": "rgb(0, 153, 255)", "--bex-link-text-decoration": "underline", "transform": "none"} as CSSProperties}>
                                <p dir={direction} className={"bex-text"} style={{"--bex-font-size": "var(--font-size-18)", "--bex-letter-spacing": "-0.1px", "--bex-line-height": "150%", "--bex-text-color": "var(--extracted-r6o4lv, var(--token-30e48027-3b22-4ff1-a546-6bd64e851575, rgb(61, 61, 71)))"} as CSSProperties}>
<EditableCopy id="4f233cd3aadda683" fallback={"To declare a new integrated chain is to turn complexity into clarity. We partnered with an emerging blockchain platform working with NVIDIA to shape a new model for digital governance.\n\nBy training an integrator brain and a scenario writer agent, we transformed complex systems into clear, narrative-driven explanations. This allowed the platform to communicate effectively with both experts and broader stakeholders.\n\nThe result was a shift from technical depth alone to strategic clarity, enabling stronger engagement, faster alignment, and greater trust in a system built to redefine digital governance."}>

                                  {"To declare a new integrated chain is to turn complexity into clarity. We partnered with an emerging blockchain platform working with NVIDIA to shape a new model for digital governance.\n\nBy training an integrator brain and a scenario writer agent, we transformed complex systems into clear, narrative-driven explanations. This allowed the platform to communicate effectively with both experts and broader stakeholders.\n\nThe result was a shift from technical depth alone to strategic clarity, enabling stronger engagement, faster alignment, and greater trust in a system built to redefine digital governance."}
                                
</EditableCopy>
</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={"bex-1i0vmh9"} style={{"borderBottomLeftRadius": "15px", "borderBottomRightRadius": "15px", "borderTopLeftRadius": "15px", "borderTopRightRadius": "15px", "boxShadow": "0px 0.6021873017743928px 1.5656869846134214px -1px rgba(0, 0, 0, 0.15), 0px 2.288533303243457px 5.950186588432988px -2px rgba(0, 0, 0, 0.14), 0px 10px 26px -3px rgba(0, 0, 0, 0.1)"} as CSSProperties}>
                          <div className={"bex-ux89y1-container"} draggable={"false"} style={{"filter": "blur(0px)", "WebkitFilter": "blur(0px)"} as CSSProperties}>
                            <video src={"/assets/4a4da513d4-f3wCVkUpD2CgTxyfyp7A0DwwTfY.mp4"} loop preload={"none"} muted playsInline style={{"cursor": "auto", "width": "100%", "height": "100%", "borderRadius": "15px", "display": "block", "objectFit": "cover", "backgroundColor": "rgba(0, 0, 0, 0)", "objectPosition": "50% 50%"} as CSSProperties} data-native-video="">
                            </video>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"bex-vvb56g"} data-design-name={"Sticky Container 6"} id={"sticky-container-3-3"}>
                  <div className={"bex-vk4sic-container"}>
                    <div className={"bex-Mcawr bex-2ubemi bex-v-zg0ghb"} data-design-name={"Dark"} style={{"backgroundColor": "var(--color-surface-secondary)", "width": "100%", "borderBottomLeftRadius": "10px", "borderBottomRightRadius": "10px", "borderTopLeftRadius": "10px", "borderTopRightRadius": "10px", "boxShadow": "none"} as CSSProperties}>
                      <div className={"bex-15jvgjs"} data-design-name={"Wrapper"}>
                        <div className={"bex-tkazzr"} data-design-name={"Content"}>
                          <div className={"bex-7lixjj"} data-design-name={"Top"}>
                            <div className={"bex-6h7ksn"} data-component-type={"RichTextContainer"} style={{"--extracted-1eung3n": "var(--token-293955a5-6f9a-470e-8eb8-8f52a27509f0, rgb(16, 16, 20))", "--bex-link-text-color": "rgb(0, 153, 255)", "--bex-link-text-decoration": "underline", "transform": "none"} as CSSProperties}>
                              <h4 dir={direction} className={"bex-text"} style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-size": "var(--font-size-40)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-letter-spacing": "-1px", "--bex-line-height": "110%", "--bex-text-alignment": "start", "--bex-text-color": "var(--extracted-1eung3n, var(--token-293955a5-6f9a-470e-8eb8-8f52a27509f0, rgb(16, 16, 20)))"} as CSSProperties}>
<ProjectTitle id="d34084503a97c0cf" fallback={"Royal Joy; To Declare a whole new integrated chain"}/>
</h4>
                            </div>
                            <div className={"bex-u4cgwz"} data-component-type={"RichTextContainer"} style={{"--extracted-r6o4lv": "var(--token-30e48027-3b22-4ff1-a546-6bd64e851575, rgb(61, 61, 71))", "--bex-link-text-color": "rgb(0, 153, 255)", "--bex-link-text-decoration": "underline", "transform": "none"} as CSSProperties}>
                              <p dir={direction} className={"bex-text"} style={{"--bex-font-size": "var(--font-size-24)", "--bex-letter-spacing": "-0.1px", "--bex-line-height": "150%", "--bex-text-color": "var(--extracted-r6o4lv, var(--token-30e48027-3b22-4ff1-a546-6bd64e851575, rgb(61, 61, 71)))"} as CSSProperties}>
<EditableCopy id="01eafdf04c1f1806" fallback={"A new business to make tarts and sweets. Training an architect agent to have spatial designs and ideas."}>

                                {"A new business to make tarts and sweets. Training an architect agent to have spatial designs and ideas."}
                              
</EditableCopy>
</p>
                            </div>
                          </div>
                          <div className={"bex-1kvx9i2"} data-design-name={"Blockquote (desktop/mobile)"}>
                            <div className={"bex-t7k8wg"} data-design-name={"Quote"}>
                              <div className={"bex-1kaii0j"} data-component-type={"RichTextContainer"} style={{"--extracted-r6o4lv": "var(--token-30e48027-3b22-4ff1-a546-6bd64e851575, rgb(61, 61, 71))", "--bex-link-text-color": "rgb(0, 153, 255)", "--bex-link-text-decoration": "underline", "transform": "none"} as CSSProperties}>
                                <p dir={direction} className={"bex-text"} style={{"--bex-font-size": "var(--font-size-18)", "--bex-letter-spacing": "-0.1px", "--bex-line-height": "150%", "--bex-text-color": "var(--extracted-r6o4lv, var(--token-30e48027-3b22-4ff1-a546-6bd64e851575, rgb(61, 61, 71)))"} as CSSProperties}>
<EditableCopy id="1725a4d228209d1c" fallback={"To create a delightful visual identity is to turn taste into a full sensory experience. We partnered with a boutique tarts and sweets brand to build an identity as inviting as its products.\n\nBy training an architect agent, we developed a cohesive visual and spatial language, shaping layouts, displays, and atmospheres aligned with the brand’s personality. This enabled fast exploration and precise execution.\n\nThe result was a unified environment where every detail enhances the experience, transforming the space into a living expression of the brand, and each visit into a memorable moment."}>

                                  {"To create a delightful visual identity is to turn taste into a full sensory experience. We partnered with a boutique tarts and sweets brand to build an identity as inviting as its products.\n\nBy training an architect agent, we developed a cohesive visual and spatial language, shaping layouts, displays, and atmospheres aligned with the brand’s personality. This enabled fast exploration and precise execution.\n\nThe result was a unified environment where every detail enhances the experience, transforming the space into a living expression of the brand, and each visit into a memorable moment."}
                                
</EditableCopy>
</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={"bex-1i0vmh9"} style={{"borderBottomLeftRadius": "15px", "borderBottomRightRadius": "15px", "borderTopLeftRadius": "15px", "borderTopRightRadius": "15px", "boxShadow": "0px 0.6021873017743928px 1.5656869846134214px -1px rgba(0, 0, 0, 0.15), 0px 2.288533303243457px 5.950186588432988px -2px rgba(0, 0, 0, 0.14), 0px 10px 26px -3px rgba(0, 0, 0, 0.1)"} as CSSProperties}>
                          <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"} as CSSProperties}>
                            <img decoding={"async"} loading={"lazy"} width={"1024"} height={"1024"} src={"/assets/2099ef8de7-UnH6ISaO2TlxQk0Bi2uIfhwO8I.jpg"} alt={""} style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover"} as CSSProperties} />
                          </div>
                          <div className={"bex-ux89y1-container"} draggable={"false"} style={{"filter": "blur(0px)", "WebkitFilter": "blur(0px)"} as CSSProperties}>
                            <video src={"/assets/82a588f730-WEb03xkhWawim8ft9fAPpLYTbPk.mp4"} loop preload={"none"} poster={"/assets/2099ef8de7-UnH6ISaO2TlxQk0Bi2uIfhwO8I.jpg"} muted playsInline style={{"cursor": "auto", "width": "100%", "height": "100%", "borderRadius": "15px", "display": "block", "objectFit": "cover", "backgroundColor": "rgba(0, 0, 0, 0)", "objectPosition": "50% 50%"} as CSSProperties} data-native-video="">
                            </video>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Navigation />
        <div className={"bex-1kpr50e"} data-design-name={"Section"}>
          <div className={"bex-1x5vzks"} data-design-name={"Content"}>
            <div className={"bex-18t000z"} data-design-name={"Heading and supporting text"}>
              <div className={"ssr-variant hidden-1axow96 hidden-n155sx"}>
                <div className={"bex-rs0sqs"} data-design-name={"Heading"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                  <p dir={direction} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-size": "var(--font-size-40)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-line-height": "80px", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="07852da016156c39" fallback={"Ready to Build Beyond the Surface?"}>

                    <span style={{"display": "inline-block"} as CSSProperties}>
                      {"Ready"}
                    </span>
                    {" "}
                    <span style={{"display": "inline-block"} as CSSProperties}>
                      {"to"}
                    </span>
                    {" "}
                    <span style={{"display": "inline-block"} as CSSProperties}>
                      {"Build"}
                    </span>
                    {" "}
                    <span style={{"display": "inline-block"} as CSSProperties}>
                      {"Beyond"}
                    </span>
                    {" "}
                    <span style={{"display": "inline-block"} as CSSProperties}>
                      {"the"}
                    </span>
                    {" "}
                    <span style={{"display": "inline-block"} as CSSProperties}>
                      {"Surface?"}
                    </span>
                  
</EditableCopy>
</p>
                </div>
              </div>
              <div className={"ssr-variant hidden-171s0a9"}>
                <div className={"bex-rs0sqs"} data-design-name={"Heading"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                  <h2 className={"bex-text bex-styles-preset-1re2d5r"} data-styles-preset={"Up5QvS8_q"} dir={direction}>
<EditableCopy id="923b07a0ef00d709" fallback={"Ready to Build Beyond the Surface?"}>

                    <span style={{"display": "inline-block"} as CSSProperties}>
                      {"Ready"}
                    </span>
                    {" "}
                    <span style={{"display": "inline-block"} as CSSProperties}>
                      {"to"}
                    </span>
                    {" "}
                    <span style={{"display": "inline-block"} as CSSProperties}>
                      {"Build"}
                    </span>
                    {" "}
                    <span style={{"display": "inline-block"} as CSSProperties}>
                      {"Beyond"}
                    </span>
                    {" "}
                    <span style={{"display": "inline-block"} as CSSProperties}>
                      {"the"}
                    </span>
                    {" "}
                    <span style={{"display": "inline-block"} as CSSProperties}>
                      {"Surface?"}
                    </span>
                  
</EditableCopy>
</h2>
                </div>
              </div>
              <div className={"ssr-variant hidden-1axow96 hidden-n155sx"}>
                <div className={"bex-7b3dpp"} data-design-name={"Supporting text"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
                  <p dir={direction} style={{"--bex-font-size": "var(--font-size-20)", "--bex-line-height": "40px", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="152671884cfb1f96" fallback={"The difference between good and exceptional brands isn’t just creativity—it’s how that creativity is structured, scaled, and sustained. That’s where we come in."}>

                    {"The difference between good and exceptional brands isn’t just creativity—it’s how that creativity is structured, scaled, and sustained. That’s where we come in."}
                  
</EditableCopy>
</p>
                </div>
              </div>
              <div className={"ssr-variant hidden-171s0a9"}>
                <div className={"bex-7b3dpp"} data-design-name={"Supporting text"} data-component-type={"RichTextContainer"} style={{"willChange": "transform"} as CSSProperties}>
                  <p className={"bex-text bex-styles-preset-a2dciz"} data-styles-preset={"OfO1FiMaX"} dir={direction}>
<EditableCopy id="41253b6b0d2d1396" fallback={"The difference between good and exceptional brands isn’t just creativity—it’s how that creativity is structured, scaled, and sustained. That’s where we come in."}>

                    {"The difference between good and exceptional brands isn’t just creativity—it’s how that creativity is structured, scaled, and sustained. That’s where we come in."}
                  
</EditableCopy>
</p>
                </div>
              </div>
            </div>
            <div className={"ssr-variant"}>
              <div className={"bex-1kuon1n-container"}>
                <a className={"bex-bBjUH bex-vcvr0j bex-v-vcvr0j bex-68pemw"} data-design-name={"Default"} data-reset={"button"} href={"/contact"} tabIndex={0} style={{"backgroundColor": "var(--token-1de575a6-6512-423f-865e-77b40528747b, var(--color-text))", "height": "100%", "width": "100%", "borderBottomLeftRadius": "8px", "borderBottomRightRadius": "8px", "borderTopLeftRadius": "8px", "borderTopRightRadius": "8px", "opacity": "1"} as CSSProperties}>
                  <div className={"bex-1x9ljnz"} data-component-type={"RichTextContainer"} style={{"--extracted-r6o4lv": "var(--color-surface)", "--bex-link-text-color": "rgb(0, 153, 255)", "--bex-link-text-decoration": "underline", "transform": "none"} as CSSProperties}>
                    <p dir={direction} className={"bex-text"} style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-text-color": "var(--extracted-r6o4lv, var(--color-surface))"} as CSSProperties}>
<EditableCopy id="24a937d22e5cc594" fallback={"Get in Touch"}>

                      {"Get in Touch"}
                    
</EditableCopy>
</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={"ssr-variant hidden-1axow96 hidden-n155sx"}>
          <div className={"bex-sfy45n-container"}>
            <div className={"bex-W9zZe bex-5byvjv bex-v-5byvjv"} data-border={"true"} data-design-name={"Desktop"} style={{"--border-bottom-width": "0px", "--border-color": "var(--color-border)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "1px", "backgroundColor": "var(--color-surface)", "width": "100%"} as CSSProperties}>
              <div className={"bex-9sf971"} data-design-name={"Container"}>
                <div className={"bex-6xeyyw"} data-design-name={"Content"}>
                  <div className={"bex-vm7ack"} data-design-name={"helio-logo-5-min 1"}>
                    <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"} as CSSProperties}>
                      <img decoding={"async"} width={"3794"} height={"1230"} sizes={"(min-width: 1440px) max(112px, 133px), (min-width: 810px) and (max-width: 1439.98px) max(112px, 120px), (max-width: 809.98px) 112px"} srcSet={"/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 512w,/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 1024w,/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 2048w,/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 3794w"} src={"/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png"} alt={""} style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "contain"} as CSSProperties} />
                    </div>
                  </div>
                  <div className={"bex-761pzj"} data-design-name={"Footer text"} data-component-type={"RichTextContainer"} style={{"--extracted-r6o4lv": "var(--token-92ae7d48-8270-48b4-b8f0-dcff02886975, var(--color-text))", "--bex-paragraph-spacing": "16px", "transform": "none"} as CSSProperties}>
                    <p dir={direction} className={"bex-text"} style={{"--bex-line-height": "24px", "--bex-text-alignment": "end", "--bex-text-color": "var(--extracted-r6o4lv, var(--token-92ae7d48-8270-48b4-b8f0-dcff02886975, var(--color-text)))"} as CSSProperties}>
<EditableCopy id="0b1c4cc564d818f5" fallback={"© 2026 Bextudio"}>

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
        <div className={"ssr-variant hidden-n155sx hidden-171s0a9"}>
          <div className={"bex-sfy45n-container"}>
            <div className={"bex-W9zZe bex-5byvjv bex-v-9z0910"} data-border={"true"} data-design-name={"Mobile"} style={{"--border-bottom-width": "0px", "--border-color": "var(--color-border)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "1px", "backgroundColor": "var(--color-surface)", "width": "100%"} as CSSProperties}>
              <div className={"bex-9sf971"} data-design-name={"Container"}>
                <div className={"bex-6xeyyw"} data-design-name={"Content"}>
                  <div className={"bex-vm7ack"} data-design-name={"helio-logo-5-min 1"}>
                    <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"} as CSSProperties}>
                      <img decoding={"async"} width={"3794"} height={"1230"} sizes={"(min-width: 1440px) max(112px, 133px), (min-width: 810px) and (max-width: 1439.98px) max(112px, 120px), (max-width: 809.98px) 112px"} srcSet={"/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 512w,/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 1024w,/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 2048w,/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 3794w"} src={"/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png"} alt={""} style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "contain"} as CSSProperties} />
                    </div>
                  </div>
                  <div className={"bex-761pzj"} data-design-name={"Footer text"} data-component-type={"RichTextContainer"} style={{"--extracted-r6o4lv": "var(--token-92ae7d48-8270-48b4-b8f0-dcff02886975, var(--color-text))", "--bex-paragraph-spacing": "16px", "transform": "none"} as CSSProperties}>
                    <p dir={direction} className={"bex-text"} style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "22px", "--bex-text-alignment": "center", "--bex-text-color": "var(--extracted-r6o4lv, var(--token-92ae7d48-8270-48b4-b8f0-dcff02886975, var(--color-text)))"} as CSSProperties}>
<EditableCopy id="feac03e61d3e3fee" fallback={"© 2026 Bextudio"}>

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
        <div className={"ssr-variant hidden-1axow96 hidden-171s0a9"}>
          <div className={"bex-sfy45n-container"}>
            <div className={"bex-W9zZe bex-5byvjv bex-v-1ita5wf"} data-border={"true"} data-design-name={"Tablet"} style={{"--border-bottom-width": "0px", "--border-color": "var(--color-border)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "1px", "backgroundColor": "var(--color-surface)", "width": "100%"} as CSSProperties}>
              <div className={"bex-9sf971"} data-design-name={"Container"}>
                <div className={"bex-6xeyyw"} data-design-name={"Content"}>
                  <div className={"bex-vm7ack"} data-design-name={"helio-logo-5-min 1"}>
                    <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"} as CSSProperties}>
                      <img decoding={"async"} width={"3794"} height={"1230"} sizes={"(min-width: 1440px) max(112px, 133px), (min-width: 810px) and (max-width: 1439.98px) max(112px, 120px), (max-width: 809.98px) 112px"} srcSet={"/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 512w,/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 1024w,/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 2048w,/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 3794w"} src={"/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png"} alt={""} style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "contain"} as CSSProperties} />
                    </div>
                  </div>
                  <div className={"bex-761pzj"} data-design-name={"Footer text"} data-component-type={"RichTextContainer"} style={{"--extracted-r6o4lv": "var(--token-92ae7d48-8270-48b4-b8f0-dcff02886975, var(--color-text))", "--bex-paragraph-spacing": "16px", "transform": "none"} as CSSProperties}>
                    <p dir={direction} className={"bex-text"} style={{"--bex-font-size": "var(--font-size-15)", "--bex-line-height": "22px", "--bex-text-alignment": "end", "--bex-text-color": "var(--extracted-r6o4lv, var(--token-92ae7d48-8270-48b4-b8f0-dcff02886975, var(--color-text)))"} as CSSProperties}>
<EditableCopy id="8a977dce2dd66250" fallback={"© 2026 Bextudio"}>

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
