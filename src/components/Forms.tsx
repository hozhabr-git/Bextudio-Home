import { LanguageSwitcher } from '../i18n/Locale';
import { type FormHTMLAttributes, type FormEvent, useState } from 'react';
import { asset } from '../content/assets';

export async function postJson(path:string, data:unknown) {
  const response=await fetch(path,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
  const result=await response.json();
  if(!response.ok)throw new Error(result.error || 'The request could not be completed. Please try again.');
  return result;
}

export function ContactForm({children,...props}:FormHTMLAttributes<HTMLFormElement>) {
  const [status,setStatus]=useState('');const [pending,setPending]=useState(false);
  async function submit(e:FormEvent<HTMLFormElement>) {
    e.preventDefault();const form=e.currentTarget;
    setPending(true);setStatus('');
    try {await postJson('/api/contact',Object.fromEntries(new FormData(form)));setStatus('Your message has been saved. Thank you for getting in touch.');form.reset();}
    catch(error){setStatus((error as Error).message);}finally{setPending(false);}
  }
  return <form {...props} onSubmit={submit} aria-busy={pending}><fieldset className="native-form-fields" disabled={pending}>{children}</fieldset><p className="form-status" role="status">{status}</p></form>;
}

export function Newsletter() {
  const [status,setStatus]=useState('');const [pending,setPending]=useState(false);
  async function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();const form=e.currentTarget;setPending(true);try{await postJson('/api/newsletter',{email:new FormData(form).get('email')});setStatus('Your email has been saved.');form.reset();}catch(error){setStatus((error as Error).message);}finally{setPending(false);}}
  return <form className="newsletter" onSubmit={submit}><label htmlFor="newsletter-email" className="sr-only">Email address</label><div><input id="newsletter-email" name="email" type="email" autoComplete="email" placeholder="Enter your email" required /><button className="primary-button" disabled={pending}>Subscribe</button></div><p role="status">{status}</p></form>;
}

export function NewsletterForm({children,...props}:FormHTMLAttributes<HTMLFormElement>) {
  const [status,setStatus]=useState(''),[pending,setPending]=useState(false);
  async function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();const form=e.currentTarget;setPending(true);try{await postJson('/api/newsletter',{email:new FormData(form).get('email')});setStatus('Your email has been saved.');form.reset();}catch(error){setStatus((error as Error).message);}finally{setPending(false);}}
  return <form {...props} onSubmit={submit} aria-busy={pending}><fieldset className="native-form-fields" disabled={pending}>{children}</fieldset><p className="form-status" role="status">{status}</p></form>;
}

export function Authentication() {
  const [login,setLogin]=useState(false),[visible,setVisible]=useState(false),[pending,setPending]=useState(false),[status,setStatus]=useState('');
  async function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();const form=e.currentTarget;setPending(true);setStatus('');try{const data=Object.fromEntries(new FormData(form));await postJson(login?'/api/auth/login':'/api/auth/signup',data);setStatus('Signed in to your local Bextudio account.');}catch(error){setStatus((error as Error).message);}finally{setPending(false);}}
  return <main id="page-main" className="auth-page"><section className="auth-card"><LanguageSwitcher/><a href="/" aria-label="Bextudio home"><img className="auth-logo" src={asset('2zYRIIwpAQvIRrzdUstH5gpEjAE.png')} alt="Bextudio" /></a><div className="auth-divider"><span>or</span></div><form onSubmit={submit}>
    {!login&&<label>Name<input name="name" autoComplete="name" placeholder="Full name" required /></label>}
    <label>Email Address<input name="email" type="email" autoComplete="email" placeholder="you@company.com" required /></label>
    <label>Password<span className="password-field"><input name="password" type={visible?'text':'password'} autoComplete={login?'current-password':'new-password'} minLength={8} maxLength={100} placeholder="Min 8 characters" required /><button type="button" aria-label={visible?'Hide password':'Show password'} onClick={()=>setVisible(!visible)}>◉</button></span></label>
    {!login&&<p className="auth-local-note">This account is stored on this computer for the independent Bextudio project.</p>}
    <button className="primary-button" disabled={pending}>{pending?'Please wait…':login?'Log In':'Continue'}</button><p className="form-status" role="status">{status}</p>
  </form><p className="auth-switch">{login?'Need an account?':'Already have an account?'} <button type="button" onClick={()=>{setLogin(!login);setStatus('');}}>{login?'Sign Up':'Log In'}</button></p></section></main>;
}
