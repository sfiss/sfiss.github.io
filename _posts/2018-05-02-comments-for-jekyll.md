---
layout: post
title: "Adding Comments to the Blog"
date: 2018-05-02 20:00:00 +0200
github_issueid: 1
comments: github
---
One of the main ideas behind this blog is to present projects that I am working on, anything related to frameworks that I use, or just useful code snippets. Now that I have the blog set up, it is time to think about how my readers, as few as they may be, can respond. Initially, I set the Jekyll blog up with Disqus comments. However, I don't really like the dependency on an external service (for several reasons, data privacy only being one of them). I recently discovered the idea of using GitHub comments (e.g. as mentioned [here](https://dc25.github.io/myBlog/2017/06/24/using-github-comments-in-a-jekyll-blog.html)). So, for my real first post, I will blog about the blog.

### main idea

Starting out with a simple Jekyll blog setup on GitHub pages, I want to add comments to the blog. The comments should be hosted on GitHub as described in the mentioned link above and readers should be able to post new comments by simply adding them to a GitHub issue (requiring a GitHub account, but I guess it is reasonable to assume that any reader of this blog has one). Each blog post will therefore have a one-to-one mapping to a GitHub issue. All I need is to add the required code and markup to fetch comments from the mapped issue and display them below the post content.

### required setup

As any lazy (or smart, depending on your point of view) programmer would, I start by copying example code. Starting from the basic Jekyll setup, I add the following files:

- *_includes/github-comments.html*: This include contains the wrapper-markup for the comment list in form of an empty *&lt;div&gt;* that will be filled with comments and a *&lt;script&gt;* tag that calls the JavaScript code to fetch them.
- *_assets/js/github-comments.js*: The JavaScript code for fetching comments executes an AJAX call to the GitHub API and receives all comments with markdown content. It then simply builds a HTML-partial containing the relevant information and appends it to the comment list. The code is dependent on jQuery, so I also include it in the site's header. Extra dependencies are always something to consider, but I guess jQuery is somewhat OK to add.
- *_sass/_github-comments.scss*: Pages need to look good, so I also ~~add~~ copy some CSS. Don't forget to *@import* it in the *main.scss* file.

Now all there is left to do is add a few lines to existing files. I add entries for *site.github-repository* and *page.github-issueid* in the respective files and use *% include github-comments.html %* to include the Jekyll partial. Finally, I open a GitHub issue for this blog post. Et voila, it's done.

### final remarks

This is the first blog post with actual content, and I still have to discover the right tone and wording for these kind of posts. So the style of writing may vary for all future posts.

Anyway, since my blog now has comments, please feel free to leave some! Even short "That's not very interesting"-type comments will let me know that someone actually read this post and will help me to improve future content.



