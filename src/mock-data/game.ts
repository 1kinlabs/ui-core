import { Game } from 'types/Game'
import { Platform, Genre, GameMode } from 'enums/Game'

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
