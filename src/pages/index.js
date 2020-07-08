import React, { useState } from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Hero from './home/Hero';
import SitewideHeader from './home/SitewideHeader';
import FormSubmissionModal from './home/FormSubmissionModal';

const Home = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const [modalOpen, setModalOpen] = useState(false);

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <SEO title={`Hosted, managed, enterprise Backstage | ${siteTitle}`} />
      <FormSubmissionModal modalOpen={modalOpen} handleCloseModal={handleCloseModal} />
      <SitewideHeader />
      <Hero setModalOpen={setModalOpen} />
    </>
  );
};

export default Home;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
