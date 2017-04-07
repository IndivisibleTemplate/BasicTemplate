---
position: 7
layout: default
---

<div class="container">

  <div class="clearfix spacer"></div>

  <h1 class="page-title mb-2">Archive</h1>

  <div class="clearfix spacer"></div>

  <div class="row">
    <div class="col-sm-10 col-lg-9">

      {% for post in site.posts %}
        <hr class="mt-0 mb-2">
        {% include post-list.html %}
      {% endfor %}

    </div>
  </div>

</div>

<div class="spacer clearfix"></div>
<div class="spacer clearfix"></div>
