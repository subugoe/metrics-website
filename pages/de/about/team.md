---
layout: team
title: "Team"
permalink: /de/uber_uns/team/
lang: de
ref: team
parent: about
comments: false
position: 
order: 2
alt: "Vorstellung des Projektteams"
---
<main>
    <div class="columns large-8 large-centered medium-10 medium-centered large-offset-2">
        <h1 class="margin-top-2">{{ page.title }}</h1>
        <!-- Start editing content here -->
        <p>Unser Team ist deutschlandweit auf vier Institutionen verteilt, die Niedersächsischen Staats- und Universitätsbibliothek Göttingen (SUB Göttingen), das Leibniz-Informationszentrum Wirtschaft (ZBW), die Verbundzentrale des Gemeinsamen Bibliotheksverbundes der Länder Bremen, Hamburg, Mecklenburg-Vorpommern, Niedersachsen, Sachsen-Anhalt, Schleswig-Holstein, Thüringen und der Stiftung Preußischer Kulturbesitz (VZG) und das Leibniz Institut für Sozialwissenschaften (GESIS). Die regelmäßigen Projekttreffen ermöglichen eine enge und gute Zusammenarbeit.</p>
        <!-- Stop editing content here -->
    </div>
    {% for item in site.data.people %}
    <div class="columns small-12 medium-3 margin-bottom-2 margin-top-2">
        <div class="team_member">
            {% assign img = item.name | downcase | replace: ' ', '_' %}
            <img src="{{ site.baseurl }}/img/bilder_team/image_{{ img }}.jpg" alt="" class="team_member_img"><br>
            {{ item.name }}<br>
            <a href="mailto:{{ item.mail}}"><img src="{{ site.baseurl }}/img/email.svg"></a>&nbsp;
            {% for url in item.urls %}
                <a href="{{ url }}"><img src="{{ site.baseurl }}/img/new-window.svg" style="margin-top: -5px;"></a>
            {% endfor %}
        </div>
    </div>
    {% endfor %}
    {% include more_pages.html %}
</main>
