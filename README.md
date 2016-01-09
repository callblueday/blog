visit [callblueday.com](http://callblueday.com)

my blog used [jekyll 3.0.1](http://jekyllrb.com) with theme [Emerald](https://github.com/KingFelix/emerald/)


## To start

	jekyll server

## Use octopress to deploying blogs

### Install octopress
	
	gem install octopress
	
	# for mac OSX 10.11+ El Capitan
	gem install -n /usr/local/bin octopress
	

### Add new post
	octopress new post "My Title"
	
### Octopress CLI Commands
	
	init <PATH>         # Adds Octopress scaffolding to your site
	new <PATH>          # Like `jekyll new` + `octopress init`
	new post <TITLE>    # Add a new post to your site
	new page <PATH>     # Add a new page to your site
	new draft <TITLE>   # Add a new draft post to your site
	publish <POST>      # Publish a draft from _drafts to _posts
	unpublish <POST>    # Search for a post and convert it into a draft
	isolate [POST]      # Stash all posts but the one you're working on 	for a faster build
	integrate           # Restores all posts, doing the opposite of the 	isolate command
	deploy              # deploy your site via S3, Rsync, or to GitHub pages.
	
More about [octopress](https://github.com/octopress/octopress)