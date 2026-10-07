import { FeaturedArticleCard, ManagedArticleCollection } from '../content/ManagedBlog';
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
import '../styles/Blog.css';

// Migrated layout; all elements, copy and CSS are local editable source.
export default function Blog() {
  return (
    <div id={"page-main"}>
      <ResponsiveRoot data-design-root={""} className={"bex-irVTk bex-Yh32p bex-VfUW4 bex-MKLdG bex-MUVaL bex-T6BRi bex-2CTAt bex-YBR0o bex-innNU bex-eA2rm bex-rgyii"} style={{"minHeight": "100vh", "width": "auto"} as CSSProperties} breakpoints={[{"hash": "rgyii", "mediaQuery": "(min-width: 1440px)"}, {"hash": "8oxbg4", "mediaQuery": "(min-width: 810px) and (max-width: 1439.98px)"}, {"hash": "d7bpuz", "mediaQuery": "(max-width: 809.98px)"}]}>
        <section className={"bex-mfmbvc"} data-design-name={"Blog Hero"}>
          <div className={"bex-1xt9frg"} data-design-name={"Container"}>
            <div className={"bex-1is8h8i"} data-design-name={"Title"}>
              <div className={"bex-3vozu6"} data-design-name={"Eyebrow"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                <p className={"bex-text bex-styles-preset-5wikxz"} data-styles-preset={"J5EkRe_Ux"} dir={"auto"} style={{"--bex-text-alignment": "center"} as CSSProperties}>
<EditableCopy id="f5346012dbf77e0a" fallback={"Bextudio Journal"}>

                  {"Bextudio Journal"}
                
</EditableCopy>
</p>
              </div>
              <div className={"ssr-variant hidden-8oxbg4 hidden-d7bpuz"}>
                <div className={"bex-1oenrs0"} data-design-name={"Title"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                  <h1 className={"bex-text bex-styles-preset-ywj2m3"} data-styles-preset={"y7aa33D9z"} dir={"auto"}>
<EditableCopy id="dd65a87bc90a7137" fallback={"Resources and insights"}>

                    <span style={{"whiteSpace": "nowrap"} as CSSProperties}>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"R"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"e"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"s"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"o"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"u"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"r"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"c"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"e"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"s"}
                      </span>
                    </span>
                    {" "}
                    <span style={{"whiteSpace": "nowrap"} as CSSProperties}>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"a"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"n"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"d"}
                      </span>
                    </span>
                    {" "}
                    <span style={{"whiteSpace": "nowrap"} as CSSProperties}>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"i"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"n"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"s"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"i"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"g"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"h"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"t"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"s"}
                      </span>
                    </span>
                  
</EditableCopy>
</h1>
                </div>
              </div>
              <div className={"ssr-variant hidden-d7bpuz hidden-rgyii"}>
                <div className={"bex-1oenrs0"} data-design-name={"Title"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                  <h2 className={"bex-text bex-styles-preset-18zryj1"} data-styles-preset={"FLK0zar6E"} dir={"auto"} style={{"--bex-text-alignment": "center"} as CSSProperties}>
<EditableCopy id="32dd7a9a4808c003" fallback={"Resources and insights"}>

                    <span style={{"whiteSpace": "nowrap"} as CSSProperties}>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"R"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"e"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"s"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"o"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"u"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"r"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"c"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"e"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"s"}
                      </span>
                    </span>
                    {" "}
                    <span style={{"whiteSpace": "nowrap"} as CSSProperties}>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"a"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"n"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"d"}
                      </span>
                    </span>
                    {" "}
                    <span style={{"whiteSpace": "nowrap"} as CSSProperties}>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"i"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"n"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"s"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"i"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"g"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"h"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"t"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"s"}
                      </span>
                    </span>
                  
</EditableCopy>
</h2>
                </div>
              </div>
              <div className={"ssr-variant hidden-8oxbg4 hidden-rgyii"}>
                <div className={"bex-1oenrs0"} data-design-name={"Title"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                  <h3 className={"bex-text bex-styles-preset-12xuyja"} data-styles-preset={"jeAl0zFFb"} dir={"auto"} style={{"--bex-text-alignment": "center"} as CSSProperties}>
<EditableCopy id="b6cbd827d9d2e3b4" fallback={"Resources and insights"}>

                    <span style={{"whiteSpace": "nowrap"} as CSSProperties}>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"R"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"e"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"s"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"o"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"u"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"r"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"c"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"e"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"s"}
                      </span>
                    </span>
                    {" "}
                    <span style={{"whiteSpace": "nowrap"} as CSSProperties}>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"a"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"n"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"d"}
                      </span>
                    </span>
                    {" "}
                    <span style={{"whiteSpace": "nowrap"} as CSSProperties}>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"i"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"n"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"s"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"i"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"g"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"h"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"t"}
                      </span>
                      <span style={{"display": "inline-block"} as CSSProperties}>
                        {"s"}
                      </span>
                    </span>
                  
