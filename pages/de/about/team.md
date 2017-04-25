---
layout: team
title: "Team"
permalink: /de/uber_uns/team/
lang: de
ref: team
parent: about
comments: false
position:
order: 1
alt: "Vorstellung des Projektteams"
---
<main class="row">
    <div class="columns large-8 large-centered medium-10 medium-centered">
        <h1 class="margin-top-2">{{ page.title }}</h1>
        <p>Unser Team ist deutschlandweit auf vier Institutionen verteilt, die Niedersächsischen Staats- und Universitätsbibliothek Göttingen (SUB Göttingen), das Leibniz-Informationszentrum Wirtschaft (ZBW), die Verbundzentrale des Gemeinsamen Bibliotheksverbundes der Länder Bremen, Hamburg, Mecklenburg-Vorpommern, Niedersachsen, Sachsen-Anhalt, Schleswig-Holstein, Thüringen und der Stiftung Preußischer Kulturbesitz (VZG) und das Leibniz Institut für Sozialwissenschaften (GESIS). Die regelmäßigen Projekttreffen ermöglichen eine enge und gute Zusammenarbeit.</p>
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
