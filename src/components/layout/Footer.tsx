import { localeCopy, type Locale } from "@/data/locale";
export function Footer({ locale }: { locale: Locale }) {
  return <footer><a className="logo" href="#top">ACT<span>O</span>TIVE</a><p>{localeCopy[locale].footer}</p><p>© {new Date().getFullYear()} ACTOTIVE. Engineering in motion.<br /><a className="powered-by" href="https://tavakolistudio.vercel.app/en" target="_blank" rel="noreferrer">Powered by <strong>TAVAKOLISTUDIO</strong></a><span className="preferred-source" google-add-preferred-source-btn="" /></p></footer>;
}