</EditableCopy>
</h3>
                </div>
              </div>
            </div>
            <div className={"bex-av1sp3"} data-design-name={"Subtitle"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
              <p className={"bex-text bex-styles-preset-1jp7yvg"} data-styles-preset={"JvMr31Kt1"} dir={"auto"} style={{"--bex-text-alignment": "center", "--bex-text-color": "var(--token-994370d7-1fbd-4803-9ca4-7279be049b2d, var(--color-text-secondary))"} as CSSProperties}>
<EditableCopy id="ef52174bf0bca51f" fallback={"Practical insights on brand intelligence, strategy systems, design operations, and AI-powered brand building."}>

                <span style={{"whiteSpace": "nowrap"} as CSSProperties}>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"P"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"r"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"a"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"c"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"t"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"i"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"c"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"a"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"l"}
                  </span>
                </span>
                {" "}
                <span style={{"whiteSpace": "nowrap"} as CSSProperties}>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"i"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"n"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"s"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"i"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"g"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"h"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"t"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"s"}
                  </span>
                </span>
                {" "}
                <span style={{"whiteSpace": "nowrap"} as CSSProperties}>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"o"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"n"}
                  </span>
                </span>
                {" "}
                <span style={{"whiteSpace": "nowrap"} as CSSProperties}>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"b"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"r"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"a"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"n"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"d"}
                  </span>
                </span>
                {" "}
                <span style={{"whiteSpace": "unset"} as CSSProperties}>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"i"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"n"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"t"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"e"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"l"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"l"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"i"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"g"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"e"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"n"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"c"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"e"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {","}
                  </span>
                </span>
                {" "}
                <span style={{"whiteSpace": "nowrap"} as CSSProperties}>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"s"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"t"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"r"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"a"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"t"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"e"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"g"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"y"}
                  </span>
                </span>
                {" "}
                <span style={{"whiteSpace": "nowrap"} as CSSProperties}>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"s"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"y"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"s"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"t"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"e"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"m"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"s"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {","}
                  </span>
                </span>
                {" "}
                <span style={{"whiteSpace": "nowrap"} as CSSProperties}>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"d"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"e"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"s"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"i"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"g"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"n"}
                  </span>
                </span>
                {" "}
                <span style={{"whiteSpace": "nowrap"} as CSSProperties}>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"o"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"p"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"e"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"r"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"a"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"t"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"i"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"o"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"n"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"s"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {","}
                  </span>
                </span>
                {" "}
                <span style={{"whiteSpace": "nowrap"} as CSSProperties}>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"a"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"n"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"d"}
                  </span>
                </span>
                {" "}
                <span style={{"whiteSpace": "nowrap"} as CSSProperties}>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"A"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"I"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"-"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"p"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"o"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"w"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"e"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"r"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"e"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"d"}
                  </span>
                </span>
                {" "}
                <span style={{"whiteSpace": "nowrap"} as CSSProperties}>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"b"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"r"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"a"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"n"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"d"}
                  </span>
                </span>
                {" "}
                <span style={{"whiteSpace": "nowrap"} as CSSProperties}>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"b"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"u"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"i"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"l"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"d"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"i"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"n"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"g"}
                  </span>
                  <span style={{"display": "inline-block"} as CSSProperties}>
                    {"."}
                  </span>
                </span>
              
</EditableCopy>
</p>
            </div>
          </div>
          <div className={"bex-2gut0e-container"} data-code-component-plugin-id={"mcp001"}>
            <NewsletterForm style={{"width": "100%", "maxWidth": "532px", "display": "flex", "flexDirection": "column", "gap": "6px", "fontFamily": "Inter, sans-serif", "boxSizing": "border-box", "margin": "0 auto"} as CSSProperties}>
              <div style={{"display": "flex", "alignItems": "stretch", "width": "100%", "flexDirection": "row", "gap": "16px"} as CSSProperties}>
                <input aria-label={"Email address"} type={"email"} inputMode={"email"} autoComplete={"email"} placeholder={"Enter your email"} style={{"height": "40px", "padding": "8px 14px", "border": "1px solid #D0D5DD", "borderRadius": "8px", "background": "var(--color-surface)", "color": "#101828", "fontFamily": "Inter, sans-serif", "fontSize": "14px", "lineHeight": "20px", "outline": "none", "boxSizing": "border-box", "width": "360px"} as CSSProperties} defaultValue={""} name="email" required />
                <button type={"submit"} style={{"height": "40px", "border": "0", "borderRadius": "8px", "background": "var(--color-text)", "color": "var(--color-surface)", "fontFamily": "Inter, sans-serif", "fontSize": "16px", "fontWeight": "600", "lineHeight": "20px", "boxSizing": "border-box", "whiteSpace": "nowrap", "width": "156px", "opacity": "1", "cursor": "pointer"} as CSSProperties}>
                  {"Get updates"}
                </button>
              </div>
              <p aria-live={"polite"} style={{"margin": "0", "fontFamily": "Inter, sans-serif", "fontSize": "14px", "lineHeight": "20px", "width": "100%", "color": "#667085"} as CSSProperties}>
