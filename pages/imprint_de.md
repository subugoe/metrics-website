---
layout: default
title: Impressum
permalink: /impressum.html
lang: de
ref: imprint
comments: false
position: bottom
alt: "Lorem ipsum dolor sit amut."
---
<ul>
    {% for contact in site.data.people %}
    <li>{{ contact.name }}<br><a href="mailto:{{ contact.mail }}">{{ contact.mail }}</a></li>
    {% endfor %}
</ul>
