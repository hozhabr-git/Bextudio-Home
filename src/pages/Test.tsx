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
import '../styles/Test.css';

// Migrated layout; all elements, copy and CSS are local editable source.
export default function Test() {
  return (
    <div id={"page-main"}>
      <ResponsiveRoot data-design-root={""} className={"bex-vu9ph bex-1g8xh3q"} style={{"minHeight": "100vh", "width": "auto"} as CSSProperties} breakpoints={[{"hash": "1g8xh3q"}]}>
        <div className={"bex-uxzrjz"} data-design-name={"Header section"}>
          <div className={"bex-hsac15"} data-design-name={"Container"}>
            <div className={"bex-178pwzv"} data-design-name={"Content"}>
              <div className={"bex-fkdfxm"} data-design-name={"Heading and supporting text"}>
                <div className={"bex-sae6lm"} data-design-name={"Heading and subheading"}>
                  <div className={"bex-8krkib"} data-design-name={"Subheading"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                    <p style={{"--bex-font-size": "var(--font-size-16)", "--bex-line-height": "24px", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="a875e5fc983c109e" fallback={"Our blog"}>

                      <span style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-16)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-text-color": "rgba(104, 64, 198, 1)"} as CSSProperties} className={"bex-text"}>
                        {"Our blog"}
                      </span>
                    
</EditableCopy>
</p>
                  </div>
                  <div className={"bex-agvced"} data-design-name={"Heading"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                    <p style={{"--bex-font-size": "var(--font-size-48)", "--bex-line-height": "60px", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="cf6b8527080e84a8" fallback={"Resources and insights"}>

                      <span style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-48)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-text-color": "rgba(15, 23, 40, 1)"} as CSSProperties} className={"bex-text"}>
                        {"Resources and insights"}
                      </span>
                    
</EditableCopy>
</p>
                  </div>
                </div>
                <div className={"bex-17vorb7"} data-design-name={"Supporting text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                  <p style={{"--bex-font-size": "var(--font-size-20)", "--bex-line-height": "30px", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="4ae18deffd6a2590" fallback={"The latest industry news, interviews, technologies, and resources."}>

                    <span style={{"--font-selector": "SW50ZXI=", "--bex-font-family": "\"Inter\"", "--bex-font-size": "var(--font-size-20)", "--bex-text-color": "rgba(71, 84, 102, 1)"} as CSSProperties} className={"bex-text"}>
                      {"The latest industry news, interviews, technologies, and resources."}
                    </span>
                  
</EditableCopy>
</p>
                </div>
              </div>
              <div className={"bex-1z3gj6"} data-design-name={"Email capture"}>
                <div className={"bex-hcout8"} data-design-name={"Input field"}>
                  <div className={"bex-1nlkloz"} data-design-name={"Input with label"}>
                    <div className={"bex-grwc8v"} data-border={"true"} data-design-name={"Input"}>
                      <div className={"bex-10t5qhq"} data-design-name={"Content"}>
                        <div className={"bex-1xdtjux"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                          <p style={{"--bex-font-size": "var(--font-size-16)", "--bex-line-height": "24px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="ea9fd42492886282" fallback={"Enter your email"}>

                            <span style={{"--font-selector": "SW50ZXI=", "--bex-font-family": "\"Inter\"", "--bex-font-size": "var(--font-size-16)", "--bex-text-color": "rgba(102, 112, 132, 1)"} as CSSProperties} className={"bex-text"}>
                              {"Enter your email"}
                            </span>
                          
</EditableCopy>
</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"bex-1i7lxfx"} data-design-name={"Hint text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                    <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="39ab11b5f70afc7c" fallback={"We care about your data in our privacy policy."}>

                      <span style={{"--font-selector": "SW50ZXI=", "--bex-font-family": "\"Inter\"", "--bex-font-size": "var(--font-size-14)", "--bex-text-color": "rgba(71, 84, 102, 1)"} as CSSProperties} className={"bex-text"}>
                        {"We care about your data in our "}
                      </span>
                      <span style={{"--font-selector": "SW50ZXI=", "--bex-font-family": "\"Inter\"", "--bex-font-size": "var(--font-size-14)", "--bex-text-color": "rgba(71, 84, 102, 1)", "--bex-text-decoration": "underline"} as CSSProperties} className={"bex-text"}>
                        {"privacy policy"}
                      </span>
                      <span style={{"--font-selector": "SW50ZXI=", "--bex-font-family": "\"Inter\"", "--bex-font-size": "var(--font-size-14)", "--bex-text-color": "rgba(71, 84, 102, 1)"} as CSSProperties} className={"bex-text"}>
                        {"."}
                      </span>
                    
</EditableCopy>
</p>
                  </div>
                </div>
                <div className={"bex-ni15jg"} data-border={"true"} data-design-name={"Button"}>
                  <div className={"bex-1uib9f0"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                    <p style={{"--bex-font-size": "var(--font-size-16)", "--bex-line-height": "24px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="20e9160ae0554ed0" fallback={"Get started"}>

                      <span style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-16)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-text-color": "rgba(255, 255, 255, 1)"} as CSSProperties} className={"bex-text"}>
                        {"Get started"}
                      </span>
                    
</EditableCopy>
</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"bex-7wicug"} data-design-name={"Desktop"}>
          <div className={"bex-86rade"} data-design-name={"Blog page header"}>
            <div className={"bex-dfeobb"} data-design-name={"Section"}>
              <div className={"bex-alxeg6"} data-design-name={"Container"}>
                <div className={"bex-1yz9n49"} data-design-name={"Blog post card"}>
                  <div className={"bex-1ix6xuj"} data-design-name={"Image"}>
                    <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"} as CSSProperties}>
                      <img decoding={"async"} loading={"lazy"} width={"1440"} height={"960"} sizes={"1216px"} srcSet={"/assets/d8b12ed427-B2I0QhprXYTwY0NCl8DMPzRxM.png 512w,/assets/d8b12ed427-B2I0QhprXYTwY0NCl8DMPzRxM.png 1024w,/assets/d8b12ed427-B2I0QhprXYTwY0NCl8DMPzRxM.png 1440w"} src={"/assets/d8b12ed427-B2I0QhprXYTwY0NCl8DMPzRxM.png"} alt={""} style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover"} as CSSProperties} />
                    </div>
                  </div>
                  <div className={"bex-1175bd4"} data-design-name={"Content"}>
                    <div className={"bex-1x7dsva"} data-design-name={"Heading and text"}>
                      <div className={"bex-1i39tbv"} data-design-name={"Phoenix Baker • 19 Jan 2024"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                        <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="78c7eec524636d56" fallback={"Olivia Rhye • 20 Jan 2024"}>

                          <span style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-text-color": "rgba(104, 64, 198, 1)"} as CSSProperties} className={"bex-text"}>
                            {"Olivia Rhye • 20 Jan 2024"}
                          </span>
                        
</EditableCopy>
</p>
                      </div>
                      <div className={"bex-15iytb1"} data-design-name={"Heading and icon"}>
                        <div className={"bex-i1zno4"} data-design-name={"Heading"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                          <p style={{"--bex-font-size": "var(--font-size-30)", "--bex-line-height": "38px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="1b9829cea200c19b" fallback={"UX review presentations"}>

                            <span style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-30)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-text-color": "rgba(15, 23, 40, 1)"} as CSSProperties} className={"bex-text"}>
                              {"UX review presentations"}
                            </span>
                          
</EditableCopy>
</p>
                        </div>
                        <div className={"bex-1if68ri"} data-design-name={"Icon wrap"}>
                          <div className={"bex-50neq0"} data-design-name={"arrow-up-right"}>
                            <div data-component-type={"SVG"} data-design-name={"Icon"} className={"bex-pajm8r"} aria-hidden={"true"} style={{"imageRendering": "pixelated", "flexShrink": "0", "fill": "rgba(0,0,0,1)", "color": "rgba(0,0,0,1)"} as CSSProperties}>
                              <div className={"svgContainer"} style={{"width": "100%", "height": "100%", "aspectRatio": "inherit"} as CSSProperties}>
                                <svg style={{"width": "100%", "height": "100%"} as CSSProperties} viewBox={"0 0 12 12"}>
                                  <use href={"#svg539206978_219"}>
                                  </use>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={"bex-5yle7r"} data-design-name={"Supporting text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                        <p style={{"--bex-font-size": "var(--font-size-16)", "--bex-line-height": "24px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="1e6814dac7b3dd4c" fallback={"How do you create compelling presentations that wow your colleagues and impress your managers?"}>

                          <span style={{"--font-selector": "SW50ZXI=", "--bex-font-family": "\"Inter\"", "--bex-font-size": "var(--font-size-16)", "--bex-text-color": "rgba(71, 84, 102, 1)"} as CSSProperties} className={"bex-text"}>
                            {"How do you create compelling presentations that wow your colleagues and impress your managers?"}
                          </span>
                        
</EditableCopy>
</p>
                      </div>
                    </div>
                    <div className={"bex-4kgynr"} data-design-name={"Categories"}>
                      <div className={"bex-xw1het"} data-border={"true"} data-design-name={"Badge"}>
                        <div className={"bex-z79imp"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                          <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="655a50c1a71f3b5f" fallback={"Design"}>

                            <span style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-family": "\"Inter-Medium\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-text-color": "rgba(104, 64, 198, 1)"} as CSSProperties} className={"bex-text"}>
                              {"Design"}
                            </span>
                          
</EditableCopy>
</p>
                        </div>
                      </div>
                      <div className={"bex-smb063"} data-border={"true"} data-design-name={"Badge"}>
                        <div className={"bex-1ys5hzf"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                          <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="03cc9e4e45cb05e6" fallback={"Research"}>

                            <span style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-family": "\"Inter-Medium\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-text-color": "rgba(53, 55, 204, 1)"} as CSSProperties} className={"bex-text"}>
                              {"Research"}
                            </span>
                          
</EditableCopy>
</p>
                        </div>
                      </div>
                      <div className={"bex-11xi27t"} data-border={"true"} data-design-name={"Badge"}>
                        <div className={"bex-132b4vo"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                          <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="9fdfc360c5f947bb" fallback={"Presentation"}>

                            <span style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-family": "\"Inter-Medium\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-text-color": "rgba(192, 21, 115, 1)"} as CSSProperties} className={"bex-text"}>
                              {"Presentation"}
                            </span>
                          
</EditableCopy>
</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"bex-wp3y8o"} data-design-name={"Content"}>
                  <div className={"bex-1jnyvx6"} data-design-name={"Row"}>
                    <div className={"bex-lxacya"} data-design-name={"Blog post card"}>
                      <div className={"bex-1qnlvcp"} data-design-name={"Image"}>
                        <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"} as CSSProperties}>
                          <img decoding={"async"} loading={"lazy"} width={"1440"} height={"960"} sizes={"384px"} srcSet={"/assets/f9b9490122-pMUqs6PFInGbVN1FsXlZIQNKPwA.png 512w,/assets/f9b9490122-pMUqs6PFInGbVN1FsXlZIQNKPwA.png 1024w,/assets/f9b9490122-pMUqs6PFInGbVN1FsXlZIQNKPwA.png 1440w"} src={"/assets/f9b9490122-pMUqs6PFInGbVN1FsXlZIQNKPwA.png"} alt={""} style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover"} as CSSProperties} />
                        </div>
                      </div>
                      <div className={"bex-16578bz"} data-design-name={"Content"}>
                        <div className={"bex-1xw4vi7"} data-design-name={"Heading and text"}>
                          <div className={"bex-600r83"} data-design-name={"Phoenix Baker • 19 Jan 2024"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                            <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="89499647410edf48" fallback={"Phoenix Baker • 19 Jan 2024"}>

                              <span style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-text-color": "rgba(104, 64, 198, 1)"} as CSSProperties} className={"bex-text"}>
                                {"Phoenix Baker • 19 Jan 2024"}
                              </span>
                            
</EditableCopy>
</p>
                          </div>
                          <div className={"bex-1mf1uv1"} data-design-name={"Heading and icon"}>
                            <div className={"bex-13q9big"} data-design-name={"Heading"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                              <p style={{"--bex-font-size": "var(--font-size-24)", "--bex-line-height": "32px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="b8670b12a9031bf1" fallback={"Migrating to Linear 101"}>

                                <span style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-24)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-text-color": "rgba(15, 23, 40, 1)"} as CSSProperties} className={"bex-text"}>
                                  {"Migrating to Linear 101"}
                                </span>
                              
</EditableCopy>
</p>
                            </div>
                            <div className={"bex-t1ltrv"} data-design-name={"Icon wrap"}>
                              <div className={"bex-1a659sj"} data-design-name={"arrow-up-right"}>
                                <div data-component-type={"SVG"} data-design-name={"Icon"} className={"bex-10s3jy1"} aria-hidden={"true"} style={{"imageRendering": "pixelated", "flexShrink": "0", "fill": "rgba(0,0,0,1)", "color": "rgba(0,0,0,1)"} as CSSProperties}>
                                  <div className={"svgContainer"} style={{"width": "100%", "height": "100%", "aspectRatio": "inherit"} as CSSProperties}>
                                    <svg style={{"width": "100%", "height": "100%"} as CSSProperties} viewBox={"0 0 12 12"}>
                                      <use href={"#svg539206978_219"}>
                                      </use>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={"bex-10uv5yo"} data-design-name={"Supporting text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                            <p style={{"--bex-font-size": "var(--font-size-16)", "--bex-line-height": "24px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="e3f6feebcc0ab53b" fallback={"Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started."}>

                              <span style={{"--font-selector": "SW50ZXI=", "--bex-font-family": "\"Inter\"", "--bex-font-size": "var(--font-size-16)", "--bex-text-color": "rgba(71, 84, 102, 1)"} as CSSProperties} className={"bex-text"}>
                                {"Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started."}
                              </span>
                            
</EditableCopy>
</p>
                          </div>
                        </div>
                        <div className={"bex-1a9an91"} data-design-name={"Categories"}>
                          <div className={"bex-10o23pi"} data-border={"true"} data-design-name={"Badge"}>
                            <div className={"bex-u3no45"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                              <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="cfb60cc15d37506c" fallback={"Product"}>

                                <span style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-family": "\"Inter-Medium\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-text-color": "rgba(1, 106, 162, 1)"} as CSSProperties} className={"bex-text"}>
                                  {"Product"}
                                </span>
                              
</EditableCopy>
</p>
                            </div>
                          </div>
                          <div className={"bex-1key2hu"} data-border={"true"} data-design-name={"Badge"}>
                            <div className={"bex-pag21j"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                              <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="b5d6f4056dfd2372" fallback={"Tools"}>

                                <span style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-family": "\"Inter-Medium\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-text-color": "rgba(192, 21, 115, 1)"} as CSSProperties} className={"bex-text"}>
                                  {"Tools"}
                                </span>
                              
</EditableCopy>
</p>
                            </div>
                          </div>
                          <div className={"bex-1pyvwxy"} data-border={"true"} data-design-name={"Badge"}>
                            <div className={"bex-mwkob3"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                              <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="18c84d627451399d" fallback={"SaaS"}>

                                <span style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-family": "\"Inter-Medium\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-text-color": "rgba(192, 21, 115, 1)"} as CSSProperties} className={"bex-text"}>
                                  {"SaaS"}
                                </span>
                              
</EditableCopy>
</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"bex-1paiw37"} data-design-name={"Blog post card"}>
                      <div className={"bex-m37amd"} data-design-name={"Image"}>
                        <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"} as CSSProperties}>
                          <img decoding={"async"} loading={"lazy"} width={"1440"} height={"960"} sizes={"384px"} srcSet={"/assets/dee170ec6c-4tB97x29WRxRgqN9tyf8RCulNk.png 512w,/assets/dee170ec6c-4tB97x29WRxRgqN9tyf8RCulNk.png 1024w,/assets/dee170ec6c-4tB97x29WRxRgqN9tyf8RCulNk.png 1440w"} src={"/assets/dee170ec6c-4tB97x29WRxRgqN9tyf8RCulNk.png"} alt={""} style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover"} as CSSProperties} />
                        </div>
                      </div>
                      <div className={"bex-ol5z3k"} data-design-name={"Content"}>
                        <div className={"bex-112jbnm"} data-design-name={"Heading and text"}>
                          <div className={"bex-buju81"} data-design-name={"Lana Steiner • 18 Jan 2024"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                            <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="f208a20b00950051" fallback={"Lana Steiner • 18 Jan 2024"}>

                              <span style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-text-color": "rgba(104, 64, 198, 1)"} as CSSProperties} className={"bex-text"}>
                                {"Lana Steiner • 18 Jan 2024"}
                              </span>
                            
</EditableCopy>
</p>
                          </div>
                          <div className={"bex-2xei73"} data-design-name={"Heading and icon"}>
                            <div className={"bex-92888b"} data-design-name={"Building your API stack"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                              <p style={{"--bex-font-size": "var(--font-size-24)", "--bex-line-height": "32px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="ecd2786849b0aa46" fallback={"Building your API stack"}>

                                <span style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-24)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-text-color": "rgba(15, 23, 40, 1)"} as CSSProperties} className={"bex-text"}>
                                  {"Building your API stack"}
                                </span>
                              
</EditableCopy>
</p>
                            </div>
                            <div className={"bex-nz5wzb"} data-design-name={"Icon wrap"}>
                              <div className={"bex-17gx46l"} data-design-name={"arrow-up-right"}>
                                <div data-component-type={"SVG"} data-design-name={"Icon"} className={"bex-12j1l52"} aria-hidden={"true"} style={{"imageRendering": "pixelated", "flexShrink": "0", "fill": "rgba(0,0,0,1)", "color": "rgba(0,0,0,1)"} as CSSProperties}>
                                  <div className={"svgContainer"} style={{"width": "100%", "height": "100%", "aspectRatio": "inherit"} as CSSProperties}>
                                    <svg style={{"width": "100%", "height": "100%"} as CSSProperties} viewBox={"0 0 12 12"}>
                                      <use href={"#svg539206978_219"}>
                                      </use>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={"bex-1ehnl3p"} data-design-name={"Supporting text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                            <p style={{"--bex-font-size": "var(--font-size-16)", "--bex-line-height": "24px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="cef6da85a8551a9b" fallback={"The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them."}>

                              <span style={{"--font-selector": "SW50ZXI=", "--bex-font-family": "\"Inter\"", "--bex-font-size": "var(--font-size-16)", "--bex-text-color": "rgba(71, 84, 102, 1)"} as CSSProperties} className={"bex-text"}>
                                {"The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them."}
                              </span>
                            
</EditableCopy>
</p>
                          </div>
                        </div>
                        <div className={"bex-xkq6lb"} data-design-name={"Categories"}>
                          <div className={"bex-12atgo4"} data-border={"true"} data-design-name={"Badge"}>
                            <div className={"bex-1sqwi9u"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                              <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="9ce8683ed7b94cd8" fallback={"Software Development"}>

                                <span style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-family": "\"Inter-Medium\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-text-color": "rgba(5, 118, 71, 1)"} as CSSProperties} className={"bex-text"}>
                                  {"Software Development"}
                                </span>
                              
</EditableCopy>
</p>
                            </div>
                          </div>
                          <div className={"bex-1squl0k"} data-border={"true"} data-design-name={"Badge"}>
                            <div className={"bex-zb6q6l"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                              <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="45214b6401ea5337" fallback={"Tools"}>

                                <span style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-family": "\"Inter-Medium\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-text-color": "rgba(192, 21, 115, 1)"} as CSSProperties} className={"bex-text"}>
                                  {"Tools"}
                                </span>
                              
</EditableCopy>
</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"bex-1p38b6m"} data-design-name={"Blog post card"}>
                      <div className={"bex-j2t9bb"} data-design-name={"Image"}>
                        <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"} as CSSProperties}>
                          <img decoding={"async"} loading={"lazy"} width={"1440"} height={"960"} sizes={"384px"} srcSet={"/assets/1c9adc500a-buHDmh17TXX3i3xe9iAT9Y8guc8.png 512w,/assets/1c9adc500a-buHDmh17TXX3i3xe9iAT9Y8guc8.png 1024w,/assets/1c9adc500a-buHDmh17TXX3i3xe9iAT9Y8guc8.png 1440w"} src={"/assets/1c9adc500a-buHDmh17TXX3i3xe9iAT9Y8guc8.png"} alt={""} style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover"} as CSSProperties} />
                        </div>
                      </div>
                      <div className={"bex-1i8mb28"} data-design-name={"Content"}>
                        <div className={"bex-1rziogq"} data-design-name={"Heading and text"}>
                          <div className={"bex-o8pgan"} data-design-name={"Alec Whitten • 17 Jan 2024"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                            <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="34c0f52c80e97d2b" fallback={"Alec Whitten • 17 Jan 2024"}>

                              <span style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-text-color": "rgba(104, 64, 198, 1)"} as CSSProperties} className={"bex-text"}>
                                {"Alec Whitten • 17 Jan 2024"}
                              </span>
                            
</EditableCopy>
</p>
                          </div>
                          <div className={"bex-tzsttw"} data-design-name={"Heading and icon"}>
                            <div className={"bex-1ryt4gg"} data-design-name={"Heading"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                              <p style={{"--bex-font-size": "var(--font-size-24)", "--bex-line-height": "32px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="6a316dedb97015ff" fallback={"Bill Walsh leadership lessons"}>

                                <span style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-24)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-text-color": "rgba(15, 23, 40, 1)"} as CSSProperties} className={"bex-text"}>
                                  {"Bill Walsh leadership lessons"}
                                </span>
                              
</EditableCopy>
</p>
                            </div>
                            <div className={"bex-65vu2r"} data-design-name={"Icon wrap"}>
                              <div className={"bex-1crf0kq"} data-design-name={"arrow-up-right"}>
                                <div data-component-type={"SVG"} data-design-name={"Icon"} className={"bex-13f2mqs"} aria-hidden={"true"} style={{"imageRendering": "pixelated", "flexShrink": "0", "fill": "rgba(0,0,0,1)", "color": "rgba(0,0,0,1)"} as CSSProperties}>
                                  <div className={"svgContainer"} style={{"width": "100%", "height": "100%", "aspectRatio": "inherit"} as CSSProperties}>
                                    <svg style={{"width": "100%", "height": "100%"} as CSSProperties} viewBox={"0 0 12 12"}>
                                      <use href={"#svg539206978_219"}>
                                      </use>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={"bex-r6o3xm"} data-design-name={"Supporting text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                            <p style={{"--bex-font-size": "var(--font-size-16)", "--bex-line-height": "24px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="2c4b47b8bc25ed17" fallback={"Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?"}>

                              <span style={{"--font-selector": "SW50ZXI=", "--bex-font-family": "\"Inter\"", "--bex-font-size": "var(--font-size-16)", "--bex-text-color": "rgba(71, 84, 102, 1)"} as CSSProperties} className={"bex-text"}>
                                {"Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?"}
                              </span>
                            
</EditableCopy>
</p>
                          </div>
                        </div>
                        <div className={"bex-12e38ta"} data-design-name={"Categories"}>
                          <div className={"bex-1mpdkab"} data-border={"true"} data-design-name={"Badge"}>
                            <div className={"bex-1g844hd"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                              <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="10770366de177c35" fallback={"Leadership"}>

                                <span style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-family": "\"Inter-Medium\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-text-color": "rgba(104, 64, 198, 1)"} as CSSProperties} className={"bex-text"}>
                                  {"Leadership"}
                                </span>
                              
</EditableCopy>
</p>
                            </div>
                          </div>
                          <div className={"bex-yc3vny"} data-border={"true"} data-design-name={"Badge"}>
                            <div className={"bex-12rfyk"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                              <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="8fb906928f564d7f" fallback={"Management"}>

                                <span style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-family": "\"Inter-Medium\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-text-color": "rgba(53, 62, 114, 1)"} as CSSProperties} className={"bex-text"}>
                                  {"Management"}
                                </span>
                              
</EditableCopy>
</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"bex-1ipudg6"} data-design-name={"Row"}>
                    <div className={"bex-1dkobg9"} data-design-name={"Blog post card"}>
                      <div className={"bex-ctbcn0"} data-design-name={"Image"}>
                        <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"} as CSSProperties}>
                          <img decoding={"async"} loading={"lazy"} width={"1440"} height={"960"} sizes={"384px"} srcSet={"/assets/b1ba10ca94-B8cziNgsCJXyqFCVI4pfJZvMNk.png 512w,/assets/b1ba10ca94-B8cziNgsCJXyqFCVI4pfJZvMNk.png 1024w,/assets/b1ba10ca94-B8cziNgsCJXyqFCVI4pfJZvMNk.png 1440w"} src={"/assets/b1ba10ca94-B8cziNgsCJXyqFCVI4pfJZvMNk.png"} alt={""} style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover"} as CSSProperties} />
                        </div>
                      </div>
                      <div className={"bex-85itpy"} data-design-name={"Content"}>
                        <div className={"bex-r6x64a"} data-design-name={"Heading and text"}>
                          <div className={"bex-rmulff"} data-design-name={"Demi WIlkinson • 16 Jan 2024"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                            <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="8b0b09f264501ba8" fallback={"Demi WIlkinson • 16 Jan 2024"}>

                              <span style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-text-color": "rgba(104, 64, 198, 1)"} as CSSProperties} className={"bex-text"}>
                                {"Demi WIlkinson • 16 Jan 2024"}
                              </span>
                            
</EditableCopy>
</p>
                          </div>
                          <div className={"bex-1h5s299"} data-design-name={"Heading and icon"}>
                            <div className={"bex-5o95su"} data-design-name={"Heading"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                              <p style={{"--bex-font-size": "var(--font-size-24)", "--bex-line-height": "32px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="b98b9ea6b6a63be0" fallback={"PM mental models"}>

                                <span style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-24)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-text-color": "rgba(15, 23, 40, 1)"} as CSSProperties} className={"bex-text"}>
                                  {"PM mental models"}
                                </span>
                              
</EditableCopy>
</p>
                            </div>
                            <div className={"bex-flb81z"} data-design-name={"Icon wrap"}>
                              <div className={"bex-241ar1"} data-design-name={"arrow-up-right"}>
                                <div data-component-type={"SVG"} data-design-name={"Icon"} className={"bex-1q4klnd"} aria-hidden={"true"} style={{"imageRendering": "pixelated", "flexShrink": "0", "fill": "rgba(0,0,0,1)", "color": "rgba(0,0,0,1)"} as CSSProperties}>
                                  <div className={"svgContainer"} style={{"width": "100%", "height": "100%", "aspectRatio": "inherit"} as CSSProperties}>
                                    <svg style={{"width": "100%", "height": "100%"} as CSSProperties} viewBox={"0 0 12 12"}>
                                      <use href={"#svg539206978_219"}>
                                      </use>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={"bex-r7sa1b"} data-design-name={"Supporting text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                            <p style={{"--bex-font-size": "var(--font-size-16)", "--bex-line-height": "24px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="7de759b5f4f9f4ff" fallback={"Mental models are simple expressions of complex processes or relationships."}>

                              <span style={{"--font-selector": "SW50ZXI=", "--bex-font-family": "\"Inter\"", "--bex-font-size": "var(--font-size-16)", "--bex-text-color": "rgba(71, 84, 102, 1)"} as CSSProperties} className={"bex-text"}>
                                {"Mental models are simple expressions of complex processes or relationships."}
                              </span>
                            
</EditableCopy>
</p>
                          </div>
                        </div>
                        <div className={"bex-uuz397"} data-design-name={"Categories"}>
                          <div className={"bex-1ubiq50"} data-border={"true"} data-design-name={"Badge"}>
                            <div className={"bex-e9q2j9"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                              <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="c6c5e92e991b3d66" fallback={"Product"}>

                                <span style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-family": "\"Inter-Medium\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-text-color": "rgba(1, 106, 162, 1)"} as CSSProperties} className={"bex-text"}>
                                  {"Product"}
                                </span>
                              
</EditableCopy>
</p>
                            </div>
                          </div>
                          <div className={"bex-1xfh3if"} data-border={"true"} data-design-name={"Badge"}>
                            <div className={"bex-1jbru02"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                              <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="5dff15279ae77e22" fallback={"Research"}>

                                <span style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-family": "\"Inter-Medium\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-text-color": "rgba(53, 55, 204, 1)"} as CSSProperties} className={"bex-text"}>
                                  {"Research"}
                                </span>
                              
</EditableCopy>
</p>
                            </div>
                          </div>
                          <div className={"bex-53qg4y"} data-border={"true"} data-design-name={"Badge"}>
                            <div className={"bex-yl8tl"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                              <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="08fdfbe1b37b222f" fallback={"Frameworks"}>

                                <span style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-family": "\"Inter-Medium\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-text-color": "rgba(185, 56, 20, 1)"} as CSSProperties} className={"bex-text"}>
                                  {"Frameworks"}
                                </span>
                              
</EditableCopy>
</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"bex-1bvhnsx"} data-design-name={"Blog post card"}>
                      <div className={"bex-1m97ls9"} data-design-name={"Image"}>
                        <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"} as CSSProperties}>
                          <img decoding={"async"} loading={"lazy"} width={"1440"} height={"960"} sizes={"384px"} srcSet={"/assets/6dafa250d5-Xv0wZVqGcq45wtGPhmquD3hwjA.jpg 512w,/assets/6dafa250d5-Xv0wZVqGcq45wtGPhmquD3hwjA.jpg 1024w,/assets/6dafa250d5-Xv0wZVqGcq45wtGPhmquD3hwjA.jpg 1440w"} src={"/assets/6dafa250d5-Xv0wZVqGcq45wtGPhmquD3hwjA.jpg"} alt={""} style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover"} as CSSProperties} />
                        </div>
                      </div>
                      <div className={"bex-q4gjho"} data-design-name={"Content"}>
                        <div className={"bex-aqrypw"} data-design-name={"Heading and text"}>
                          <div className={"bex-158np71"} data-design-name={"Candice Wu • 15 Jan 2024"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                            <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="490797617ae268ec" fallback={"Candice Wu • 15 Jan 2024"}>

                              <span style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-text-color": "rgba(104, 64, 198, 1)"} as CSSProperties} className={"bex-text"}>
                                {"Candice Wu • 15 Jan 2024"}
                              </span>
                            
</EditableCopy>
</p>
                          </div>
                          <div className={"bex-1v1r1as"} data-design-name={"Heading and icon"}>
                            <div className={"bex-2cvaew"} data-design-name={"What is wireframing?"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                              <p style={{"--bex-font-size": "var(--font-size-24)", "--bex-line-height": "32px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="21356ab15413387a" fallback={"What is wireframing?"}>

                                <span style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-24)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-text-color": "rgba(15, 23, 40, 1)"} as CSSProperties} className={"bex-text"}>
                                  {"What is wireframing?"}
                                </span>
                              
</EditableCopy>
</p>
                            </div>
                            <div className={"bex-1k8rpnu"} data-design-name={"Icon wrap"}>
                              <div className={"bex-t30xn9"} data-design-name={"arrow-up-right"}>
                                <div data-component-type={"SVG"} data-design-name={"Icon"} className={"bex-is029a"} aria-hidden={"true"} style={{"imageRendering": "pixelated", "flexShrink": "0", "fill": "rgba(0,0,0,1)", "color": "rgba(0,0,0,1)"} as CSSProperties}>
                                  <div className={"svgContainer"} style={{"width": "100%", "height": "100%", "aspectRatio": "inherit"} as CSSProperties}>
                                    <svg style={{"width": "100%", "height": "100%"} as CSSProperties} viewBox={"0 0 12 12"}>
                                      <use href={"#svg539206978_219"}>
                                      </use>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={"bex-137pja5"} data-design-name={"Supporting text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                            <p style={{"--bex-font-size": "var(--font-size-16)", "--bex-line-height": "24px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="f3d00e7930b4c539" fallback={"Introduction to Wireframing and its Principles. Learn from the best in the industry."}>

                              <span style={{"--font-selector": "SW50ZXI=", "--bex-font-family": "\"Inter\"", "--bex-font-size": "var(--font-size-16)", "--bex-text-color": "rgba(71, 84, 102, 1)"} as CSSProperties} className={"bex-text"}>
                                {"Introduction to Wireframing and its Principles. Learn from the best in the industry."}
                              </span>
                            
</EditableCopy>
</p>
                          </div>
                        </div>
                        <div className={"bex-1o4cf72"} data-design-name={"Categories"}>
                          <div className={"bex-11qmafn"} data-border={"true"} data-design-name={"Badge"}>
                            <div className={"bex-4jfzto"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                              <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="a86ee985e242fc17" fallback={"Design"}>

                                <span style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-family": "\"Inter-Medium\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-text-color": "rgba(104, 64, 198, 1)"} as CSSProperties} className={"bex-text"}>
                                  {"Design"}
                                </span>
                              
</EditableCopy>
</p>
                            </div>
                          </div>
                          <div className={"bex-fjzvuu"} data-border={"true"} data-design-name={"Badge"}>
                            <div className={"bex-qodvjb"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                              <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="9fdb84e75ae8071b" fallback={"Research"}>

                                <span style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-family": "\"Inter-Medium\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-text-color": "rgba(53, 55, 204, 1)"} as CSSProperties} className={"bex-text"}>
                                  {"Research"}
                                </span>
                              
</EditableCopy>
</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={"bex-13h0b5d"} data-design-name={"Blog post card"}>
                      <div className={"bex-2zjzit"} data-design-name={"Image"}>
                        <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"} as CSSProperties}>
                          <img decoding={"async"} loading={"lazy"} width={"1440"} height={"960"} sizes={"384px"} srcSet={"/assets/7535cb2b3e-8XqqBCmYRZVb4jetbfg0VPqxwg.png 512w,/assets/7535cb2b3e-8XqqBCmYRZVb4jetbfg0VPqxwg.png 1024w,/assets/7535cb2b3e-8XqqBCmYRZVb4jetbfg0VPqxwg.png 1440w"} src={"/assets/7535cb2b3e-8XqqBCmYRZVb4jetbfg0VPqxwg.png"} alt={""} style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover"} as CSSProperties} />
                        </div>
                      </div>
                      <div className={"bex-1i9llm2"} data-design-name={"Content"}>
                        <div className={"bex-1a0y1j7"} data-design-name={"Heading and text"}>
                          <div className={"bex-cior6m"} data-design-name={"Natali Craig • 14 Jan 2024"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                            <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="5d87f4b8f4313265" fallback={"Natali Craig • 14 Jan 2024"}>

                              <span style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-text-color": "rgba(104, 64, 198, 1)"} as CSSProperties} className={"bex-text"}>
                                {"Natali Craig • 14 Jan 2024"}
                              </span>
                            
</EditableCopy>
</p>
                          </div>
                          <div className={"bex-zitgm6"} data-design-name={"Heading and icon"}>
                            <div className={"bex-vx4jpv"} data-design-name={"Heading"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                              <p style={{"--bex-font-size": "var(--font-size-24)", "--bex-line-height": "32px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="bca2bfbdef4a7815" fallback={"How collaboration makes us better designers"}>

                                <span style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-24)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-text-color": "rgba(15, 23, 40, 1)"} as CSSProperties} className={"bex-text"}>
                                  {"How collaboration makes us better designers"}
                                </span>
                              
</EditableCopy>
</p>
                            </div>
                            <div className={"bex-10kxb3i"} data-design-name={"Icon wrap"}>
                              <div className={"bex-1a6jugn"} data-design-name={"arrow-up-right"}>
                                <div data-component-type={"SVG"} data-design-name={"Icon"} className={"bex-19ureat"} aria-hidden={"true"} style={{"imageRendering": "pixelated", "flexShrink": "0", "fill": "rgba(0,0,0,1)", "color": "rgba(0,0,0,1)"} as CSSProperties}>
                                  <div className={"svgContainer"} style={{"width": "100%", "height": "100%", "aspectRatio": "inherit"} as CSSProperties}>
                                    <svg style={{"width": "100%", "height": "100%"} as CSSProperties} viewBox={"0 0 12 12"}>
                                      <use href={"#svg539206978_219"}>
                                      </use>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={"bex-pzhcqk"} data-design-name={"Supporting text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                            <p style={{"--bex-font-size": "var(--font-size-16)", "--bex-line-height": "24px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="0472f1cf9b9560eb" fallback={"Collaboration can make our teams stronger, and our individual designs better."}>

                              <span style={{"--font-selector": "SW50ZXI=", "--bex-font-family": "\"Inter\"", "--bex-font-size": "var(--font-size-16)", "--bex-text-color": "rgba(71, 84, 102, 1)"} as CSSProperties} className={"bex-text"}>
                                {"Collaboration can make our teams stronger, and our individual designs better."}
                              </span>
                            
</EditableCopy>
</p>
                          </div>
                        </div>
                        <div className={"bex-p8g9y9"} data-design-name={"Categories"}>
                          <div className={"bex-7pqkwb"} data-border={"true"} data-design-name={"Badge"}>
                            <div className={"bex-1mawu9n"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                              <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="348c74f2f4bc41ca" fallback={"Design"}>

                                <span style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-family": "\"Inter-Medium\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-text-color": "rgba(104, 64, 198, 1)"} as CSSProperties} className={"bex-text"}>
                                  {"Design"}
                                </span>
                              
</EditableCopy>
</p>
                            </div>
                          </div>
                          <div className={"bex-1at1k50"} data-border={"true"} data-design-name={"Badge"}>
                            <div className={"bex-17vn5ym"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                              <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="234daad537078c27" fallback={"Research"}>

                                <span style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-family": "\"Inter-Medium\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-text-color": "rgba(53, 55, 204, 1)"} as CSSProperties} className={"bex-text"}>
                                  {"Research"}
                                </span>
                              
</EditableCopy>
</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"bex-1ir5a5m"} data-border={"true"} data-design-name={"Pagination"}>
                  <div className={"bex-1rdku09"} data-design-name={"Button"}>
                    <div className={"bex-1q94jx"} data-design-name={"arrow-left"}>
                      <div data-component-type={"SVG"} data-design-name={"Icon"} className={"bex-1jvsj0o"} aria-hidden={"true"} style={{"imageRendering": "pixelated", "flexShrink": "0", "fill": "rgba(0,0,0,1)", "color": "rgba(0,0,0,1)"} as CSSProperties}>
                        <div className={"svgContainer"} style={{"width": "100%", "height": "100%", "aspectRatio": "inherit"} as CSSProperties}>
                          <svg style={{"width": "100%", "height": "100%"} as CSSProperties} viewBox={"0 0 14 14"}>
                            <use href={"#svg-333162997_259"}>
                            </use>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className={"bex-1bl5fam"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                      <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="14aa78305f4838dc" fallback={"Previous"}>

                        <span style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-text-color": "rgba(71, 84, 102, 1)"} as CSSProperties} className={"bex-text"}>
                          {"Previous"}
                        </span>
                      
</EditableCopy>
</p>
                    </div>
                  </div>
                  <div className={"bex-1m5bvt3"} data-design-name={"Pagination numbers"}>
                    <div className={"bex-jyinsh"} data-design-name={"_Pagination number base"}>
                      <div className={"bex-1jm3q8n"} data-design-name={"Content"}>
                        <div className={"bex-1vtccax"} data-design-name={"Number"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                          <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="5087582d55c3137c" fallback={"1"}>

                            <span style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-family": "\"Inter-Medium\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-text-color": "rgba(29, 40, 56, 1)"} as CSSProperties} className={"bex-text"}>
                              {"1"}
                            </span>
                          
</EditableCopy>
</p>
                        </div>
                      </div>
                    </div>
                    <div className={"bex-tg36dn"} data-design-name={"_Pagination number base"}>
                      <div className={"bex-1999884"} data-design-name={"Content"}>
                        <div className={"bex-6hwysk"} data-design-name={"Number"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                          <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="981707297025635c" fallback={"2"}>

                            <span style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-family": "\"Inter-Medium\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-text-color": "rgba(71, 84, 102, 1)"} as CSSProperties} className={"bex-text"}>
                              {"2"}
                            </span>
                          
</EditableCopy>
</p>
                        </div>
                      </div>
                    </div>
                    <div className={"bex-min3p2"} data-design-name={"_Pagination number base"}>
                      <div className={"bex-131w9er"} data-design-name={"Content"}>
                        <div className={"bex-1gpzzdl"} data-design-name={"Number"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                          <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="97c90cef935f7fa0" fallback={"3"}>

                            <span style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-family": "\"Inter-Medium\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-text-color": "rgba(71, 84, 102, 1)"} as CSSProperties} className={"bex-text"}>
                              {"3"}
                            </span>
                          
</EditableCopy>
</p>
                        </div>
                      </div>
                    </div>
                    <div className={"bex-18sbrg2"} data-design-name={"_Pagination number base"}>
                      <div className={"bex-o38nsh"} data-design-name={"Content"}>
                        <div className={"bex-6ryqxt"} data-design-name={"Number"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                          <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="6d250d63e6f102ff" fallback={"..."}>

                            <span style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-family": "\"Inter-Medium\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-text-color": "rgba(71, 84, 102, 1)"} as CSSProperties} className={"bex-text"}>
                              {"..."}
                            </span>
                          
</EditableCopy>
</p>
                        </div>
                      </div>
                    </div>
                    <div className={"bex-1ni54"} data-design-name={"_Pagination number base"}>
                      <div className={"bex-hjjmsq"} data-design-name={"Content"}>
                        <div className={"bex-1tf6zgw"} data-design-name={"Number"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                          <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="840e3e4e26625cb9" fallback={"8"}>

                            <span style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-family": "\"Inter-Medium\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-text-color": "rgba(71, 84, 102, 1)"} as CSSProperties} className={"bex-text"}>
                              {"8"}
                            </span>
                          
</EditableCopy>
</p>
                        </div>
                      </div>
                    </div>
                    <div className={"bex-1rs8v9v"} data-design-name={"_Pagination number base"}>
                      <div className={"bex-1mzgzcn"} data-design-name={"Content"}>
                        <div className={"bex-uoz98e"} data-design-name={"Number"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                          <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="5d9a4cebdd2199f2" fallback={"9"}>

                            <span style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-family": "\"Inter-Medium\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-text-color": "rgba(71, 84, 102, 1)"} as CSSProperties} className={"bex-text"}>
                              {"9"}
                            </span>
                          
</EditableCopy>
</p>
                        </div>
                      </div>
                    </div>
                    <div className={"bex-1uegkzt"} data-design-name={"_Pagination number base"}>
                      <div className={"bex-i5eugl"} data-design-name={"Content"}>
                        <div className={"bex-mmf2zq"} data-design-name={"Number"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                          <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="b4e09c41551fd0ce" fallback={"10"}>

                            <span style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-family": "\"Inter-Medium\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-text-color": "rgba(71, 84, 102, 1)"} as CSSProperties} className={"bex-text"}>
                              {"10"}
                            </span>
                          
</EditableCopy>
</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"bex-11r4x8l"} data-design-name={"Button"}>
                    <div className={"bex-1c5kiq2"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                      <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="1882b0a6031dfb39" fallback={"Next"}>

                        <span style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-text-color": "rgba(71, 84, 102, 1)"} as CSSProperties} className={"bex-text"}>
                          {"Next"}
                        </span>
                      
</EditableCopy>
</p>
                    </div>
                    <div className={"bex-ok8pp2"} data-design-name={"arrow-right"}>
                      <div data-component-type={"SVG"} data-design-name={"Icon"} className={"bex-soh33j"} aria-hidden={"true"} style={{"imageRendering": "pixelated", "flexShrink": "0", "fill": "rgba(0,0,0,1)", "color": "rgba(0,0,0,1)"} as CSSProperties}>
                        <div className={"svgContainer"} style={{"width": "100%", "height": "100%", "aspectRatio": "inherit"} as CSSProperties}>
                          <svg style={{"width": "100%", "height": "100%"} as CSSProperties} viewBox={"0 0 14 14"}>
                            <use href={"#svg-874031766_265"}>
                            </use>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"bex-19eihm3"} data-design-name={"Blog section"}>
            <div className={"bex-t0nkyp"} data-design-name={"Container"}>
              <div className={"bex-73u0q0"} data-design-name={"Content"}>
                <div className={"bex-1f5s8u7"} data-design-name={"Heading and supporting text"}>
                  <div className={"bex-11tswqx"} data-design-name={"Heading"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                    <p style={{"--bex-font-size": "var(--font-size-36)", "--bex-line-height": "44px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="15c1dcc198e41e23" fallback={"Latest writings"}>

                      <span style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-36)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-text-color": "rgba(15, 23, 40, 1)"} as CSSProperties} className={"bex-text"}>
                        {"Latest writings"}
                      </span>
                    
</EditableCopy>
</p>
                  </div>
                  <div className={"bex-17o0vn8"} data-design-name={"Supporting text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                    <p style={{"--bex-font-size": "var(--font-size-20)", "--bex-line-height": "30px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="00e12d4b0115aa3b" fallback={"The latest news, technologies, and resources from our team."}>

                      <span style={{"--font-selector": "SW50ZXI=", "--bex-font-family": "\"Inter\"", "--bex-font-size": "var(--font-size-20)", "--bex-text-color": "rgba(71, 84, 102, 1)"} as CSSProperties} className={"bex-text"}>
                        {"The latest news, technologies, and resources from our team."}
                      </span>
                    
</EditableCopy>
</p>
                  </div>
                </div>
                <div className={"bex-1amp22s"} data-design-name={"Actions"}>
                  <div className={"bex-1jvonhl"} data-border={"true"} data-design-name={"Button"}>
                    <div className={"bex-o3gnp"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                      <p style={{"--bex-font-size": "var(--font-size-16)", "--bex-line-height": "24px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="70ad4480c5e75bab" fallback={"View all posts"}>

                        <span style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-16)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-text-color": "rgba(255, 255, 255, 1)"} as CSSProperties} className={"bex-text"}>
                          {"View all posts"}
                        </span>
                      
</EditableCopy>
</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={"bex-zbr01o"} data-design-name={"Container"}>
              <div className={"bex-hcr44x"} data-design-name={"Content"}>
                <div className={"bex-v3uueu"} data-design-name={"Posts"}>
                  <div className={"bex-25dlsi"} data-design-name={"Blog post card"}>
                    <div className={"bex-15wtftj"} data-design-name={"Image"}>
                      <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"} as CSSProperties}>
                        <img decoding={"async"} loading={"lazy"} width={"1440"} height={"960"} sizes={"384px"} srcSet={"/assets/1c18ce63c0-kvnUTYlqrZVmByEFjOoRt22mUs.png 512w,/assets/1c18ce63c0-kvnUTYlqrZVmByEFjOoRt22mUs.png 1024w,/assets/1c18ce63c0-kvnUTYlqrZVmByEFjOoRt22mUs.png 1440w"} src={"/assets/1c18ce63c0-kvnUTYlqrZVmByEFjOoRt22mUs.png"} alt={""} style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover"} as CSSProperties} />
                      </div>
                    </div>
                    <div className={"bex-1vhhjce"} data-design-name={"Content"}>
                      <div className={"bex-l0y1lx"} data-design-name={"Heading and text"}>
                        <div className={"bex-voqagl"} data-design-name={"Olivia Rhye • 20 Jan 2024"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                          <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="f88e2b4e9aeebff5" fallback={"Olivia Rhye • 20 Jan 2024"}>

                            <span style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-text-color": "rgba(104, 64, 198, 1)"} as CSSProperties} className={"bex-text"}>
                              {"Olivia Rhye • 20 Jan 2024"}
                            </span>
                          
</EditableCopy>
</p>
                        </div>
                        <div className={"bex-1hse9f"} data-design-name={"Heading and icon"}>
                          <div className={"bex-4168dy"} data-design-name={"Heading"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                            <p style={{"--bex-font-size": "var(--font-size-24)", "--bex-line-height": "32px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="52b3d0e1e016e235" fallback={"UX review presentations"}>

                              <span style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-24)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-text-color": "rgba(15, 23, 40, 1)"} as CSSProperties} className={"bex-text"}>
                                {"UX review presentations"}
                              </span>
                            
</EditableCopy>
</p>
                          </div>
                          <div className={"bex-1l0svrn"} data-design-name={"Icon wrap"}>
                            <div className={"bex-18308cy"} data-design-name={"arrow-up-right"}>
                              <div data-component-type={"SVG"} data-design-name={"Icon"} className={"bex-khlug7"} aria-hidden={"true"} style={{"imageRendering": "pixelated", "flexShrink": "0", "fill": "rgba(0,0,0,1)", "color": "rgba(0,0,0,1)"} as CSSProperties}>
                                <div className={"svgContainer"} style={{"width": "100%", "height": "100%", "aspectRatio": "inherit"} as CSSProperties}>
                                  <svg style={{"width": "100%", "height": "100%"} as CSSProperties} viewBox={"0 0 12 12"}>
                                    <use href={"#svg539206978_219"}>
                                    </use>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={"bex-1brlsuo"} data-design-name={"Supporting text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                          <p style={{"--bex-font-size": "var(--font-size-16)", "--bex-line-height": "24px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="39ae4666418190cc" fallback={"How do you create compelling presentations that wow your colleagues and impress your managers?"}>

                            <span style={{"--font-selector": "SW50ZXI=", "--bex-font-family": "\"Inter\"", "--bex-font-size": "var(--font-size-16)", "--bex-text-color": "rgba(71, 84, 102, 1)"} as CSSProperties} className={"bex-text"}>
                              {"How do you create compelling presentations that wow your colleagues and impress your managers?"}
                            </span>
                          
</EditableCopy>
</p>
                        </div>
                      </div>
                      <div className={"bex-1wwi92p"} data-design-name={"Categories"}>
                        <div className={"bex-156747"} data-border={"true"} data-design-name={"Badge"}>
                          <div className={"bex-gyu0lv"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                            <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="2da99e38376e1970" fallback={"Design"}>

                              <span style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-family": "\"Inter-Medium\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-text-color": "rgba(104, 64, 198, 1)"} as CSSProperties} className={"bex-text"}>
                                {"Design"}
                              </span>
                            
</EditableCopy>
</p>
                          </div>
                        </div>
                        <div className={"bex-is3cpd"} data-border={"true"} data-design-name={"Badge"}>
                          <div className={"bex-6ww5ub"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                            <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="596781392af2ce11" fallback={"Research"}>

                              <span style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-family": "\"Inter-Medium\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-text-color": "rgba(53, 55, 204, 1)"} as CSSProperties} className={"bex-text"}>
                                {"Research"}
                              </span>
                            
</EditableCopy>
</p>
                          </div>
                        </div>
                        <div className={"bex-jjl84n"} data-border={"true"} data-design-name={"Badge"}>
                          <div className={"bex-rxskqf"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                            <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="c67a3fd3896c7d5e" fallback={"Presentation"}>

                              <span style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-family": "\"Inter-Medium\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-text-color": "rgba(192, 21, 115, 1)"} as CSSProperties} className={"bex-text"}>
                                {"Presentation"}
                              </span>
                            
</EditableCopy>
</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"bex-lli317"} data-design-name={"Blog post card"}>
                    <div className={"bex-1363kph"} data-design-name={"Image"}>
                      <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"} as CSSProperties}>
                        <img decoding={"async"} loading={"lazy"} width={"1440"} height={"960"} sizes={"384px"} srcSet={"/assets/f9b9490122-pMUqs6PFInGbVN1FsXlZIQNKPwA.png 512w,/assets/f9b9490122-pMUqs6PFInGbVN1FsXlZIQNKPwA.png 1024w,/assets/f9b9490122-pMUqs6PFInGbVN1FsXlZIQNKPwA.png 1440w"} src={"/assets/f9b9490122-pMUqs6PFInGbVN1FsXlZIQNKPwA.png"} alt={""} style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover"} as CSSProperties} />
                      </div>
                    </div>
                    <div className={"bex-1tb16ox"} data-design-name={"Content"}>
                      <div className={"bex-1x3jevj"} data-design-name={"Heading and text"}>
                        <div className={"bex-mw7dde"} data-design-name={"Phoenix Baker • 19 Jan 2024"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                          <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="678ef88449fb412c" fallback={"Phoenix Baker • 19 Jan 2024"}>

                            <span style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-text-color": "rgba(104, 64, 198, 1)"} as CSSProperties} className={"bex-text"}>
                              {"Phoenix Baker • 19 Jan 2024"}
                            </span>
                          
</EditableCopy>
</p>
                        </div>
                        <div className={"bex-sucgtn"} data-design-name={"Heading and icon"}>
                          <div className={"bex-lcmomn"} data-design-name={"Heading"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                            <p style={{"--bex-font-size": "var(--font-size-24)", "--bex-line-height": "32px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="58eb051a09a86df8" fallback={"Migrating to Linear 101"}>

                              <span style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-24)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-text-color": "rgba(15, 23, 40, 1)"} as CSSProperties} className={"bex-text"}>
                                {"Migrating to Linear 101"}
                              </span>
                            
</EditableCopy>
</p>
                          </div>
                          <div className={"bex-omw3so"} data-design-name={"Icon wrap"}>
                            <div className={"bex-dko6io"} data-design-name={"arrow-up-right"}>
                              <div data-component-type={"SVG"} data-design-name={"Icon"} className={"bex-15ovtjd"} aria-hidden={"true"} style={{"imageRendering": "pixelated", "flexShrink": "0", "fill": "rgba(0,0,0,1)", "color": "rgba(0,0,0,1)"} as CSSProperties}>
                                <div className={"svgContainer"} style={{"width": "100%", "height": "100%", "aspectRatio": "inherit"} as CSSProperties}>
                                  <svg style={{"width": "100%", "height": "100%"} as CSSProperties} viewBox={"0 0 12 12"}>
                                    <use href={"#svg539206978_219"}>
                                    </use>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={"bex-b2dmub"} data-design-name={"Supporting text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                          <p style={{"--bex-font-size": "var(--font-size-16)", "--bex-line-height": "24px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="31edf344eb59cd87" fallback={"Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started."}>

                            <span style={{"--font-selector": "SW50ZXI=", "--bex-font-family": "\"Inter\"", "--bex-font-size": "var(--font-size-16)", "--bex-text-color": "rgba(71, 84, 102, 1)"} as CSSProperties} className={"bex-text"}>
                              {"Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get started."}
                            </span>
                          
</EditableCopy>
</p>
                        </div>
                      </div>
                      <div className={"bex-gth3yp"} data-design-name={"Categories"}>
                        <div className={"bex-15ubbz8"} data-border={"true"} data-design-name={"Badge"}>
                          <div className={"bex-bx8uz9"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                            <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="349f8f114883b6ae" fallback={"Product"}>

                              <span style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-family": "\"Inter-Medium\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-text-color": "rgba(1, 106, 162, 1)"} as CSSProperties} className={"bex-text"}>
                                {"Product"}
                              </span>
                            
</EditableCopy>
</p>
                          </div>
                        </div>
                        <div className={"bex-4ey0p7"} data-border={"true"} data-design-name={"Badge"}>
                          <div className={"bex-8ghojc"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                            <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="49e6c58c0e75f4c5" fallback={"Tools"}>

                              <span style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-family": "\"Inter-Medium\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-text-color": "rgba(192, 21, 115, 1)"} as CSSProperties} className={"bex-text"}>
                                {"Tools"}
                              </span>
                            
</EditableCopy>
</p>
                          </div>
                        </div>
                        <div className={"bex-1tqcivu"} data-border={"true"} data-design-name={"Badge"}>
                          <div className={"bex-9fi79j"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                            <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="9bd44a7fd05a6403" fallback={"SaaS"}>

                              <span style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-family": "\"Inter-Medium\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-text-color": "rgba(192, 21, 115, 1)"} as CSSProperties} className={"bex-text"}>
                                {"SaaS"}
                              </span>
                            
</EditableCopy>
</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"bex-1usc54r"} data-design-name={"Blog post card"}>
                    <div className={"bex-q20j6g"} data-design-name={"Image"}>
                      <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"} as CSSProperties}>
                        <img decoding={"async"} loading={"lazy"} width={"1440"} height={"960"} sizes={"384px"} srcSet={"/assets/dee170ec6c-4tB97x29WRxRgqN9tyf8RCulNk.png 512w,/assets/dee170ec6c-4tB97x29WRxRgqN9tyf8RCulNk.png 1024w,/assets/dee170ec6c-4tB97x29WRxRgqN9tyf8RCulNk.png 1440w"} src={"/assets/dee170ec6c-4tB97x29WRxRgqN9tyf8RCulNk.png"} alt={""} style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover"} as CSSProperties} />
                      </div>
                    </div>
                    <div className={"bex-1aq8ybg"} data-design-name={"Content"}>
                      <div className={"bex-x6a0iy"} data-design-name={"Heading and text"}>
                        <div className={"bex-3a8d92"} data-design-name={"Lana Steiner • 18 Jan 2024"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                          <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="bd6a0794b618afb6" fallback={"Lana Steiner • 18 Jan 2024"}>

                            <span style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-text-color": "rgba(104, 64, 198, 1)"} as CSSProperties} className={"bex-text"}>
                              {"Lana Steiner • 18 Jan 2024"}
                            </span>
                          
</EditableCopy>
</p>
                        </div>
                        <div className={"bex-1op1mpk"} data-design-name={"Heading and icon"}>
                          <div className={"bex-1ct6nk4"} data-design-name={"Building your API stack"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                            <p style={{"--bex-font-size": "var(--font-size-24)", "--bex-line-height": "32px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="62081bd825bb6a4b" fallback={"Building your API stack"}>

                              <span style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-24)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-text-color": "rgba(15, 23, 40, 1)"} as CSSProperties} className={"bex-text"}>
                                {"Building your API stack"}
                              </span>
                            
</EditableCopy>
</p>
                          </div>
                          <div className={"bex-1axrx35"} data-design-name={"Icon wrap"}>
                            <div className={"bex-yiryjg"} data-design-name={"arrow-up-right"}>
                              <div data-component-type={"SVG"} data-design-name={"Icon"} className={"bex-2s7m6e"} aria-hidden={"true"} style={{"imageRendering": "pixelated", "flexShrink": "0", "fill": "rgba(0,0,0,1)", "color": "rgba(0,0,0,1)"} as CSSProperties}>
                                <div className={"svgContainer"} style={{"width": "100%", "height": "100%", "aspectRatio": "inherit"} as CSSProperties}>
                                  <svg style={{"width": "100%", "height": "100%"} as CSSProperties} viewBox={"0 0 12 12"}>
                                    <use href={"#svg539206978_219"}>
                                    </use>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={"bex-1fh5bfs"} data-design-name={"Supporting text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                          <p style={{"--bex-font-size": "var(--font-size-16)", "--bex-line-height": "24px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="e25997fac6a9d4b0" fallback={"The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them."}>

                            <span style={{"--font-selector": "SW50ZXI=", "--bex-font-family": "\"Inter\"", "--bex-font-size": "var(--font-size-16)", "--bex-text-color": "rgba(71, 84, 102, 1)"} as CSSProperties} className={"bex-text"}>
                              {"The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them."}
                            </span>
                          
</EditableCopy>
</p>
                        </div>
                      </div>
                      <div className={"bex-1kxm423"} data-design-name={"Categories"}>
                        <div className={"bex-1grnan8"} data-border={"true"} data-design-name={"Badge"}>
                          <div className={"bex-1u49z5l"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                            <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="2b881ed1ca41d4ea" fallback={"Software Development"}>

                              <span style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-family": "\"Inter-Medium\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-text-color": "rgba(5, 118, 71, 1)"} as CSSProperties} className={"bex-text"}>
                                {"Software Development"}
                              </span>
                            
</EditableCopy>
</p>
                          </div>
                        </div>
                        <div className={"bex-f4eipp"} data-border={"true"} data-design-name={"Badge"}>
                          <div className={"bex-msu0xz"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                            <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="ccfe9c8115bac1d1" fallback={"Tools"}>

                              <span style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-family": "\"Inter-Medium\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-text-color": "rgba(192, 21, 115, 1)"} as CSSProperties} className={"bex-text"}>
                                {"Tools"}
                              </span>
                            
</EditableCopy>
</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"bex-v7ump2"} data-design-name={"Blog post card"}>
                    <div className={"bex-1fkkuc3"} data-design-name={"Image"}>
                      <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"} as CSSProperties}>
                        <img decoding={"async"} loading={"lazy"} width={"1646"} height={"1098"} sizes={"384px"} srcSet={"/assets/40d408a138-10gAzSCJCr3qoLevzveo9Y2MVM.jpg 512w,/assets/40d408a138-10gAzSCJCr3qoLevzveo9Y2MVM.jpg 1024w,/assets/40d408a138-10gAzSCJCr3qoLevzveo9Y2MVM.jpg 1646w"} src={"/assets/40d408a138-10gAzSCJCr3qoLevzveo9Y2MVM.jpg"} alt={""} style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover"} as CSSProperties} />
                      </div>
                    </div>
                    <div className={"bex-flvp9i"} data-design-name={"Content"}>
                      <div className={"bex-1kjhw4a"} data-design-name={"Heading and text"}>
                        <div className={"bex-nwmkdd"} data-design-name={"Alec Whitten • 17 Jan 2024"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                          <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="48055f361aaf45d6" fallback={"Alec Whitten • 17 Jan 2024"}>

                            <span style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-text-color": "rgba(104, 64, 198, 1)"} as CSSProperties} className={"bex-text"}>
                              {"Alec Whitten • 17 Jan 2024"}
                            </span>
                          
</EditableCopy>
</p>
                        </div>
                        <div className={"bex-1301dw7"} data-design-name={"Heading and icon"}>
                          <div className={"bex-1g51v2y"} data-design-name={"Heading"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                            <p style={{"--bex-font-size": "var(--font-size-24)", "--bex-line-height": "32px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="dd34dccb101f8d5d" fallback={"Bill Walsh leadership lessons"}>

                              <span style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-24)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-text-color": "rgba(15, 23, 40, 1)"} as CSSProperties} className={"bex-text"}>
                                {"Bill Walsh leadership lessons"}
                              </span>
                            
</EditableCopy>
</p>
                          </div>
                          <div className={"bex-9y0oq"} data-design-name={"Icon wrap"}>
                            <div className={"bex-us65bd"} data-design-name={"arrow-up-right"}>
                              <div data-component-type={"SVG"} data-design-name={"Icon"} className={"bex-hy1bf5"} aria-hidden={"true"} style={{"imageRendering": "pixelated", "flexShrink": "0", "fill": "rgba(0,0,0,1)", "color": "rgba(0,0,0,1)"} as CSSProperties}>
                                <div className={"svgContainer"} style={{"width": "100%", "height": "100%", "aspectRatio": "inherit"} as CSSProperties}>
                                  <svg style={{"width": "100%", "height": "100%"} as CSSProperties} viewBox={"0 0 12 12"}>
                                    <use href={"#svg539206978_219"}>
                                    </use>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={"bex-5v7jl1"} data-design-name={"Supporting text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                          <p style={{"--bex-font-size": "var(--font-size-16)", "--bex-line-height": "24px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="c7f4938cc1c86366" fallback={"Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?"}>

                            <span style={{"--font-selector": "SW50ZXI=", "--bex-font-family": "\"Inter\"", "--bex-font-size": "var(--font-size-16)", "--bex-text-color": "rgba(71, 84, 102, 1)"} as CSSProperties} className={"bex-text"}>
                              {"Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?"}
                            </span>
                          
</EditableCopy>
</p>
                        </div>
                      </div>
                      <div className={"bex-1ponx60"} data-design-name={"Categories"}>
                        <div className={"bex-1jkiqs9"} data-border={"true"} data-design-name={"Badge"}>
                          <div className={"bex-p5uw48"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                            <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="4bc1077181108ec8" fallback={"Leadership"}>

                              <span style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-family": "\"Inter-Medium\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-text-color": "rgba(104, 64, 198, 1)"} as CSSProperties} className={"bex-text"}>
                                {"Leadership"}
                              </span>
                            
</EditableCopy>
</p>
                          </div>
                        </div>
                        <div className={"bex-1ccbqaz"} data-border={"true"} data-design-name={"Badge"}>
                          <div className={"bex-36i5y4"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                            <p style={{"--bex-font-size": "var(--font-size-14)", "--bex-line-height": "20px", "--bex-text-alignment": "center"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="1860853d4309fbd2" fallback={"Management"}>

                              <span style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-family": "\"Inter-Medium\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-14)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-text-color": "rgba(53, 62, 114, 1)"} as CSSProperties} className={"bex-text"}>
                                {"Management"}
                              </span>
                            
</EditableCopy>
</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={"bex-15kcfiw"} data-design-name={"Arrows"}>
                  <div className={"bex-35xkvr"} data-border={"true"} data-design-name={"_Testiomonial carousel arrow"}>
                    <div className={"bex-1idk4o5"} data-design-name={"arrow-left"}>
                      <div data-component-type={"SVG"} data-design-name={"Icon"} className={"bex-1rgjuei"} aria-hidden={"true"} style={{"imageRendering": "pixelated", "flexShrink": "0", "fill": "rgba(0,0,0,1)", "color": "rgba(0,0,0,1)"} as CSSProperties}>
                        <div className={"svgContainer"} style={{"width": "100%", "height": "100%", "aspectRatio": "inherit"} as CSSProperties}>
                          <svg style={{"width": "100%", "height": "100%"} as CSSProperties} viewBox={"0 0 16 16"}>
                            <use href={"#svg-629671888_219"}>
                            </use>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={"bex-2jojff"} data-border={"true"} data-design-name={"_Testiomonial carousel arrow"}>
                    <div className={"bex-2rtv4g"} data-design-name={"arrow-right"}>
                      <div data-component-type={"SVG"} data-design-name={"Icon"} className={"bex-1pwtzbd"} aria-hidden={"true"} style={{"imageRendering": "pixelated", "flexShrink": "0", "fill": "rgba(0,0,0,1)", "color": "rgba(0,0,0,1)"} as CSSProperties}>
                        <div className={"svgContainer"} style={{"width": "100%", "height": "100%", "aspectRatio": "inherit"} as CSSProperties}>
                          <svg style={{"width": "100%", "height": "100%"} as CSSProperties} viewBox={"0 0 16 16"}>
                            <use href={"#svg-1741507879_220"}>
                            </use>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={"bex-1yfc2ve"} data-design-name={"CTA section"}>
            <div className={"bex-eqllzq"} data-design-name={"Container"}>
              <div className={"bex-1k8kg2b"} data-design-name={"Content"}>
                <div className={"bex-zfidvb"} data-design-name={"Heading and supporting text"}>
                  <div className={"bex-1ogcp8w"} data-design-name={"Heading"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                    <p style={{"--bex-font-size": "var(--font-size-48)", "--bex-line-height": "60px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="4a606ffa628907a4" fallback={"Join 4,000+ startups growing with Untitled"}>

                      <span style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-48)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-text-color": "rgba(15, 23, 40, 1)"} as CSSProperties} className={"bex-text"}>
                        {"Join 4,000+ startups growing with Untitled"}
                      </span>
                    
</EditableCopy>
</p>
                  </div>
                  <div className={"bex-8r6i6l"} data-design-name={"Supporting text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                    <p style={{"--bex-font-size": "var(--font-size-20)", "--bex-line-height": "30px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="05ebb6c9ba2aa38b" fallback={"Start your 30-day free trial today."}>

                      <span style={{"--font-selector": "SW50ZXI=", "--bex-font-family": "\"Inter\"", "--bex-font-size": "var(--font-size-20)", "--bex-text-color": "rgba(71, 84, 102, 1)"} as CSSProperties} className={"bex-text"}>
                        {"Start your 30-day free trial today."}
                      </span>
                    
</EditableCopy>
</p>
                  </div>
                </div>
                <div className={"bex-1s48sz3"} data-design-name={"Actions"}>
                  <div className={"bex-1rfz38l"} data-border={"true"} data-design-name={"Button"}>
                    <div className={"bex-1ap4gtb"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                      <p style={{"--bex-font-size": "var(--font-size-16)", "--bex-line-height": "24px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="aea0bab97fc138ff" fallback={"Learn more"}>

                        <span style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-16)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-text-color": "rgba(52, 64, 83, 1)"} as CSSProperties} className={"bex-text"}>
                          {"Learn more"}
                        </span>
                      
</EditableCopy>
</p>
                    </div>
                  </div>
                  <div className={"bex-1cawczd"} data-border={"true"} data-design-name={"Button"}>
                    <div className={"bex-gaz1r0"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                      <p style={{"--bex-font-size": "var(--font-size-16)", "--bex-line-height": "24px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="c8e662797d99fd15" fallback={"Get started"}>

                        <span style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-16)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-text-color": "rgba(255, 255, 255, 1)"} as CSSProperties} className={"bex-text"}>
                          {"Get started"}
                        </span>
                      
</EditableCopy>
</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={"bex-1neqiiz"} data-design-name={"Image"}>
                <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"} as CSSProperties}>
                  <img decoding={"async"} loading={"lazy"} width={"1920"} height={"2880"} sizes={"576px"} srcSet={"/assets/84f4e08bc2-N1HvXAJ5PuiFjCUg9RwlypAnuZ8.jpg 682w,/assets/84f4e08bc2-N1HvXAJ5PuiFjCUg9RwlypAnuZ8.jpg 1365w,/assets/84f4e08bc2-N1HvXAJ5PuiFjCUg9RwlypAnuZ8.jpg 1920w"} src={"/assets/84f4e08bc2-N1HvXAJ5PuiFjCUg9RwlypAnuZ8.jpg"} alt={""} style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "cover"} as CSSProperties} />
                </div>
                <div className={"bex-ftvh6z"} data-design-name={"_Quote image bottom panel"}>
                  <div className={"bex-p76fn0"} data-border={"true"} data-design-name={"Attribution card"}>
                    <div className={"bex-18exyx3"} data-design-name={"Quote"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                      <p style={{"--bex-font-size": "var(--font-size-30)", "--bex-line-height": "38px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="4e26f3f24a36725d" fallback={"“Untitled has saved us thousands of hours of work. We’re able to spin up projects and features faster.”"}>

                        <span style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-30)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-text-color": "rgba(255, 255, 255, 1)"} as CSSProperties} className={"bex-text"}>
                          {"“Untitled has saved us thousands of hours of work. We’re able to spin up projects and features faster.”"}
                        </span>
                      
</EditableCopy>
</p>
                    </div>
                    <div className={"bex-1ttkin5"} data-design-name={"Name and text"}>
                      <div className={"bex-1qwsmsu"} data-design-name={"Name and stars"}>
                        <div className={"bex-1qtynlr"} data-design-name={"Name"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                          <p style={{"--bex-font-size": "var(--font-size-36)", "--bex-line-height": "44px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="6631a099f001b2ec" fallback={"Alisa Hester"}>

                            <span style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-36)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-letter-spacing": "-0.02em", "--bex-text-color": "rgba(255, 255, 255, 1)"} as CSSProperties} className={"bex-text"}>
                              {"Alisa Hester"}
                            </span>
                          
</EditableCopy>
</p>
                        </div>
                        <div className={"bex-yjy0qb"} data-design-name={"Stars"}>
                          <div className={"bex-f6vrjb"} data-design-name={"Star icon"}>
                            <div data-component-type={"SVG"} data-design-name={"Star background"} className={"bex-135jckr"} aria-hidden={"true"} style={{"imageRendering": "pixelated", "flexShrink": "0", "fill": "rgba(0,0,0,1)", "color": "rgba(0,0,0,1)"} as CSSProperties}>
                              <div className={"svgContainer"} style={{"width": "100%", "height": "100%", "aspectRatio": "inherit"} as CSSProperties}>
                                <svg style={{"width": "100%", "height": "100%"} as CSSProperties} viewBox={"0 0 20 20"}>
                                  <use href={"#svg-1372166011_787"}>
                                  </use>
                                </svg>
                              </div>
                            </div>
                            <div data-component-type={"SVG"} data-design-name={"Star"} className={"bex-zkf5w"} aria-hidden={"true"} style={{"imageRendering": "pixelated", "flexShrink": "0", "fill": "rgba(0,0,0,1)", "color": "rgba(0,0,0,1)"} as CSSProperties}>
                              <div className={"svgContainer"} style={{"width": "100%", "height": "100%", "aspectRatio": "inherit"} as CSSProperties}>
                                <svg style={{"width": "100%", "height": "100%"} as CSSProperties} viewBox={"0 0 20 20"}>
                                  <use href={"#svg-2105645085_933"}>
                                  </use>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className={"bex-1c4kzcf"} data-design-name={"Star icon"}>
                            <div data-component-type={"SVG"} data-design-name={"Star background"} className={"bex-18b4gqh"} aria-hidden={"true"} style={{"imageRendering": "pixelated", "flexShrink": "0", "fill": "rgba(0,0,0,1)", "color": "rgba(0,0,0,1)"} as CSSProperties}>
                              <div className={"svgContainer"} style={{"width": "100%", "height": "100%", "aspectRatio": "inherit"} as CSSProperties}>
                                <svg style={{"width": "100%", "height": "100%"} as CSSProperties} viewBox={"0 0 20 20"}>
                                  <use href={"#svg-1372166011_787"}>
                                  </use>
                                </svg>
                              </div>
                            </div>
                            <div data-component-type={"SVG"} data-design-name={"Star"} className={"bex-14yf5f0"} aria-hidden={"true"} style={{"imageRendering": "pixelated", "flexShrink": "0", "fill": "rgba(0,0,0,1)", "color": "rgba(0,0,0,1)"} as CSSProperties}>
                              <div className={"svgContainer"} style={{"width": "100%", "height": "100%", "aspectRatio": "inherit"} as CSSProperties}>
                                <svg style={{"width": "100%", "height": "100%"} as CSSProperties} viewBox={"0 0 20 20"}>
                                  <use href={"#svg877534147_933"}>
                                  </use>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className={"bex-x0zxjx"} data-design-name={"Star icon"}>
                            <div data-component-type={"SVG"} data-design-name={"Star background"} className={"bex-4dfxwi"} aria-hidden={"true"} style={{"imageRendering": "pixelated", "flexShrink": "0", "fill": "rgba(0,0,0,1)", "color": "rgba(0,0,0,1)"} as CSSProperties}>
                              <div className={"svgContainer"} style={{"width": "100%", "height": "100%", "aspectRatio": "inherit"} as CSSProperties}>
                                <svg style={{"width": "100%", "height": "100%"} as CSSProperties} viewBox={"0 0 20 20"}>
                                  <use href={"#svg-1372166011_787"}>
                                  </use>
                                </svg>
                              </div>
                            </div>
                            <div data-component-type={"SVG"} data-design-name={"Star"} className={"bex-bskqpc"} aria-hidden={"true"} style={{"imageRendering": "pixelated", "flexShrink": "0", "fill": "rgba(0,0,0,1)", "color": "rgba(0,0,0,1)"} as CSSProperties}>
                              <div className={"svgContainer"} style={{"width": "100%", "height": "100%", "aspectRatio": "inherit"} as CSSProperties}>
                                <svg style={{"width": "100%", "height": "100%"} as CSSProperties} viewBox={"0 0 20 20"}>
                                  <use href={"#svg-1737533629_933"}>
                                  </use>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className={"bex-1avvoty"} data-design-name={"Star icon"}>
                            <div data-component-type={"SVG"} data-design-name={"Star background"} className={"bex-kqbx0z"} aria-hidden={"true"} style={{"imageRendering": "pixelated", "flexShrink": "0", "fill": "rgba(0,0,0,1)", "color": "rgba(0,0,0,1)"} as CSSProperties}>
                              <div className={"svgContainer"} style={{"width": "100%", "height": "100%", "aspectRatio": "inherit"} as CSSProperties}>
                                <svg style={{"width": "100%", "height": "100%"} as CSSProperties} viewBox={"0 0 20 20"}>
                                  <use href={"#svg-1372166011_787"}>
                                  </use>
                                </svg>
                              </div>
                            </div>
                            <div data-component-type={"SVG"} data-design-name={"Star"} className={"bex-1xqmwpr"} aria-hidden={"true"} style={{"imageRendering": "pixelated", "flexShrink": "0", "fill": "rgba(0,0,0,1)", "color": "rgba(0,0,0,1)"} as CSSProperties}>
                              <div className={"svgContainer"} style={{"width": "100%", "height": "100%", "aspectRatio": "inherit"} as CSSProperties}>
                                <svg style={{"width": "100%", "height": "100%"} as CSSProperties} viewBox={"0 0 20 20"}>
                                  <use href={"#svg-57634109_933"}>
                                  </use>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <div className={"bex-4folnc"} data-design-name={"Star icon"}>
                            <div data-component-type={"SVG"} data-design-name={"Star background"} className={"bex-18kgadg"} aria-hidden={"true"} style={{"imageRendering": "pixelated", "flexShrink": "0", "fill": "rgba(0,0,0,1)", "color": "rgba(0,0,0,1)"} as CSSProperties}>
                              <div className={"svgContainer"} style={{"width": "100%", "height": "100%", "aspectRatio": "inherit"} as CSSProperties}>
                                <svg style={{"width": "100%", "height": "100%"} as CSSProperties} viewBox={"0 0 20 20"}>
                                  <use href={"#svg-1372166011_787"}>
                                  </use>
                                </svg>
                              </div>
                            </div>
                            <div data-component-type={"SVG"} data-design-name={"Star"} className={"bex-4oqqx2"} aria-hidden={"true"} style={{"imageRendering": "pixelated", "flexShrink": "0", "fill": "rgba(0,0,0,1)", "color": "rgba(0,0,0,1)"} as CSSProperties}>
                              <div className={"svgContainer"} style={{"width": "100%", "height": "100%", "aspectRatio": "inherit"} as CSSProperties}>
                                <svg style={{"width": "100%", "height": "100%"} as CSSProperties} viewBox={"0 0 20 20"}>
                                  <use href={"#svg377543235_933"}>
                                  </use>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={"bex-kgp5ur"} data-design-name={"Supporting text and arrows"}>
                        <div className={"bex-1yhmdws"} data-design-name={"Text and supporting text"}>
                          <div className={"bex-vcdysb"} data-design-name={"Text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                            <p style={{"--bex-font-size": "var(--font-size-18)", "--bex-line-height": "28px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="42bcfdd19b54fd2a" fallback={"PM, Hourglass"}>

                              <span style={{"--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--bex-font-family": "\"Inter-SemiBold\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-18)", "--bex-font-weight": "var(--font-weight-semibold)", "--bex-text-color": "rgba(255, 255, 255, 1)"} as CSSProperties} className={"bex-text"}>
                                {"PM, Hourglass"}
                              </span>
                            
</EditableCopy>
</p>
                          </div>
                          <div className={"bex-rbriy8"} data-design-name={"Supporting text"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                            <p style={{"--bex-font-size": "var(--font-size-16)", "--bex-line-height": "24px"} as CSSProperties} className={"bex-text"}>
<EditableCopy id="80fb2f507ce8d682" fallback={"Web Design Agency"}>

                              <span style={{"--font-selector": "SW50ZXItTWVkaXVt", "--bex-font-family": "\"Inter-Medium\", \"Inter\", sans-serif", "--bex-font-size": "var(--font-size-16)", "--bex-font-weight": "var(--font-weight-medium)", "--bex-text-color": "rgba(255, 255, 255, 1)"} as CSSProperties} className={"bex-text"}>
                                {"Web Design Agency"}
                              </span>
                            
</EditableCopy>
</p>
                          </div>
                        </div>
                        <div className={"bex-1jjdeig"} data-design-name={"Arrows"}>
                          <div className={"bex-17d0fgt"} data-border={"true"} data-design-name={"_Testiomonial carousel arrow"}>
                            <div className={"bex-1si2e8r"} data-design-name={"arrow-left"}>
                              <div data-component-type={"SVG"} data-design-name={"Icon"} className={"bex-gui1jf"} aria-hidden={"true"} style={{"imageRendering": "pixelated", "flexShrink": "0", "fill": "rgba(0,0,0,1)", "color": "rgba(0,0,0,1)"} as CSSProperties}>
                                <div className={"svgContainer"} style={{"width": "100%", "height": "100%", "aspectRatio": "inherit"} as CSSProperties}>
                                  <svg style={{"width": "100%", "height": "100%"} as CSSProperties} viewBox={"0 0 16 16"}>
                                    <use href={"#svg2136651136_217"}>
                                    </use>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={"bex-2h8028"} data-border={"true"} data-design-name={"_Testiomonial carousel arrow"}>
                            <div className={"bex-15svvey"} data-design-name={"arrow-right"}>
                              <div data-component-type={"SVG"} data-design-name={"Icon"} className={"bex-dvfyal"} aria-hidden={"true"} style={{"imageRendering": "pixelated", "flexShrink": "0", "fill": "rgba(0,0,0,1)", "color": "rgba(0,0,0,1)"} as CSSProperties}>
                                <div className={"svgContainer"} style={{"width": "100%", "height": "100%", "aspectRatio": "inherit"} as CSSProperties}>
                                  <svg style={{"width": "100%", "height": "100%"} as CSSProperties} viewBox={"0 0 16 16"}>
                                    <use href={"#svg-492435863_218"}>
                                    </use>
                                  </svg>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={"bex-10y8zut-container"} data-code-component-plugin-id={"mcp001"}>
          <div style={{"width": "100%", "height": "0", "overflow": "visible", "position": "relative", "pointerEvents": "none"} as CSSProperties}>
          </div>
        </div>
      </ResponsiveRoot>
      <div id={"overlay"}>
      </div>
      <div id={"svg-templates"} style={{"position": "absolute", "overflow": "hidden", "bottom": "0", "left": "0", "width": "0", "height": "0", "zIndex": "0", "contain": "strict"} as CSSProperties} aria-hidden={"true"}>
        {"\n"}
        <svg width={"12"} height={"12"} viewBox={"-1 -1 12 12"} fill={"none"} id={"svg539206978_219"}>
          {"\n"}
          <path d={"M0 10L10 0M10 10V0H0"} stroke={"#101828"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
          </path>
          {"\n"}
        </svg>
        {"\n"}
        <svg width={"14"} height={"14"} viewBox={"-1 -1 14 14"} fill={"none"} id={"svg-333162997_259"}>
          {"\n"}
          <path d={"M11.6667 5.83333H0M5.83333 0L0 5.83333L5.83333 11.6667"} stroke={"#475467"} strokeWidth={"1.66667"} strokeLinecap={"round"} strokeLinejoin={"round"}>
          </path>
          {"\n"}
        </svg>
        {"\n"}
        <svg width={"14"} height={"14"} viewBox={"-1 -1 14 14"} fill={"none"} id={"svg-874031766_265"}>
          {"\n"}
          <path d={"M0 5.83333H11.6667M5.83333 11.6667L11.6667 5.83333L5.83333 0"} stroke={"#475467"} strokeWidth={"1.66667"} strokeLinecap={"round"} strokeLinejoin={"round"}>
          </path>
          {"\n"}
        </svg>
        {"\n"}
        <svg width={"16"} height={"16"} viewBox={"-1 -1 16 16"} fill={"none"} id={"svg-629671888_219"}>
          {"\n"}
          <path d={"M14 7H0M7 0L0 7L7 14"} stroke={"#667085"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
          </path>
          {"\n"}
        </svg>
        {"\n"}
        <svg width={"16"} height={"16"} viewBox={"-1 -1 16 16"} fill={"none"} id={"svg-1741507879_220"}>
          {"\n"}
          <path d={"M0 7H14M7 14L14 7L7 0"} stroke={"#667085"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
          </path>
          {"\n"}
        </svg>
        {"\n"}
        <svg width={"20"} height={"20"} viewBox={"0 0 20 20"} fill={"none"} id={"svg-1372166011_787"}>
          {"\n"}
          <path d={"M9.53834 1.10996C9.70914 0.699318 10.2909 0.699318 10.4617 1.10996L12.5278 6.07744C12.5998 6.25056 12.7626 6.36885 12.9495 6.38383L18.3123 6.81376C18.7556 6.8493 18.9354 7.40256 18.5976 7.69189L14.5117 11.1919C14.3693 11.3139 14.3071 11.5053 14.3506 11.6876L15.5989 16.9208C15.7021 17.3534 15.2315 17.6954 14.8519 17.4635L10.2606 14.6592C10.1006 14.5615 9.89938 14.5615 9.73937 14.6592L5.14806 17.4635C4.76851 17.6954 4.29788 17.3534 4.40108 16.9208L5.64939 11.6876C5.69289 11.5053 5.6307 11.3139 5.48831 11.1919L1.40241 7.69189C1.06464 7.40256 1.24441 6.8493 1.68773 6.81376L7.05054 6.38383C7.23744 6.36885 7.40024 6.25056 7.47225 6.07744L9.53834 1.10996Z"} fill={"#F2F4F7"}>
          </path>
          {"\n"}
        </svg>
        {"\n"}
        <svg width={"20"} height={"20"} viewBox={"0 0 20 20"} fill={"none"} id={"svg-2105645085_933"}>
          {"\n"}
          <g clipPath={"url(#svg-2105645085_933_clip0_10300_31687)"}>
            {"\n"}
            <path d={"M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"} fill={"white"}>
            </path>
            {"\n"}
          </g>
          {"\n"}
          <defs>
            {"\n"}
            <clipPath id={"svg-2105645085_933_clip0_10300_31687"}>
              {"\n"}
              <rect width={"20"} height={"20"} fill={"white"}>
              </rect>
              {"\n"}
            </clipPath>
            {"\n"}
          </defs>
          {"\n"}
        </svg>
        {"\n"}
        <svg width={"20"} height={"20"} viewBox={"0 0 20 20"} fill={"none"} id={"svg877534147_933"}>
          {"\n"}
          <g clipPath={"url(#svg877534147_933_clip0_10300_31691)"}>
            {"\n"}
            <path d={"M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"} fill={"white"}>
            </path>
            {"\n"}
          </g>
          {"\n"}
          <defs>
            {"\n"}
            <clipPath id={"svg877534147_933_clip0_10300_31691"}>
              {"\n"}
              <rect width={"20"} height={"20"} fill={"white"}>
              </rect>
              {"\n"}
            </clipPath>
            {"\n"}
          </defs>
          {"\n"}
        </svg>
        {"\n"}
        <svg width={"20"} height={"20"} viewBox={"0 0 20 20"} fill={"none"} id={"svg-1737533629_933"}>
          {"\n"}
          <g clipPath={"url(#svg-1737533629_933_clip0_10300_31695)"}>
            {"\n"}
            <path d={"M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"} fill={"white"}>
            </path>
            {"\n"}
          </g>
          {"\n"}
          <defs>
            {"\n"}
            <clipPath id={"svg-1737533629_933_clip0_10300_31695"}>
              {"\n"}
              <rect width={"20"} height={"20"} fill={"white"}>
              </rect>
              {"\n"}
            </clipPath>
            {"\n"}
          </defs>
          {"\n"}
        </svg>
        {"\n"}
        <svg width={"20"} height={"20"} viewBox={"0 0 20 20"} fill={"none"} id={"svg-57634109_933"}>
          {"\n"}
          <g clipPath={"url(#svg-57634109_933_clip0_10300_31699)"}>
            {"\n"}
            <path d={"M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"} fill={"white"}>
            </path>
            {"\n"}
          </g>
          {"\n"}
          <defs>
            {"\n"}
            <clipPath id={"svg-57634109_933_clip0_10300_31699"}>
              {"\n"}
              <rect width={"20"} height={"20"} fill={"white"}>
              </rect>
              {"\n"}
            </clipPath>
            {"\n"}
          </defs>
          {"\n"}
        </svg>
        {"\n"}
        <svg width={"20"} height={"20"} viewBox={"0 0 20 20"} fill={"none"} id={"svg377543235_933"}>
          {"\n"}
          <g clipPath={"url(#svg377543235_933_clip0_10300_31703)"}>
            {"\n"}
            <path d={"M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"} fill={"white"}>
            </path>
            {"\n"}
          </g>
          {"\n"}
          <defs>
            {"\n"}
            <clipPath id={"svg377543235_933_clip0_10300_31703"}>
              {"\n"}
              <rect width={"20"} height={"20"} fill={"white"}>
              </rect>
              {"\n"}
            </clipPath>
            {"\n"}
          </defs>
          {"\n"}
        </svg>
        {"\n"}
        <svg width={"16"} height={"16"} viewBox={"-1 -1 16 16"} fill={"none"} id={"svg2136651136_217"}>
          {"\n"}
          <path d={"M14 7H0M7 0L0 7L7 14"} stroke={"white"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
          </path>
          {"\n"}
        </svg>
        {"\n"}
        <svg width={"16"} height={"16"} viewBox={"-1 -1 16 16"} fill={"none"} id={"svg-492435863_218"}>
          {"\n"}
          <path d={"M0 7H14M7 14L14 7L7 0"} stroke={"white"} strokeWidth={"2"} strokeLinecap={"round"} strokeLinejoin={"round"}>
          </path>
          {"\n"}
        </svg>
        {"\n"}
      </div>
    </div>
  );
}
