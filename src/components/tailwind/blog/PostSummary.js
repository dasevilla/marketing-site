import React from 'react';
import { Tags } from 'components/tailwind';
import classnames from 'classnames';
import format from 'date-fns/format';
import { Link } from 'components';

const AuthorAvatar = ({ author }) => {
  if (!author) return null;

  return (
    <div className="flex-shrink-0">
      <span className="sr-only">{author.name}</span>
      <img
        className="h-10 w-10 rounded-full"
        src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""
      />
    </div>
  );
};

const AuthorName = ({ author }) => {
  if (!author) return null;

  return (
    <p className="text-sm font-medium text-gray-900">
      {author.name}
    </p>
  );
};

const ReadInfo = ({ post }) => {
  const FORMAT_TOKEN = 'MMMM do, yyyy';

  return (
    <div className="flex space-x-1 text-sm text-gray-500">
      <time dateTime={post.frontmatter.date}>
        {format(Date.parse(post.frontmatter.date), FORMAT_TOKEN)}
      </time>

      <span aria-hidden="true">&middot;</span>

      <span>{post.timeToRead} min read</span>
    </div>
  );
};

const Attribution = ({ post }) => {
  return (
    <div className="mt-6 flex items-center">
      <AuthorAvatar author={post.frontmatter.author} />

      <div className={classnames({ 'ml-3': post.frontmatter.author })}>
        <AuthorName author={post.frontmatter.author} />
        <ReadInfo post={post} />
      </div>
    </div>
  );
};


const PostSummary = ({ post }) => {
  return (
    <div key={post.frontmatter.title}>
      <div>
        <Tags tags={post.frontmatter.tags} />
      </div>

      <Link to={`/tailwind${post.fields.slug}`} className="block mt-4">
        <p className="text-xl font-semibold text-gray-900">{post.frontmatter.title}</p>
        <p className="mt-3 text-base text-gray-500">{post.frontmatter.description}</p>
      </Link>

      <Attribution post={post} />
    </div>
  );
};

export default PostSummary;