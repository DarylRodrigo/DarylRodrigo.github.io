import React from 'react';

import Layout from '../components/common/layout';
import Footer from '../components/common/Footer';

import Introduction from '../components/introduction/Introduction';
import Work from '../components/work/Work';
import Projects from '../components/projects/Projects';
import About from '../components/about/About';

const IndexPage = () => (
  <Layout>
    <div id="wrapper">
      <Introduction />
      <Work />
      <Projects />
      <About />
    </div>

    <Footer />
  </Layout>
);

export default IndexPage;
