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
'Race', 'Rain','Unit', 'User', 'View', 'Dese', 'Enuf', 
'Hers', 'Many', 'Mine', 'Mine', 'Much', 'Nada', 'Nish',
'None', 'Nowt', 'Ours', 'Same', 'Self', 'Some', 'Such',
'That', 'Thee', 'Them', 'They', 'This', 'Thon', 'Thor',
'Thou', 'Thou', 'Tone', 'What', 'Yere', 'Your', 'Will',
'Roll', 'Tend', 'Miss', 'Vote', 'Have', 'Earn', 'Give',
'Bear', 'Step', 'Look', 'Call', 'Risk', 'Love', 'Rest',
'Warn', 'Help', 'Pass', 'Hold', 'Find', 'Walk', 'Save',
'Sing', 'Need', 'Face', 'Lift', 'Cope', 'Cook', 'Link',
'Shed', 'Join', 'Feel', 'Hern','Show', 'Cast', 'Pray',
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

const testArray = [`
`];
let content = testArray.toString().split('\n');
let content2 = content.map(val => val.replace('    ', ''))
// console.log(wordsSeven.length);