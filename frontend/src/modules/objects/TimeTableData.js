function createData(
  id,
  time,
  title,
  topic,
  type,
  speaker,
  abstract,
  speakerShortInfo
) {
  return { id, time, title, topic, type, speaker, abstract, speakerShortInfo };
}

export const rows = [
  createData(0, "12:00", "Eröffnung CX Tech Day", "", "", "", false, ""),
  createData(
    1,
    "12:15",
    "Einen Monolith von OpenLiberty auf Quarkus umstellen - wie schwer kann das sein?",
    "Core Programming Languages / Frameworks",
    "Session",
    "Stefan Blum",
    "Quarkus stellt eine gute Basis für moderne Cloud-Native Anwendungen dar und bietet darüber hinaus eine ausgezeichnete Entwicklererfahrung. Leider gibt es aber noch bestehende Anwendungen, die auf älteren Software-Stacks aufbauen und - in verschiedener Hinsicht - eine weniger tolle Erfahrung bieten. Die Vorstellung, dass bestehende Java EE Anwendungen auf Basis eines Application Servers wie OpenLiberty mit relativ geringem Aufwand auf Quarkus portiert werden können, klingt daher verlockend.",
    "Stefan hat bereits während der Schulzeit seine Passion für die Software-Entwicklung mit Java entdeckt und lebt diese als Berater bei MHP im Bereich der Software-Architektur und -Entwicklung aus. Design, Entwicklung und Betrieb von verteilten Systemen und Microservices in einem agilen Team - sowohl Cloud Native als auch On-Premise - gehören seit seinem Berufseinstieg zum Alltag. Seit Kurzem befasst er sich außerdem intensiv mit Go."
  ),
  createData(2, "13:00", "Pause", "", "", "", false, ""),
  createData(
    3,
    "13:15",
    "Look - it's a car up in the clouds!",
    "Cloud Architecture, DevOps, Microservices",
    "Session",
    "Lukas Gotkowski",
    "What do dragons and car configurators have in common? - They both live up in the clouds! Although our car configurators cannot spit fire, the outcome of it can still ignite dreams and fantasies. With resolutions of 4k, it's as sharp as a dragon's claw and with request times up to 300ms, it's even faster than they can fly! So sharpen your swords and don't miss out when we unveil the mystical tales of our immersive car configurator.",
    "Works at MHP since summer 2019. Originally comes from the visual effects industry and worked as a Technical Director on several seasons of GoT. On a rainy and cloudy day, he realized there was so much beauty up in the skies, so he decided to switch from moving points in 3D space to building up servers in the clouds."
  ),
  createData(4, "14:00", "Pause", "", "", "", false, ""),
  createData(
    5,
    "14:30",
    "How to build Tinder in 30 min",
    "#nocode #frameworks #livedemo #innovation",
    "Session",
    "Marcel Boer",
    "No-code solutions allow businesses to keep up with the changing demand, greatly reducing the loss of money and time. With a rising need of application, no-code reveals the future of enterprise app development. By having a live coding session, the ease of use and the immense power of innovation of no-code will be demonstrated.",
    "Marcel Boer is a senior consultant at MHP. His focus is on business innovation enabled by new technologies & methodologies. He has gained experience in software engineering with frontend technologies and Amazon Web Services. His expertise is in the manufacturing and automotive industry where he was responsible for the product ownership and software architecture. Check out the full profile: https://www.linkedin.com/in/marcel-boer"
  ),
  createData(6, "15:15", "Pause", "", "", "", false, ""),
  createData(
    7,
    "15:30",
    "REST API Design - Best Practices und Learnings",
    "REST API Design - Best Practices und Learnings aus dem Projektalltag",
    "Session",
    "Edwin Thellmann",
    "Im Projekt Finance Enabler bei der PAG werden nach dem Grundsatz API FIRST im Produktgedanken Standard REST APIs entwickelt, um generische Finanzprozesse für Billing und Accounting abzubilden. Unsere Journey nach über drei Jahren Projekt einzelnen spezifischen REST APIs bis hin zu normalisierten Standard APIs wird dargestellt. Außerdem werden unsere Learnings und Best Practices im Umgang mit heterogenen Business-Cases beleuchtet.",
    "Edwin ist im Januar 2021 bei MHP als Softwareentwickler eingestiegen. Bereits davor war er im Projekt Finance Enabler bei der Porsche AG tätig. Sein Fokus liegt in der Backend Entwicklung inklusive Konzeption und Implementierung. Außerdem betreut er mehrere Konsumentensystem in der Anbindung an das System des Finance Enablers."
  ),
  createData(8, "16:15", "Pause", "", "", "", false, ""),
  createData(
    9,
    "16:30",
    "Bildgenerierung mit Stable Diffusion & Co",
    "Future Tech & Trends",
    "Pecha Kucha",
    "Peter Pensold",
    "Ganz egal, wie verrückt eine Idee auch sein mag, mit wenigen Worten und ein wenig Gekritzel lassen sich mit künstlicher Intelligenz passende Bilder generieren. Doch wie funktioniert das eigentlich? Wo liegen die Grenzen und für wen bringt es einen Mehrwert? Birgt es auch Gefahren?",
    "Das erste KI generierte Bild von DALL-E hat bei Peter ein starkes Interesse geweckt. Seit dem die Bildgenerierung durch Stable Diffusion für jeden nutzbar gemacht wurde, beschäftigt er sich intensiv damit. Beruflich ist er als Software Entwickler / Architect tätig."
  ),
  createData(
    10,
    "",
    "Javascript - it's just the thing to make Websites annoying, right?",
    "JavaScript beyond the web. An overview of the JavaScript ecosystem beyond the web.",
    "Session",
    "Michael Rudolph",
    "“Any application that can be written in JavaScript, will eventually be written in JavaScript.” ~Jeff Atwood JavaScript is one of the most popular Programming ecosystems, not only for the web. In this session i want to give an overview of the JavaScript ecosystem with a Hands-on example of a RESTful api. We will discuss topics as Typescript, express and NestJs.",
    "Im a consultant working in the Porsche Vehicle Hub project. Before i started at MHP i worked in some projects living in the JavaScript ecosystem and made a bachelor in informatics at the TU Munich."
  ),
  createData(
    11,
    "",
    "http log debugging",
    "4 levels to get the right logging",
    "Pecha Kucha",
    "Christian Harms",
    "Some hints and dont's to get the correct HTTP logging information from your applications / apps",
    "tech lead finance enabler - dev with passion"
  ),
  createData(
    12,
    "",
    "MHP @ Microsoft Experience Center",
    "",
    "",
    "Merlin Breuer",
    "Learn more about the MHP Showcase in the new Microsoft Experience Center in Munich. What is the Experience Center anyway? What is the technical set-up on site and why does the showcase have less to do with Microsoft technologies than is claimed?",
    ""
  ),
  createData(
    13,
    "",
    "Modernisierung der Sicherheitspraktiken durch schlüssellose Authentifizierung am Beispiel einer AWS",
    "Cloud",
    "Pecha Kucha",
    "Jonathan Ernst, Roman Bitz",
    "Identifikation von Services findet oft über abliegende Zugangsschlüssel statt. Security Vorgaben in Unternehmen verlangen eine regelmäßige Rotation solcher Zugangsschlüssel. Dies ist mit erheblichen Zeitaufwand und Fehleranfälligkeit verbunden. Um diesen Prozess zu vereinfachen, bietet AWS die Möglichkeit für Kubernetes im Zusammenhang mit AWS IAM Rollen, eine schlüssellose Authentifizierung. Anstelle von Schlüsseln können Tokens verwendet werden, die mithilfe eines Identitätsproviders automatisiert werden.",
    "Roman und Jonathan sind Java-Cloud-Entwickler mit mehrjähriger Erfahrung. Sie sind für die Entwicklung und Wartung einer zentralen Stammdatenbank auf AWS verantwortlich, die für interne Produktionsprozesse unverzichtbar ist und als Enabler für die Entwicklung weiterer digitaler Produkte dient.Das Hauptaugenmerk von Roman und Jonathan liegt auf der Backend-Entwicklung, DevOps-Praktiken und Cloud-Architektur."
  ),
  createData(
    14,
    "",
    "Manipulating Files for a Living",
    "",
    "Pecha Kucha",
    "Ole Maiwald",
    "Wir Entwickler verbringen einen Großteil unserer Zeit mit dem Lesen, Bearbeiten und Vergleichen von Files. Dazu nutzen wir häufig eine IDE (Integrated Development Environment). Viele kennen dabei nur ein kleines Subset der Features ihrer IDE und setzen sich nach dem Download kaum mehr damit auseinander. Neovim bietet die Möglichkeit eine eigene Coding Umgebung 'from the ground up' selbst zu erstellen. Klingt nach Arbeit - ist es aber wert. Neovim wurde in der Stackoverflow Developer Survey 2022 erneut zur 'most loved IDE' gewählt. In diesem Talk gehe ich auf die Vorteile des Neovim Ecosystems ein und zeige, wie du deine Produktivität nicht nur beim Coden steigern kannst.",
    "Ich schreibe seit 2018 beruflich Software und setze mich dabei vor allem mit Performance, Skalierung und verteilten Systemen auseinander. Seit 2 Jahren bin ich bei MHP angestellt und arbeite seit Oktober 2021 im Immersive Experience Team der Digital Experience Factory. Nebenbei studiere ich High Performance Computing and der University of Edinburgh und bin Gesellschafter eines kleinen Start-Ups im News Sektor."
  ),
  createData(
    15,
    "17:30",
    "Closing und Übergang ins Networking",
    "",
    "",
    "",
    false,
    ""
  ),
];

export const secondrows = [
  createData(
    15,
    "14:25",
    "The Power of Deep Learning in the Browser",
    "In this workshop, attendees will learn how to build a hand-written digit recognition neural network",
    "(Workshop)",
    "Pascal Bayer",
    "Deep learning is one of the most exciting and rapidly growing fields in technology, and the ability to perform deep learning in the browser has opened up new possibilities for web development. In this talk, we will explore the intersection of deep learning and frontend development, specifically using Angular, WebGL, and TensorFlow.js to build a neural network that can recognize hand-written digits using the MNIST training set. We will delve into the components of the neural network, including the input layer, hidden layers, and output layer, and how they are implemented in TensorFlow.js.",
    "Meet Pascal, Senior Application Architect @ MHP, a tech enthusiast and open source advocate. He is passionate about frontend and cloud native development, and has over 15 years of experience in these areas. As the solution architect for the MHP immersive platform, Pascal has played a key role in powering the online car configurator for five major automotive OEMs, showcasing his ability to create innovative solutions that meet the needs of complex, real-world applications."
  ),
];
