import type { Meta, StoryObj } from '@storybook/react'

import ItemGrid from 'components/ItemGrid'
import GameCard from 'components/cards/GameCard'
import CollectibleCard from 'components/cards/CollectibleCard'
import { ClaimStatus } from 'enums/ClaimStatus'
import {
  pineapplePizzaHeroCard,
  shieldOfTheAncients,
  shiningSword,
  pipTheEnchantress,
  sidekickHopple,
  cloakOfTheAges,
} from 'mock-data/collectible'
import { pineapplePizzaHero, pineapplePizzaTrivia } from 'mock-data/game'

const meta = {
  title: 'components/ItemGrid',
  component: ItemGrid,
  tags: ['autodocs'],
} satisfies Meta<typeof ItemGrid>

export default meta
type Story = StoryObj<typeof meta>;

const longListArgs = {
  title: 'A long list of collectibles',
  children: [
    <CollectibleCard
      collectible={pineapplePizzaHeroCard}
      key={pineapplePizzaHeroCard.id}
      claimStatus={ClaimStatus.COMPLETED}
    />,
    <CollectibleCard collectible={shieldOfTheAncients} key={shieldOfTheAncients.id} />,
    <CollectibleCard
      collectible={{ ...sidekickHopple, available_codes: 0, auto_generate_claim_code: false }}
      key={sidekickHopple.id}
      claimStatus={ClaimStatus.COMPLETED}
    />,
    <CollectibleCard
      collectible={{ ...pineapplePizzaHeroCard, title: 'Pineapple Pizza Hero' }}
      key={pineapplePizzaHeroCard.id}
      claimStatus={ClaimStatus.IN_PROGRESS}
    />,

    <CollectibleCard
      collectible={{
        ...shiningSword, title: 'Sword of Living', status: 'Live', available_codes: 0, auto_generate_claim_code: false,
      }}
      key={shiningSword.id}
    />,
    <CollectibleCard
      collectible={pipTheEnchantress}
      key={pipTheEnchantress.id}
      claimStatus={ClaimStatus.IN_PROGRESS}
    />,
    <CollectibleCard
      collectible={cloakOfTheAges}
      key={cloakOfTheAges.id}
    />,
    <CollectibleCard collectible={shieldOfTheAncients} key={shieldOfTheAncients.id} />,
    <CollectibleCard
      collectible={pipTheEnchantress}
      key={pipTheEnchantress.id}
      claimStatus={ClaimStatus.IN_PROGRESS}
    />,
    <CollectibleCard
      collectible={sidekickHopple}
      key={sidekickHopple.id}
      claimStatus={ClaimStatus.COMPLETED}
    />,
    <CollectibleCard
      collectible={{ ...pipTheEnchantress, title: 'Esmerelda the Wizard', status: 'Archived' }}
      key={pipTheEnchantress.id}
    />,
    <CollectibleCard collectible={{ ...shieldOfTheAncients, title: 'Shield of the Ancients - Legacy', status: 'Archived' }} key={shieldOfTheAncients.id} />,
    <CollectibleCard collectible={shiningSword} key={shiningSword.id} />,
  ],
}

export const Default: Story = {
  args: {
    title: 'Pineapple Pizza Hero Collectibles',
    children: [
      <CollectibleCard
        collectible={pineapplePizzaHeroCard}
        key={pineapplePizzaHeroCard.id}
        claimStatus={ClaimStatus.COMPLETED}
      />,
      <CollectibleCard
        collectible={cloakOfTheAges}
        key={cloakOfTheAges.id}
      />,
      <CollectibleCard collectible={shieldOfTheAncients} key={shieldOfTheAncients.id} />,
      <CollectibleCard
        collectible={pipTheEnchantress}
        key={pipTheEnchantress.id}
        claimStatus={ClaimStatus.IN_PROGRESS}
      />,
      <CollectibleCard
        collectible={{ ...sidekickHopple, available_codes: 0, auto_generate_claim_code: false }}
        key={sidekickHopple.id}
        claimStatus={ClaimStatus.COMPLETED}
      />,
      <CollectibleCard collectible={shiningSword} key={shiningSword.id} />,

    ],
  },
}

export const LongList: Story = {
  args: longListArgs,
}

export const LongListTablet: Story = {
  args: longListArgs,
  parameters: {
    viewport: {
      defaultViewport: 'tablet',
    },
  },
}

export const MobileCollectibleCard: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
  args: {
    title: 'A list of collectibles',
    children: [
      <CollectibleCard
        collectible={pineapplePizzaHeroCard}
        key={pineapplePizzaHeroCard.id}
        claimStatus={ClaimStatus.COMPLETED}
      />,
      <CollectibleCard
        collectible={cloakOfTheAges}
        key={cloakOfTheAges.id}
        claimStatus={ClaimStatus.COMPLETED}
      />,
      <CollectibleCard collectible={shieldOfTheAncients} key={shieldOfTheAncients.id} />,
      <CollectibleCard
        collectible={pipTheEnchantress}
        key={pipTheEnchantress.id}
        claimStatus={ClaimStatus.IN_PROGRESS}
      />,
      <CollectibleCard
        collectible={{ ...sidekickHopple, available_codes: 0, auto_generate_claim_code: false }}
        key={sidekickHopple.id}
        claimStatus={ClaimStatus.COMPLETED}
      />,
      <CollectibleCard collectible={shiningSword} key={shiningSword.id} />,
    ],
  },
}

export const MobileGameCard: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile2',
    },
  },
  args: {
    children: [
      <GameCard
        game={pineapplePizzaHero}
        key={pineapplePizzaHero.id}
      />,
      <GameCard
        game={pineapplePizzaTrivia}
        key={pineapplePizzaTrivia.id}
      />,
      <GameCard
        game={pineapplePizzaHero}
        key={pineapplePizzaHero.id}
      />,
      <GameCard
        game={pineapplePizzaTrivia}
        key={pineapplePizzaTrivia.id}
      />,
      <GameCard
        game={pineapplePizzaHero}
        key={pineapplePizzaHero.id}
      />,
      <GameCard
        game={pineapplePizzaTrivia}
        key={pineapplePizzaTrivia.id}
      />,
    ],
  },
}
