import { EditableCopy } from '../content/SiteContent';
import { ButtonLink, Card } from '../design-system';
import { Navigation, Footer, CustomAgentCTA } from '../components/Navigation';
import { Newsletter } from '../components/Forms';
import PricingPlans from '../components/PricingPlans';

const agents = [
  {name:'Image Generator',description:'Generate Accurate Images Rapidly',slug:'image-generator',icon:'image',active:true},
  {name:'Video Generator',description:'Generate Cohesive Video Scenes',slug:'video-generator',icon:'video',active:true},
  {name:'Campaign Maker',description:'Design Purposeful Sets of Marketing Actions',slug:'campaign-maker',icon:'campaign',active:true},
  {name:'Brand Digital Twin',description:'An interviewer agent to make a personal profile analysis',slug:'digital-twin',icon:'twin',active:true},
  {name:'Story Teller',description:'Create Characters Whom Make Brand live Virtually',slug:'storyteller',icon:'story',active:true},
  {name:'Avatar',description:'a Branded Representative for Communicate',slug:'avatar',icon:'avatar',active:false},
  {name:'Detail Design',description:'Make Detailed Plans for Products',slug:'detail-design',icon:'design',active:false},
  {name:'Secure chat',description:'Make Internal Communications safe and Secure',slug:'secure-chat',icon:'chat',active:false},
  {name:'BexLogix',description:'Achieve perfect Logistic Paths',slug:'bexlogix',icon:'logix',active:false},
];
const shapes:Record<string,React.ReactNode>={
  image:<><rect x="4" y="4" width="24" height="24" rx="4"/><circle cx="12" cy="12" r="2"/><path d="m5 23 7-7 5 5 5-9 6 11"/></>,
  video:<><rect x="3" y="8" width="19" height="17" rx="3"/><path d="m22 13 7-4v16l-7-4"/></>,
  campaign:<><path d="m4 13 23-7v21L4 20zM8 21l3 7h5l-3-9M28 13l3-2M29 20l3 1"/></>,
  twin:<><circle cx="12" cy="11" r="5"/><path d="M3 28v-3a9 9 0 0 1 18 0v3M22 5a5 5 0 0 1 0 10M25 20a8 8 0 0 1 5 8"/></>,
  story:<><path d="M16 7C10 3 4 5 3 5v23c6-2 9-2 13 1 4-3 7-3 13-1V5c-5-1-9-2-13 2zM16 7v22"/></>,
  avatar:<><circle cx="16" cy="10" r="6"/><path d="M4 29a12 12 0 0 1 24 0"/></>,
  design:<><path d="m6 24 17-18 5 5-17 18-7 2zM20 9l5 5M7 5H3v24h24v-4"/></>,
  chat:<><path d="M26 19v6H12l-8 5V7h13"/><rect x="20" y="9" width="10" height="9" rx="2"/><path d="M22 9V6a3 3 0 0 1 6 0v3"/></>,
  logix:<><rect x="3" y="14" width="15" height="12" rx="2"/><path d="M18 17h7l5 5v4H18M7 14V5h17v12"/><circle cx="9" cy="27" r="3"/><circle cx="24" cy="27" r="3"/></>,
};
export function AgentStore(){return <><Navigation/><main id="page-main" className="draft-page store-page"><section className="draft-heading"><h1><EditableCopy id="draft-store-title" fallback={"Buy the Plugin Agent that run your brand"}>Buy the Plugin Agent that run your brand</EditableCopy></h1><p><EditableCopy id="draft-store-intro" fallback={"Choose from our specialized AI agents to scale your brand. Buy one, mix a few, or own the full suite — yours from day one."}>Choose from our specialized AI agents to scale your brand. Buy one, mix a few, or own the full suite — yours from day one.</EditableCopy></p></section><div className="agent-store-grid">{agents.map(a=><Card className="agent-store-card" key={a.slug}><div className="agent-icon"><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{shapes[a.icon]}</svg></div><h2><EditableCopy id={"store-"+a.slug+"-name"} fallback={a.name}>{a.name}</EditableCopy></h2><p><EditableCopy id={"store-"+a.slug+"-description"} fallback={a.description}>{a.description}</EditableCopy></p><ButtonLink className="primary-button" href={'/agents/'+a.slug}>{a.active?'Try it now':'Learn more'}</ButtonLink></Card>)}</div><CustomAgentCTA/><Newsletter/></main><Footer/></>;}

export function Pricing(){return <><Navigation/><main id="page-main" className="draft-page pricing-page"><section className="draft-heading"><h1><EditableCopy id="draft-pricing-title" fallback={"Smart Plans for Every Business"}>Smart Plans for Every Business</EditableCopy></h1><p><EditableCopy id="draft-pricing-intro" fallback={"Choose the best plan to scale your business."}>Choose the best plan to scale your business.</EditableCopy></p></section><PricingPlans cardStart="rgba(34, 204, 238, 0.04)" cardEnd="rgba(0, 0, 0, 0)" textColor="var(--color-text)" mutedColor="var(--color-text-secondary)" radius={20}/><CustomAgentCTA/></main><Footer/></>;}

// The original /form draft's published breakpoint is empty, as verified in Preview.
export function EmptyForm(){return <main id="page-main" aria-label="Form" style={{minHeight:'100vh',background:'var(--color-surface)'}}/>;}
