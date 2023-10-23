import { Nullable } from './Nullable'
import { DefaultMedia } from './Media'
import { FaqList } from './Faq'

type Assets = {
    featureImage: string,
    cardMedia: DefaultMedia,
    heroMedia: DefaultMedia,
    detailImage: DefaultMedia,
    thumbnailImage: DefaultMedia,
    additionalMedia: string[]
}

export type Collectible = {
    id: number;
    assets: Assets;
} & Partial<Nullable<{
    title: string;
    description: string;
    featured: boolean;
    total_count: number;
    end_date: string;
    short_description: string;
    claim_instructions: string;
    item_details: string[];
    start_date: string;
    faq_list: FaqList;
    require_complete_by_client: boolean;
    claimed_count: number;
    game_collectible_id: string;
    createdAt: string;
    updatedAt: string;
    created_by_id: number;
    updated_by_id: number;
    required_link_before_claim: boolean;
    is_test: boolean;
    collectible_uid: string;
    status: string;
    auto_generate_claim_code: boolean;
    onchain_token_id: number;
    claim_type: string;
    is_collectible: boolean;
    asset_type: string;
    game_engine_support: string[];
    available_codes: number;
  }>>
