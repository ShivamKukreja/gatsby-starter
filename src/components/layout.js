import React from "react";
import { css } from "@emotion/core";
import { graphql, StaticQuery, Link } from "gatsby";
import { Helmet } from "react-helmet";

import { rhythm } from "../utils/typography";

export default ({ children }) => (
  <StaticQuery
    query = {graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
    }
    render = {data => {
      return (
        <React.Fragment>
          <Helmet>
            <meta charSet="utf-8" />
            <title>My Title</title>
            <link rel="canonical" href="http://mysite.com/example" />
          </Helmet>
          <div
            css={css`
          margin: 0 auto;
          max-width: 700px;
          padding: ${rhythm(2)};
          padding-top: ${rhythm(1.5)};
        `}
          >
            <Link to={`/`}>
              <h3
                css={css`
              margin-bottom: ${rhythm(2)};
              display: inline-block;
              font-style: normal;
            `}
              >
                {data.site.siteMetadata.title}
          </h3>
            </Link>
            <Link
              to={`/about/`}
              css={css`
            float: right;
          `}
            >
              About
            </Link>
            {children}
          </div>
        </React.Fragment>

      )
    }}
  />

);
