import { Nullable } from "./Nullable";

export type Collectible = {
    id: number;
} & Partial<Nullable<{
    title: string;
    description: string;
    featured: boolean;
    total_count: number;
    end_date: string;
    short_description: string;
    claim_instructions: string;
    item_details: any;
    start_date: string;
    faq_list: any;
    assets: any;
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
    game_engine_support: any;
    available_codes: number;
  }>>