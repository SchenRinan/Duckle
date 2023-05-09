const wordsThree = [
    'And', 'Fix', 'Own', 'Are', 'Fly', 'Odd', 'Ape', 'Fry', 'Our', 'Ace', 'For', 'Pet', 'Act', 'Got', 'Pat', 'Ask', 'Get', 'Peg',
    'Arm', 'God', 'Paw', 'Age', 'Gel', 'Pup', 'Ago', 'Gas', 'Pit', 'Air', 'Hat', 'Put', 'Ate', 'Hit', 'Pot', 'All', 'Has', 'Pop',
    'But', 'Had', 'Pin', 'Bye', 'How', 'Rat', 'Bad', 'Her', 'Rag', 'Big', 'His', 'Rub', 'Bed', 'Hen', 'Row', 'Bat', 'Ink', 'Rug',
    'Boy', 'Ice', 'Run', 'Bus', 'Ill', 'Rap', 'Bag', 'Jab', 'Ram', 'Box', 'Jug', 'Sow', 'Bit', 'Jet', 'See', 'Bee', 'Jam', 'Saw',
    'Buy', 'Jar', 'Set', 'Bun', 'Job', 'Sit', 'Cub', 'Jog', 'Sir', 'Cat', 'Kit', 'Sat', 'Car', 'Key', 'Sob', 'Cut', 'Lot', 'Tap',
    'Cow', 'Lit', 'Tip', 'Cry', 'Let', 'Top', 'Cab', 'Lay', 'Tug', 'Can', 'Mat', 'Tow', 'Dad','Man', 'Toe', 'Dab', 'Mad', 'Tan',
    'Dam', 'Mug', 'Ten', 'Did', 'Mix', 'Two', 'Dug', 'Map', 'Use', 'Den', 'Mum', 'Van', 'Dot', 'Mud', 'Vet', 'Dip', 'Mom', 'Was',
    'Day', 'May', 'Wet', 'Ear', 'Met', 'Win', 'Eye', 'Net', 'Won', 'Eat', 'New', 'Wig', 'End', 'Nap', 'War', 'Elf', 'Now', 'Why',
    'Egg', 'Nod', 'Who', 'Far', 'Net', 'Way', 'Fat', 'Not', 'Wow', 'Few', 'Nut', 'You', 'Fan', 'Oar', 'Yes', 'Fun', 'One', 'Yak',
    'Fit', 'Out', 'Yet', 'Owl', 'Zip', 'Fox', 'Old', 'Zap']
