import { List, Typography, ListItem } from '@mui/material'
import Section from 'atoms/Section'
import FAQ from 'components/FAQ'
import ClaimInfo from 'components/collectible/ClaimInfo'
import NextSteps from 'components/collectible/NextSteps'
import GameInfo from 'components/game/GameInfo'
import GameLauncher from 'components/game/GameLauncher'
import MediaGallery from 'components/media/MediaGallery'
import { container } from 'css/media'
import { ClaimStatus } from 'enums/ClaimStatus'
import styled from 'styled-components'
import { Claim } from 'types/Claim'
import { Collectible as CollectibleType } from 'types/Collectible'
import { Game } from 'types/Game'
import { OnAddToCollection } from 'components/collectible/ClaimInfo/ClaimCard'
import { EndUser } from 'types/EndUser'

export type Props = {
  className?: string
  collectible: CollectibleType
  user: EndUser | null
  game: Game
  claim?: Claim | null
  onAddToCollection: OnAddToCollection
}

const Collectible = styled(({
  className, user, collectible, game, claim, onAddToCollection,
} : Props) => {
  const faqList = [...(collectible.faq_list || []), ...(game.faq_list || [])]
  const whatsIncludedList = collectible.item_details ? collectible.item_details.filter((i) => i !== '') : []

  return (
    <div className={className}>
      <div className="content">
        <ClaimInfo
          collectible={collectible}
          game={game}
          user={user}
          onAddToCollection={onAddToCollection}
        />
        {
          (collectible.claimStatus === ClaimStatus.IN_PROGRESS
          || collectible.claimStatus === ClaimStatus.COMPLETED) && claim && (
            <NextSteps
              claim={claim}
              collectible={collectible}
            />
          )
        }
        <Section title="Description" className="description">
          <Typography variant="body2">
            {collectible.description}
          </Typography>
        </Section>
        <Section title="What's Included" className="included">
          <List className="includedList">
            {
              whatsIncludedList.map((item) => (
                <ListItem
                  disablePadding
                  className="includedListItem"
                  key={item}
                >
                  <Typography variant="body2" sx={{ display: 'inline' }}>
                    {item}
                  </Typography>
                </ListItem>
              ))
            }
          </List>
        </Section>
        <GameLauncher game={game} className="launcher" />
        {
          !!collectible.assets?.additionalMedia?.length && (
            <Section className="gallery">
              <MediaGallery images={collectible.assets.additionalMedia} />
            </Section>
          )
        }

        <GameInfo game={game} className="info" />
        {
          !!faqList.length && <FAQ faqs={faqList} className="faq" />
        }
      </div>
    </div>

  )
})`
  max-width: 1400px;
  width: 100%;
  container: collectible / inline-size;

  .content {
    display: grid;
    gap: 16px;


    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
      "claim claim claim"
      "next-steps next-steps next-steps"
      "description included launcher"
      "gallery gallery gallery"
      "info info info"
      "faq faq faq";

    ${container.tablet} {
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

    ${container.mobileSmall} {
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

    .includedList {
      list-style-type: disc;
    }

    .includedListItem {
      list-style-position: inside;
      display: list-item;
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
  }

`

export default Collectible
