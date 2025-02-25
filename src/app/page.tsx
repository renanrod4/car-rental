import "./page.css";
import { Header } from './components/header';
import Image from "next/image";
import { Lsection } from './components/lsection';
import { Rsection } from './components/rsection';

export default function Home() {
  return (
    <div className="body">
      {/* Background */}
      <Image src="/svgs/Frame.svg" width={0} height={0} alt="logo" className="img"/>
      <Header/>
      <main>
        <Lsection/>
        <Rsection/>
      </main>
    </div>
  );
}
