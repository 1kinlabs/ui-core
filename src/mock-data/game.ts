import { Game } from 'types/Game'
import { Platform, Genre, GameMode } from 'enums/Game'

export const pineapplePizzaHero : Game = {
  id: 110,
  title: 'Pineapple Pizza Hero',
  disabled: true,
  description: "\n\"Pineapple Pizza Hero\" is an enchanting 3D platformer that transports players into a vibrant world bursting with color and whimsy!\n\nArmed with a trusty sword and an unwavering spirit, navigate through a series of intricate levels, battling quirky foes and uncovering hidden secrets. But it's not just about the adventure; it's a quest to prove that pineapples truly belong on pizza!\n\nDive into a universe where every jump, swing, and slice counts. Are you ready to champion the cause of pineapple pizzas everywhere? Dive in and let the juicy adventure begin! 🍍🍕✨",
  min_age: 6,
  platforms: [
    Platform.PC,
    Platform.IOS,
    Platform.WEB_BROWSER,
    Platform.MAC,
    Platform.ANDROID,
  ],
  publisher: '1Kin Labs',
  primary_developer: '',
  other_developers: [],
  genres: [
    Genre.PLATFORMER,
    Genre.CASUAL,
    Genre.ACTION,
  ],
  game_modes: [
    GameMode.SINGLE_PLAYER,
    GameMode.MULTIPLAYER,
  ],
  release_date: '2022-07-07',
  faq_list: [
    {
      answer: 'Absolutely! "Pineapple Pizza Hero" is designed with players of all ages in mind. Its family-friendly graphics, non-violent gameplay, and charming storyline make it perfect for young gamers, while its intricate levels and challenges appeal to older players as well.',
      question: 'Is "Pineapple Pizza Hero" suitable for kids?',
    },
    {
      answer: "\"Pineapple Pizza Hero\" is currently available on PC, Mac, Browser, and mobile devices! We're also excited to announce an upcoming port to gaming consoles. Stay tuned for updates on our official website.",
      question: 'What platforms is "Pineapple Pizza Hero" available on?',
    },
  ],
  vendor_icon: {
    defaultMedia: {
      src1x: 'https://1kin-dashboard-bucket.s3.us-east-2.amazonaws.com/1KIN-Icon-RGB_4004228_small.png',
      src2x: 'https://1kin-dashboard-bucket.s3.us-east-2.amazonaws.com/1KIN-Icon-RGB_4004228_large.png',
    },
  },
  cover_art: {
    defaultMedia: {
      src1x: 'https://1kin-dashboard-bucket.s3.us-east-2.amazonaws.com/pineapple_pizza_hero_box_art_compact_f31c70728b.jpg',
      src2x: 'https://1kin-dashboard-bucket.s3.us-east-2.amazonaws.com/pineapple_pizza_hero_box_art_compact_f31c70728b.jpg',
    },
  },
  additional_media: null,
  account_link_config: {
    linkingUrl: 'https://pineapplepizzahero.1kin.io',
  },
  official_website: 'https://pineapplepizzahero.1kin.io',
  createdAt: '2023-10-24T06:58:12.120Z',
  updatedAt: '2023-10-24T06:58:35.388Z',
  deleted: false,
  person_name: 'Danny North',
  official_email: 'pineapplepizzaherogame@1kin.io',
  game_uid: '2c006514b2acbbc096af',
  onchain_game_id: null,
  liveContent: 4,
  claims: {
    totalContent: 9,
    liveContent: 2,
  },
}

export const pineapplePizzaTrivia : Game = {
  id: 22,
  title: 'Pineapple Pizza Trivia',
  disabled: false,
  description: 'Pineapple Pizza Trivia: The ultimate test of taste and knowledge! Challenge your friends in this fast-paced trivia game, answering questions about the beloved (or debated) pineapple pizza. Dive into the history, ingredients, and cultural impact of this polarizing dish. Are you a pineapple pizza aficionado or a staunch opponent? Find out as you uncover surprising facts, engage in heated debates, and compete for the title of Pineapple Pizza Trivia champion!',
  min_age: 4,
  platforms: [
    Platform.PC,
    Platform.IOS,
    Platform.WEB_BROWSER,
    Platform.EPIC_GAME_STORE,
  ],
  publisher: 'Pineapple Natives',
  primary_developer: '',
  other_developers: [],
  genres: [
    Genre.CASUAL,
  ],
  game_modes: [
    GameMode.SINGLE_PLAYER,
  ],
  release_date: '2023-06-01',
  faq_list: [
    {
      answer: 'Because everything else lacks that Pine-y Apple-y flavor boost.',
      question: 'Why is Pineapple Pizza always the best? ',
    },
  ],
  vendor_icon: {
    defaultMedia: {
      src1x: 'https://1kin-dashboard-bucket.s3.us-east-2.amazonaws.com/coverimagepizza_3a9682a459.png',
      src2x: 'https://1kin-dashboard-bucket.s3.us-east-2.amazonaws.com/Screenshot_2023_06_29_at_2_11_28_PM_78bb6641c1.png',
    },
  },
  cover_art: {
    defaultMedia: {
      src1x: 'https://1kin-dashboard-bucket.s3.us-east-2.amazonaws.com/coverimagepizza_4bbd61ea90.png',
      src2x: 'https://1kin-dashboard-bucket.s3.us-east-2.amazonaws.com/zpcover_09105b54a5.png',
    },
  },
  additional_media: null,
  account_link_config: {
    linkingUrl: 'https://pineapplepizza.1kin.io',
  },
  official_website: 'pineapplepizza.1kin.io',
  createdAt: '2023-06-29T20:45:38.839Z',
  updatedAt: '2023-09-05T21:03:30.446Z',
  deleted: false,
  person_name: 'Danny',
  official_email: 'dnorth@1kin.io',
  game_uid: 'Pineapple Pizza Trivia_656678',
  onchain_game_id: null,
  liveContent: 5,
  claims: {
    totalContent: 15,
    liveContent: 4,
  },
}
