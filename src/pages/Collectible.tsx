import { Typography } from '@mui/material'
import Section from 'atoms/Section'
import FAQ from 'components/FAQ'
import ClaimInfo from 'components/collectible/ClaimInfo'
import NextSteps from 'components/collectible/NextSteps'
import GameInfo from 'components/game/GameInfo'
import GameLauncher from 'components/game/GameLauncher'
import MediaGallery from 'components/media/MediaGallery'
import { mobileSmall, tablet } from 'css/media'
import { ClaimStatus } from 'enums/ClaimStatus'
import styled from 'styled-components'
import { Claim } from 'types/Claim'
import { Collectible as CollectibleType } from 'types/Collectible'
import { Game } from 'types/Game'

export type Props = {
  className?: string,
  collectible: CollectibleType,
  game: Game
  claim?: Claim,
  onAddToCollection: (collectible: CollectibleType) => void
}

const Collectible = styled(({
  className, collectible, game, claim, onAddToCollection,
} : Props) => {
  const faqList = [...(collectible.faq_list || []), ...(game.faq_list || [])]

  return (
    <div className={className}>
      <ClaimInfo collectible={collectible} game={game} onAddToCollection={onAddToCollection} />
      {
        (collectible.claimStatus === ClaimStatus.IN_PROGRESS
        || collectible.claimStatus === ClaimStatus.COMPLETED) && claim && (
          <NextSteps claim={claim} collectible={collectible} defaultExpanded={collectible.claimStatus === ClaimStatus.IN_PROGRESS} />
        )
      }
      <Section title="Description" className="description">
        <Typography variant="body2">
          {collectible.description}
        </Typography>
      </Section>
      <Section title="What's Included" className="included">
        <Typography variant="body2">
          {collectible.item_details}
        </Typography>
      </Section>
      <GameLauncher game={game} className="launcher" />
      <Section className="gallery">
        {
          collectible.assets?.additionalMedia && <MediaGallery images={collectible.assets.additionalMedia} />
        }
      </Section>
      <GameInfo game={game} className="info" />
      {
        faqList.length > 0 && <FAQ faqs={faqList} className="faq" />
      }
    </div>
  )
})`
  display: grid;
  gap: 16px;
  max-width: 1200px;

  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
    "claim claim claim"
    "next-steps next-steps next-steps"
    "description included launcher"
    "gallery gallery gallery"
    "info info info"
    "faq faq faq";

  ${tablet} {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
    "claim claim"
    "next-steps next-steps"
    "description description"
    "included launcher"
    "gallery gallery"
    "info info"
    "faq faq";
  }

  ${mobileSmall} {
    grid-template-columns: 1fr;
    grid-template-areas:
    "claim"
    "next-steps"
    "description"
    "included"
    "launcher"
    "gallery"
    "info"
    "faq";
  }

  ${ClaimInfo} {
    grid-area: claim;
  }

  ${NextSteps} {
    grid-area: next-steps;
  }

  .description {
    grid-area: description;
  }

  .included {
    grid-area: included;
  }

  .launcher {
    grid-area: launcher;
  }

  .gallery {
    grid-area: gallery;
  }

  .info {
    grid-area: info;
  }

  .faq {
    grid-area: faq;
  }
`

export default Collectible