<EditableCopy id="bc12cce7e5785a21" fallback={"We care about your data in our privacy policy."}>

                {"We care about your data in our privacy policy."}
              
</EditableCopy>
</p>
            </NewsletterForm>
          </div>
        </section>
        <Navigation />
        <section className={"bex-oimvv3"} data-design-name={"Featured Article"}>
          <div className={"bex-odiqo7"} data-design-name={"Container"}>
            <div className={"bex-ilr57n"} data-design-name={"Featured Articles List"}>
              <div className={"ssr-variant hidden-8oxbg4"}>
                <FeaturedArticleCard/>
              </div>
              <div className={"ssr-variant hidden-d7bpuz hidden-rgyii"}>
                <FeaturedArticleCard/>
              </div>
            </div>
          </div>
        </section>
        <section className={"bex-uwyziq"} data-design-name={"All Articles"}>
          <div className={"bex-1pv62sy"} data-design-name={"Container"}>
            <div className={"bex-npfqjx"} data-design-name={"Heading"}>
              <div className={"bex-1xm13y6"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                <h2 className={"bex-text bex-styles-preset-18zryj1"} data-styles-preset={"FLK0zar6E"} dir={"auto"}>
<EditableCopy id="a00b4bd54ddd3abc" fallback={"All articles"}>

                  {"All articles"}
                
</EditableCopy>
</h2>
              </div>
              <div className={"bex-u3xp2j"} data-component-type={"RichTextContainer"} style={{"transform": "none"} as CSSProperties}>
                <h3 className={"bex-text bex-styles-preset-12xuyja"} data-styles-preset={"jeAl0zFFb"} dir={"auto"}>
<EditableCopy id="14d4dfce49871f34" fallback={"Latest thinking from the studio"}>

                  {"Latest thinking from the studio"}
                
</EditableCopy>
</h3>
              </div>
            </div>
            <div className={"bex-c7pqrd"} data-design-name={"Articles Collection List"}>
<ManagedArticleCollection/>
</div>
          </div>
        </section>
        <div className={"ssr-variant hidden-8oxbg4 hidden-d7bpuz"}>
          <div className={"bex-sghftr-container"}>
            <div className={"bex-W9zZe bex-5byvjv bex-v-5byvjv"} data-border={"true"} data-design-name={"Desktop"} style={{"--border-bottom-width": "0px", "--border-color": "var(--color-border)", "--border-left-width": "0px", "--border-right-width": "0px", "--border-style": "solid", "--border-top-width": "1px", "backgroundColor": "var(--color-surface)", "height": "100%", "width": "100%"} as CSSProperties}>
              <div className={"bex-9sf971"} data-design-name={"Container"}>
                <div className={"bex-6xeyyw"} data-design-name={"Content"}>
                  <div className={"bex-vm7ack"} data-design-name={"helio-logo-5-min 1"}>
                    <div style={{"position": "absolute", "borderRadius": "inherit", "cornerShape": "inherit", "top": "0", "right": "0", "bottom": "0", "left": "0"} as CSSProperties}>
                      <img decoding={"async"} width={"3794"} height={"1230"} sizes={"(min-width: 1440px) max(112px, 133px), (min-width: 810px) and (max-width: 1439.98px) max(112px, 120px), (max-width: 809.98px) 112px"} srcSet={"/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 512w,/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 1024w,/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 2048w,/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png 3794w"} src={"/assets/533fe356ef-2zYRIIwpAQvIRrzdUstH5gpEjAE.png"} alt={""} style={{"display": "block", "width": "100%", "height": "100%", "borderRadius": "inherit", "cornerShape": "inherit", "objectPosition": "center", "objectFit": "contain"} as CSSProperties} />
                    </div>
                  </div>
                  <div className={"bex-761pzj"} data-design-name={"Footer text"} data-component-type={"RichTextContainer"} style={{"--extracted-r6o4lv": "var(--token-92ae7d48-8270-48b4-b8f0-dcff02886975, var(--color-text))", "--bex-paragraph-spacing": "16px", "transform": "none"} as CSSProperties}>
                    <p dir={"auto"} className={"bex-text"} style={{"--bex-line-height": "24px", "--bex-text-alignment": "right", "--bex-text-color": "var(--extracted-r6o4lv, var(--token-92ae7d48-8270-48b4-b8f0-dcff02886975, var(--color-text)))"} as CSSProperties}>
<EditableCopy id="8e1d1260b1e861f5" fallback={"© 2026 Bextudio"}>

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
        <div className={"ssr-variant hidden-d7bpuz hidden-rgyii"}>
          <div className={"bex-sghftr-container"}>
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
<EditableCopy id="1b7c57f0d66183e4" fallback={"© 2026 Bextudio"}>

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
        <div className={"ssr-variant hidden-8oxbg4 hidden-rgyii"}>
          <div className={"bex-sghftr-container"}>
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
<EditableCopy id="55fd9a92df4d2d92" fallback={"© 2026 Bextudio"}>

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
