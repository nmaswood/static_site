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

  const d = await import(`../posts/${slug}.md`);
  const { data, content } = matter(d.default);

  return {
    props: {
      frontmatter: data,
      markdownBody: content,
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
  console.log(blogSlugs);

  const paths = blogSlugs.map((slug) => `/${slug}`);
  return {
    paths,
    fallback: false,
  };
};
