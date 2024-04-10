const texts = [
	[
		'As the sun dipped below the horizon, its golden rays painted the tranquil lake in a symphony of colors. The water shimmered with reflections of the evening sky, while birds gracefully soared overhead, their wings catching the last light of day. It was a moment frozen in time, where the beauty of nature enveloped everything in its embrace, offering a fleeting glimpse of serenity amidst the chaos of the world.',
	],
	[
		'Amidst the towering skyscrapers of the bustling city, a quaint cafe nestled on a cobblestone street, offering respite from the urban chaos. The aroma of freshly brewed coffee drifted through the air, mingling with the chatter of patrons and the clinking of cups. It was a sanctuary of warmth and comfort, where time seemed to slow down, allowing people to savor the simple pleasures of life in the midst of a hectic world.',
	],
	[
		'Lost within the pages of a well-loved book, the reader found themselves transported to distant lands and magical realms. Words leaped off the page, weaving tales of adventure, mystery, and romance that captured the imagination and stirred the soul. It was a journey of the mind, where the boundaries of reality dissolved, and the power of storytelling reignited a sense of wonder and possibility in the heart of the reader.',
	],
	[
		'In the heart of spring, the air was filled with the sweet scent of blooming flowers and the gentle hum of bees. Cherry blossoms adorned the trees, painting the landscape in hues of pink and white, while birds sang melodies that seemed to echo the joy of the season. It was a time of renewal and rebirth, where nature awakened from its winter slumber, filling the world with beauty and promise once more.',
	],
	[
		'Beneath the star-studded sky, two lovers walked hand in hand along the moonlit beach, their footsteps leaving imprints in the sand. The sound of crashing waves provided a rhythmic backdrop to their whispered conversations, as they shared dreams and secrets under the watchful gaze of the night. It was a moment of intimacy and connection, where time seemed to stand still, allowing them to savor the magic of the moment and the depth of their love.',
	],
	[
		'High atop the mountains, a solitary cabin stood amidst a sea of pine trees, its chimney releasing tendrils of smoke into the crisp air. Deer grazed peacefully in the clearing, their movements a testament to the quietude of the wilderness. It was a place of solitude and serenity, where the beauty of nature enveloped everything in its embrace, offering solace to weary souls seeking refuge from the chaos of the world below.',
	],
	[
		'Amidst the bustling streets of the city, neon signs flickered overhead, casting an otherworldly glow on the pavement below. Cars honked, pedestrians hurried by, and the cacophony of urban life filled the air with its relentless energy. It was a symphony of chaos and motion, where the rhythm of the city pulsed with a vitality that was both exhilarating and exhausting, drawing people into its whirlwind embrace.',
	],
	[
		'Hidden away from the chaos of the urban jungle, a secret garden bloomed in all its splendor. Vines climbed ancient stone walls, while exotic flowers perfumed the air with their intoxicating fragrance. It was a sanctuary of peace and tranquility, where the hustle and bustle of the city faded into obscurity, and the beauty of nature reigned supreme, offering a respite from the demands of everyday life.',
	],
	[
		'With the break of dawn, the world awoke to the symphony of a new day. Birds sang their morning chorus, their melodies filling the air with joy and anticipation, while the sun cast its golden rays upon the earth, banishing the shadows of the night. It was a moment of rebirth and renewal, where the promise of a fresh start hung in the air like a tangible presence, inviting all to embrace the possibilities of the day ahead.',
	],
	[
		'Deep within the forest, ancient trees loomed overhead, their branches reaching towards the sky like outstretched arms. Shafts of sunlight filtered through the canopy, casting a dappled pattern of light and shadow upon the forest floor. It was a place of quiet contemplation and profound beauty, where the majesty of nature inspired awe and reverence in all who dared to venture into its depths.',
	],
	[
		'Along the tranquil riverbank, children skipped stones across the waters surface, their laughter echoing through the air like music. The gentle lapping of the waves provided a soothing backdrop to their playful antics, as they reveled in the simple joys of childhood. It was a scene of innocence and purity, where the cares of the world seemed to melt away, leaving only the joy of the present moment behind.',
	],
	[
		'In the heart of the desert, a lone oasis shimmered like a mirage on the horizon, offering refuge to weary travelers in search of respite from the harshness of the wilderness. Palm trees swayed in the breeze, their fronds providing shade from the relentless sun, while crystal-clear water beckoned parched throats with its cool embrace. It was a sanctuary of life amidst the barren expanse of sand, a testament to the resilience and beauty of nature in even the most inhospitable of environments.',
	],
	[
		'At the edge of the cliff, the world stretched out before them in all its grandeur. The vast expanse of the ocean spread to the horizon, its azure depths merging seamlessly with the sky above. It was a breathtaking vista, where the beauty of nature lay bare in all its glory, inspiring awe and wonder in those who dared to gaze upon its majesty.',
	],
	[
		"In the quiet solitude of the countryside, fields of golden wheat swayed gently in the breeze, their whispers like a lullaby to the soul. The earthy scent of freshly turned soil mingled with the sweet fragrance of wildflowers, creating a sensory tapestry that spoke of life and growth. It was a place of simple beauty and timeless tranquility, where the rhythm of nature set the pace for life's unfolding mysteries.",
	],
	[
		'Beneath a canopy of stars, a bonfire crackled and danced, casting flickering shadows upon the faces of those gathered around it. Friends laughed and shared stories, their voices mingling with the crackle of flames and the rustle of leaves in the breeze. It was a moment of camaraderie and connection, where the warmth of friendship banished the chill of the night, and the magic of the moment lingered long after the embers had faded to ash.',
	],
	[
		'Amidst the crumbling ruins of an ancient civilization, echoes of the past reverberated through the stone corridors like whispers in the dark. Moss-covered statues stood sentinel over the passage of time, their silent watch a testament to the ephemeral nature of human endeavor. It was a place of mystery and intrigue, where the ghosts of the past danced in the shadows, inviting exploration and discovery by those brave enough to delve into its secrets.',
	],
	[
		'In the heart of the dense jungle, exotic birds flitted among the trees, their vibrant plumage a kaleidoscope of color against the verdant backdrop. The air was thick with humidity, alive with the buzzing of insects and the rustle of leaves in the canopy above. It was a place of untamed beauty and primal energy, where the wildness of nature reigned supreme, untouched by the hand of man.',
	],
	[
		'As twilight descended upon the city, a thousand twinkling lights illuminated the skyline like a constellation come to life. Skyscrapers soared into the night sky, their glass facades reflecting the vibrant energy of the metropolis below. It was a scene of breathtaking beauty, where the hustle and bustle of urban life gave way to a moment of quiet reverence for the city that never sleeps.',
	],
	[
		'Deep beneath the waves, a vibrant coral reef teemed with life, its colorful inhabitants darting among the intricate formations. Schools of fish swam in synchronized patterns, while graceful sea turtles glided effortlessly through the crystal-clear waters. It was a world unto itself, where the wonders of the ocean unfolded in an endless tapestry of color and movement, inviting exploration and discovery by those brave enough to venture below the surface.',
	],
	[
		'At the summit of the mountain, the world lay spread out below in all its grandeur. Clouds drifted lazily across the sky, casting ever-changing shadows upon the rugged landscape below. The wind whispered secrets as it swept across the peaks, carrying with it the scent of pine and earth. It was a place of infinite possibility and boundless beauty, where the majesty of nature stretched out before them in a panorama of awe-inspiring proportions.',
	],
]

export default texts
