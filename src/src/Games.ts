
import { coverTitlePosition, gameGenre, gameTypes } from "./enums";
import type { game } from "./models";

const bullyImage =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbnails.pcgamingwiki.com%2F4%2F47%2FBully_Scholarship_Edition_cover.jpg%2F300px-Bully_Scholarship_Edition_cover.jpg&f=1&nofb=1&ipt=8039e08b7595927e3f9ae67d82e2db02a143ff78ad5ebabad79ff8a20a307110";
const bullyDesc: string =
  "A game made by rockstar set in a fictional Highschool where the protagonist battle their way out to make the bullies stop.";
const bullyTitle: string = "Bully: Scholarship Edition";
const bullyType: gameTypes = gameTypes.SinglePlayer;
const bullyGenre: gameGenre = gameGenre.ActionAdventure;

const gtaSAImage: string =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mobygames.com%2Fimages%2Fcovers%2Fl%2F407792-grand-theft-auto-san-andreas-playstation-2-front-cover.jpg&f=1&nofb=1&ipt=ea8567d3e3d836e084c76bd574df925742449b67f6fc7b12930ba6bc305e6fa2";
const gtaSATitle: string = "Grand Theft Auto: San Andreas";
const gtaSADesc: string =
  "A game made by Rockstar set in a fictional state where the protagonist rises through crime and chaos to protect his family and reclaim his turf.";
const gtaSAType: gameTypes = gameTypes.SinglePlayer;
const gtaSAGenre: gameGenre = gameGenre.ActionAdventure;

const phasmophobiaImage: string =
  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.redd.it%2Fsal2itrsf6v61.png&f=1&nofb=1&ipt=d63cf234cab0c8a9b2596a0f9cbde8d92e9678a356151482a353b7ca5918b338";
const phasmophobiaDesc: string =
  "A co-op horror game where players investigate haunted locations as ghost hunters, using tools to identify different types of spirits while surviving eerie encounters.";
const phasmophobiaTitle: string = "Phasmophobia";
const phasmophobiaType: gameTypes = gameTypes.Multiplayer;
const phasmophobiaGenre: gameGenre = gameGenre.PartyGame;
export const bully: game = {
  imageURL: bullyImage,
  coverURL:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F1389590.jpg&f=1&nofb=1&ipt=b3ceaa80d41d219bf26894f230396261c533bd9081c3cf0de90206f1b180eca7",
  imagePos: coverTitlePosition.Top,
  title: bullyTitle,
  description: bullyDesc,
  fullDescription:
    "Bully: Scholarship Edition is a satirical open-world action game set in Bullworth Academy. As Jimmy Hopkins, players navigate school life, confront bullies, attend classes, and unravel the social hierarchy through pranks, combat, and quirky missions.",
  platforms: "PC, Xbox 360, Wii",
  type: bullyType,
  genre: bullyGenre,
  id: "000001",
};

export const gtaSA: game = {
  imageURL: gtaSAImage,
  coverURL:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages4.alphacoders.com%2F854%2Fthumb-1920-85444.jpg&f=1&nofb=1&ipt=96202f157fca02306994eaf2237999ab0ec173d56d10cf8314d670719d4cf99c",
  imagePos: coverTitlePosition.Center,
  title: gtaSATitle,
  description: gtaSADesc,
  fullDescription:
    "GTA: San Andreas is a sprawling crime epic set in the fictional state of San Andreas. Players control CJ, a gang member returning home to rebuild his crew, navigate betrayal, and rise through the criminal underworld across three massive cities.",
  platforms: "PC, PS2, Xbox, Android, iOS",
  type: gtaSAType,
  genre: gtaSAGenre,
  id: "000002",
};

export const phasmophobia: game = {
  imageURL: phasmophobiaImage,
  coverURL:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2Fwp7775425.jpg&f=1&nofb=1&ipt=cd05b6542ffa82b4b9cd1199a5634aa90b4c36bc4aecc1aa7aab4bc8eba9896e",
  imagePos: coverTitlePosition.Center,
  title: phasmophobiaTitle,
  description: phasmophobiaDesc,
  fullDescription:
    "Phasmophobia is a cooperative psychological horror game where players become ghost hunters. Using EMF readers, spirit boxes, and sanity management, teams investigate haunted locations to identify ghost types while surviving terrifying encounters.",
  platforms: "PC (Steam, VR)",
  type: phasmophobiaType,
  genre: phasmophobiaGenre,
  id: "000003",
};

export const LOZBotW: game = {
  imageURL:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.gameplanet.com%2Fwp-content%2Fuploads%2F2022%2F08%2F31154119%2Fmaxi-poster-the-legend-of-zelda-breath-of-the-wild.jpg&f=1&nofb=1&ipt=307b50c3e76a205f3538f154b776b4b683ee845a232037b3f18afa9452be0413",
  coverURL:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.hdwallpapers.in%2Fdownload%2Fthe_legend_of_zelda_breath_of_the_wild_4k-wide.jpg&f=1&nofb=1&ipt=25ecc1884978eecc86154b9f5d9d4db1f7ecfc96454357e8bff2b98f480c5d31",
  imagePos: coverTitlePosition.Bottom,
  title: "Legend of Zelda: Breath of the Wild",
  description:
    "An open-world action-adventure where players explore a ruined kingdom, solve ancient puzzles, and harness elemental powers to defeat a looming evil.",
  fullDescription:
    "Breath of the Wild redefines exploration with a vast open world full of secrets, physics-driven puzzles, and emergent gameplay. As Link, players awaken in a post-apocalyptic Hyrule and must reclaim the land from the ancient evil Calamity Ganon.",
  platforms: "Nintendo Switch, Wii U",
  type: gameTypes.SinglePlayer,
  genre: gameGenre.ActionAdventure,
  id: "000004",
};

export const gh2: game = {
  imageURL:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FM%2FMV5BNzdkN2VmM2EtNDU5YS00NWFhLWJjZGItYmM0ZGQ1NDg1YzYyXkEyXkFqcGc%40.V1_FMjpg_UX1000.jpg&f=1&nofb=1&ipt=9d1f345b54a4ce407d9396361311b0fcec016ad5922330dd1bb057fa40c9337e",
  coverURL:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapers.com%2Fimages%2Fhd%2Fguitar-hero-2-digital-cover-sgcr9e9lzh2tbigl.jpg&f=1&nofb=1&ipt=c857112b0e7a1d6d7c62a7836d279c45e61d110992ceec3e0517f4b6fd28f860",
  imagePos: coverTitlePosition.Center,
  title: "Guitar Hero II",
  description:
    "A rhythm-based music game where players shred iconic rock tracks, master complex note patterns, and rise from garage band hopefuls to guitar legends.",
  fullDescription:
    "Guitar Hero II challenges players to hit notes in time with legendary rock songs using a guitar controller. With escalating difficulty, multiplayer battles, and a killer soundtrack, it’s a test of rhythm, reflexes, and rockstar flair.",
  platforms: "PS2, Xbox 360",
  type: gameTypes.SinglePlayer,
  genre: gameGenre.RythmGame,
  id: "000005",
};