const wordsFour = [
'Will', 'Wife', 'Wine', 'Wind', 'West', 'Word', 'Wood',
'Work', 'Year', 'Week', 'Area', 'Army', 'Baby', 'Back',
'Ball', 'Band', 'Bank', 'Base', 'Bill', 'Body', 'Book',
'Call', 'Card', 'Care', 'Case', 'Cash', 'City', 'Club',
'Cost', 'Date', 'Deal', 'Door', 'Duty', 'East', 'Edge',
'Face', 'Fact', 'Farm', 'Fear', 'Fig',  'File', 'Film',
'Fire', 'Firm', 'Fish', 'Food', 'Foot', 'Form', 'Fund',
'Game', 'Girl', 'Goal', 'Gold', 'Hair', 'Half', 'Hall',
'Hand', 'Head', 'Help', 'Hill', 'Home', 'Hope', 'Hour',
'Idea', 'Jack', 'John', 'Kind', 'King', 'Lack', 'Lady',
'Land', 'Life', 'Line', 'List', 'Look', 'Lord', 'Loss',
'Love', 'Mark', 'Mary', 'Mind', 'Miss', 'Move', 'Name',
'Need', 'News', 'Note', 'Page', 'Pain', 'Pair', 'Park',
'Part', 'Past', 'Path', 'Paul', 'Plan', 'Play', 'Post',
'Race', 'Rain','Unit', 'User', 'View',  'Your', 'Will',
'Hers', 'Many', 'Mine', 'Much',
'None', 'Ours', 'Same', 'Self', 'Some', 'Such',
'That', 'Them', 'They', 'This', 'Tone', 'What',
'Roll', 'Tend', 'Miss', 'Vote', 'Have', 'Earn', 'Give',
'Bear', 'Step', 'Look', 'Call', 'Risk', 'Love', 'Rest',
'Warn', 'Help', 'Pass', 'Hold', 'Find', 'Walk', 'Save',
'Sing', 'Need', 'Face', 'Lift', 'Cook', 'Link',
'Shed', 'Join', 'Feel', 'Show', 'Cast', 'Pray',
'Wish', 'Want'];
const wordsFive = [
'Apple', 'Beach', 'Brain', 'Bread', 'Brush',
'Chair', 'Chest', 'Chord', 'Click', 'Clock',
'Cloud', 'Dance', 'Diary', 'Drink', 'Earth',
'Flute', 'Fruit', 'Ghost', 'Grape', 'Green',
'Happy', 'Heart', 'House', 'Juice', 'Light',
'Money', 'Music', 'Party', 'Pizza', 'Plant',
'Radio', 'River', 'Salad', 'Sheep', 'Shoes',
'Smile', 'Snack', 'Snake', 'Spice', 'Spoon',
'Storm', 'Table', 'Toast', 'Tiger', 'Train', 'Began',
'Water', 'Whale', 'Wheel', 'Woman', 'World', 'Aural',
'Write', 'Youth' ,'Abyss', 'Ample', 'Ankle', 'Aroma', 
'Blunt', 'Braid', 'Brisk', 'Bumpy', 'Chive', 'Clasp',
'Crave', 'Crest', 'Cumin', 'Drape', 'Dregs', 'Dumpy',
'Dusky', 'Dwell', 'Elite', 'Ember', 'Enact', 'Evade',
'Evoke', 'Fable', 'Flair', 'Fluke', 'Folly', 'Gauze',
'Giddy', 'Gloom', 'Gorge', 'Gusty', 'Haste', 'Hilly',
'Irate', 'Ivory', 'Jaded', 'Jazzy', 'Jolly', 'Joust',
'Jumpy', 'Kinky', 'Knack', 'Knave', 'Knead', 'Kudos',
'Lanky', 'Latch', 'Lolly', 'Lurid', 'Mirth', 'Moody',
'Mourn', 'Mower', 'Muggy', 'Nanny', 'Nappy', 'Nerve',
'Nifty', 'Nudge', 'Olive', 'Onset', 'Oomph', 'Ounce',
'Ovals', 'Peppy', 'Pious', 'Pique', 'Plush', 'Poise',
'Quail', 'Quake', 'Quell', 'Quill', 'Quirk', 'Ravel',
'Reedy', 'Ruddy', 'Runic', 'Sable', 'Spicy', 'Stilt',
'Swath', 'Swirl', 'Toast', 'Tonic', 'Triad', 'Tryst',
'Tweak', 'Audio', 'Adore', 'Audit', 'Aroma', 'Oread',
'Urate', 'Sauce', 'Adieu', 'Arise', 'Louie', 'Basic',
'Black', 'Blind', 'Brave', 'Brief', 'Broad', 'Brown',
'Cheap', 'Chief', 'Civil', 'Clean', 'Clear', 'Close',
'Crazy', 'Daily', 'Dirty', 'Early'
]

