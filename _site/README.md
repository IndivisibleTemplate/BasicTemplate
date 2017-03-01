# An Indivisible Website In a Box

Indivisible Template is an easy to use website template specifically built for Indivisible chapters that are inspired to political action by the [Indivisible Guide](https://www.indivisibleguide.com/). The Indivisible Template was created and designed by [Sahadeva Hammari](http://sahadeva.com) and was built on top of numerous pieces of open source software made freely available by kind people around the world.

**What does it look like?**

See an example at [IndivisibleTemplate.com](http://indivisibletemplate.com).

**What Features does it have?**

*   It supports blogging, creating custom pages, media galleries, speed dialing, and much more.   
*   It's powered by GitHub Pages, which are made freely available by GitHub (thanks GitHub!).
*   GitHub's servers are very fast, so your website will be fast.
*   It's easy to use and set up.
*   It uses [Siteleaf's](https://www.siteleaf.com/) CMS, so it's easy to edit and update your website.
*   It's open source so anyone can tweak and improve it to their liking.
*   It's mobile friendly

**How does it work?**

The Indivisible Template uses GitHub to host your website and [siteleaf.com](https://www.siteleaf.com/)'s CMS (content management system) to update and edit your website. This are both free to use and you don't have to worry about traffic limits, server setup, or hosting costs. SiteLeaf has additional paid features that may be useful if you have a large chapter, but those features are not required to use the Indivisible Template.


**I'm a nerd: Give me the technical details.**

The Indivisible Template runs on [GitHub pages](https://pages.github.com/) via [Jekyll](https://jekyllrb.com). The Indivisible Template is essentially a Jekyll theme with good defaults and pages out of the box.

[Siteleaf](https://www.siteleaf.com/) is a cloud-based CMS that interacts with GitHub out of the box.

Code contributions and pull requests are welcome!


**What Indivisible chapters use it?**

1. IndivisibleSF


# How to I set up my site?

**Get a domain**

1.  Purchase a domain name for your chapter if you don't already have one. I recommend using [Google Domains](https://domains.google/).
1.  Follow your domain registrar's instructions to create two `A` records that point your custom domain to the following IP addresses. This will connect your domain to GitHub, your website host.
> 192.30.252.153
> 192.30.252.154


---

**Set up your website**

1.  Create a free GitHub account at [Github.com](https://github.com/). I recommend you pick a username that matches your Indivisible chapter name, e.g. *IndivisibleSF*.
1.  Go to [https://github.com/IndivisibleTemplate/IndivisibleTemplate.github.io](https://github.com/IndivisibleTemplate/IndivisibleTemplate.github.io) in your browser
1.  Click the *Fork* button in the top right of the page. This will create your own copy of the Indivisible Template that will power your new website.
1.  Rename your copy of the template with your GitHub username by clicking the *Settings* button on your new template's page. For example, if your GitHub username is `IndivisiblePDX` you would rename your template as `IndisiblePDX.github.io` instead of `IndivisibleTemplate.github.io`.
1.  In the *Custom Domain* section of the GitHub settings, enter your domain name. This will connect your domain with your new Indivisible Template.

---

**Connect the Siteleaf CMS to your website**

1.  Got to [siteleaf.com](https://www.siteleaf.com/) and create a free account.
1.  Go to [manage.siteleaf.com/sites](https://manage.siteleaf.com/sites) and click `Create new site`.
1.  In the right hand column click the `Connect existing repo` button.
1.  Select `Public repo`
1.  In the *Repo Name* field, type in your GitHub username and your Indivisible Template name should appear in an autosuggest field. Click it to connect Siteleaf to your GitHub account so that you can use Siteleaf to edit your new template.
1.  Browse around your Siteleaf account and start editing your website

---

**How to use the Siteleaf CMS**

**IMPORTANT** It may take a few seconds or even minutes for changes you make it Siteleaf to show up on your website. Please be patient. 

*Settings*: This is where you change the name of your site, your contact email address, your member count, your homepage header photo, and more.

*Posts*: This is where you create new blog posts, including new event posts, actions posts, and regular blog posts.

*Create action post*: To create an action post simply create a post and add the category `action` to it. Posts that have the `action` category attached will put in your representatives contact info on the post, include an optional call script, and highlight the post in red.

*Create event post*: To create an event post, simply add the category `event` to your post. This will highlight the event date, time, location and RSVP link.

*Pages*: You can as many new pages as you like. Every time you create a page a new nav link will be added for that page. For example, if you created a page called "Resources" a new nav item called "Resources" would appear.

---

# Getting Help

If you need help send an email to help@indivisibleTemplate.com or post to our slack room.

# Getting Help

# Important considerations

1. You should assume that all the information on your website is public to everyone on the web. There is no way to hide information in this setup from someone who is determined to find it. That includes saving posts as drafts and/or not including a page in your website nav.
2. As with all hosted solutions, there is the possibility that if GitGub goes down your website will temporarily go down with it. The advantages of using GitHub are so numerous, though, that this should not deter you from using this setup.
