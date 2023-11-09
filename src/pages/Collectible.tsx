import { Typography } from '@mui/material'
import Section from 'atoms/Section'
import FAQ from 'components/FAQ'
import GameInfo from 'components/game/GameInfo'
import GameLauncher from 'components/game/GameLauncher'
import MediaGallery from 'components/media/MediaGallery'
import styled from 'styled-components'
import { Collectible as CollectibleTypes } from 'types/Collectible'
import { Game } from 'types/Game'

export type Props = {
  className?: string,
  collectible: CollectibleTypes,
  game: Game
}

const Collectible = styled(({ className, collectible, game } : Props) => (
  <div className={className}>
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
    <FAQ faqs={[...collectible.faq_list, ...game.faq_list]} className="faq" />
  </div>
))`
  display: grid;
  gap: 16px;
  max-width: 1200px;

  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas:
  "description included launcher"
  "gallery gallery gallery"
  "info info info"
  "faq faq faq";

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