const wordsSix = [
'Animal', 'Basket', 'Bubble', 'Butter', 'Camera', 'Carpet',
'Castle', 'Cheese', 'Danger', 'Dragon', 'Father', 'Flower',
'Forest', 'Guitar', 'Jungle', 'Mother', 'Orange', 'Pepper',
'Pillow', 'Planet', 'Potato', 'Rocket', 'Sailor', 'Shadow',
'Spirit', 'Sunset', 'Tomato', 'Turtle', 'Window', 'Winter',
'Course', 'System', 'School', 'Family', 'Market', 'Police',
'Policy', 'Office', 'Person', 'Health', 'Period', 'Centre',
'Effect', 'Action', 'Moment', 'Report', 'Church', 'Change',
'Street', 'Result', 'Reason', 'Nature', 'Member', 'Figure',
'Friend', 'Amount', 'Series', 'Future', 'Labour', 'Letter',
'Theory', 'Growth', 'Chance', 'Record', 'Energy', 'Income',
'Scheme', 'Design', 'Choice', 'Couple', 'County', 'Summer',
'Colour', 'Season', 'Garden', 'Charge', 'Advice', 'Doctor',
'Extent', 'Access', 'Region', 'Degree', 'Return', 'Public',
'Answer', 'Leader', 'Appeal', 'Method', 'Source', 'Oxford',
'Demand', 'Sector', 'Status', 'Safety', 'Weight', 'League',
'Budget', 'Review', 'Minute', 'Survey', 'Speech', 'Effort',
'Career', 'Attack', 'Length', 'Memory', 'Impact', 'Sister']

const wordsSeven = [
'Bicycle', 'Library', 'Diamond', 'Theater',
'Rainbow', 'Machine', 'Vehicle', 'Sunrise',
'Freedom', 'Harmony', 'Kitchen', 'Country',
'Network', 'Journey', 'Mystery', 'Curtain',
'Promise', 'Handbag', 'Balloon', 'Weather',
'Cottage', 'Blanket', 'Plumage', 'Biscuit',
'Iceberg', 'Cupcake', 'Earring', 'Desktop',
'Company', 'Example', 'Council', 'Service',
'Problem', 'Control', 'Society', 'Process',
'Support', 'Morning', 'Century', 'History',
'Section', 'Subject', 'Quality', 'Project',
'Chapter', 'Manager', 'Account', 'Success',
'Capital', 'Defense', 'Product', 'Village',
'Husband', 'Science', 'Economy', 'Picture',
'College', 'Station', 'Species', 'Concern',
'Purpose', 'Ability', 'Provide', 'Believe', 
'Suppose', 'Support', 'Suggest', 'Develop',
'Explain', 'Receive', 'Require', 'Achieve',
'Prevent', 'Improve', 'Imagine', 'Discuss',
'Control', 'Protect', 'Contain', 'Involve',
'Contact', 'Operate', 'Realize', 'Reflect',
'Examine', 'Respond', 'Survive', 'Replace',
'Present', 'Promote', 'Perform', 'Express',
'Mention', 'Benefit', 'Prepare', 'Collect',
'Welcome', 'Confirm', 'Attempt', 'Attract',
'Compare', 'Account', 'Explore', 'Arrange',
'Realize', 'Proceed', 'Succeed', 'Justify',
'Acquire', 'Recover', 'Suspect', 'Finance',
'Destroy', 'Comment', 'Satisfy', 'Compete',
'Address', 'Display', 'Release', 'Measure',
'Restore', 'Observe', 'Combine', 'Include',
'Produce', 'Similar', 'Private', 'Foreign', 
'Present', 'Natural', 'Current', 'Serious',
'Popular', 'Western', 'Medical', 'Primary',
'Obvious', 'Nuclear', 'Regular', 'Complex',
'Initial', 'Average', 'Strange', 'Overall',
'Precise', 'Visible', 'Distant', 'Violent',
'Welcome', 'Evident', 'Classic', 'Illegal',
'Intense', 'Logical', 'Organic', 'Curious',
'Gastric', 'Digital', 'Monthly', 'Painful',
'Unhappy', 'Genetic', 'Partial', 'Elegant',
'Interim', 'Chronic', 'Payable', 'Premier',
'Hostile', 'Various']

