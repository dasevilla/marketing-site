import React from 'react';
import { graphql } from 'gatsby';
import { SEO, Page, TextLink as Link, Headline } from 'components';
import { SimpleCenteredHeading } from 'components/landing';
import format from 'date-fns/format';

const ChangeSet = ({
  releasedAt,
  description,
  title,
}) => (
  <>
    <hr className="w-full bg-gray-100 my-12" style={{ height: 1 }} />
    <li className="mt-10 list-reset lg:flex items-start">
      <time className="lg:mt-1 uppercase text-xs lg:text-sm lg:leading-9 text-gray-500 font-bold w-48 flex-shrink-0">
        {format(new Date(releasedAt), 'MMM d, yyyy')}
      </time>

      <div>
        <Headline size="extra-small">{title}</Headline>

        <div
          className="mt-6 prose max-w-none"
          dangerouslySetInnerHTML={{ __html: description.html }}
        />
      </div>
    </li>
  </>
);

const Changelog = ({
  data: {
    site: {
      siteMetadata: {
        title: siteTitle,
      },
    },

    changeSets: {
      edges: changeSets,
    },
  },
}) => (
  <>
    <SEO
      title={`Changelog | ${siteTitle}`}
      description={`
        A list of all new and updated features so you can get a quick overview of what has changed in the product.
      `}
    />

    <Page>
      <main className="max-w-4xl mx-auto">
        <SimpleCenteredHeading
          headline="What's new in Roadie"
          lead={
            <span>This is the changelog for Roadie. It lists new and updated features so you can get a quick overview of what&apos;s new. You can follow us on <Link color="primary" to="https://twitter.com/roadiehq">Twitter</Link> for more updates.</span>
          }
          headlineSize="small"
        />

        <ul className="container mt-12">
          {changeSets.map(({ node: { title, releasedAt, description } }) => (
            <ChangeSet
              key={`${title} ${releasedAt}`}
              title={title}
              releasedAt={releasedAt}
              description={description.childMarkdownRemark}
            />
          ))}
        </ul>
      </main>
    </Page>
  </>
);

export default Changelog;

export const pageQuery = graphql`
  query Changelog {
    changeSets: allContentfulChangeSet(
      sort: {fields: releasedAt, order: DESC}
      limit: 20
    ) {
      edges {
        node {
          title
          releasedAt
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }

    site {
      siteMetadata {
        title
      }
    }
  }
`;