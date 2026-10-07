import {routeParts,translateText} from '../i18n/Locale';
export async function unlockAgent(password:string):Promise<boolean> {
  try {
    const response=await fetch('/api/agents/unlock',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({password})});
    const result=await response.json();
    if(!response.ok){window.alert(translateText(result.error || 'Access could not be verified.',routeParts(location.pathname).locale));return false;}
    return true;
  } catch {window.alert(translateText('The local Bextudio server is unavailable. Start the project with npm run dev.',routeParts(location.pathname).locale));return false;}
}
