import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Profile from "../components/profile";
import Button from "../components/button";
import profileImage from "../images/avatar.png";
import { ReactComponent as BangIcon } from "../images/icons/bang.svg";
import { ReactComponent as RightArrowIcon } from "../images/icons/right-arrow.svg";
import testfuck from "../images/icons/bang.svg";

export default function Home() {
  console.log('BANG: ', BangIcon);
  console.log("testfuck:", testfuck);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center flex-start max-w-screen-lg w-full">
          <div className="flex flex-col max-w-screen-md w-full py-10 items-start">
            <Profile image={profileImage} />
          </div>
        </div>
        <div className="flex flex-col bg-slate-100 items-center justify-center flex-start max-w-screen-lg w-full">
          <div className="flex flex-col max-w-screen-md w-full py-10">
            <div className="flex-row">
              <Button Icon={BangIcon} theme="secondary">Not Confident</Button>
              <Button Icon2={RightArrowIcon} theme="secondary">Human Help</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
