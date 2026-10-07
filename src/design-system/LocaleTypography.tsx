import { Button, Card } from './components';
import tokens from './tokens.json';
import './locale-typography.css';

const fonts=[
  {name:'Estedad',stack:tokens['font-family'].fa.value},
  {name:'IBM Plex Sans Arabic',stack:tokens['font-family'].ar.value},
  {name:'Noto Sans Arabic',stack:tokens['font-family'].rtl.value},
];
const samples={
  fa:{label:'Persian',heading:'برندی هوشمند و یکپارچه بسازید',body:'با ابزارهای هوش مصنوعی Bextudio، می‌توانیم هویت برند را به تجربه‌ای منسجم تبدیل کنیم. کیفیت، یکپارچگی و رشد پایدار.',action:'شروع کنید'},
  ar:{label:'Arabic',heading:'ابنِ علامة تجارية ذكية ومتكاملة',body:'مع أدوات الذكاء الاصطناعي من Bextudio، نحوّل هوية العلامة التجارية إلى تجربة متكاملة. الجودة والتعاون والنمو المستدام.',action:'ابدأ الآن'},
};
type Props={overrides:Record<string,string>;onChange?:(key:string,value:string|null)=>void};

export default function LocaleTypography({overrides,onChange}:Props){
  return <div className="locale-type-grid">{(['fa','ar'] as const).map(lang=>{
    const sample=samples[lang],key=`--font-family-${lang}`,stack=overrides[key]??tokens['font-family'][lang].value;
    const known=fonts.some(font=>font.stack===stack);
    return <Card key={lang} className="locale-type-card"><div className="locale-type-heading"><h3>{sample.label}</h3>{onChange&&<Button variant="ghost" size="sm" onClick={()=>onChange(key,null)}>Reset {sample.label.toLowerCase()} font</Button>}</div>
      {onChange?<label className="locale-font-field">{sample.label} font<select value={stack} onChange={event=>onChange(key,event.target.value)}>{!known&&<option value={stack}>Custom stack (from Design tokens)</option>}{fonts.map(font=><option key={font.name} value={font.stack}>{font.name}</option>)}</select></label>:<p className="locale-font-name">{fonts.find(font=>font.stack===stack)?.name??stack}</p>}
      <div className="locale-type-sample" lang={lang} dir="rtl" style={{fontFamily:stack}}><h4>{sample.heading}</h4><p>{sample.body}</p><div className="locale-type-weights"><span style={{fontWeight:400}}>400</span><span style={{fontWeight:500}}>500</span><span style={{fontWeight:600}}>600</span><span style={{fontWeight:700}}>700</span><span>۰۱۲۳۴۵۶۷۸۹ · ٠١٢٣٤٥٦٧٨٩</span></div><span className="locale-type-action">{sample.action}</span></div>
    </Card>;
  })}</div>;
}
