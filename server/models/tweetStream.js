/**
 * Created by starsky on 5/25/17.
 */
const mongoose = require('mongoose');

let TweetStreamSchema = new mongoose.Schema({
    coordinates: {
        coordinates: [Number],
        type: {
            type: String
        }
    },
    created_at: {
        type: String
    },
    current_user_retweet: {
        id: {
            type: String
        },
        id_str: {
            type: String
        }
    },
    entities: {
        hashtags: {
            type: Array
        },
        urls: {
            type: Array
        },
        user_mentions: {
            type: Array
        }
    },
    favorite_count: {
        type: Number
    },
    favorited: {
        type: Boolean
    },
    filter_level: {
        type: String
    },
    id: {
        type: String
    },
    id_str: {
        type: String
    },
    in_reply_to_screen_name: {
        type: String
    },
    in_reply_to_status_id: {
        type: String
    },
    in_reply_to_status_id_str: {
        type: String
    },
    in_reply_to_user_id: {
        type: String
    },
    in_reply_to_user_id_str: {
        type: String
    },
    lang: {
        type: String
    },
    place: {
        attributes: {
            type: Object
        },
        bounding_box: {
            coordinates: [[
                [Number]
            ]],
            type: {
                type: String
            }
        },
        country: {
            type: String
        },
        country_code: {
            type: String
        },
        full_name: {
            type: String
        },
        id: {
            type: String
        },
        name: {
            type: String
        },
        place_type: {
            type: String
        },
        url: {
            type: String
        }
    },
    possibly_sensitive: {
        type: Boolean
    },
    quoted_status_id: {
        type: String
    },
    quoted_status_id_str: {
        type: String
    },
    scopes: {
        type: Object
    },
    retweet_count: {
        type: Number
    },
    retweeted: {
        type: Boolean
    },
    source: {
        type: String
    },
    text: {
        type: String
    },
    truncated: {
        type: Boolean
    },
    user: {
        contributors_enabled: {
            type: Boolean
        },
        created_at: {
            type: String
        },
        default_profile: {
            type: Boolean
        },
        default_profile_image: {
            type: Boolean
        },
        description: {
            type: String
        },
        entities: {
            url: {
                urls: {
                    type: Array
                }
            },
            description: {
                urls: {
                    type: Array
                }
            }
        },
        favorite_count: {
            type: Number
        },
        followers_count: {
            type: Number
        },
        friends_count: {
            type: Number
        },
        geo_enabled: {
            type: Boolean
        },
        id: {
            type: String
        },
        id_str: {
            type: String
        },
        is_translator: {
            type: Boolean
        },
        land: {
            type: String
        },
        listed_count: {
            type: Number
        },
        location: {
            type: String
        },
        name: {
            type: String
        },
        notifications: {
            type: Boolean
        },
        protected: {
            type: Boolean
        },
        screen_name: {
            type: String
        },
        statuses_count: {
            type: Number
        },
        time_zone: {
            type: String
        },
        url: {
            type: String
        },
        utc_offset: {
            type: Number
        },
        verified: {
            type: Boolean
        },
        withheld_in_countries: {
            type: String
        },
        withheld_scope: {
            type: String
        },
    }


});

let TweetStream = mongoose.model('TweetStream', TweetStreamSchema);
module.exports = {TweetStream};