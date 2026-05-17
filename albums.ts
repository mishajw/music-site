// ── Your record collection ─────────────────────────────────────────────────
//
// To add an album:
//   1. Open it on Spotify → Share → Copy album link
//   2. Paste the URL below with a rating
//   3. Commit + push. Vercel redeploys automatically.
//
// Ratings: 1–5, or "work" / "nostalgia" / "discovering".
// Title, artist, and cover art are scraped from the Spotify page at build
// time — no API key needed.
//
// For something not on Spotify, use the manual form instead:
//   { rating: 5, title: "…", artist: "…", cover: "https://…/cover.jpg", link: "https://…" }

export type Rating = 1 | 2 | 3 | 4 | 5 | "work" | "nostalgia" | "discovering";

export type AlbumEntry =
  | { spotify: string; rating: Rating }
  | { title: string; artist: string; cover: string; link?: string; rating: Rating };

export const albums: AlbumEntry[] = [
  // ── five ──────────────────────────────────────────────────────────────
  { spotify: "https://open.spotify.com/album/3HAIZeXeNgbSvkXF7zTzej", rating: 5 }, // Cape Town Flowers — Abdullah Ibrahim
  { spotify: "https://open.spotify.com/album/2sZDbhndCdkIvyA9dltUUT", rating: 5 }, // Cape Town Revisited — Abdullah Ibrahim
  { spotify: "https://open.spotify.com/album/2zJMxui25tclR2FYj8jDYT", rating: 5 }, // Friday Night in San Francisco — Al Di Meola
  { spotify: "https://open.spotify.com/album/0QNJa03XQeMOuQhi9izThh", rating: 5 }, // Designer — Aldous Harding
  { spotify: "https://open.spotify.com/album/56rWsCsd2UF9l1XTpUfZ1v", rating: 5 }, // Warm Chris — Aldous Harding
  { spotify: "https://open.spotify.com/album/097eYvf9NKjFnv4xA9s2oV", rating: 5 }, // Back To Black — Amy Winehouse
  { spotify: "https://open.spotify.com/album/02WH3YQOSzeEwwZK1jQWjX", rating: 5 }, // Love Is Overtaking Me — Arthur Russell
  { spotify: "https://open.spotify.com/album/2CNEkSE8TADXRT2AzcEt1b", rating: 5 }, // Pet Sounds — The Beach Boys
  { spotify: "https://open.spotify.com/album/0jTGHV5xqHPvEcwL8f6YU5", rating: 5 }, // Let It Be (Remastered) — The Beatles
  { spotify: "https://open.spotify.com/album/0ETFjACtuP2ADo6LFhL6HN", rating: 5 }, // Abbey Road — The Beatles
  { spotify: "https://open.spotify.com/album/1PULmKbHeOqlkIwcDMNwD4", rating: 5 }, // Sgt. Pepper's Lonely Hearts Club Band — The Beatles
  { spotify: "https://open.spotify.com/album/6w7XFtdCQf871KU40Ot1Ra", rating: 5 }, // The Three E.P.'s — The Beta Band
  { spotify: "https://open.spotify.com/album/7Ln81p86r5cCsesd3KBWIY", rating: 5 }, // Dragon New Warm Mountain I Believe In You — Big Thief
  { spotify: "https://open.spotify.com/album/21xp7NdU1ajmO1CX0w2Egd", rating: 5 }, // Ants From Up There — Black Country, New Road
  { spotify: "https://open.spotify.com/album/4WD4pslu83FF6oMa1e19mF", rating: 4 }, // Blood On The Tracks — Bob Dylan
  { spotify: "https://open.spotify.com/album/4NP1rhnsPdYpnyJP0p0k0L", rating: 5 }, // Blonde On Blonde — Bob Dylan
  { spotify: "https://open.spotify.com/album/2PKZhfPrgMmK5zug2pqdHA", rating: 5 }, // Keep It like a Secret — Built To Spill
  { spotify: "https://open.spotify.com/album/6DlZzUnITGI5cWGTjIWSBm", rating: 5 }, // Perfect from Now On — Built To Spill
  { spotify: "https://open.spotify.com/album/20U1UWeGcGq7JVW0tf8yfH", rating: 4 }, // Twin Fantasy — Car Seat Headrest
  { spotify: "https://open.spotify.com/album/26DseQO366JfXwIP7dIgQj", rating: 5 }, // Teens of Denial — Car Seat Headrest
  { spotify: "https://open.spotify.com/album/4Z8nWz3dGybOP7lhMZpcOo", rating: 5 }, // Mingus Ah Um — Charles Mingus
  { spotify: "https://open.spotify.com/album/5Hfbag0SsHxafx1SySFSX6", rating: 5 }, // Black Messiah — D'Angelo
  { spotify: "https://open.spotify.com/album/48D1hRORqJq52qsnUYZX56", rating: 5 }, // The Rise and Fall of Ziggy Stardust and the Spiders from Mars (2012 Remaster) — David Bowie
  { spotify: "https://open.spotify.com/album/0vypdDHTQsoVmVu8OgXEly", rating: 5 }, // Hunky Dory — David Bowie
  { spotify: "https://open.spotify.com/album/6SW50UcFp4INcJNkCIrr07", rating: 5 }, // The Power Out — Electrelane
  { spotify: "https://open.spotify.com/album/3ShtO5VCYa3ctlR5uzLWBa", rating: 5 }, // Promises — Floating Points
  { spotify: "https://open.spotify.com/album/61eEIJPtxDANbzhNFKbqxF", rating: 5 }, // Apostrophe(') — Frank Zappa
  { spotify: "https://open.spotify.com/album/2dIGnmEIy1WZIcZCFSj6i8", rating: 5 }, // Plastic Beach — Gorillaz
  { spotify: "https://open.spotify.com/album/3440hCSfwYXxJcbQ0j3jAJ", rating: 5 }, // The Age of Pleasure — Janelle Monáe
  { spotify: "https://open.spotify.com/album/1vz94WpXDVYIEGja8cjFNa", rating: 5 }, // Blue — Joni Mitchell
  { spotify: "https://open.spotify.com/album/2akjxkzFolkeV72Yyv5KrM", rating: 5 }, // Court and Spark — Joni Mitchell
  { spotify: "https://open.spotify.com/album/38wVbgi0KToecxWxNYNutr", rating: 5 }, // Cross — Justice
  { spotify: "https://open.spotify.com/album/1mFuFPBz9kBDdXylMNolu7", rating: 5 }, // Harmony of Difference — Kamasi Washington
  { spotify: "https://open.spotify.com/album/2Ek1q2haOnxVqhvVKqMvJe", rating: 5 }, // ye — Kanye West
  { spotify: "https://open.spotify.com/album/6EK8l8rFuMpAn27TNOCwsH", rating: 5 }, // Aerial (2018 Remaster) — Kate Bush
  { spotify: "https://open.spotify.com/album/0I8vpSE1bSmysN2PhmHoQg", rating: 5 }, // The Köln Concert — Keith Jarrett
  { spotify: "https://open.spotify.com/album/7ycBtnsMtyVbbwTfJwRjSP", rating: 5 }, // To Pimp A Butterfly — Kendrick Lamar
  { spotify: "https://open.spotify.com/album/3Wfx7URJvY7rGz2xpfyPxU", rating: 4 }, // LCD Soundsystem — LCD Soundsystem
  { spotify: "https://open.spotify.com/album/1R8kkopLT4IAxzMMkjic6X", rating: 5 }, // Sound of Silver — LCD Soundsystem
  { spotify: "https://open.spotify.com/album/2JP9uqlDsW4yqFeCHeOqay", rating: 5 }, // In the Court of the Wrestling Let's — Let's Wrestle
  { spotify: "https://open.spotify.com/album/0c3zBBgS9WArWnEheK4Dy2", rating: 5 }, // Nursing Home — Let's Wrestle
  { spotify: "https://open.spotify.com/album/1c7eigkoEcDAKKhkajY3Br", rating: 5 }, // Any Other City — Life Without Buildings
  { spotify: "https://open.spotify.com/album/3Z8Df4ghTJ7afEWkurB2I1", rating: 5 }, // GREY Area — Little Simz
  { spotify: "https://open.spotify.com/album/5SqbMEyAt8332ISGiLX0St", rating: 5 }, // Transformer — Lou Reed
  { spotify: "https://open.spotify.com/album/2v6ANhWhZBUKkg6pJJBs3B", rating: 5 }, // What's Going On — Marvin Gaye
  { spotify: "https://open.spotify.com/album/716fnrS2qXChPC3J2X73pK", rating: 5 }, // The English Riviera — Metronomy
  { spotify: "https://open.spotify.com/album/2lREW5Vbyy6CiNwkN6JtS4", rating: 5 }, // Nights Out — Metronomy
  { spotify: "https://open.spotify.com/album/1UcS2nqUhxrZjrBZ3tHk2N", rating: 5 }, // MM..FOOD — MF DOOM
  { spotify: "https://open.spotify.com/album/1weenld61qoidwYuZ1GESA", rating: 5 }, // Kind Of Blue — Miles Davis
  { spotify: "https://open.spotify.com/album/6XrF9bauFcIOycNg4ZqiR5", rating: 5 }, // This Is a Long Drive for Someone With Nothing to Think About — Modest Mouse
  { spotify: "https://open.spotify.com/album/3KfWAE3Y0JDa7CNo8ovJWu", rating: 5 }, // The Miseducation of Lauryn Hill — Ms. Lauryn Hill
  { spotify: "https://open.spotify.com/album/70Yl2w1p00whfnC7fj94ox", rating: 5 }, // Everybody Knows This Is Nowhere — Neil Young
  { spotify: "https://open.spotify.com/album/5FTx6W84UUU14n29QV4saY", rating: 5 }, // Tonight's The Night — Neil Young
  { spotify: "https://open.spotify.com/album/0HF1yZhWt3Rlv4FSRVtNVJ", rating: 5 }, // Live at Montreux 1976 — Nina Simone
  { spotify: "https://open.spotify.com/album/2rLTLBAyeYqUwU6SyqlxXu", rating: 5 }, // Emergency Ward — Nina Simone
  { spotify: "https://open.spotify.com/album/2pQR3eAJ3ufT2q1PEF1VaW", rating: 5 }, // You Can't Hide Your Love Forever — Orange Juice
  { spotify: "https://open.spotify.com/album/4WoQ94qzwQj28n3nlSOVLB", rating: 5 }, // Graceland — Paul Simon
  { spotify: "https://open.spotify.com/album/4RflOKVvzEFCxDlHlT0ZFJ", rating: 5 }, // Mishima — Philip Glass
  { spotify: "https://open.spotify.com/album/0bCAjiUamIFqKJsekOYuRw", rating: 5 }, // Wish You Were Here — Pink Floyd
  { spotify: "https://open.spotify.com/album/0DQyTVcDhK9wm0f6RaErWO", rating: 5 }, // Doolittle — Pixies
  { spotify: "https://open.spotify.com/album/0BK1LxNNcaNUtAqTBQAOR8", rating: 5 }, // Bossanova — Pixies
  { spotify: "https://open.spotify.com/album/2fDJpBJhtloxzUENHlU9JB", rating: 5 }, // Rid Of Me — PJ Harvey
  { spotify: "https://open.spotify.com/album/4PsIVBsMLjO1d8bKPmkqmF", rating: 5 }, // Tchaikovsky: Swan Lake (Complete) — Pyotr Ilyich Tchaikovsky
  { spotify: "https://open.spotify.com/album/4yPVewn0gc9ZKifSYDMrm7", rating: 5 }, // Tchaikovsky: The Nutcracker: Complete Ballet — Pyotr Ilyich Tchaikovsky
  { spotify: "https://open.spotify.com/album/5YZmrMsFY6xdUBsS7DJxaz", rating: 5 }, // Dots And Loops — Stereolab
  { spotify: "https://open.spotify.com/album/6YUCc2RiXcEKS9ibuZxjt0", rating: 5 }, // Songs In The Key Of Life — Stevie Wonder
  { spotify: "https://open.spotify.com/album/76290XdXVF9rPzGdNRWdCh", rating: 5 }, // Ctrl — SZA
  { spotify: "https://open.spotify.com/album/78MM8HrabEGPLVWaJkM2t1", rating: 5 }, // Speaking in Tongues — Talking Heads
  { spotify: "https://open.spotify.com/album/1JvXxLsm0PxlGH4LXzqMGq", rating: 5 }, // Remain in Light — Talking Heads
  { spotify: "https://open.spotify.com/album/1A3nVEWRJ8yvlPzawHI1pQ", rating: 5 }, // Father of the Bride — Vampire Weekend
  { spotify: "https://open.spotify.com/album/1xpGyKyV26uPstk1Elgp9Q", rating: 5 }, // Weezer — Weezer

  // ── four ──────────────────────────────────────────────────────────────
  { spotify: "https://open.spotify.com/album/5GV2nBx7O67vu9NYHbMfXl", rating: 4 }, // Binary file (standard input) matches — 
  { spotify: "https://open.spotify.com/album/3JzBgkWUcXh4a0fVUkkacJ", rating: 4 }, // Greatest Hits — Al Green
  { spotify: "https://open.spotify.com/album/0GaYG9L1sXHQZZ7BTk0hGY", rating: 4 }, // Sound & Color — Alabama Shakes
  { spotify: "https://open.spotify.com/album/6TzgWk5HZItbFmMT7hH4bU", rating: 4 }, // God Save The Animals — Alex G
  { spotify: "https://open.spotify.com/album/6txHM80BKWlp4UdqLpWXRZ", rating: 4 }, // Headlights — Alex G
  { spotify: "https://open.spotify.com/album/2kCDZ3gCr5hXFgbFsPMcxP", rating: 4 }, // House of Sugar — Alex G
  { spotify: "https://open.spotify.com/album/5Pq92omNLyQgGGrj2u4pur", rating: 4 }, // Rocket — Alex G
  { spotify: "https://open.spotify.com/album/5vLZ3lKEpbRyjTIFPrdGwU", rating: 4 }, // DSU — Alex G
  { spotify: "https://open.spotify.com/album/5CVwTpfAIK2vN9IxuG5C3f", rating: 4 }, // Rules — Alex G
  { spotify: "https://open.spotify.com/album/1i8WVUZhMVNurF8rmlMeSH", rating: 4 }, // Trick — Alex G
  { spotify: "https://open.spotify.com/album/0aABjw7BY2iRsK4ZdkwSjF", rating: 4 }, // Beach Music — Alex G
  { spotify: "https://open.spotify.com/album/3e9VtbXnl6tqrFKrnNyxaI", rating: 4 }, // If You're Feeling Sinister — Belle and Sebastian
  { spotify: "https://open.spotify.com/album/4AChnLbiWqxiotXz8kv6D7", rating: 4 }, // The Boy With The Arab Strap — Belle and Sebastian
  { spotify: "https://open.spotify.com/album/7pg8T6pajjHVZbiyB8bGxo", rating: 4 }, // Two Hands — Big Thief
  { spotify: "https://open.spotify.com/album/6YabPKtZAjxwyWbuO9p4ZD", rating: 4 }, // Highway 61 Revisited — Bob Dylan
  { spotify: "https://open.spotify.com/album/1T8usYsiGEMPMQOLFgJEbE", rating: 4 }, // Desire — Bob Dylan
  { spotify: "https://open.spotify.com/album/0o1uFxZ1VTviqvNaYkTJek", rating: 4 }, // The Freewheelin' Bob Dylan — Bob Dylan
  { spotify: "https://open.spotify.com/album/2HaqChIDc5go3qxVunBDK0", rating: 4 }, // Funk Wav Bounces Vol.1 — Calvin Harris
  { spotify: "https://open.spotify.com/album/11h1IinArCIY0IzH1ktT0w", rating: 4 }, // How to Leave Town — Car Seat Headrest
  { spotify: "https://open.spotify.com/album/7s2vwXfI8Ki49zYIfTTkRT", rating: 4 }, // Teens of Style — Car Seat Headrest
  { spotify: "https://open.spotify.com/album/4KdtEKjY3Gi0mKiSdy96ML", rating: 4 }, // Invasion of Privacy — Cardi B
  { spotify: "https://open.spotify.com/album/4ejwSOS740Jj4z3h4RyxJo", rating: 4 }, // Chico Buarque de Hollanda — Chico Buarque
  { spotify: "https://open.spotify.com/album/7eyOb4RuYPBZZ4l3nCbraJ", rating: 4 }, // The Horizon Just Laughed — Damien Jurado
  { spotify: "https://open.spotify.com/album/4tfBE4zd8PUieuUNF0zd03", rating: 4 }, // Young Americans — David Bowie
  { spotify: "https://open.spotify.com/album/2iA7rzpQsOfAPkfH4Ekp7f", rating: 4 }, // Ordinary Corrupt Human Love — Deafheaven
  { spotify: "https://open.spotify.com/album/4P61qDUGKMaAiMkzdnPdKK", rating: 4 }, // Latin American Suite — Duke Ellington
  { spotify: "https://open.spotify.com/album/5hryhrT7wEdLnZCbJX9F6L", rating: 4 }, // Either/Or — Elliott Smith
  { spotify: "https://open.spotify.com/album/2wWuVfDOvITHUmb0KDzbrM", rating: 4 }, // Ready Take One — Erroll Garner
  { spotify: "https://open.spotify.com/album/7I42wZ3TW926k1DXrotD1M", rating: 4 }, // The Best of the Black President — Fela Kuti
  { spotify: "https://open.spotify.com/album/0fO1KemWL2uCCQmM22iKlj", rating: 4 }, // Fetch The Bolt Cutters — Fiona Apple
  { spotify: "https://open.spotify.com/album/1z0O8lKuQRs974S8wcRiAs", rating: 4 }, // Extraordinary Machine — Fiona Apple
  { spotify: "https://open.spotify.com/album/5Ua1WwH7wtVGxp9N3AWgow", rating: 4 }, // Yoshimi Battles the Pink Robots — The Flaming Lips
  { spotify: "https://open.spotify.com/album/392p3shh2jkxUxY2VHvlH8", rating: 4 }, // channel ORANGE — Frank Ocean
  { spotify: "https://open.spotify.com/album/3HsWjdL2LBJfgHlDFJthHL", rating: 4 }, // Pieces Of A Man — Gil Scott-Heron
  { spotify: "https://open.spotify.com/album/57FtCFNPyiqlltBLhFGDYi", rating: 4 }, // Under The Western Freeway — Grandaddy
  { spotify: "https://open.spotify.com/album/7rqgm1BnAZ8I4d6hukpkdg", rating: 4 }, // American Beauty — Grateful Dead
  { spotify: "https://open.spotify.com/album/6Wsai43KQmmKlN29AWlXFr", rating: 4 }, // Leak 04-13 (Bait Ones) — Jai Paul
  { spotify: "https://open.spotify.com/album/4YFlC5Abaj48ERwaOPfpu8", rating: 4 }, // I Love You Jennifer B — Jockstrap
  { spotify: "https://open.spotify.com/album/6E2VHYLPTtFOtdRcpt6YwP", rating: 4 }, // Wicked City — Jockstrap
  { spotify: "https://open.spotify.com/album/441qn6BowGKM4sBffQcG2r", rating: 4 }, // Love Is the Key to the City — Jockstrap
  { spotify: "https://open.spotify.com/album/1yyPagl5Z7wE6rmJoqv8wj", rating: 4 }, // For the Roses — Joni Mitchell
  { spotify: "https://open.spotify.com/album/6f5gAJpM85TE6aQ81h46T5", rating: 4 }, // Por Vida — Kali Uchis
  { spotify: "https://open.spotify.com/album/4Uv86qWpGTxf7fU7lG5X6F", rating: 4 }, // The College Dropout — Kanye West
  { spotify: "https://open.spotify.com/album/7D2NdGvBHIavgLhmcwhluK", rating: 4 }, // Yeezus — Kanye West
  { spotify: "https://open.spotify.com/album/4ZeZ9B0IZHk0zXB9lxZaGR", rating: 4 }, // The Sensual World — Kate Bush
  { spotify: "https://open.spotify.com/album/5XpEKORZ4y6OrCZSKsi46A", rating: 4 }, // Norman Fucking Rockwell! — Lana Del Rey
  { spotify: "https://open.spotify.com/album/11Y2eh6LX6am0lYyjfCW3W", rating: 4 }, // Patterns in Repeat — Laura Marling
  { spotify: "https://open.spotify.com/album/0ubXthGSkZfe30Nuj91lcu", rating: 4 }, // Song For Our Daughter — Laura Marling
  { spotify: "https://open.spotify.com/album/35He6RuwS8C2KjG067Gobl", rating: 4 }, // Once I Was an Eagle — Laura Marling
  { spotify: "https://open.spotify.com/album/0DBoWQ52XUHtrZQdfAqOVj", rating: 4 }, // Sometimes I Might Be Introvert — Little Simz
  { spotify: "https://open.spotify.com/album/5MQG2fmU6vlA8UsXusMPK8", rating: 4 }, // Marnie Stern — Marnie Stern
  { spotify: "https://open.spotify.com/album/5CHaXCMeag2aPjo72Ib8Xj", rating: 4 }, // Small World — Metronomy
  { spotify: "https://open.spotify.com/album/0Hs3BomCdwIWRhgT57x22T", rating: 4 }, // In A Silent Way — Miles Davis
  { spotify: "https://open.spotify.com/album/3I2KkX13lHXuYqfBjSOopo", rating: 4 }, // Bury Me At Makeout Creek — Mitski
  { spotify: "https://open.spotify.com/album/3hM0rO7AqHBM6KVOe0Vdq1", rating: 4 }, // The Modern Lovers — The Modern Lovers
  { spotify: "https://open.spotify.com/album/468ZwCchVtzEbt9BHmXopb", rating: 4 }, // Meddle — Pink Floyd
  { spotify: "https://open.spotify.com/album/3539EbNgIdEDGBKkUf4wno", rating: 4 }, // Dummy — Portishead
  { spotify: "https://open.spotify.com/album/2KtjHTzbi9ugLRtUTUH1Uq", rating: 4 }, // Prince — Prince
  { spotify: "https://open.spotify.com/album/6jbtHi5R0jMXoliU2OS0lo", rating: 4 }, // MOTOMAMI — ROSALÍA
  { spotify: "https://open.spotify.com/album/0hkZGxfsFypXbjq15hM6U9", rating: 4 }, // Original Pirate Material — The Streets
  { spotify: "https://open.spotify.com/album/365ETCJBUmEWroc4UGBS1u", rating: 4 }, // A Grand Don't Come for Free — The Streets
  { spotify: "https://open.spotify.com/album/3ogNAkUhvQy0cFOfLoR6Y8", rating: 4 }, // Whack World — Tierra Whack
  { spotify: "https://open.spotify.com/album/2nkto6YNI4rUYTLqEwWJ3o", rating: 4 }, // Flower Boy — Tyler, The Creator
  { spotify: "https://open.spotify.com/album/1IgZxMsdWaIoYyMUGrO53Y", rating: 4 }, // Violent Femmes — Violent Femmes
  { spotify: "https://open.spotify.com/album/3V18DIKvRuwdxc2LE4wuac", rating: 4 }, // I Can Hear The Heart Beating As One — Yo La Tengo
  { spotify: "https://open.spotify.com/album/1FKScTiXaADVfAp6gTWHKj", rating: 4 }, // Tea for the Tillerman — Yusuf / Cat Stevens

  // ── three ─────────────────────────────────────────────────────────────
  { spotify: "https://open.spotify.com/album/2WKfCjW3EDmgHswj5eVXuG", rating: 3 }, // songs — Adrianne Lenker
  { spotify: "https://open.spotify.com/album/0AePRMHymMl4oHBb5EuGiV", rating: 3 }, // Train on the Island — Aldous Harding
  { spotify: "https://open.spotify.com/album/42bSpkr89bdrwMMNuEZlDJ", rating: 3 }, // Race — Alex G
  { spotify: "https://open.spotify.com/album/3wRBlpk5PRoixwOnLujTal", rating: 3 }, // American Football — American Football
  { spotify: "https://open.spotify.com/album/4q7tlhOQTwlJAUkoFBa2dv", rating: 3 }, // Little Electric Chicken Heart — Ana Frango Elétrico
  { spotify: "https://open.spotify.com/album/20BKSOzIQSHI4kLQIzPslN", rating: 3 }, // ICONOCLASTS — Anna von Hausswolff
  { spotify: "https://open.spotify.com/album/5WndWfzGwCkHzAbQXVkg2V", rating: 3 }, // I Never Loved a Man the Way I Love You — Aretha Franklin
  { spotify: "https://open.spotify.com/album/42joEEymK7EIHODfNB4yug", rating: 3 }, // Collapsed In Sunbeams — Arlo Parks
  { spotify: "https://open.spotify.com/album/3pYFqjWzClbyDKvACv5bVQ", rating: 3 }, // Another Thought — Arthur Russell
  { spotify: "https://open.spotify.com/album/3LMsFkOLJImsFFUddEjLDy", rating: 3 }, // Iowa Dream — Arthur Russell
  { spotify: "https://open.spotify.com/album/37rNuexqEXWeSIOiJtn3A9", rating: 3 }, // Smiley Smile (Remastered) — The Beach Boys
  { spotify: "https://open.spotify.com/album/0sLnNGW4PzCYFQ4Pn7aVCP", rating: 3 }, // U.F.O.F. — Big Thief
  { spotify: "https://open.spotify.com/album/13VVtuvboNAaPFcKsQsjLP", rating: 3 }, // Apocalypse — Bill Callahan
  { spotify: "https://open.spotify.com/album/7sfkWJ14gZywjyv3wtQ5WC", rating: 3 }, // Shepherd in a Sheepskin Vest — Bill Callahan
  { spotify: "https://open.spotify.com/album/4bKHXqEVmt32YU7u51GIHB", rating: 3 }, // Sometimes I Wish We Were An Eagle — Bill Callahan
  { spotify: "https://open.spotify.com/album/2PfgptDcfJTFtoZIS3AukX", rating: 3 }, // For the first time — Black Country, New Road
  { spotify: "https://open.spotify.com/album/2dAxS22qLNJsj2QbmYCr1V", rating: 3 }, // Live 1966 "The Royal Albert Hall Concert" The Bootleg Series Vol. 4 — Bob Dylan
  { spotify: "https://open.spotify.com/album/4A0ogpGJS3sEojp1Qj6JDc", rating: 3 }, // The Normal Years — Built To Spill
  { spotify: "https://open.spotify.com/album/12n11cgnpjXKLeqrnIERoS", rating: 3 }, // Tapestry — Carole King
  { spotify: "https://open.spotify.com/album/0QURjDbfsPsDa5R4sgkjV9", rating: 3 }, // An Overview on Phenomenal Nature — Cassandra Jenkins
  { spotify: "https://open.spotify.com/album/03zH4bkGb2jSZAQIVW2px1", rating: 3 }, // Let My Children Hear Music — Charles Mingus
  { spotify: "https://open.spotify.com/album/4JCybsNZUXWrK2Jpyn12Ni", rating: 3 }, // "Awaken, My Love!" — Childish Gambino
  { spotify: "https://open.spotify.com/album/4m2880jivSbbyEGAKfITCa", rating: 3 }, // Random Access Memories — Daft Punk
  { spotify: "https://open.spotify.com/album/03SLGE3GnetjUxLbGDXxii", rating: 3 }, // Donsya A'n Loryow — Daisy Rickman
  { spotify: "https://open.spotify.com/album/4Jx9YlF3W835nxV3M8nS8Z", rating: 3 }, // Howl — Daisy Rickman
  { spotify: "https://open.spotify.com/album/2ue49EW32PZ8ytPDOtZHcw", rating: 3 }, // Miracle-Level — Deerhoof
  { spotify: "https://open.spotify.com/album/3WVpMRRKz9BVU4koPEFpnF", rating: 3 }, // Actually, You Can — Deerhoof
  { spotify: "https://open.spotify.com/album/1FrW2Bbq6IXkyPM5wznMPD", rating: 3 }, // Liege And Lief — Fairport Convention
  { spotify: "https://open.spotify.com/album/12YgqUGmwpos8JLGPJFGQ6", rating: 3 }, // Unhalfbricking — Fairport Convention
  { spotify: "https://open.spotify.com/album/5daEPaHfFiOSpKJLMraH9D", rating: 3 }, // Zombie — Fela Kuti
  { spotify: "https://open.spotify.com/album/6oVaKzODiXqew6MScEd7T4", rating: 3 }, // At War with the Mystics — The Flaming Lips
  { spotify: "https://open.spotify.com/album/5BNg2Ojlwn8LhM8EFgrhIq", rating: 3 }, // Bongo Fury — Frank Zappa
  { spotify: "https://open.spotify.com/album/3ywVzrwMQ3Kq43N9zBdBQm", rating: 3 }, // Maggot Brain — Funkadelic
  { spotify: "https://open.spotify.com/album/1bvhjpp45aO2i1d7kjbsjh", rating: 3 }, // Crystal Silence — Gary Burton
  { spotify: "https://open.spotify.com/album/3HED2IUaNSnbOe88a7ZdwM", rating: 3 }, // Visions — Grimes
  { spotify: "https://open.spotify.com/album/2VQKZAvtL5epxdEOuLVP6t", rating: 3 }, // Bee Thousand — Guided By Voices
  { spotify: "https://open.spotify.com/album/72uDE3xlSwejX3iYZqWTWU", rating: 3 }, // Until the Hunter — Hope Sandoval & The Warm Inventions
  { spotify: "https://open.spotify.com/album/4PznnWq19AwatCG4lsyb5I", rating: 3 }, // Turn This Mutha Out — Idris Muhammad
  { spotify: "https://open.spotify.com/album/57MSBg5pBQZH5bfLVDmeuP", rating: 3 }, // In Waves — Jamie xx
  { spotify: "https://open.spotify.com/album/2nZveqbqe3w1xTfaZmRpbz", rating: 3 }, // Miles of Aisles (Live) — Joni Mitchell
  { spotify: "https://open.spotify.com/album/0OGQ2kwTEYbnIHRyTKBm5L", rating: 3 }, // Halo — Juana Molina
  { spotify: "https://open.spotify.com/album/4233ikTgooA70WanD0LE0o", rating: 3 }, // Son — Juana Molina
  { spotify: "https://open.spotify.com/album/5G5UwqPsxDKpxJLX4xsyuh", rating: 3 }, // Hounds Of Love — Kate Bush
  { spotify: "https://open.spotify.com/album/6pwuKxMUkNg673KETsXPUV", rating: 3 }, // KIDS SEE GHOSTS — KIDS SEE GHOSTS
  { spotify: "https://open.spotify.com/album/5HOHne1wzItQlIYmLXLYfZ", rating: 3 }, // Did you know that there's a tunnel under Ocean Blvd — Lana Del Rey
  { spotify: "https://open.spotify.com/album/3Z4NNeh0gf4oGquXZEU1NT", rating: 3 }, // Semper Femina — Laura Marling
  { spotify: "https://open.spotify.com/album/0sdLAra6HEkMJuxB7ZkXSi", rating: 3 }, // Shape Up — Leikeli47
  { spotify: "https://open.spotify.com/album/6QrGmXbUtjyekuW83gXBBb", rating: 3 }, // Drop 6 — Little Simz
  { spotify: "https://open.spotify.com/album/4p2rhOLjfHQXNBa6QPSHcS", rating: 3 }, // The Chronicles of Marnia — Marnie Stern
  { spotify: "https://open.spotify.com/album/4eyay5xmBCxH4jvVpccS3j", rating: 3 }, // Courting Strong — Martha
  { spotify: "https://open.spotify.com/album/7IzNAyOsxeWhKPyNNz1urS", rating: 3 }, // Metronomy Forever — Metronomy
  { spotify: "https://open.spotify.com/album/4ncxigcuC9s3fyjiuJSfQq", rating: 3 }, // Love Letters — Metronomy
  { spotify: "https://open.spotify.com/album/4Coa8Eb9SzjrkwWEom963Q", rating: 3 }, // Puberty 2 — Mitski
  { spotify: "https://open.spotify.com/album/5mvHTVy1iUIkAflIufoOpj", rating: 3 }, // The Lonesome Crowded West — Modest Mouse
  { spotify: "https://open.spotify.com/album/5EVlXlHbRQI8ybuNt4ArXI", rating: 3 }, // After the Gold Rush (2009 Remaster) — Neil Young
  { spotify: "https://open.spotify.com/album/1pHo7X82cTObgZll65R1rW", rating: 3 }, // Harvest — Neil Young
  { spotify: "https://open.spotify.com/album/3HTsNBfZLfRXQTfdLeLVK1", rating: 3 }, // On Avery Island — Neutral Milk Hotel
  { spotify: "https://open.spotify.com/album/5mwOo1zikswhmfHvtqVSXg", rating: 3 }, // Pink Moon — Nick Drake
  { spotify: "https://open.spotify.com/album/3HvgNs3UlPTLN6qliUzjUM", rating: 3 }, // Fodder On My Wings — Nina Simone
  { spotify: "https://open.spotify.com/album/1JTk60wb4CTAaX6TaCfpPU", rating: 3 }, // The Peel Sessions 1991 - 2004 — PJ Harvey
  { spotify: "https://open.spotify.com/album/08Plby1CLD0UNgChnPD8lo", rating: 3 }, // Dry — PJ Harvey
  { spotify: "https://open.spotify.com/album/3q90UAYeHLvAtnowiQlmgp", rating: 3 }, // Cold Fact — Rodríguez
  { spotify: "https://open.spotify.com/album/4gxmQOdxJgN7kc1o8ipiUR", rating: 3 }, // Now, You Know — Rosie Lowe
  { spotify: "https://open.spotify.com/album/7Kpv6XWZhGCwX6PSR4vWaX", rating: 3 }, // Nine — SAULT
  { spotify: "https://open.spotify.com/album/7uLay1Hjr2GfZrihKuNzXp", rating: 3 }, // Prokofiev: Romeo and Juliet (Complete) — Sergei Prokofiev
  { spotify: "https://open.spotify.com/album/0JwHz5SSvpYWuuCNbtYZoV", rating: 3 }, // Bridge Over Troubled Water — Simon & Garfunkel
  { spotify: "https://open.spotify.com/album/3XzbVl7oibSdnmpCGzCK6A", rating: 3 }, // Knock Knock — Smog
  { spotify: "https://open.spotify.com/album/3Yko2SxDk4hc6fncIBQlcM", rating: 3 }, // A Seat at the Table — Solange
  { spotify: "https://open.spotify.com/album/338T7GIYUEuyeeHeZnSJta", rating: 3 }, // Marry Me — St. Vincent
  { spotify: "https://open.spotify.com/album/4dq7JNcHKrnozzFQg5bpmn", rating: 3 }, // To Be Kind — Swans
  { spotify: "https://open.spotify.com/album/3NEa40lY9rNpSIALSIKn79", rating: 3 }, // Laughing Stock — Talk Talk
  { spotify: "https://open.spotify.com/album/79dL7FLiJFOO0EoehUHQBv", rating: 3 }, // Currents — Tame Impala
  { spotify: "https://open.spotify.com/album/3C2MFZ2iHotUQOSBzdSvM7", rating: 3 }, // Lonerism — Tame Impala
  { spotify: "https://open.spotify.com/album/4Csoz10NhNJOrCTUoPBdUD", rating: 3 }, // Summertime '06 — Vince Staples
  { spotify: "https://open.spotify.com/album/29HKbQ2pgXgElTnH66mFXK", rating: 3 }, // Bleeds — Wednesday
  { spotify: "https://open.spotify.com/album/0YO6XyVs6lvPeknLqOfWZY", rating: 3 }, // yaeji — Yaeji
  { spotify: "https://open.spotify.com/album/5OPn2TtypUotqcA7K5C0IE", rating: 3 }, // Painful — Yo La Tengo
  { spotify: "https://open.spotify.com/album/00vIbcUe4eGeNezbmT3525", rating: 3 }, // Stuff Like That There — Yo La Tengo

  // ── two ───────────────────────────────────────────────────────────────
  { spotify: "https://open.spotify.com/album/5M8xQaQZuW2LZGVXZ3mlKN", rating: 2 }, // MY WOMAN — Angel Olsen
  { spotify: "https://open.spotify.com/album/3VCaLNEZTCVRwB8fIpmuM7", rating: 2 }, // Odelay — Beck
  { spotify: "https://open.spotify.com/album/48LoTRKcLWxQiDVCPUhW05", rating: 2 }, // Bedouine — Bedouine
  { spotify: "https://open.spotify.com/album/49DV9eFp2xTdtO7veew5xS", rating: 2 }, // Funk Wav Bounces Vol. 2 — Calvin Harris
  { spotify: "https://open.spotify.com/album/01Vvrmisrvr1YOIGRn4brG", rating: 2 }, // Channel Tres — Channel Tres
  { spotify: "https://open.spotify.com/album/3cDl7l5FGQi93NgtqFR1gR", rating: 2 }, // Mother — Cleo Sol
  { spotify: "https://open.spotify.com/album/5VAH7pRonDHlMiLLfCGpaK", rating: 2 }, // Florist — Florist
  { spotify: "https://open.spotify.com/album/456WeVeZk38VJuqg2sL7QG", rating: 2 }, // Mood Valiant — Hiatus Kaiyote
  { spotify: "https://open.spotify.com/album/2PjlaxlMunGOUvcRzlTbtE", rating: 2 }, // Dirty Computer — Janelle Monáe
  { spotify: "https://open.spotify.com/album/4u3aIyQbywYaxgF7TcXuIu", rating: 2 }, // Crushing — Julia Jacklin
  { spotify: "https://open.spotify.com/album/1OuzXj4yo7VyBKwHZhxEnW", rating: 2 }, // In My Own Time — Karen Dalton
  { spotify: "https://open.spotify.com/album/4zTve3KmaKstuT61AyoGjV", rating: 2 }, // Penthouse — Luna
  { spotify: "https://open.spotify.com/album/55JRBOOVB5twmQbydWvzBc", rating: 2 }, // KIDS — Noga Erez
  { spotify: "https://open.spotify.com/album/5kjqLxeQxdW3CcUdOXuO2c", rating: 2 }, // Telefone — Noname
  { spotify: "https://open.spotify.com/album/03quwfxVOzXduvxgawbLRn", rating: 2 }, // RAM — Paul McCartney
  { spotify: "https://open.spotify.com/album/2Y5e4etT3wCXoyllnQ0aAD", rating: 2 }, // Glory — Perfume Genius
  { spotify: "https://open.spotify.com/album/2gLirULn7YwSGINsyHSxxR", rating: 2 }, // The Roches — The Roches
  { spotify: "https://open.spotify.com/album/3dEgxewsJAZ6s2nVUieNA5", rating: 2 }, // Treats — Sleigh Bells
  { spotify: "https://open.spotify.com/album/1r9V2Babk2DkP8QtHA4Xlh", rating: 2 }, // Red Apple Falls — Smog
  { spotify: "https://open.spotify.com/album/1yfJqxKKXG320vhqLfUEeC", rating: 2 }, // The Mollusk — Ween
  { spotify: "https://open.spotify.com/album/68AEf03cJgTNpj5mQRQez4", rating: 2 }, // Una Rosa — Xenia Rubinos

  // ── work ──────────────────────────────────────────────────────────────
  { spotify: "https://open.spotify.com/album/1uzfGk9vxMXfaZ2avqwxod", rating: "work" }, // 2012 - 2017 — Against All Logic
  { spotify: "https://open.spotify.com/album/7aNclGRxTysfh6z0d8671k", rating: "work" }, // Selected Ambient Works 85-92 — Aphex Twin
  { spotify: "https://open.spotify.com/album/6LMpgvoWszsc9E2TBpQw6q", rating: "work" }, // First Thought Best Thought — Arthur Russell
  { spotify: "https://open.spotify.com/album/0yVW1lLjr4dkrHoOhFlDo7", rating: "work" }, // The Besnard Lakes Are The Last of the Great Thunderstorm Warnings — The Besnard Lakes
  { spotify: "https://open.spotify.com/album/4tUVkNYSFrrEqqrxBQW9PN", rating: "work" }, // Endtroducing..... — DJ Shadow
  { spotify: "https://open.spotify.com/album/2JEmFCOxEi8Onik59bRrMg", rating: "work" }, // Meeting with a Judas Tree — Duval Timothy
  { spotify: "https://open.spotify.com/album/4WQedlz23YQKDymInfrM0V", rating: "work" }, // Brown Loop — Duval Timothy
  { spotify: "https://open.spotify.com/album/7z2sYQTqlfnoNlhM3m00nZ", rating: "work" }, // 2 Sim — Duval Timothy
  { spotify: "https://open.spotify.com/album/6PKMSpHdDkaay6WTBUzxz0", rating: "work" }, // Into the Light — Marisa Anderson
  { spotify: "https://open.spotify.com/album/4bRN2i3QxUboIetzUwxKt1", rating: "work" }, // Sleep Cycles — Neat Beats
  { spotify: "https://open.spotify.com/album/0zlLi9xAKvF6fDVIW4XZbJ", rating: "work" }, // Cosmic Surgery — Neat Beats
  { spotify: "https://open.spotify.com/album/4uR6L8Gq7xozMSBpuxIQUp", rating: "work" }, // Cenizas — Nicolas Jaar
  { spotify: "https://open.spotify.com/album/7fAV0q7la4SLQ3Z9jXbA0n", rating: "work" }, // Philip Glass: The Complete Piano Etudes — Philip Glass
  { spotify: "https://open.spotify.com/album/7rTb657aZjNqWdgqzejixq", rating: "work" }, // Glassworks — Philip Glass
  { spotify: "https://open.spotify.com/album/4CN4exJ6KbjKhKdcSUcpoC", rating: "work" }, // Venus In Cancer — Robbie Basho
  { spotify: "https://open.spotify.com/album/05RPG1hN35ucYL4BqEBZdn", rating: "work" }, // Natural Elements (with John McLaughlin) — Shakti
  { spotify: "https://open.spotify.com/album/7GAK47rAg2VuMb47HOXdK2", rating: "work" }, // On The Turning Ground — Tara Clerkin Trio
  { spotify: "https://open.spotify.com/album/1omsWXFLFCsQrP0eHUWHDL", rating: "work" }, // In Spring — Tara Clerkin Trio
  { spotify: "https://open.spotify.com/album/0sSEFxADTMYKkPFx1NxT85", rating: "work" }, // Tara Clerkin Trio — Tara Clerkin Trio
  { spotify: "https://open.spotify.com/album/058No4Kiz8r284NwzBSBC2", rating: "work" }, // It's Album Time — Todd Terje

  // ── nostalgia ─────────────────────────────────────────────────────────
  { spotify: "https://open.spotify.com/album/2jpOllbenoI30M30RqR8Gs", rating: "nostalgia" }, // An Awesome Wave — alt-J
  { spotify: "https://open.spotify.com/album/6ZB8qaR9JNuS0Q0bG1nbcH", rating: "nostalgia" }, // Funeral — Arcade Fire
  { spotify: "https://open.spotify.com/album/0ndGMh4twJNzPpr5XtHTR2", rating: "nostalgia" }, // Whatever People Say I Am, That's What I'm Not — Arctic Monkeys
  { spotify: "https://open.spotify.com/album/5h0KYWMZIg8xT6eRGYkNMh", rating: "nostalgia" }, // Because the Internet — Childish Gambino
  { spotify: "https://open.spotify.com/album/6SdmWwWY50HFtkLTvIauMp", rating: "nostalgia" }, // Coming On Strong — Hot Chip
  { spotify: "https://open.spotify.com/album/100sbzLt8tFdeksrctxIG1", rating: "nostalgia" }, // 1999 — Joey Bada$$
  { spotify: "https://open.spotify.com/album/6jnkEgtcxePHtbay62bota", rating: "nostalgia" }, // Yessir Whatever — Quasimoto
  { spotify: "https://open.spotify.com/album/4GM01B4IL08U6gYzWzDNOl", rating: "nostalgia" }, // Part & Parcel — The Skints
  { spotify: "https://open.spotify.com/album/4pC2URLdvle8V6Um4qxh46", rating: "nostalgia" }, // Benji — Sun Kil Moon
  { spotify: "https://open.spotify.com/album/5fedTyx7AnXeyxLL0giq6x", rating: "nostalgia" }, // Vampire Weekend — Vampire Weekend
  { spotify: "https://open.spotify.com/album/0H8cHlbp6eieUUOLmv4FzJ", rating: "nostalgia" }, // Contra — Vampire Weekend

  // ── discovering ───────────────────────────────────────────────────────
  { spotify: "https://open.spotify.com/album/0yzwKBSBgSgb9UUcP6QVGK", rating: "discovering" }, // Bringing It All Back Home — Bob Dylan
  { spotify: "https://open.spotify.com/album/5snUbps5KleLIP0cVI72lP", rating: "discovering" }, // Reachin' (A New Refutation Of Time And Space) — Digable Planets
  { spotify: "https://open.spotify.com/album/1zOxlHQGGV6EH7n4OIFTyh", rating: "discovering" }, // XO — Elliott Smith
  { spotify: "https://open.spotify.com/album/6P8W18Qy0P2vreXHoEeVQL", rating: "discovering" }, // Concert By The Sea — Erroll Garner
  { spotify: "https://open.spotify.com/album/07YS7ooqYtvPZLlW59MHY5", rating: "discovering" }, // The New Sound — Geordie Greep
  { spotify: "https://open.spotify.com/album/2rT82YYlV9UoxBYLIezkRq", rating: "discovering" }, // Lift Your Skinny Fists Like Antennas to Heaven — Godspeed You! Black Emperor
  { spotify: "https://open.spotify.com/album/3T9UKU0jMIyrRD0PtKXqPJ", rating: "discovering" }, // Cornell 5/8/77 (Live) — Grateful Dead
  { spotify: "https://open.spotify.com/album/3gUlFM3azK6ZIkKz1zK7Nj", rating: "discovering" }, // The Hissing of Summer Lawns — Joni Mitchell
  { spotify: "https://open.spotify.com/album/1gpR5bi7KnL1THGtEnx6hI", rating: "discovering" }, // Somewhere Before — Keith Jarrett Trio
  { spotify: "https://open.spotify.com/album/4WF9ycmYVDpvNs7zzVcZN8", rating: "discovering" }, // Little Girl Blue — Nina Simone
  { spotify: "https://open.spotify.com/album/3vCMmrJEx8CBtW4Hh0ehdl", rating: "discovering" }, // I Want To See The Bright Lights Tonight — Richard & Linda Thompson
  { spotify: "https://open.spotify.com/album/6DlSUW5gmq6Byc3osKDJ2p", rating: "discovering" }, // Can't Buy A Thrill — Steely Dan
  { spotify: "https://open.spotify.com/album/7yV8WpwCChvzW3qr5MuzMf", rating: "discovering" }, // Soundtracks for the Blind — Swans
  { spotify: "https://open.spotify.com/album/6VNuZLF98tsRYgqlIXAVCD", rating: "discovering" }, // Under the Pink — Tori Amos
];
