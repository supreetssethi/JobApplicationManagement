import { NextPage } from "next";
import Head from "next/head";
import Button from "../components/Button";
import { privateRoute } from "../HOC/privateRoute";

const Home: NextPage = () => (
  <>
    <header>
      <b>JobAppTracker</b>
      <Button isLink href="/login">
        Sign In
      </Button>
      <Button isLink href="/signup">
        Sign Up
      </Button>
    </header>
    <section>
      <h1>Job application tracking made easy</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a
        fringilla magna, ut laoreet nisi. Sed facilisis, dui eget congue cursus,
        sapien elit sodales erat, laoreet dapibus justo ex eu risus. Nulla
        dignissim a risus sit amet dignissim. Vivamus vitae nibh sit amet augue
        posuere rhoncus sit amet non purus. Donec congue augue quis sapien
        venenatis venenatis ullamcorper in ligula. Phasellus congue ante risus,
        quis interdum neque fermentum mattis. In hac habitasse platea dictumst.
        Duis arcu lacus, lacinia in suscipit id, faucibus quis ipsum. Aenean ac
        ultrices ex. Sed a mattis justo, ut tempus justo. In faucibus augue ac
        sem luctus, eget aliquet enim dignissim. Donec pharetra elit nec dolor
        facilisis scelerisque. Donec et purus nisi. Vivamus metus massa, posuere
        at auctor ac, pretium ac dui. Praesent mattis viverra dictum. Phasellus
        ut erat mi.
      </p>
      <Button isLink href="/signup">
        Get started for free
      </Button>
    </section>
    <section>
      <h2>How it works</h2>
      <div>
        <h3>Step 1 - </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a
          fringilla magna, ut laoreet nisi.
        </p>
      </div>
      <div>
        <h3>Step 2 - </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a
          fringilla magna, ut laoreet nisi.
        </p>
      </div>
      <div>
        <h3>Step 3 - </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a
          fringilla magna, ut laoreet nisi.
        </p>
      </div>
      <div>
        <h3>Step 4 - </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a
          fringilla magna, ut laoreet nisi.
        </p>
      </div>
    </section>
    <section>
      <h2>Key Features</h2>
      <div>
        <b>Application Tracker</b>
        <p>
          Apply to most, if not all, jobs in one click. Then track your progress
          in one place.
        </p>
      </div>
      <div>
        <b>Dynamic Profile </b>
        <p>Never worry about correcting of formatting resumes ever again.</p>
      </div>
    </section>
  </>
);

Home.getInitialProps = async (ctx) => {
  return {};
};
export default privateRoute(Home);
