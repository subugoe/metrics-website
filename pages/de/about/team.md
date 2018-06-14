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
<main class="grid-x grid-container">
  <div class="cell medium-10 medium-offset-1 large-8 large-offset-2">
    <h1 class="margin-top-2">{{ page.title }}</h1>
    <!-- Start editing content here -->
    <p>Unser Team ist deutschlandweit auf vier Institutionen verteilt, die Niedersächsischen Staats- und Universitätsbibliothek Göttingen (SUB Göttingen), das Leibniz-Informationszentrum Wirtschaft (ZBW), die Verbundzentrale des Gemeinsamen Bibliotheksverbundes der Länder Bremen, Hamburg, Mecklenburg-Vorpommern, Niedersachsen, Sachsen-Anhalt, Schleswig-Holstein, Thüringen und der Stiftung Preußischer Kulturbesitz (VZG) und das Leibniz Institut für Sozialwissenschaften (GESIS). Die regelmäßigen Projekttreffen ermöglichen eine enge und gute Zusammenarbeit.</p>
    <!-- Stop editing content here -->
  </div>
  <div class="grid-x grid-container grid-margin-x">
    {% for item in site.data.people %}
    <div class="cell margin-bottom-2 margin-top-2 medium-4 large-3">
      <div class="team_member">
        {% assign img = item.name | downcase | replace: ' ', '_' %}
        <img src="{{ site.baseurl }}/img/bilder_team/image_{{ img }}.jpg" alt="" class="team_member_img" aria-hidden="true">
        <br>
        {{ item.name }}<br>
        <a href="mailto:{{ item.mail}}" title="E-Mail an {{ item.name }}">
          <img src="{{ site.baseurl }}/img/icons/email.svg" aria-hidden="true">
          <span class="show-for-sr">E-Mail an {{ item.name }}</span>
        </a>&nbsp;
        {% for url in item.urls.de %}
        <a href="{{ url }}" title="Homepage von {{ item.name }}">
          <img src="{{ site.baseurl }}/img/icons/new-window.svg" style="margin-top: -5px;" aria-hidden="true">
          <span class="show-for-sr">Hompage von {{ item.name }} öffnen</span>
        </a>
        {% endfor %}
        </div>
    </div>
    {% endfor %}
  </div>
  {% include more_pages.html %}
</main>
