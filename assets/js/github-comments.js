// Original code taken with permission from : https://github.com/dwilliamson/donw.io/blob/master/public/js/github-comments.js
// use of ajax vs getJSON for headers use to get markdown (body vs body_html)

function parseLinkHeader(lnk)
{
    var entries = lnk.split(",");
    var links = { };
    for (var i in entries)
    {
        var entry = entries[i];
        var link = { };
        link.name = entry.match(/rel="([^"]*)/)[1];
        link.url = entry.match(/<([^>]*)/)[1];
        link.page = entry.match(/page=(\d+).*$/)[1];
        links[link.name] = link;
    }
    return links;
}

function loadComments(repo_name, comment_id, page_id)
{
    var read_comments_url = "https://api.github.com/repos/" + repo_name + "/issues/" + comment_id + "/comments" + "?page=" + page_id;

    $.ajax(read_comments_url, {
        headers: {Accept: "application/vnd.github.v3.html+json"},
        dataType: "json",
        success: function(comments, textStatus, jqXHR) {

            // Individual comments
            $.each(comments, function(i, comment) {
                var date = new Date(comment.created_at);

                var t = "<div id='github-comments-comment'>";
                t += 		"<img src='" + comment.user.avatar_url + "' width='24px'>";
                t += 		"<b><a href='" + comment.user.html_url + "'>" + comment.user.login + "</a></b>";
                t += 		" posted at ";
                t += 		"<em>" + date.toUTCString() + "</em>";
                t += 		"<div id='github-comments-comment-hr'></div>";
                t += 		comment.body_html;
                t += 		"</div>";
				
                $("#github-comments-list").append(t);
            });

            // Call recursively if there are more pages to display
            var linksResponse = jqXHR.getResponseHeader("Link");
            if (linksResponse) {
                var links = parseLinkHeader(jqXHR.getResponseHeader("Link"));
                if ("next" in links)
                {
                    loadComments(repo_name, comment_id, page_id+1);
                }
            }
        },
        error: function() {
            $("#github-comments-list").append("Comments are not open for this post yet.");
        }
    });
}

function buildGithubComments(repo_name, comment_id)
{
    $(document).ready(function ()
    {
		
		var post_comment_url = "https://github.com/" + repo_name + "/issues/" + comment_id + "#new_comment_field";
		
		// Add post button to first page 
		$("#github-comments-list").append("<form action='" + post_comment_url + "' rel='nofollow'> <input type='submit' value='Post a comment on Github' /> </form>");
		
        loadComments(repo_name, comment_id, 1);
    });
}
