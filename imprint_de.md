---
layout: default
title: Impressum
permalink: /impressum/
lang: de
ref: imprint
---
<ul>
    {% for contact in site.data.people %}
    <li>{{ contact.name }}<br><a href="mailto:{{ contact.mail }}">{{ contact.mail }}</a></li>
    {% endfor %}
</ul>