const wordsEight = [
'Practice', 'Aircraft', 'Currency',
'Decision', 'Strategy', 'Minority',
'Hospital', 'Contrast', 'Priority',
'Approach', 'Attitude', 'Thatcher',
'Computer', 'Capacity', 'Category',
'Security', 'Sentence', 'Database',
'Movement', 'Conflict', 'Judgment',
'Analysis', 'Violence', 'Earnings',
'Material', 'Standard', 'Guidance',
'Property', 'Reaction', 'Birthday',
'Language', 'Exercise', 'Displace',
'Delivery', 'Organize', 'Surround',
'Underpin', 'Disagree', 'Decorate',
'Overturn', 'Confront', 'Contrast',
'Demolish', 'Comprise', 'Overlook',
'Discount', 'Disclose', 'Interest',
'Underlie', 'Struggle', 'Instruct',
'Shoulder', 'Coincide', 'Postpone',
'Scramble', 'Regulate', 'Position',
'Distance', 'Forecast', 'Classify',
'Endanger', 'Exchange', 'Conflict',
'Rehearse', 'Tolerate', 'Advocate',
'Negative', 'Everyday', 'Solitary',
'Optional', 'Terrible', 'Innocent',
'Seasonal', 'Criminal', 'Romantic',
'Infinite', 'Enormous', 'Superior',
'Terminal', 'Valuable', 'Explicit',
'Clerical', 'Dramatic', 'Abstract',
'Unlawful', 'Friendly', 'Tropical',
'Portable', 'Adequate', 'Parallel',
'Inferior', 'Absolute', 'Vertical', 'Exorcize', 'Interact',
'Talented', 'Electric', 'Concrete', 'Darkness', 'Response',
'Feasible', 'Chemical', 'Delicate', 'Director', 'Congress', 
'Emphasis', 'Champion', 'Pressure', 'Audience', 'Prospect',
'Chairman', 'Assembly', 'Survival', 'Activity', 'Occasion',
'Alliance', 'Contract', 'Transfer', 'Employee', 'Addition',
'Document', 'Festival', 'Majority', 'Pleasure', 'Purchase',
'Election', 'Ministry', 'Employer', 'Increase', 'Creation',
'Entrance', 'Literary', 'Splendid', 'Abnormal', 'Catholic',
'Advisory', 'Imminent', 'Numerous', 'Contrary', 'Unwanted',
'Distinct', 'Adjacent', 'Helpless', 'Opposite', 'Peaceful',
'Surgical', 'Straight', 'Horrible', 'Renowned', 'Clinical',
'Post-war', 'Pathetic', 'Dominant', 'Indirect', 'Uncommon',
'Accurate', 'Handsome', 'Tactical', 'Monetary', 'Precious',
'Sizeable', 'Minimise', 'Simplify', 'Diagnose', 'Progress',
'Transmit', 'Undercut', 'Reassure', 'Minimize', 'Liberate'];
const wordsNine = [
'different', 'important', 'political', 'available', 'difficult',
'necessary', 'financial', 'effective', 'essential', 'beautiful',
'practical', 'technical', 'excellent', 'potential', 'religious',
'immediate', 'expensive', 'dangerous', 'wonderful', 'corporate',
'permanent', 'secondary', 'communist', 'long-term', 'extensive',
'principal', 'efficient', 'voluntary', 'temporary', 'statutory',
'dependent', 'sensitive', 'emotional', 'brilliant', 'classical',
'favourite', 'socialist', 'confident', 'strategic', 'conscious',
'so-called', 'universal', 'desperate', 'spiritual', 'prominent',
'automatic', 'identical', 'electoral', 'desirable', 'exclusive',
'full-time', 'reluctant', 'uncertain', 'part-time', 'realistic',
'twentieth', 'intensive', 'assistant', 'excessive', 'objective',
'primitive', 'ambitious', 'empirical', 'molecular', 'selective',
'elaborate', 'fortunate', 'defensive', 'competent', 'redundant',
'invisible', 'cognitive', 'aesthetic', 'aggregate', 'fantastic',
'miserable', 'anonymous', 'colourful', 'delicious', 'unchanged',
'arbitrary', 'worldwide', 'mandatory', 'unwilling', 'bourgeois',
'offensive', 'enjoyable', 'municipal', 'syntactic', 'notorious',
'memorable', 'ambiguous', 'authentic', 'incapable', 'premature',
'miniature', 'customary', 'plausible', 'one-third', 'left-wing',
'bilateral', 'pragmatic', 'overnight',
'sceptical', 'synthetic', 'defective', 'irregular',
'fifteenth', 'imaginary', 'explosive', 'hazardous',
'unlimited', 'recurrent', 'numerical', 'energetic',
'incorrect', 'resistant', 'wholesale', 'impatient',
'legendary', 'sovereign', 'editorial', 'masculine',
'graphical', 'intrinsic', 'composite', 'unpopular',
'narrative', 'countless', 'alcoholic', 'equitable',
'continual', 'unmarried', 'geometric', 'tentative',
'glamorous', 'unrelated', 'addictive', 'bacterial',
'patriotic', 'eccentric', 'pointless', 'versatile',
'advisable', 'paramount', 'exquisite', 'prevalent',
'turbulent', 'analogous', 'intricate', 'stylistic',
'lucrative', 'abdominal', 'luxurious', 'perpetual',
'cardboard', 'stringent', 'left-hand', 'admirable',
'budgetary', 'untouched', 'fictional', 'unskilled',
'scholarly', 'unnatural', 'unanimous', 'powerless',
'traumatic', 'unwelcome', 'intuitive'
];
const wordsTen = [
'particular', 'individual', 'industrial', 'successful', 'commercial',
'additional', 'impossible', 'reasonable', 'sufficient', 'democratic',
'scientific', 'historical', 'attractive', 'subsequent', 'acceptable',
'remarkable', 'electronic', 'widespread', 'nineteenth', 'consistent',
'impressive', 'unemployed', 'structural', 'inevitable', 'continuous',
'occasional', 'equivalent', 'linguistic', 'vulnerable', 'collective',
'inadequate', 'electrical', 'unexpected', 'eighteenth', 'artificial',
'biological', 'diplomatic', 'convenient', 'tremendous', 'capitalist',
'functional', 'mechanical', 'aggressive', 'comparable', 'successive',
'ridiculous', 'marvellous', 'compulsory', 'short-term', 'systematic',
'accessible', 'provincial', 'legitimate', 'well-known', 'favourable',
'worthwhile', 'applicable', 'beneficial', 'productive', 'profitable',
'managerial', 'irrelevant', 'suspicious', 'mysterious', 'deliberate',
'protective', 'unpleasant', 'persistent', 'optimistic', 'respective',
'regulatory', 'incredible', 'horizontal', 'compatible', 'two-thirds',
'subjective', 'protestant', 'disastrous', 'autonomous', 'delightful',
'formidable', 'vocational', 'innovative', 'conceptual', 'right-wing',
'meaningful', 'geological', 'mainstream', 'indigenous', 'peripheral',
'day-to-day', 'decorative', 'passionate', 'intestinal', 'noticeable',
'divisional', 'invaluable', 'unfamiliar', 'supportive', 'consequent',
'ulcerative', 'diagnostic', 'ecological',
'procedural', 'accidental', 'elementary', 'cumulative',
'incomplete', 'preferable', 'veterinary', 'unsuitable',
'charitable', 'prosperous', 'republican', 'homosexual',
'relational', 'fourteenth', 'responsive', 'right-hand',
'unofficial', 'outrageous', 'theatrical', 'thoughtful',
'thirteenth', 'up-to-date', 'definitive', 'subsidiary',
'persuasive', 'expressive', 'reciprocal', 'unaffected',
'specialist', 'pancreatic', 'economical', 'triumphant',
'irrational', 'endoscopic', 'negligible', 'in-service',
'multiparty', 'unreliable', 'infectious', 'immaculate',
'breathless', 'indicative', 'hereditary', 'impersonal',
'inaccurate', 'repetitive', 'world-wide', 'conclusive',
'oppressive', 'triangular', 'disposable', 'epithelial',
'inner-city', 'contextual', 'preventive', 'stationary',
'waterproof', 'hysterical', 'affordable', 'unfinished',
'romanesque', 'manageable', 'disruptive', 'overweight',
'ornamental', 'improbable', 'vegetarian'];