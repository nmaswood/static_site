import * as React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import * as glob from "glob";
import { GetStaticProps, GetStaticPaths } from "next";

export default function BlogTemplate({ markdownBody }) {
  return (
    <article className="blog">
      <div className="blog__body">
        <ReactMarkdown source={markdownBody} />
      </div>
    </article>
  );
}

export const getStaticProps: GetStaticProps = async ({ ...ctx }) => {
  const { slug } = ctx.params;
  const content = await import(`../../posts/${slug}.md`);
  const data = matter(content.default);

  return {
    props: {
      frontmatter: data.data,
      markdownBody: data.content,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  //get all .md files in the posts dir
  const blogs = glob.sync("posts/**/*.md");

  //remove path and extension to leave filename only
  const blogSlugs = blogs.map((file) =>
    file.split("/")[1].replace(/ /g, "-").slice(0, -3).trim()
  );

  // create paths with `slug` param
  const paths = blogSlugs.map((slug) => `/blog/${slug}`);
  return {
    paths,
    fallback: false,
  };
};
