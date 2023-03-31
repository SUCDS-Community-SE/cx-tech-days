import StefanBlum from "../../pictures/Speaker/StefanBlum.jpg";
import LukasGotko from "../../pictures/Speaker/LukasGotko.jpg";
import MarcelBoer from "../../pictures/Speaker/MarcelBoer.jpg";
import EdwinThellmann from "../../pictures/Speaker/EdwinThellmann.jpg";
import PeterPensold from "../../pictures/Speaker/PeterPensold.jpg";
import ChristianHarms from "../../pictures/Speaker/ChristianHarms.jpg";
import PascalBayer from "../../pictures/Speaker/PascalBayer.jpg";
import JonathanErnst from "../../pictures/Speaker/JonathanErnst.jpg";
import RomanBitz from "../../pictures/Speaker/RomanBitz.jpg";

function createData(id, name, imageSrc, shortInfo) {
  return { id, name, imageSrc, shortInfo };
}

export const speakers = [
  createData(
    "0",
    "Stefan Blum",
    StefanBlum,
    "Stefan hat bereits während der Schulzeit seine Passion für die Software-Entwicklung mit Java entdeckt und lebt diese als Berater bei MHP im Bereich der Software-Architektur und -Entwicklung aus."
  ),
  createData(
    "1",
    "Lukas Gotkowski",
    LukasGotko,
    "Works at MHP since summer 2019. Originally comes from the visual effects industry and worked as a Technical Director on several seasons of GoT."
  ),
  createData(
    "2",
    "Marcel Boer",
    MarcelBoer,
    "Marcel Boer is a senior consultant at MHP. His focus is on business innovation enabled by new technologies & methodologies."
  ),
  createData(
    "3",
    "Edwin Thellmann",
    EdwinThellmann,
    "Edwin ist im Januar 2021 bei MHP als Softwareentwickler eingestiegen. Sein Fokus liegt in der Backend Entwicklung inklusive Konzeption und Implementierung."
  ),
  createData(
    "4",
    "Peter Pensold",
    PeterPensold,
    "Das erste KI generierte Bild von DALL-E hat bei Peter ein starkes Interesse geweckt. Seit dem die Bildgenerierung durch Stable Diffusion für jeden nutzbar gemacht wurde, beschäftigt er sich intensiv damit."
  ),
  createData(
    "5",
    "Michael Rudolph",
    "",

    "Im a consultant working in the Porsche Vehicle Hub project."
  ),
  createData(
    "6",
    "Christian Harms",
    ChristianHarms,

    "Tech Lead Finance Enabler - Dev with passion"
  ),
  createData(
    "7",
    "Pascal Bayer",
    PascalBayer,
    "Meet Pascal, Senior Application Architect @ MHP, a tech enthusiast and open source advocate."
  ),
  createData(
    "8",
    "Jonathan Ernst",
    JonathanErnst,
    "Jonathan und Roman sind Java-Cloud-Entwickler mit mehrjähriger Erfahrung. Sie sind für die Entwicklung und Wartung einer zentralen Stammdatenbank auf AWS verantwortlich."
  ),
  createData(
    "9",
    "Roman Bitz",
    RomanBitz,
    "Das Hauptaugenmerk von Roman und Julian liegt auf der Backend-Entwicklung, DevOps-Praktiken und Cloud-Architektur."
  ),
];
