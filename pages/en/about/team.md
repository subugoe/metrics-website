---
layout: team
title: "Team"
permalink: /en/uber_uns/team/
lang: en
ref: team
parent: about
comments: false
position:
order: 1
alt: "introduction of the project team"
---
<main class="row">
    <div class="columns large-8 large-centered medium-10 medium-centered">
        <h1 class="margin-top-2">{{ page.title }}</h1>
        <p>Our team is distributed over four institutions: Goettingen State and University Library (SUB Göttingen), Leibniz Information Centre for Economics (ZBW), Common Library Network of the German States Bremen, Hamburg, Mecklenburg-Vorpommern, Niedersachsen, Sachsen-Anhalt, Schleswig-Holstein, Thüringen and the Foundation of Prussian Cultural Heritage (VZG) and the Leibniz Institute for Social Sciences (GESIS). The team meets regularly virtually and in person and works closely together.</p>
    </div>
    {% for item in site.data.people %}
    <div class="columns medium-3 margin-bottom-2 margin-top-2">
        <div class="team_member">
            <img src="{{ site.baseurl }}/img/bilder_team/image_{{ item.name | downcase | replace: " ", "_" }}.jpg" alt="" class="team_member_img"><br>
            {{ item.name }}<br>
            <a href="mailto:{{ item.mail}}"><img src="{{ site.baseurl }}/img/email.svg"></a> <a href="{{ item.url }}"><img src="{{ site.baseurl }}/img/new-window.svg" style="margin-top: -5px;"></a>
        </div>
    </div>
    {% endfor %}
    {% include more_pages.html %}
</main>
