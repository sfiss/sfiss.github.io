---
layout: post
title: "Adding Comments to the Blog"
date: 2018-05-02 20:00:00 +0200
comments: github
---
One of the main ideas behind this blog is to present projects that I am working on, anything related to frameworks that I use, or just useful code snippets. Now that I have the blog set up, it is time to think about how my readers, as few as they may be, can respond. Initially, I set the Jekyll blog up with Disqus comments. However, I don't really like the dependency on an external service (for several reasons, data privacy only being one of them). I recently discovered the idea of using github comments (e.g. as mentioned [here](https://dc25.github.io/myBlog/2017/06/24/using-github-comments-in-a-jekyll-blog.html)). So, for my real first post, I will blog about the blog.

### main idea

Starting out with a simple Jekyll blog setup on github pages, I want to add comments to the blog. The comments should be hosted on github as described in the mentioned link above and readers should be able to post new comments by simply adding them to a github issue (requiring a github account, but I guess it is reasonable to assume that any reader of this blog has one). Each blog post will therefore have a one-to-one mapping to a github issue. All I need is to add the required code and markup to fetch comments from the mapped issue and display them below the post content.

### required setup

As any lazy programmer would, I start by copying example code. 



