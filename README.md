h1. The Phoenix Project (The Zeitgeist Movement 2.0)
====================================================
[zeitgeist.x11.us](http://zeitgeist.x11.us)

Table of contents:

  1. Software requirements
  2. Checkout from the Git repository
  3. Contribute back

<h2>Software requirements</h2>


|Software  |Version|Used by |          Home                                  |
|----------|-------|--------|------------------------------------------------|
|Python    |       |        | <http://python.org/>                           |
|Git       |       |        | <http://git-scm.com/>                          |
|Jekyll    |       |        | <http://wiki.github.com/mojombo/jekyll/install>|

<h2>Checkout from the Git repository</h2>


If you desire to install the latest and hottest revision of The Phoenix Project , you need
to clone the Git repository this way:

    ☺ cd ~/Sandboxes
    ☺ git clone git://github.com/TZM/chapters-dev.git
    ☺ cd chapters-dev

Then checkout the latest stable branch: (currently this is 'master')

    ☺ git checkout -b gh-pages origin/gh-pages
    ☺ jekyll --server
    Configuration from ~/Sandboxes/chapters-dev/_config.yml
    Building site: ~/Sandboxes/chapters-dev -> ~/Sandboxes/chapters-dev/_site
    Ggenerated site: ~/Sandboxes/chapters-dev -> ~/Sandboxes/chapters-dev/_site
    [2011-09-17 20:09:17] INFO  WEBrick 1.3.1
    [2011-09-17 20:09:17] INFO  ruby 1.8.7 (2011-06-30) [i686-darwin10]
    [2011-09-17 20:09:47] INFO  WEBrick::HTTPServer#start: pid=4047 port=4000

Navigate to <http://localhost:4000>

You can also use Python SimpleHTTPServer:

    ☺  python -m SimpleHTTPServer       
    Serving HTTP on 0.0.0.0 port 8000 ...
    
Navigate to <http://localhost:8000>

If all is well, then you should have the site running on your local machine.

<h2>Contribute back</h2>

The Zeitgeist Movement project is all about the contributions each of us make in creating a resource based society. We are currently using Github, as this allows us to scale infinitely, decentralized storage and provides us with a communication tool through which we can participate within any of the projects that we choose to.

It is important that if you wish to contribute is to create a Github account at <http://github.com>, if you already have an account then simply create a 'fork' of the project and tell the 'project leader' when you want them to merge your work into the main 'master' branch.

This way, 'project leaders' and peers are able to review/test your contribution, before being accepted into the 'live' system.

<h2>Resources</h2>

<http://git-scm.com/docs> - Tutorials on using Git
<http://pages.github.com> - How Github hosts your project pages

yes github can be an option in that each specialist interest group (SIG) has it's own free hosted project website using the gh-pages (http://pages.github.com/) this will front the 'code' / 'documents' / 'files' that are stored and shared on github for others to participate and contribute to.

each user has their own workspace from which they can follow projects and can 'fork' these, once a project is 'forked' they can work and then submit pull requests to the main project for the improvement to be merged.
you get a wiki with each project and this can have unlimited number of pages. you get issues tracker and can build complex workflows if you so need to.

there are also many libraries to connect to github api (http://developer.github.com/) which would allows then to build tools to monitor and track how each project is doing and push this info to other sites in the network (as long as they want to) -- think of it like a tweeter or an rss feed for example.

we can do a lot from this base and also it does not lock us down to any specific provider (well not 100% true as the actual social communication, issue tracker and project pages (gh-pages) is done trough the code written by github which is proprietory) -- if we have the resources we could host our own github clone for example http://gitlabhq.com/ and the demo http://gitlabhq.com/

but this should not be an issue as all of the data resides on our local machine, so we can easily push it to a different provider or host should we wish to. so we are not exposed to issues such as facebook shutting of groups because they don't like the content.

i did a video on vimeo https://vimeo.com/29239146 on how you can setup a github page for your projects - with the code https://github.com/TZM/chapters-dev
...

