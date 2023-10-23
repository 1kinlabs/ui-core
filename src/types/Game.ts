import { Platform, Genre, GameMode } from 'enums/Game'
import { FaqList } from './Faq'
import { DefaultMedia } from './Media'
import { Nullable } from './Nullable'

export type GameClaims = {
    totalContent: number,
    liveContent: number
}

export type AccountLinkConfig = {
    linkingUrl?: string
}

export type Game = {
    id: number;
    title: string;
    description: string;
    official_website: string;
    platforms: Platform[];
    genres: Genre[];
    game_modes: GameMode[];
    publisher: string;
    primary_developer: string;
    min_age: number;
    cover_art: DefaultMedia;
    vendor_icon: DefaultMedia;
    release_date: string;
    liveContent: number;
    claims: GameClaims;
} & Partial<Nullable<{
    disabled: boolean;
    other_developers: string[];
    faq_list: FaqList;
    additional_media: string[];
    account_link_config: AccountLinkConfig;
    createdAt: string;
    updatedAt: string;
    created_by_id: number;
    updated_by_id: number;
    deleted: boolean;
    person_name: string;
    official_email: string;
    game_uid: string;
    onchain_game_id: number;
}>>
