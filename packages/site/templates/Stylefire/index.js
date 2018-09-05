import Homepage from '~/templates/homepage';
import Footer from '~/templates/global-new/Footer';
import { createElement } from 'react';
import settings from '~/data/settings.json';
import docs from '~/docs/stylefire/index.md';
import marksy from 'marksy/components';
import SiteLink from '~/components/layout/SiteLink';
import styled from 'styled-components';
import { CTA } from '../Popmotion/Masthead/styled';
import {
  A,
  H1,
  H2,
  H3,
  H4,
  H5,
  P,
  Li,
  Ol,
  Ul,
  Hr,
  Code,
  Blockquote,
  ArticleHeader,
  Video
} from '~/templates/global/styled';
import { Img } from '~/templates/content/styled';

const Container = styled.article`
  padding-top: 30px;
`;

const convertMarkdown = marksy({
  createElement,
  elements: {
    a: A,
    h1: ArticleHeader,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    p: P,
    code: Code,
    li: Li,
    ul: Ul,
    hr: Hr,
    img: Img,
    blockquote: Blockquote
  }
});

const { tree, toc } = convertMarkdown(docs);

export default () => (
  <Homepage
    title="Stylefire | A style setter for HTML and SVG, optimised for animation"
    theme="stylefire"
    Header={() => null}
  >
    <Container>{tree}</Container>
    <CTA style={{ width: 220 }} brandFill>
      <SiteLink href="/api" prefetch>
        Read API docs
      </SiteLink>
    </CTA>
    <Footer />
  </Homepage>
);
